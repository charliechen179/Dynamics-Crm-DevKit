﻿var devKit=function(){"use strict";function r(n){var u=n.data,i=n.data.entity,r=n.ui,f=n.ui.formSelector,t={};return Object.defineProperty(t,"IsDirty",{get:function(){return u.getIsDirty()}}),Object.defineProperty(t,"IsValid",{get:function(){return u.isValid()}}),Object.defineProperty(t,"DataXml",{get:function(){return i.getDataXml()}}),Object.defineProperty(t,"EntityName",{get:function(){return i.getEntityName()}}),Object.defineProperty(t,"EntityReference",{get:function(){return i.getEntityReference()}}),Object.defineProperty(t,"EntityId",{get:function(){return i.getId()}}),Object.defineProperty(t,"EntityIsDirty",{get:function(){return i.getIsDirty()}}),Object.defineProperty(t,"PrimaryAttributeValue",{get:function(){return i.getPrimaryAttributeValue()}}),Object.defineProperty(t,"EntityIsValid",{get:function(){return i.isValid()}}),Object.defineProperty(t,"Attributes",{get:function(){return i.attributes}}),Object.defineProperty(t,"FormType",{get:function(){return r.getFormType()}}),Object.defineProperty(t,"ViewPortHeight",{get:function(){return r.getViewPortHeight()}}),Object.defineProperty(t,"ViewPortWidth",{get:function(){return r.getViewPortWidth()}}),Object.defineProperty(t,"Controls",{get:function(){return r.controls}}),Object.defineProperty(t,"FormId",{get:function(){return f.getCurrentItem().getId()}}),Object.defineProperty(t,"FormLabel",{get:function(){return f.getCurrentItem().getLabel()}}),t.AddOnLoad=function(n){u.addOnLoad(n)},t.Refresh=function(n,t,i){u.refresh(n).then(t,i)},t.RemoveOnLoad=function(n){u.removeOnLoad(n)},t.Save=function(n,t,i){u.save(n).then(t,i)},t.AddOnSave=function(n){i.addOnSave(n)},t.RemoveOnSave=function(n){i.removeOnSave(n)},t.EntitySave=function(n){i.save(n)},t.ClearFormNotification=function(n){return r.clearFormNotification(n)},t.Close=function(){r.close()},t.RefreshRibbon=function(n){r.refreshRibbon(n)},t.SetFormNotification=function(n,t,i){return r.setFormNotification(n,t,i)},t.FormNavigate=function(n){f.items.get(n).navigate()},t}function u(r){var u={},f=r.data.process,e=r.ui.process;return Object.defineProperty(u,"InstanceId",{get:function(){return f.getInstanceId()}}),Object.defineProperty(u,"InstanceName",{get:function(){return f.getInstanceName()}}),Object.defineProperty(u,"ActivePath",{get:function(){return f.getActivePath()}}),Object.defineProperty(u,"DisplayState",{get:function(){return e.getDisplayState()},set:function(n){e.setDisplayState(n)}}),Object.defineProperty(u,"Visible",{get:function(){return e.getVisible()},set:function(n){e.setVisible(n)}}),Object.defineProperty(u,"Status",{get:function(){return f.getStatus()},set:function(n){f.setStatus(n,t)}}),Object.defineProperty(u,"ActiveProcess",{get:function(){var u={Id:i,Name:n,IsRendered:!1,Stages:t},r=f.getActiveProcess();return r.getId&&(u.Id=r.getId()),r.getName&&(u.Name=r.getName()),r.isRendered&&(u.IsRendered=r.isRendered()),r.getStages&&(u.Stages=r.getStages()),u}}),Object.defineProperty(u,"ActiveStage",{get:function(){var u={Category:t,EntityName:n,Id:i,Name:n,Status:n,Steps:t},r=f.getActiveStage();return r.getCategory&&r.getCategory().getValue&&(u.Category=r.getCategory().getValue()),r.getEntityName&&(u.EntityName=r.getEntityName()),r.getId&&(u.Id=r.getId()),r.getName&&(u.Name=r.getName()),r.getStatus&&(u.Status=r.getStatus()),r.getSteps&&(u.Steps=r.getSteps()),u}}),Object.defineProperty(u,"SelectedStage",{get:function(){var u={Category:t,EntityName:n,Id:i,Name:n,Status:n,Steps:t},r=f.getSelectedStage();return r.getCategory&&r.getCategory().getValue&&(u.Category=r.getCategory().getValue()),r.getEntityName&&(u.EntityName=r.getEntityName()),r.getId&&(u.Id=r.getId()),r.getName&&(u.Name=r.getName()),r.getStatus&&(u.Status=r.getStatus()),r.getSteps&&(u.Steps=r.getSteps()),u}}),u.AddOnProcessStatusChange=function(n){f.addOnProcessStatusChange(n)},u.AddOnStageChange=function(n){f.addOnStageChange(n)},u.AddOnStageSelected=function(n){f.addOnStageSelected(n)},u.EnabledProcesses=function(n){f.getEnabledProcesses(n)},u.MoveNext=function(n){f.moveNext(n)},u.MovePrevious=function(n){f.movePrevious(n)},u.ProcessInstances=function(n){f.getProcessInstances(n)},u.RemoveOnProcessStatusChange=function(n){f.removeOnProcessStatusChange(n)},u.RemoveOnStageChange=function(n){f.removeOnStageChange(n)},u.RemoveOnStageSelected=function(n){f.removeOnStageSelected(n)},u.SetActiveProcess=function(n,t){f.setActiveProcess(n,t)},u.SetActiveProcessInstance=function(n,t){f.setActiveProcessInstance(n,t)},u.SetActiveStage=function(n,t){f.setActiveStage(n,t)},u}function f(n,t,i,r){var e=function(){return r===undefined?i.toLowerCase():(r+i).toLowerCase()}(),u=n.getControl(e),f=function(){if(n){if(n.getAttribute){var t=n.getAttribute(e);if(t)return t}if(u&&u.getAttribute&&(t=u.getAttribute(),t))return t}}();Object.defineProperty(t[i],"AttributeType",{get:function(){return f.getAttributeType()}});Object.defineProperty(t[i],"Format",{get:function(){return f.getFormat()}});Object.defineProperty(t[i],"InitialValue",{get:function(){return f.getInitialValue()}});Object.defineProperty(t[i],"IsDirty",{get:function(){return f.getIsDirty()}});Object.defineProperty(t[i],"IsPartyList",{get:function(){return f.getIsPartyList()}});Object.defineProperty(t[i],"Max",{get:function(){return f.getMax()}});Object.defineProperty(t[i],"MaxLength",{get:function(){return f.getMaxLength()}});Object.defineProperty(t[i],"Min",{get:function(){return f.getMin()}});Object.defineProperty(t[i],"Name",{get:function(){return f.getName()}});Object.defineProperty(t[i],"Options",{get:function(){return f.getOptions()}});Object.defineProperty(t[i],"AttributeParent",{get:function(){return f.getParent()}});Object.defineProperty(t[i],"SelectedOption",{get:function(){return f.getSelectedOption()}});Object.defineProperty(t[i],"Text",{get:function(){return f.getText()}});Object.defineProperty(t[i],"UserPrivilege",{get:function(){return f.getUserPrivilege()}});Object.defineProperty(t[i],"Valid",{get:function(){return f.isValid()}});Object.defineProperty(t[i],"ControlType",{get:function(){return u.getControlType()}});Object.defineProperty(t[i],"InitialUrl",{get:function(){return u.getInitialUrl()}});Object.defineProperty(t[i],"Name2",{get:function(){return u.getName()}});Object.defineProperty(t[i],"Object",{get:function(){return u.getObject()}});Object.defineProperty(t[i],"ControlParent",{get:function(){return u.getParent()}});Object.defineProperty(t[i],"State",{get:function(){return u.getState()}});Object.defineProperty(t[i],"TotalResultCount",{get:function(){return u.getTotalResultCount()}});Object.defineProperty(t[i],"Value2",{get:function(){return u.getValue()}});Object.defineProperty(t[i],"Precision",{get:function(){return f.getPrecision()},set:function(n){f.setPrecision(n)}});Object.defineProperty(t[i],"RequiredLevel",{get:function(){return f.getRequiredLevel()},set:function(n){f.setRequiredLevel(n)}});Object.defineProperty(t[i],"SubmitMode",{get:function(){return f.getSubmitMode()},set:function(n){f.setSubmitMode(n)}});Object.defineProperty(t[i],"Value",{get:function(){return f.getValue()},set:function(n){f.setValue(n)}});Object.defineProperty(t[i],"Data",{get:function(){return u.getData()},set:function(n){u.setData(n)}});Object.defineProperty(t[i],"DefaultView",{get:function(){return u.getDefaultView()},set:function(n){u.setDefaultView(n)}});Object.defineProperty(t[i],"Disabled",{get:function(){return u.getDisabled()},set:function(n){u.setDisabled(n)}});Object.defineProperty(t[i],"EntityTypes",{get:function(){return u.getEntityTypes()},set:function(n){u.setEntityTypes(n)}});Object.defineProperty(t[i],"Label",{get:function(){return u.getLabel()},set:function(n){u.setLabel(n)}});Object.defineProperty(t[i],"SearchQuery",{get:function(){return u.getSearchQuery()},set:function(n){u.setSearchQuery(n)}});Object.defineProperty(t[i],"ShowTime",{get:function(){return u.getShowTime()},set:function(n){u.setShowTime(n)}});Object.defineProperty(t[i],"Src",{get:function(){return u.getSrc()},set:function(n){u.setSrc(n)}});Object.defineProperty(t[i],"Visible",{get:function(){return u.getVisible()},set:function(n){u.setVisible(n)}});t[i].Option=function(n){return f.getOption(n)};t[i].RemoveOnChange=function(n){f.removeOnChange(n)};t[i].AddCustomFilter=function(n,t){u.addCustomFilter(n,t)};t[i].AddCustomView=function(n,t,i,r,f,e){u.addCustomView(n,t,i,r,f,e)};t[i].AddOnPostSearch=function(n){u.addOnPostSearch(n)};t[i].AddOnResultOpened=function(n){u.addOnResultOpened(n)};t[i].AddOnSelection=function(n){u.addOnSelection(n)};t[i].AddPreSearch=function(n){u.addPreSearch(n)};t[i].ClearNotification=function(n){return u.clearNotification(n)};t[i].ClearOptions=function(){return u.clearOptions()};t[i].AddOnChange=function(n){f.addOnChange(n)};t[i].FireOnChange=function(){f.fireOnChange()};t[i].OpenSearchResult=function(n,t){return u.openSearchResult(n,t)};t[i].Refresh=function(){u.refresh()};t[i].RemoveOnPostSearch=function(n){u.removeOnPostSearch(n)};t[i].RemoveOnResultOpened=function(n){u.removeOnResultOpened(n)};t[i].RemoveOnSelection=function(n){u.removeOnSelection(n)};t[i].RemoveOption=function(n){u.removeOption(n)};t[i].RemovePreSearch=function(n){u.removePreSearch(n)};t[i].Focus=function(){u.setFocus()};t[i].SetNotification=function(n,t){return u.setNotification(n,t)};t[i].AddOption=function(n,t,i){var r={text:n,value:t};u.addOption(r,i)};t[i].AddNotification=function(n,t,i,r,f){var e={message:t,actions:[f]},o={messages:[n],notificationLevel:i,uniqueId:r,actions:[e]};return u.addNotification(o)}}function e(n,t,i){for(var r in t)f(n,t,r,i);return t}function o(n,t,i,r){var f=n.ui.tabs.get(t),u=f.sections.get(r);Object.defineProperty(i[r],"Name",{get:function(){return u.getName()}});Object.defineProperty(i[r],"Parent",{get:function(){return u.getParent()}});Object.defineProperty(i[r],"Label",{get:function(){return u.getLabel()},set:function(n){u.setLabel(n)}});Object.defineProperty(i[r],"Visible",{get:function(){return u.getVisible()},set:function(n){u.setVisible(n)}})}function s(n,t,i){var r=n.ui.tabs.get(i),u;Object.defineProperty(t[i],"Name",{get:function(){return r.getName()}});Object.defineProperty(t[i],"Parent",{get:function(){return r.getParent()}});Object.defineProperty(t[i],"DisplayState",{get:function(){return r.getDisplayState()},set:function(n){r.setDisplayState(n)}});Object.defineProperty(t[i],"Label",{get:function(){return r.getLabel()},set:function(n){r.setLabel(n)}});Object.defineProperty(t[i],"Visible",{get:function(){return r.getVisible()},set:function(n){r.setVisible(n)}});t[i].AddTabStateChange=function(n){r.addTabStateChange(n)};t[i].Focus=function(){r.setFocus()};t[i].RemoveTabStateChange=function(n){r.removeTabStateChange(n)};for(u in t[i].Section)o(n,i,t[i].Section,u)}function h(n,t){for(var i in t)s(n,t,i)}function c(n,t,i){var r=n.ui.navigation.items.get(i);Object.defineProperty(t[i],"Id",{get:function(){return r.getId()}});Object.defineProperty(t[i],"Label",{get:function(){return r.getLabel()},set:function(n){r.setLabel(n)}});Object.defineProperty(t[i],"Visible",{get:function(){return r.getVisible()},set:function(n){r.setVisible(n)}});t[i].Focus=function(){r.setFocus()}}function l(n,t){for(var i in t)c(n,t,i)}function a(n,t,i){var r=n.ui.quickForms.get(i);Object.defineProperty(t[i],"ControlType",{get:function(){return r.getControlType()}});Object.defineProperty(t[i],"Visible",{get:function(){return r.getVisible()}});Object.defineProperty(t[i],"Name",{get:function(){return r.getName()}});Object.defineProperty(t[i],"Parent",{get:function(){return r.getParent()}});Object.defineProperty(t[i],"Label",{get:function(){return r.getLabel()},set:function(n){r.setLabel(n)}});t[i].IsLoaded=function(){return r.isLoaded()};t[i].Refresh=function(){r.refresh()};t[i].Focus=function(){r.setFocus()}}function v(n,t){for(var i in t)a(n,t,i)}function y(t){var u=Xrm.Utility,r=Xrm.Utility.getGlobalContext(),f=Xrm.Navigation,s=Xrm.Panel,o=Xrm.Encoding,e=Xrm.Device,i={};return Object.defineProperty(i,"LearningPathAttributeName",{get:function(){return u.getLearningPathAttributeName()}}),Object.defineProperty(i,"ClientUrl",{get:function(){return r.getClientUrl()}}),Object.defineProperty(i,"CurrentAppUrl",{get:function(){return r.getCurrentAppUrl()}}),Object.defineProperty(i,"Version",{get:function(){return r.getVersion()}}),Object.defineProperty(i,"IsOnPremises",{get:function(){return r.isOnPremises()}}),Object.defineProperty(i,"Client",{get:function(){var t=r.client,n={};return Object.defineProperty(n,"ClientName",{get:function(){return t.getClient()}}),Object.defineProperty(n,"ClientState",{get:function(){return t.getClientState()}}),Object.defineProperty(n,"FormFactor",{get:function(){return t.getFormFactor()}}),n.IsOffline=function(){return t.isOffline()},n}}),Object.defineProperty(i,"OrganizationSettings",{get:function(){var t=r.organizationSettings,n={};return Object.defineProperty(n,"getGlobalContext",{get:function(){return t.attributes}}),Object.defineProperty(n,"BaseCurrencyId",{get:function(){return t.baseCurrencyId}}),Object.defineProperty(n,"DefaultCountryCode",{get:function(){return t.defaultCountryCode}}),Object.defineProperty(n,"LanguageId",{get:function(){return t.languageId}}),Object.defineProperty(n,"OrganizationId",{get:function(){return t.organizationId}}),Object.defineProperty(n,"UniqueName",{get:function(){return t.uniqueName}}),Object.defineProperty(n,"UseSkypeProtocol",{get:function(){return t.useSkypeProtocol}}),n.IsAutoSaveEnabled=function(){return t.isAutoSaveEnabled},n}}),Object.defineProperty(i,"UserSettings",{get:function(){var t=r.userSettings,n={};return Object.defineProperty(n,"DateFormattingInfo",{get:function(){return t.dateFormattingInfo}}),Object.defineProperty(n,"DefaultDashboardId",{get:function(){return t.defaultDashboardId}}),Object.defineProperty(n,"LanguageId",{get:function(){return t.languageId}}),Object.defineProperty(n,"SecurityRolePrivileges",{get:function(){return t.securityRolePrivileges}}),Object.defineProperty(n,"SecurityRoles",{get:function(){return t.securityRoles}}),Object.defineProperty(n,"TransactionCurrencyId",{get:function(){return t.transactionCurrencyId}}),Object.defineProperty(n,"UserId",{get:function(){return t.userId}}),Object.defineProperty(n,"UserName",{get:function(){return t.userName}}),n.IsGuidedHelpEnabled=function(){return t.isGuidedHelpEnabled},n.IsHighContrastEnabled=function(){return t.isHighContrastEnabled},n.IsRTL=function(){return t.isRTL},n.TimeZoneOffsetMinutes=function(){return t.getTimeZoneOffsetMinutes()},n}}),i.CloseProgressIndicator=function(){u.closeProgressIndicator()},i.AllowedStatusTransitions=function(n,t,i,r){u.getAllowedStatusTransitions(n,t).then(i,r)},i.EntityMetadata=function(n,t,i,r){u.getEntityMetadata(n,t).then(i,r)},i.ResourceString=function(n,t){return u.getResourceString(n,t)},i.Resource=function(i){return t!==undefined?u.getResourceString(t,i):n},i.InvokeProcessAction=function(n,t,i,r){u.invokeProcessAction(n,t).then(i,r)},i.LookupObjects=function(n,t,i){u.lookupObjects(n).then(t,i)},i.RefreshParentGrid=function(n){u.refreshParentGrid(n)},i.ShowProgressIndicator=function(n){u.showProgressIndicator(n)},i.AdvancedConfigSetting=function(n){return r.getAdvancedConfigSetting(n)},i.CurrentAppName=function(n,t){r.getCurrentAppName().then(n,t)},i.CurrentAppProperties=function(n,t){r.getCurrentAppProperties().then(n,t)},i.PrependOrgName=function(n){return r.prependOrgName(n)},i.OpenAlertDialog=function(n,t,i,r){f.openAlertDialog(n,t).then(i,r)},i.OpenConfirmDialog=function(n,t,i,r){f.openConfirmDialog(n,t).then(i,r)},i.OpenErrorDialog=function(n,t,i){f.openErrorDialog(n).then(t,i)},i.OpenFile=function(n,t){f.openFile(n,t)},i.OpenForm=function(n,t,i,r){f.openForm(n,t).then(i,r)},i.OpenUrl=function(n,t){f.openUrl(n,t)},i.OpenWebResource=function(n,t,i){f.openWebResource(n,t,i)},i.LoadPanel=function(n,t){s.loadPanel(n,t)},i.XmlAttributeEncode=function(n){return o.xmlAttributeEncode(n)},i.XmlEncode=function(n){return o.xmlEncode(n)},i.CaptureAudio=function(n,t){e.captureAudio().then(n,t)},i.CaptureImage=function(n,t,i){e.captureImage(n).then(t,i)},i.CaptureVideo=function(n,t){e.captureVideo().then(n,t)},i.BarcodeValue=function(n,t){e.getBarcodeValue().then(n,t)},i.CurrentPosition=function(n,t){e.getCurrentPosition().then(n,t)},i.PickFile=function(n,t,i){e.pickFile(n).then(t,i)},i}var n="",i="{00000000-0000-0000-0000-000000000000}",t=null;return{LoadForm:r,LoadProcess:u,LoadFields:e,LoadTabs:h,LoadNavigations:l,LoadQuickForms:v,LoadUtility:y}}(),OptionSet;(function(n){n.FormType={Undefined:0,Create:1,Update:2,ReadOnly:3,Disabled:4,BulkEdit:5};n.SaveOption={SaveAndClose:"saveandclose",SaveAndNew:"saveandnew"};n.SaveMode={Save:1,SaveAndClose:2,Deactivate:5,Reactivate:6,Email:7,Disqualify:15,Qualify:16,Assign:47,SaveAsCompleted:58,SaveAndNew:59,AutoSave:70};n.FormNotificationLevel={Error:"ERROR",Warning:"WARNING",Info:"INFO"};n.TabDisplayState={Expanded:"expanded",Collapsed:"collapsed"};n.ProcessDisplayState={Expanded:"expanded",Collapsed:"collapsed",Floating:"floating"};n.ProcessStatus={Active:"active",Aborted:"aborted",Finished:"finished"};n.FieldAttributeType={Boolean:"boolean",DateTime:"datetime",Decimal:"decimal",Double:"double",Integer:"integer",Lookup:"lookup",Memo:"memo",Money:"money",MultiOptionSet:"multioptionset",OptionSet:"optionset",String:"string"};n.FieldFormat={Date:"date",DateTime:"datetime",Duration:"duration",Email:"email",Language:"language",None:"none",TextArea:"textarea",Text:"text",TickerSymbol:"tickersymbol",Phone:"phone",TimeZone:"timezone",Url:"url"};n.FieldRequiredLevel={None:"none",Required:"required",Recommended:"recommended"};n.FieldSubmitMode={Always:"always",Never:"never",Dirty:"dirty"};n.FieldControlType={Standard:"standard",Iframe:"iframe",KbSearch:"kbsearch",Lookup:"lookup",MultiSelectOptionset:"multiselectoptionset",Notes:"notes",OptionSet:"optionset",QuickForm:"quickform",SubGrid:"subgrid",TimerControl:"TimerControl",TimelineWall:"timelinewall",WebResource:"webresource"};n.FieldNotificationLevel={Error:"ERROR",Recommendation:"RECOMMENDATION"};n.ProcessCategory={Qualify:0,Develop:1,Propose:2,Close:3,Identify:4,Research:5,Resolve:6};n.TimerState={NotSet:1,InProgress:2,Warning:3,Violated:4,Success:5,Expired:6,Canceled:7,Paused:8};n.ClientName={Web:"Web",Outlook:"Outlook",Mobile:"Mobile"};n.ClientState={Online:"Online",Offline:"Offline"};n.FormFactor={Unknown:0,Desktop:1,Tablet:2,Phone:3};n.AdvancedConfigSetting={MaxChildIncidentNumber:"MaxChildIncidentNumber",MaxIncidentMergeNumber:"MaxIncidentMergeNumber"};n.OpenFileOption={Open:1,Save:2}})(OptionSet||(OptionSet={}))