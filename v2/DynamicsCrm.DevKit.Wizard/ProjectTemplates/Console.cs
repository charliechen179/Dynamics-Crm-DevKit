﻿using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.VisualStudio.TemplateWizard;
using DynamicsCrm.DevKit.Shared;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public class Console : IWizard
    {
        private DTE DTE { get; set; }
        private Project Project { get; set; }
        private string ProjectName { get; set; }

        public void BeforeOpeningFile(ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(Project project)
        {
            project.Name = ProjectName;
            Project = project;
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
            var oldProjectFolder = Path.GetDirectoryName(Project.FullName);
            var newProjectFolder = Path.GetDirectoryName(DTE?.Solution?.FullName) + "\\" + ProjectName;
            Utility.FixCorrectProjectFolder(DTE, Project, oldProjectFolder, newProjectFolder);
            Utility.TfsUndoAdd(DTE, oldProjectFolder, newProjectFolder);
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            var destinationDirectory = replacementsDictionary["$destinationdirectory$"];
            try
            {
                DTE = (DTE)automationObject;
                if (!Utility.SharedProjectExist(DTE))
                {
                    MessageBox.Show(@"Please add DynamicsCrm.DevKit Shared project and try it again", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    throw new WizardCancelledException();
                }
                var form = new FormProject(ProjectType.Console, DTE);
                if (form.ShowDialog() == DialogResult.Cancel) throw new WizardCancelledException();
                //Creating project ...
                ProjectName = form.ProjectName;
                Wizard.ProcessProjectReplacementsDictionary(replacementsDictionary, form);
                Wizard.ProcessProjectConsoleReplacementsDictionary(replacementsDictionary, form);
            }
            catch
            {
                if (Directory.Exists(destinationDirectory))
                {
                    Utility.TryDeleteDirectory(destinationDirectory);
                }
                throw;
            }
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
