﻿using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.IO;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Description;
using System.Text;
using System.Windows.Forms;
using System.Xml.Linq;
using EnvDTE;
using EnvDTE80;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using PL.DynamicsCrm.DevKit.Shared;
using PL.DynamicsCrm.DevKit.Shared.Xrm;
using PL.DynamicsCrm.DevKit.Wizard;
using Task = System.Threading.Tasks.Task;

namespace PL.DynamicsCrm.DevKit.Package
{
    internal sealed class Command
    {
        private enum ImageTypeEnum
        {
            PreImage = 0,
            PostImage = 1,
            Both = 2
        }

        private class CrmPluginImage
        {
            public string Name { get; set; }
            public string Alias { get; set; }
            public ImageTypeEnum Type { get; set; }
            public string Attributes { get; set; }
        }

        public const int CommandWebResourceId = 0x0100;
        public const int CommandPluginId = 0x0200;
        public const int CommandReportId = 0x0300;
        public static readonly Guid CommandSetWebResource = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bf");
        public static readonly Guid CommandSetPlugin = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8be");
        public static readonly Guid CommandSetReport = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bd");

        private static DevKitCrmConfig Config = null;
        private static IMenuCommandService MenuService;
        private static DTE Dte;

        public static async Task InitializeAsync(AsyncPackage package)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            MenuService = await package.GetServiceAsync((typeof(IMenuCommandService))) as OleMenuCommandService ?? throw new ArgumentNullException(nameof(MenuService));
            Dte = await package.GetServiceAsync(typeof(DTE)) as DTE ?? throw new ArgumentNullException(nameof(Dte));

            var cmdWebResourceId = new CommandID(CommandSetWebResource, CommandWebResourceId);
            var cmdWebResource = new OleMenuCommand((s, e) => ExecuteWebResource(package), cmdWebResourceId);
            cmdWebResource.BeforeQueryStatus += CommandWebResource_BeforeQueryStatus;
            MenuService.AddCommand(cmdWebResource);

            var cmdPluginId = new CommandID(CommandSetPlugin, CommandPluginId);
            var cmdPlugin = new OleMenuCommand((s, e) => ExecutePlugin(package), cmdPluginId);
            cmdPlugin.BeforeQueryStatus += CommandPlugin_BeforeQueryStatus;
            MenuService.AddCommand(cmdPlugin);

            var cmdReportId = new CommandID(CommandSetReport, CommandReportId);
            var cmdReport = new OleMenuCommand((s, e) => ExecuteReport(package), cmdReportId);
            cmdReport.BeforeQueryStatus += CommandReport_BeforeQueryStatus;
            MenuService.AddCommand(cmdReport);
        }

        private static void CommandReport_BeforeQueryStatus(object sender, EventArgs e)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            try
            {
                if (Dte == null || Dte.SelectedItems == null || Dte.SelectedItems.Count != 1) return;
                var selectedItem = Dte.SelectedItems.Item(1);
                if (selectedItem.ProjectItem == null) return;
                var fileName = selectedItem.ProjectItem.FileNames[0];
                var extension = Path.GetExtension(fileName);
                if (extension != ".rdl") return;
                menuCommand.Visible = true;
            }
            catch { }
        }

        private static string ProjectUniqueName { get; set; }
        private static void ExecuteReport(AsyncPackage package)
        {
            Dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
            var selectedItem = Dte.SelectedItems.Item(1);
            ProjectUniqueName = selectedItem.ProjectItem.ContainingProject.UniqueName;
            var activeConfiguration = Dte.Solution.SolutionBuild.ActiveConfiguration.Name;
            try
            {
                Dte.StatusBar.Text = "Building project report...";
                Dte.Events.BuildEvents.OnBuildProjConfigDone += BuildEvents_OnBuildProjConfigDone;
                Dte.Solution.SolutionBuild.BuildProject(activeConfiguration, ProjectUniqueName, true);
            }
            catch
            {
                Dte.Events.BuildEvents.OnBuildProjConfigDone -= BuildEvents_OnBuildProjConfigDone;
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "   !!!   Building project report fail   !!!   ";
                MessageBox.Show("Build report project fail. Please double check and try it again.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private static void BuildEvents_OnBuildProjConfigDone(string Project, string ProjectConfig, string Platform, string SolutionConfig, bool Success)
        {
            Dte.Events.BuildEvents.OnBuildProjConfigDone -= BuildEvents_OnBuildProjConfigDone;
            if (!Success || !ProjectUniqueName.EndsWith(Project)) return;
            Dte.StatusBar.Text = "Build project report succeeded!";
#if DEBUG
            ProjectUniqueName = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\test\TestReport\Test.Abc.Report.2015\Test.Abc.Report.2015.rptproj";
#endif
            var xml = File.ReadAllText(ProjectUniqueName);
            var xdoc = XDocument.Parse(xml);
            //Fist check for project VS2015
            var node = (from x in xdoc?.Descendants("Project")?.Descendants("Configurations")?.Elements("Configuration")
                        where x?.Element("Name")?.Value == ProjectConfig
                        select x)?.FirstOrDefault();
            var outputPath = node?.Descendants("Options")?.FirstOrDefault()?.Element("OutputPath")?.Value;
            //if null, then check for project VS2017
            if (outputPath == null)
            {
                var nodes = (from x in xdoc?.Root.Elements()
                             where x?.Name?.LocalName == "PropertyGroup"
                             select x);
                foreach (var n in nodes)
                {
                    if (n.Elements().Where(x => x?.Name?.LocalName == "FullPath" && x?.Value == "Debug").Any())
                    {
                        outputPath = n.Elements().Where(x => x?.Name?.LocalName == "OutputPath").FirstOrDefault()?.Value;
                        break;
                    }
                }
            }
            if (outputPath == null) throw new Exception("Cannot read the Output directory of the current report project");
            var folderOutput = Path.Combine(Path.GetDirectoryName(ProjectUniqueName), outputPath);
            var fileName = Path.GetFileName(Dte.SelectedItems.Item(1).ProjectItem.FileNames[0]);
            var deployFile = Path.Combine(folderOutput, fileName);
            if (!File.Exists(deployFile)) throw new Exception($"Cannot find deployable report: {deployFile}");
            Dte.StatusBar.Text = "Connecting to Dynamics 365";
            var check = SharedGlobals.GetGlobal("CrmService", Dte);
            if (check == null)
            {
                var activeDocument = Dte.ActiveDocument;
                var solutionFullName = Dte.Solution.FullName;
                var fInfo = new FileInfo(solutionFullName);
                var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
                Dte.StatusBar.Text = "Reading PL.DynamicsCrm.DevKit.json config";
                if (Config == null) Config = DevKitCrmConfigHelper.GetDevKitCrmConfig(Dte);
                var defaultConnection = Config.CrmConnections.Where(conn => conn.Name == Config.DefaultCrmConnection).FirstOrDefault();
                if (defaultConnection == null)
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "   !!! Connection to Dynamics 365 failed   !!!   ";
                    MessageBox.Show("Default Crm connection not found!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
                try
                {
                    var uri = new Uri(defaultConnection.Url);
                    var clientCredentials = new ClientCredentials();
                    clientCredentials.UserName.UserName = defaultConnection.UserName;
                    clientCredentials.UserName.Password = TryDecryptPassword(defaultConnection.Password);
                    check = new OrganizationServiceProxy(uri, null, clientCredentials, null);
                    SharedGlobals.SetGlobal("CrmService", check, Dte);
                    Dte.StatusBar.Text = "   !!!   Connected Dynamics 365  !!!   ";
                }
                catch
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "   !!! Connection to Dynamics 365 failed   !!!   ";
                    MessageBox.Show("Connecting to Dynamics 365 failed!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
            }
            else
                Dte.StatusBar.Text = "   !!!   Connected Dynamics 365   !!!   ";
            var crmService = (OrganizationServiceProxy)SharedGlobals.GetGlobal("CrmService", Dte);
            var fetchData = new
            {
                ismanaged = "0",
                filename = fileName
            };
            var fetchXml = $@"
<fetch>
  <entity name='report'>
    <attribute name='reportid' />
    <filter type='and'>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
      <condition attribute='filename' operator='eq' value='{fetchData.filename/*ReportTemplate.rdl*/}'/>
    </filter>
  </entity>
</fetch>";
            var rows = crmService.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) throw new Exception("Please deploy this report first by Dynamics 365");
            if (rows.Entities.Count != 1) throw new Exception($"Found {rows.Entities.Count} reports file name: {fileName} in the system. Cannot deploy.");
            Dte.StatusBar.Text = "Deploying Report ...";
            var update = new Entity("report", rows.Entities[0].Id);
            update["bodytext"] = File.ReadAllText(deployFile);
            crmService.Update(update);
            Dte.StatusBar.Text = "   !!!   Deploy Report succeeded   !!!   ";
            Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);

        }

        private static void CommandPlugin_BeforeQueryStatus(object sender, EventArgs e)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            if (!(Dte.ActiveDocument.Language.Equals("CSharp", StringComparison.OrdinalIgnoreCase))) return;
            var textDocument = (TextDocument)Dte.ActiveDocument.Object();
            var activePoint = textDocument.Selection.ActivePoint;
            var currentClass = Dte?.ActiveDocument?.ProjectItem?.FileCodeModel?.CodeElementFromPoint(activePoint, vsCMElement.vsCMElementClass);
            if (currentClass == null) return;
            if (!(currentClass is CodeClass @class)) return;
            if (@class.IsAbstract) return;
            if (!@class.IsCodeType) return;
            if (!HasImplementedPlugin(@class) && !HasImplementedWorkflow(@class)) return;
            if (HasAttributeCrmPluginRegistration(@class)) return;
            menuCommand.Visible = true;
        }

        private static bool HasAttributeCrmPluginRegistration(CodeClass @class)
        {
            foreach(CodeAttribute attribue in @class.Attributes)
            {
                if (attribue.Name == "CrmPluginRegistration") return true;
            }
            return false;
        }

        private static bool HasImplementedPlugin(CodeClass @class)
        {
            foreach (CodeInterface @interface in @class.ImplementedInterfaces)
            {
                if (@interface.FullName == "Microsoft.Xrm.Sdk.IPlugin")
                    return true;
            }
            foreach (var @base in @class.Bases)
            {
                if (!(@base is CodeClass baseClass)) continue;
                if (HasImplementedPlugin(baseClass))
                    return true;
            }
            return false;
        }

        private static bool HasImplementedWorkflow(CodeClass @class)
        {
            foreach (var @base in @class.Bases)
            {
                if (!(@base is CodeClass baseClass)) continue;
                if (baseClass.FullName == "System.Activities.CodeActivity")
                    return true;
                if (HasImplementedWorkflow(baseClass))
                    return true;
            }
            return false;
        }

        private static bool IsImplementedAttribute(CodeClass @class)
        {
            if (@class.Attributes.Count == 0) return false;
            foreach(CodeAttribute attribute in @class.Attributes){
                var t = string.Empty;
            }
            return true;
        }

        private static bool IsAddReferenceToSharedProject()
        {
            var solutionFullName = Dte.Solution.FullName;
            var shareProjectName = Utility.GetSharedProject(solutionFullName);
            Dte.ActiveDocument.ProjectItem.ContainingProject.Save();
            var content = File.ReadAllText(Dte.ActiveDocument.ProjectItem.ContainingProject.FullName);
            return content.IndexOf($"{shareProjectName}.projitems") > 0;
        }

        private static bool IsAddPackagesConfigAndInstall()
        {
            var package = $"{Path.GetDirectoryName(Dte.ActiveDocument.ProjectItem.ContainingProject.FullName)}\\packages.config";
            if (!File.Exists(package)) return false;
            var context = File.ReadAllText(package);
            return context.IndexOf("PL.DynamicsCrm.DevKit.Cli") > 0;
        }

        private static void ExecutePlugin(AsyncPackage package)
        {
            var textDocument = (TextDocument)Dte.ActiveDocument.Object();
            var activePoint = textDocument.Selection.ActivePoint;
            var currentClass = Dte.ActiveDocument.ProjectItem.FileCodeModel.CodeElementFromPoint(activePoint, vsCMElement.vsCMElementClass);
            if (!(currentClass is CodeClass @class)) return;
            if (!Utility.SharedProjectExist(Dte))
            {
                MessageBox.Show("Please add PL.DynamicsCrm.DevKit Shared project and try it again.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (!IsAddReferenceToSharedProject())
            {
                MessageBox.Show("Please add reference PL.DynamicsCrm.DevKit Shared project to current project and try it again.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if(!IsAddPackagesConfigAndInstall())
            {
                MessageBox.Show("Please install PL.DynamicsCrm.DevKit.Cli from Nuget and try it again.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (HasImplementedPlugin(@class))
            {
                var attributes = CrmPluginRegistrationDataForPlugin(currentClass.FullName);
                if (attributes.Count > 0)
                {
                    foreach (var attribute in attributes)
                        @class.AddAttribute("CrmPluginRegistration", attribute);
                    AddImportSharedProjectIfNeed();
                }
                else
                    MessageBox.Show("PL.DynamicsCrm.DevKit not found any plugin step register with this class.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            else if (HasImplementedWorkflow(@class))
            {
                var attributes = CrmPluginRegistrationDataForWorkflow(currentClass.FullName);
                if (attributes.Count > 0)
                {
                    foreach (var attribute in attributes)
                        @class.AddAttribute("CrmPluginRegistration", attribute);
                    AddImportSharedProjectIfNeed();
                }
                else
                    MessageBox.Show("PL.DynamicsCrm.DevKit not found any workflow step register with this class.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private static void AddDeployBatIfNeed(string content)
        {
            var deploy = $"{Path.GetDirectoryName(Dte.ActiveDocument.ProjectItem.ContainingProject.FullName)}\\deploy.debug.bat";
            if (File.Exists(deploy)) return;
            File.WriteAllText(deploy, content);
            Dte.ActiveDocument.ProjectItem.ContainingProject.ProjectItems.AddFromFile(deploy);
            Dte.ActiveDocument.ProjectItem.ContainingProject.Save();
        }

        private static void AddImportSharedProjectIfNeed()
        {
            if (!(Dte.ActiveDocument.ProjectItem.FileCodeModel is FileCodeModel2 fileCodeModel2)) return;
            var solutionFullName = Dte.Solution.FullName;
            var shareProjectName = Utility.GetSharedProject(solutionFullName);
            var foundNamespace = false;
            foreach (var element in fileCodeModel2.CodeElements)
            {
                if (!(element is CodeImport codeImport)) continue;
                if (codeImport.Namespace == shareProjectName)
                {
                    foundNamespace = true;
                    break;
                }
            }
            if (foundNamespace) return;
            fileCodeModel2.AddImport(shareProjectName);
        }

        private static List<string> CrmPluginRegistrationDataForWorkflow(string fullName)
        {
            var form = new FormConnection(Dte);
            var list = new List<string>();
            if (form.ShowDialog() == DialogResult.OK)
            {
                var crmConnectionString = CrmConnectionString(form.CrmConnection);
                var deployText = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Package.Data.Workflow.deploy.debug.bat");
                deployText = deployText
                    .Replace("$CrmConnectionString$", crmConnectionString)
                    .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(Dte.ActiveDocument.ProjectItem.ContainingProject.FullName));
                AddDeployBatIfNeed(deployText);
                var fetchData = new
                {
                    ismanaged = "0",
                    isworkflowactivity = "1",
                    typename = fullName
                };
                var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='name' />
    <attribute name='workflowactivitygroupname' />
    <attribute name='description' />
    <attribute name='typename' />
    <attribute name='assemblyname' />
    <attribute name='friendlyname' />
    <filter type='and'>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
      <condition attribute='isworkflowactivity' operator='eq' value='{fetchData.isworkflowactivity/*1*/}'/>
      <condition attribute='typename' operator='eq' value='{fetchData.typename/*CustomWorkflow.RetrieveUsers*/}'/>
    </filter>
    <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid' alias='a'>
      <attribute name='isolationmode' />
    </link-entity>
  </entity>
</fetch>";

                var rows = form.CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count == 0) return list;
                foreach (var row in rows.Entities)
                {
                    var name = row.GetAttributeValue<string>("name");
                    var friendlyname = row.GetAttributeValue<string>("friendlyname");
                    var description = row.GetAttributeValue<string>("description");
                    var workflowactivitygroupname = row.GetAttributeValue<string>("workflowactivitygroupname");
                    var isolationMode = GetAliasedValue<OptionSetValue>(row, "a.isolationmode").Value;
                    var isolationModeName = isolationMode == 0 ? "IsolationModeEnum.None" : "IsolationModeEnum.Sandbox";
                    var attribute = string.Empty;
                    attribute += $"\"{name}\"";
                    attribute += $", \"{friendlyname}\"";
                    attribute += $", \"{description}\"";
                    attribute += $", \"{workflowactivitygroupname}\"";
                    attribute += $", {isolationModeName}";
                    list.Add(attribute);
                }
                return list;
            }
            return list;
        }

        private static List<string> CrmPluginRegistrationDataForPlugin(string fullName)
        {
            var form = new FormConnection(Dte);
            var list = new List<string>();
            if (form.ShowDialog() == DialogResult.OK)
            {
                var crmConnectionString = CrmConnectionString(form.CrmConnection);
                var deployText = Utility.ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Package.Data.Plugin.deploy.debug.bat");
                deployText = deployText
                    .Replace("$CrmConnectionString$", crmConnectionString)
                    .Replace("$ProjectName$", Path.GetFileNameWithoutExtension(Dte.ActiveDocument.ProjectItem.ContainingProject.FullName));
                AddDeployBatIfNeed(deployText);

                var fetchData = new
                {
                    ismanaged = "0",
                    iscustomizable = "1",
                    typename = fullName
                };
                var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='filteringattributes' />
    <attribute name='name' />
    <attribute name='impersonatinguserid' />
    <attribute name='rank' />
    <attribute name='description' />
    <attribute name='stage' />
    <attribute name='supporteddeployment' />
    <attribute name='componentstate' />
    <attribute name='asyncautodelete' />
    <attribute name='mode' />
    <attribute name='configuration' />
    <attribute name='statecode' />
    <filter type='and'>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
      <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable/*1*/}'/>
    </filter>
    <link-entity name='sdkmessage' from='sdkmessageid' to='sdkmessageid' alias='m'>
      <attribute name='name' />
    </link-entity>
    <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='inner' alias='t'>
      <filter type='and'>
        <condition attribute='typename' operator='eq' value='{fetchData.typename/*AccountPlugin.PostDeleteAccount*/}'/>
      </filter>
      <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid' link-type='inner' alias='p'>
        <attribute name='isolationmode' />
      </link-entity>
    </link-entity>
    <link-entity name='sdkmessagefilter' from='sdkmessagefilterid' to='sdkmessagefilterid' link-type='inner' alias='f'>
      <attribute name='primaryobjecttypecode' />
    </link-entity>
    <link-entity name='sdkmessageprocessingstepsecureconfig' from='sdkmessageprocessingstepsecureconfigid' to='sdkmessageprocessingstepsecureconfigid' link-type='outer' alias='s'>
      <attribute name='secureconfig' />
    </link-entity>
  </entity>
</fetch>";

                var rows = form.CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
                if (rows.Entities.Count == 0) return list;
                foreach(var row in rows.Entities)
                {
                    var message = GetAliasedValue<string>(row, "m.name");
                    var entity = GetAliasedValue<string>(row, "f.primaryobjecttypecode");
                    var stage = row.GetAttributeValue<OptionSetValue>("stage").Value;
                    var stageName = stage == 10 ? "StageEnum.PreValidation" : (stage == 20 ? "StageEnum.PreOperation" : "StageEnum.PostOperation");
                    var mode = row.GetAttributeValue<OptionSetValue>("mode").Value;
                    var modeName = mode == 0 ? "ExecutionModeEnum.Synchronous" : "ExecutionModeEnum.Asynchronous";
                    var filteringAttributes = row.GetAttributeValue<string>("filteringattributes");
                    var name = row.GetAttributeValue<string>("name");
                    var rank = row.GetAttributeValue<int>("rank");
                    var isolationMode = GetAliasedValue<OptionSetValue>(row, "p.isolationmode").Value;
                    var isolationModeName = isolationMode == 0 ? "IsolationModeEnum.None" : "IsolationModeEnum.Sandbox";
                    var asyncautodelete = row.GetAttributeValue<bool>("asyncautodelete");
                    var description = row.GetAttributeValue<string>("description");
                    var supportedDeployment = row.GetAttributeValue<OptionSetValue>("supporteddeployment").Value;
                    var status = row.GetAttributeValue<OptionSetValue>("statecode").Value;
                    var configuration = row.GetAttributeValue<string>("configuration");
                    var secureconfig = GetAliasedValue<string>(row, "s.secureconfig");
                    var impersonatinguserid = row.GetAttributeValue<EntityReference>("impersonatinguserid");

                    var attribute = string.Empty;
                    attribute += $"\"{message}\"";
                    attribute += $", \"{entity}\"";
                    attribute += $", {stageName}";
                    attribute += $", {modeName}";
                    attribute += $", \"{filteringAttributes}\",\r\n\t";
                    attribute += $"\"{name}\"";
                    attribute += $", {rank}";
                    attribute += $", {isolationModeName},\r\n\t";
                    if (asyncautodelete)
                        attribute += $"DeleteAsyncOperation = true, ";
                    if (description != null)
                        attribute += $"Description = \"{description}\", ";
                    if (supportedDeployment == 2)
                    {
                        attribute += $"Server = true, Offline = true, ";
                    }
                    else if (supportedDeployment == 1)
                    {
                        attribute += $"Server = false, Offline = true, ";
                    }
                    if (status == 1)
                    {
                        attribute += $"Action = PluginStepOperationEnum.Deactivate, ";
                    }
                    if (configuration != null)
                    {
                        attribute += $"UnSecureConfiguration = \"{configuration}\", ";
                    }
                    if (secureconfig != null)
                    {
                        attribute += $"SecureConfiguration = \"{secureconfig}\", ";
                    }
                    if (impersonatinguserid != null)
                    {
                        attribute += $"RunAs = \"{impersonatinguserid.Name}\", ";
                    }
                    if (attribute.EndsWith(", ")) {
                        attribute = attribute.TrimEnd();
                        attribute += "\r\n\t";
                    }
                    var images = GetPluginImages(form.CrmService, fullName, row.Id);
                    var image = "Image{0}Name = \"{1}\", Image{0}Alias = \"{2}\", Image{0}Type = ImageTypeEnum.{3}, Image{0}Attributes = \"{4}\",\r\n\t";
                    if (images.Count > 0)
                    {
                        var i = 1;
                        foreach (var item in images)
                        {
                            attribute += string.Format(image, i, item.Name, item.Alias, item.Type.ToString(), item.Attributes);
                            i++;
                            if (i == 5) break;
                        }
                        attribute = attribute.TrimEnd(",\r\n\t".ToCharArray());
                    }
                    else
                    {
                        attribute += string.Format(image, 1, string.Empty, string.Empty, "PreImage", string.Empty);
                        attribute = attribute.TrimEnd(",\r\n\t".ToCharArray());
                    }
                    list.Add(attribute);
                }
                return list;
            }
            return list;
        }

        private static List<CrmPluginImage> GetPluginImages(OrganizationServiceProxy crmService, string fullName, Guid sdkMessageProcessingStepId)
        {
            var list = new List<CrmPluginImage>();
            var fetchData = new
            {
                ismanaged = "0",
                iscustomizable = "1",
                sdkmessageprocessingstepid = sdkMessageProcessingStepId,
                typename = fullName
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstepimage'>
    <attribute name='entityalias' />
    <attribute name='name' />
    <attribute name='imagetype' />
    <attribute name='attributes' />
    <filter type='and'>
      <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
      <condition attribute='iscustomizable' operator='eq' value='{fetchData.iscustomizable/*1*/}'/>
      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid/*87862893-2f3c-e911-a81f-000d3a17c02e*/}'/>
    </filter>
    <link-entity name='sdkmessageprocessingstep' from='sdkmessageprocessingstepid' to='sdkmessageprocessingstepid' link-type='inner' alias='a'>
      <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='inner' alias='b'>
        <filter type='and'>
          <condition attribute='typename' operator='eq' value='{fetchData.typename/*AccountPlugin.PostDeleteAccount*/}'/>
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
            var rows = crmService.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach(var row in rows.Entities)
            {
                list.Add(new CrmPluginImage {
                    Alias = row.GetAttributeValue<string>("entityalias"),
                    Name = row.GetAttributeValue<string>("name"),
                    Attributes = row.GetAttributeValue<string>("attributes"),
                    Type = (ImageTypeEnum)row.GetAttributeValue<OptionSetValue>("imagetype").Value
                });
            }
            return list;
        }

        private static T GetAliasedValue<T>(Entity entity, string name)
        {
            var aliased = entity.GetAttributeValue<AliasedValue>(name);
            if (aliased == null) return default(T);
            if (typeof(T) == typeof(EntityReference) && aliased.Value is Guid)
                return (T)(object)new EntityReference(aliased.EntityLogicalName, (Guid)aliased.Value);
            if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference)
                return (T)(object)((EntityReference)aliased.Value).Id;
            return (T)aliased.Value;
        }

        private static string CrmConnectionString(CrmConnection CrmConnection)
        {
            var url = CrmConnection.Url.Substring(0, CrmConnection.Url.Length - "/XRMServices/2011/Organization.svc".Length);
            url = url.Replace(".api.", ".");
            if (CrmConnection.Url.Contains(".dynamics.com"))
                return $"AuthType=Office365;Url={url};Username={CrmConnection.UserName};Password={CrmConnection.Password};";
            var domain = CrmConnection.UserName.Split("\\".ToCharArray())[0];
            var user = CrmConnection.UserName.Split("\\".ToCharArray())[1];
            return $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={CrmConnection.Password};";
        }

        private static void CommandWebResource_BeforeQueryStatus(object sender, EventArgs e)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            var item =  Dte.SelectedItems.Item(1);
            if (item == null || item.Name == null) return;
            var extension = item.Name.Substring(item.Name.LastIndexOf(".") + 1);
            var allowExtions = new List<string> { "html", "htm", "js", "png", "gif", "jpg", "jpeg", "css", "ico", "xml", "xsl", "xslt", "xap" };
            if (!allowExtions.Contains(extension)) return;
            if (item.Name.EndsWith(".intellisense.js")) return;
            var solutionFullName = Dte.Solution.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            if (!File.Exists(devKitCrmConfigFile)) return;
            menuCommand.Visible = true;
        }

        private static void ExecuteWebResource(AsyncPackage package)
        {
            Dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
            var activeDocument = Dte.ActiveDocument;
            var solutionFullName = Dte.Solution.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var devKitCrmConfigFile = $"{fInfo.DirectoryName}\\PL.DynamicsCrm.DevKit.json";
            Dte.StatusBar.Text = "Reading PL.DynamicsCrm.DevKit.json config";
            if (Config == null) Config = DevKitCrmConfigHelper.GetDevKitCrmConfig(Dte);
            var defaultConnection = Config.CrmConnections.Where(conn => conn.Name == Config.DefaultCrmConnection).FirstOrDefault();
            Dte.StatusBar.Text = "Connecting to Dynamics 365";
            if (defaultConnection == null)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "   !!! Connection to Dynamics 365 failed   !!!   ";
                MessageBox.Show("Default Crm connection not found!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (Config.SolutionPrefix == null)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "   !!! Connection to Dynamics 365 failed   !!!   ";
                MessageBox.Show("PL.DynamicsCrm.DevKit.json config not found SolutionPrefix data", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            var check = SharedGlobals.GetGlobal("CrmService", Dte);
            if (check == null)
            {
                try
                {
                    var uri = new Uri(defaultConnection.Url);
                    var clientCredentials = new ClientCredentials();
                    clientCredentials.UserName.UserName = defaultConnection.UserName;
                    clientCredentials.UserName.Password = TryDecryptPassword(defaultConnection.Password);
                    check = new OrganizationServiceProxy(uri, null, clientCredentials, null);
                    SharedGlobals.SetGlobal("CrmService", check, Dte);
                }
                catch
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "   !!! Connection to Dynamics 365 fail   !!!   ";
                    MessageBox.Show("Connection to Dynamics 365 fail!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
            }
            var crmService = (OrganizationServiceProxy)SharedGlobals.GetGlobal("CrmService", Dte);
            Dte.StatusBar.Text = "   !!!   Connected Dynamics 365  !!!   ";
            var fileName = activeDocument.FullName;
            var parts = fileName.Split("\\".ToCharArray());
            var condition = string.Empty;
            for (var i = 1; i < parts.Length; i++)
            {
                var value = $"{Config.SolutionPrefix}/{parts[i]}/";
                for (var j = i + 1; j < parts.Length; j++)
                    value += $"{parts[j]}/";
                if (value.EndsWith("/")) value = value.TrimEnd("/".ToCharArray());
                if (value.StartsWith("/")) value = value.Substring(1);
                condition += $"<condition attribute='name' operator='ends-with' value='{value}'/>";
            }
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='name' />
    <filter type='or'>
      {condition}
    </filter>
  </entity>
</fetch>";
            var rows = crmService.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "   !!!   WebResource not found   !!!   ";
                MessageBox.Show("WebResource not found!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            var webResourceId = rows.Entities[0].Id;
            try
            {
                var emRequest = new ExecuteMultipleRequest
                {
                    Requests = new OrganizationRequestCollection(),
                    Settings = new ExecuteMultipleSettings
                    {
                        ContinueOnError = false,
                        ReturnResponses = true
                    }
                };
                var requests = new OrganizationRequestCollection();
                var publishXml = "<importexportxml><webresources>";
                var webResource = new Entity("webresource") { Id = webResourceId };
                var content = File.ReadAllText(fileName);
                webResource["content"] = EncodeString(content);
                var request = new UpdateRequest { Target = webResource };
                requests.Add(request);
                publishXml += "<webresource>{" + webResource.Id + "}</webresource>";
                publishXml += "</webresources></importexportxml>";
                var pubRequest = new PublishXmlRequest { ParameterXml = publishXml };
                requests.Add(pubRequest);
                emRequest.Requests = requests;
                Dte.StatusBar.Text = "Updating & publishing WebResource ... ";
                var emResponse = (ExecuteMultipleResponse)crmService.Execute(emRequest);
                var wasError = false;
                foreach (var responseItem in emResponse.Responses)
                {
                    if (responseItem.Fault == null) continue;
                    wasError = true;
                }
                if (wasError)
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "   !!!   Deploy WebResource failed   !!!   ";
                    MessageBox.Show("Deploy WebResource failed.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
                else
                {
                    Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                    Dte.StatusBar.Text = "   !!!   Deploy WebResource succeeded   !!!   ";
                    return;
                }
            }
            catch (FaultException<OrganizationServiceFault>)
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "   !!!   Deploy WebResource failed   !!!   ";
                MessageBox.Show("Deploy WebResource failed.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            catch
            {
                Dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
                Dte.StatusBar.Text = "   !!!   Deploy WebResource failed   !!!   ";
                MessageBox.Show("Deploy WebResource failed.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
        }

        private static string TryDecryptPassword(string password)
        {
            try
            {
                password = EncryptDecrypt.DecryptString(password);
            }
            catch
            {
            }
            return password;
        }

        private static string EncodeString(string value)
        {
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(value));
        }
    }
}
