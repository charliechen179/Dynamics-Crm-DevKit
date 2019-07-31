﻿'use strict';
/** @namespace LuckyStar */
var LuckyStar;(function(n){'use strict';var t=function(){function i(n){var t={},u=function(){if(n){if(n.data)return n.data}else if(Xrm&&Xrm.Page&&Xrm.Page.data)return Xrm.Page.data}(),i=function(){if(n){if(n.data&&n.data.entity)return n.data.entity}else if(Xrm&&Xrm.Page&&Xrm.Page.data&&Xrm.Page.data.entity)return Xrm.Page.data.entity}(),r=function(){if(n){if(n.ui)return n.ui}else if(Xrm&&Xrm.Page&&Xrm.Page.ui)return Xrm.Page.ui}(),f=function(){if(n){if(n.ui&&n.ui.formSelector)return n.ui.formSelector}else if(Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.formSelector)return Xrm.Page.ui.formSelector}();return Object.defineProperty(t,'IsDirty',{get:function(){return u.getIsDirty()}}),Object.defineProperty(t,'IsValid',{get:function(){return u.isValid()}}),Object.defineProperty(t,'DataXml',{get:function(){return i.getDataXml()}}),Object.defineProperty(t,'EntityName',{get:function(){return i.getEntityName()}}),Object.defineProperty(t,'EntityReference',{get:function(){return i.getEntityReference()}}),Object.defineProperty(t,'EntityId',{get:function(){return i.getId()}}),Object.defineProperty(t,'EntityIsDirty',{get:function(){return i.getIsDirty()}}),Object.defineProperty(t,'PrimaryAttributeValue',{get:function(){return i.getPrimaryAttributeValue()}}),Object.defineProperty(t,'EntityIsValid',{get:function(){return i.isValid()}}),Object.defineProperty(t,'Attributes',{get:function(){return i.attributes}}),Object.defineProperty(t,'FormType',{get:function(){return r.getFormType()}}),Object.defineProperty(t,'ViewPortHeight',{get:function(){return r.getViewPortHeight()}}),Object.defineProperty(t,'ViewPortWidth',{get:function(){return r.getViewPortWidth()}}),Object.defineProperty(t,'Controls',{get:function(){return r.controls}}),Object.defineProperty(t,'FormId',{get:function(){return f.getCurrentItem().getId()}}),Object.defineProperty(t,'FormLabel',{get:function(){return f.getCurrentItem().getLabel()}}),t.AddOnLoad=function(n){u.addOnLoad(n)},t.Refresh=function(n,t,i){u.refresh(n).then(t,i)},t.RemoveOnLoad=function(n){u.removeOnLoad(n)},t.Save=function(n,t,i){u.save(n).then(t,i)},t.AddOnSave=function(n){i.addOnSave(n)},t.RemoveOnSave=function(n){i.removeOnSave(n)},t.EntitySave=function(n){i.save(n)},t.ClearFormNotification=function(n){return r.clearFormNotification(n)},t.Close=function(){r.close()},t.RefreshRibbon=function(n){r.refreshRibbon(n)},t.SetFormNotification=function(n,t,i){return r.setFormNotification(n,t,i)},t.FormNavigate=function(n){var t=f.items.get(n);t.navigate()},t}function r(i){var r={},u=function(){if(i){if(i.data&&i.data.process)return i.data.process}else if(Xrm&&Xrm.Page&&Xrm.Page.data&&Xrm.Page.data.process)return Xrm.Page.data.process}(),f=function(){if(i){if(i.ui&&i.ui.process)return i.ui.process}else if(Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.process)return Xrm.Page.ui.process}();return Object.defineProperty(r,'InstanceId',{get:function(){return u.getInstanceId()}}),Object.defineProperty(r,'InstanceName',{get:function(){return u.getInstanceName()}}),Object.defineProperty(r,'ActivePath',{get:function(){return u.getActivePath()}}),Object.defineProperty(r,'DisplayState',{get:function(){return f.getDisplayState()},set:function(n){f.setDisplayState(n)}}),Object.defineProperty(r,'Visible',{get:function(){return f.getVisible()},set:function(n){f.setVisible(n)}}),Object.defineProperty(r,'Status',{get:function(){return u.getStatus()},set:function(n){u.setStatus(n,N)}}),Object.defineProperty(r,'ActiveProcess',{get:function(){var r={Id:t,Name:n,IsRendered:!1,Stages:N},i=u.getActiveProcess();return i.getId&&(r.Id=i.getId()),i.getName&&(r.Name=i.getName()),i.isRendered&&(r.IsRendered=i.isRendered()),i.getStages&&(r.Stages=i.getStages()),r}}),Object.defineProperty(r,'ActiveStage',{get:function(){var r={Category:N,EntityName:n,Id:t,Name:n,Status:n,Steps:N},i=u.getActiveStage();return i.getCategory&&i.getCategory().getValue&&(r.Category=i.getCategory().getValue()),i.getEntityName&&(r.EntityName=i.getEntityName()),i.getId&&(r.Id=i.getId()),i.getName&&(r.Name=i.getName()),i.getStatus&&(r.Status=i.getStatus()),i.getSteps&&(r.Steps=i.getSteps()),r}}),Object.defineProperty(r,'SelectedStage',{get:function(){var r={Category:N,EntityName:n,Id:t,Name:n,Status:n,Steps:N},i=u.getSelectedStage();return i.getCategory&&i.getCategory().getValue&&(r.Category=i.getCategory().getValue()),i.getEntityName&&(r.EntityName=i.getEntityName()),i.getId&&(r.Id=i.getId()),i.getName&&(r.Name=i.getName()),i.getStatus&&(r.Status=i.getStatus()),i.getSteps&&(r.Steps=i.getSteps()),r}}),r.AddOnProcessStatusChange=function(n){u.addOnProcessStatusChange(n)},r.AddOnStageChange=function(n){u.addOnStageChange(n)},r.AddOnStageSelected=function(n){u.addOnStageSelected(n)},r.EnabledProcesses=function(n){u.getEnabledProcesses(n)},r.MoveNext=function(n){u.moveNext(n)},r.MovePrevious=function(n){u.movePrevious(n)},r.ProcessInstances=function(n){u.getProcessInstances(n)},r.RemoveOnProcessStatusChange=function(n){u.removeOnProcessStatusChange(n)},r.RemoveOnStageChange=function(n){u.removeOnStageChange(n)},r.RemoveOnStageSelected=function(n){u.removeOnStageSelected(n)},r.SetActiveProcess=function(n,t){u.setActiveProcess(n,t)},r.SetActiveProcessInstance=function(n,t){u.setActiveProcessInstance(n,t)},r.SetActiveStage=function(n,t){u.setActiveStage(n,t)},r}function u(n,t,i,r){var e=function(){return r===undefined?i.toLowerCase():(r+i).toLowerCase()}(),u=function(){if(n){if(n.getControl)return n.getControl(e)}else if(Xrm&&Xrm.Page&&Xrm.Page.getControl)return Xrm.Page.getControl(e)}(),f=function(){var t;if(n){if(n.getAttribute&&(t=n.getAttribute(e),t)||u&&u.getAttribute&&(t=u.getAttribute(),t))return t}else if(Xrm&&Xrm.Page&&Xrm.Page.getAttribute&&(t=Xrm.Page.getAttribute(e),t)||Xrm&&Xrm.Page&&Xrm.Page.getControl&&(t=Xrm.Page.getControl(e).getAttribute(),t))return t}();Object.defineProperty(t[i],'AttributeType',{get:function(){return f.getAttributeType()}});Object.defineProperty(t[i],'Format',{get:function(){return f.getFormat()}});Object.defineProperty(t[i],'InitialValue',{get:function(){return f.getInitialValue()}});Object.defineProperty(t[i],'IsDirty',{get:function(){return f.getIsDirty()}});Object.defineProperty(t[i],'IsPartyList',{get:function(){return f.getIsPartyList()}});Object.defineProperty(t[i],'Max',{get:function(){return f.getMax()}});Object.defineProperty(t[i],'MaxLength',{get:function(){return f.getMaxLength()}});Object.defineProperty(t[i],'Min',{get:function(){return f.getMin()}});Object.defineProperty(t[i],'Name',{get:function(){return f.getName()}});Object.defineProperty(t[i],'Options',{get:function(){return f.getOptions()}});Object.defineProperty(t[i],'AttributeParent',{get:function(){return f.getParent()}});Object.defineProperty(t[i],'SelectedOption',{get:function(){return f.getSelectedOption()}});Object.defineProperty(t[i],'Text',{get:function(){return f.getText()}});Object.defineProperty(t[i],'UserPrivilege',{get:function(){return f.getUserPrivilege()}});Object.defineProperty(t[i],'Valid',{get:function(){return f.isValid()}});Object.defineProperty(t[i],'ControlType',{get:function(){return u.getControlType()}});Object.defineProperty(t[i],'InitialUrl',{get:function(){return u.getInitialUrl()}});Object.defineProperty(t[i],'Name2',{get:function(){return u.getName()}});Object.defineProperty(t[i],'Object',{get:function(){return u.getObject()}});Object.defineProperty(t[i],'ControlParent',{get:function(){return u.getParent()}});Object.defineProperty(t[i],'State',{get:function(){return u.getState()}});Object.defineProperty(t[i],'TotalResultCount',{get:function(){return u.getTotalResultCount()}});Object.defineProperty(t[i],'Value2',{get:function(){return u.getValue()}});Object.defineProperty(t[i],'Precision',{get:function(){return f.getPrecision()},set:function(n){f.setPrecision(n)}});Object.defineProperty(t[i],'RequiredLevel',{get:function(){return f.getRequiredLevel()},set:function(n){f.setRequiredLevel(n)}});Object.defineProperty(t[i],'SubmitMode',{get:function(){return f.getSubmitMode()},set:function(n){f.setSubmitMode(n)}});Object.defineProperty(t[i],'Value',{get:function(){return f.getValue()},set:function(n){f.setValue(n)}});Object.defineProperty(t[i],'Data',{get:function(){return u.getData()},set:function(n){u.setData(n)}});Object.defineProperty(t[i],'DefaultView',{get:function(){return u.getDefaultView()},set:function(n){u.setDefaultView(n)}});Object.defineProperty(t[i],'Disabled',{get:function(){return u.getDisabled()},set:function(n){u.setDisabled(n)}});Object.defineProperty(t[i],'EntityTypes',{get:function(){return u.getEntityTypes()},set:function(n){u.setEntityTypes(n)}});Object.defineProperty(t[i],'Label',{get:function(){return u.getLabel()},set:function(n){u.setLabel(n)}});Object.defineProperty(t[i],'SearchQuery',{get:function(){return u.getSearchQuery()},set:function(n){u.setSearchQuery(n)}});Object.defineProperty(t[i],'ShowTime',{get:function(){return u.getShowTime()},set:function(n){u.setShowTime(n)}});Object.defineProperty(t[i],'Src',{get:function(){return u.getSrc()},set:function(n){u.setSrc(n)}});Object.defineProperty(t[i],'Visible',{get:function(){return u.getVisible()},set:function(n){u.setVisible(n)}});t[i].Option=function(n){return f.getOption(n)};t[i].RemoveOnChange=function(n){f.removeOnChange(n)};t[i].AddCustomFilter=function(n,t){u.addCustomFilter(n,t)};t[i].AddCustomView=function(n,t,i,r,f,e){u.addCustomView(n,t,i,r,f,e)};t[i].AddOnPostSearch=function(n){u.addOnPostSearch(n)};t[i].AddOnResultOpened=function(n){u.addOnResultOpened(n)};t[i].AddOnSelection=function(n){u.addOnSelection(n)};t[i].AddPreSearch=function(n){u.addPreSearch(n)};t[i].ClearNotification=function(n){return u.clearNotification(n)};t[i].ClearOptions=function(){return u.clearOptions()};t[i].AddOnChange=function(n){f.addOnChange(n)};t[i].FireOnChange=function(){f.fireOnChange()};t[i].OpenSearchResult=function(n,t){return u.openSearchResult(n,t)};t[i].Refresh=function(){u.refresh()};t[i].RemoveOnPostSearch=function(n){u.removeOnPostSearch(n)};t[i].RemoveOnResultOpened=function(n){u.removeOnResultOpened(n)};t[i].RemoveOnSelection=function(n){u.removeOnSelection(n)};t[i].RemoveOption=function(n){u.removeOption(n)};t[i].RemovePreSearch=function(n){u.removePreSearch(n)};t[i].Focus=function(){u.setFocus()};t[i].SetNotification=function(n,t){return u.setNotification(n,t)};t[i].AddOption=function(n,t,i){var r={text:n,value:t};u.addOption(r,i)};t[i].AddNotification=function(n,t,i,r,f){var e={message:t,actions:[f]},o={messages:[n],notificationLevel:i,uniqueId:r,actions:[e]};return u.addNotification(o)}}function f(n,t,i){for(var r in t)u(n,t,r,i);return t}function e(n,t,i,r){var f=function(){if(n){if(n.ui&&n.ui.tabs&&n.ui.tabs.get)return n.ui.tabs.get(t)}else if(Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.tabs&&Xrm.Page.ui.tabs.get)return Xrm.Page.ui.tabs.get(t)}(),u=function(){if(f&&f.sections&&f.sections.get)return f.sections.get(r)}();Object.defineProperty(i[r],'Name',{get:function(){return u.getName()}});Object.defineProperty(i[r],'Parent',{get:function(){return u.getParent()}});Object.defineProperty(i[r],'Label',{get:function(){return u.getLabel()},set:function(n){u.setLabel(n)}});Object.defineProperty(i[r],'Visible',{get:function(){return u.getVisible()},set:function(n){u.setVisible(n)}})}function o(n,t,i){var r=function(){if(n){if(n.ui&&n.ui.tabs&&n.ui.tabs.get)return n.ui.tabs.get(i)}else if(Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.tabs&&Xrm.Page.ui.tabs.get)return Xrm.Page.ui.tabs.get(i)}(),u;Object.defineProperty(t[i],'Name',{get:function(){return r.getName()}});Object.defineProperty(t[i],'Parent',{get:function(){return r.getParent()}});Object.defineProperty(t[i],'DisplayState',{get:function(){return r.getDisplayState()},set:function(n){r.setDisplayState(n)}});Object.defineProperty(t[i],'Label',{get:function(){return r.getLabel()},set:function(n){r.setLabel(n)}});Object.defineProperty(t[i],'Visible',{get:function(){return r.getVisible()},set:function(n){r.setVisible(n)}});t[i].AddTabStateChange=function(n){r.addTabStateChange(n)};t[i].Focus=function(){r.setFocus()};t[i].RemoveTabStateChange=function(n){r.removeTabStateChange(n)};for(u in t[i].Section)e(n,i,t[i].Section,u)}function s(n,t){for(var i in t)o(n,t,i)}function h(n,t,i){var r=function(){if(n){if(n.ui&&n.ui.navigation&&n.ui.navigation.items&&n.ui.navigation.items.get)return n.ui.navigation.items.get(i)}else if(Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.navigation&&Xrm.Page.ui.navigation.items&&Xrm.Page.ui.navigation.items.get)return Xrm.Page.ui.navigation.items.get(i)}();Object.defineProperty(t[i],'Id',{get:function(){return r.getId()}});Object.defineProperty(t[i],'Label',{get:function(){return r.getLabel()},set:function(n){r.setLabel(n)}});Object.defineProperty(t[i],'Visible',{get:function(){return r.getVisible()},set:function(n){r.setVisible(n)}});t[i].Focus=function(){r.setFocus()}}function c(n,t){for(var i in t)h(n,t,i)}function l(n,t,i){var r=function(){if(n){if(n.ui&&n.ui.quickForms&&n.ui.quickForms.get)return n.ui.quickForms.get(i)}else if(Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.quickForms&&Xrm.Page.ui.quickForms.get)return Xrm.Page.ui.quickForms.get(i)}();Object.defineProperty(t[i],'ControlType',{get:function(){return r.getControlType()}});Object.defineProperty(t[i],'Visible',{get:function(){return r.getVisible()}});Object.defineProperty(t[i],'Name',{get:function(){return r.getName()}});Object.defineProperty(t[i],'Parent',{get:function(){return r.getParent()}});Object.defineProperty(t[i],'Label',{get:function(){return r.getLabel()},set:function(n){r.setLabel(n)}});t[i].IsLoaded=function(){return r.isLoaded()};t[i].Refresh=function(){r.refresh()};t[i].Focus=function(){r.setFocus()}}function a(n,t){for(var i in t)l(n,t,i)}function v(t){var i={},r=function(){if(Xrm&&Xrm.Utility)return Xrm.Utility}(),u=function(){if(Xrm&&Xrm.Utility&&Xrm.Utility.getGlobalContext)return Xrm.Utility.getGlobalContext()}(),f=function(){if(Xrm&&Xrm.Navigation)return Xrm.Navigation}(),s=function(){if(Xrm&&Xrm.Panel)return Xrm.Panel}(),o=function(){if(Xrm&&Xrm.Encoding)return Xrm.Encoding}(),e=function(){if(Xrm&&Xrm.Device)return Xrm.Device}();return Object.defineProperty(i,'LearningPathAttributeName',{get:function(){return r.getLearningPathAttributeName()}}),Object.defineProperty(i,'ClientUrl',{get:function(){return u.getClientUrl()}}),Object.defineProperty(i,'CurrentAppUrl',{get:function(){return u.getCurrentAppUrl()}}),Object.defineProperty(i,'Version',{get:function(){return u.getVersion()}}),Object.defineProperty(i,'IsOnPremises',{get:function(){return u.isOnPremises()}}),Object.defineProperty(i,'Client',{get:function(){var t=function(){return Xrm.Utility.getGlobalContext().client}(),n={};return Object.defineProperty(n,'ClientName',{get:function(){return t.getClient()}}),Object.defineProperty(n,'ClientState',{get:function(){return t.getClientState()}}),Object.defineProperty(n,'FormFactor',{get:function(){return t.getFormFactor()}}),n.IsOffline=function(){return t.isOffline()},n}}),Object.defineProperty(i,'OrganizationSettings',{get:function(){var t=function(){return Xrm.Utility.getGlobalContext().organizationSettings}(),n={};return Object.defineProperty(n,'Attributes',{get:function(){return t.attributes}}),Object.defineProperty(n,'BaseCurrencyId',{get:function(){return t.baseCurrencyId}}),Object.defineProperty(n,'DefaultCountryCode',{get:function(){return t.defaultCountryCode}}),Object.defineProperty(n,'LanguageId',{get:function(){return t.languageId}}),Object.defineProperty(n,'OrganizationId',{get:function(){return t.organizationId}}),Object.defineProperty(n,'UniqueName',{get:function(){return t.uniqueName}}),Object.defineProperty(n,'UseSkypeProtocol',{get:function(){return t.useSkypeProtocol}}),n.IsAutoSaveEnabled=function(){return t.isAutoSaveEnabled},n}}),Object.defineProperty(i,'UserSettings',{get:function(){var t=function(){return Xrm.Utility.getGlobalContext().userSettings}(),n={};return Object.defineProperty(n,'DateFormattingInfo',{get:function(){return t.dateFormattingInfo}}),Object.defineProperty(n,'DefaultDashboardId',{get:function(){return t.defaultDashboardId}}),Object.defineProperty(n,'LanguageId',{get:function(){return t.languageId}}),Object.defineProperty(n,'SecurityRolePrivileges',{get:function(){return t.securityRolePrivileges}}),Object.defineProperty(n,'SecurityRoles',{get:function(){return t.securityRoles}}),Object.defineProperty(n,'TransactionCurrencyId',{get:function(){return t.transactionCurrencyId}}),Object.defineProperty(n,'UserId',{get:function(){return t.userId}}),Object.defineProperty(n,'UserName',{get:function(){return t.userName}}),n.IsGuidedHelpEnabled=function(){return t.isGuidedHelpEnabled},n.IsHighContrastEnabled=function(){return t.isHighContrastEnabled},n.IsRTL=function(){return t.isRTL},n.TimeZoneOffsetMinutes=function(){return t.getTimeZoneOffsetMinutes()},n}}),i.CloseProgressIndicator=function(){r.closeProgressIndicator()},i.AllowedStatusTransitions=function(n,t,i,u){r.getAllowedStatusTransitions(n,t).then(i,u)},i.EntityMetadata=function(n,t,i,u){r.getEntityMetadata(n,t).then(i,u)},i.ResourceString=function(n,t){return r.getResourceString(n,t)},i.Resource=function(i){return t!==undefined?r.getResourceString(t,i):n},i.InvokeProcessAction=function(n,t,i,u){r.invokeProcessAction(n,t).then(i,u)},i.LookupObjects=function(n,t,i){r.lookupObjects(n).then(t,i)},i.RefreshParentGrid=function(n){r.refreshParentGrid(n)},i.ShowProgressIndicator=function(n){r.showProgressIndicator(n)},i.AdvancedConfigSetting=function(n){return u.getAdvancedConfigSetting(n)},i.CurrentAppName=function(n,t){u.getCurrentAppName().then(n,t)},i.CurrentAppProperties=function(n,t){u.getCurrentAppProperties().then(n,t)},i.PrependOrgName=function(n){return u.prependOrgName(n)},i.OpenAlertDialog=function(n,t,i,r){f.openAlertDialog(n,t).then(i,r)},i.OpenConfirmDialog=function(n,t,i,r){f.openConfirmDialog(n,t).then(i,r)},i.OpenErrorDialog=function(n,t,i){f.openErrorDialog(n).then(t,i)},i.OpenFile=function(n,t){f.openFile(n,t)},i.OpenForm=function(n,t,i,r){f.openForm(n,t).then(i,r)},i.OpenUrl=function(n,t){f.openUrl(n,t)},i.OpenWebResource=function(n,t,i){f.openWebResource(n,t,i)},i.LoadPanel=function(n,t){s.loadPanel(n,t)},i.XmlAttributeEncode=function(n){return o.xmlAttributeEncode(n)},i.XmlEncode=function(n){return o.xmlEncode(n)},i.CaptureAudio=function(n,t){e.captureAudio().then(n,t)},i.CaptureImage=function(n,t,i){e.captureImage(n).then(t,i)},i.CaptureVideo=function(n,t){e.captureVideo().then(n,t)},i.BarcodeValue=function(n,t){e.getBarcodeValue().then(n,t)},i.CurrentPosition=function(n,t){e.getCurrentPosition().then(n,t)},i.PickFile=function(n,t,i){e.pickFile(n).then(t,i)},i}var n='',t='{00000000-0000-0000-0000-000000000000}';return{LoadForm:i,LoadProcess:r,LoadFields:f,LoadTabs:s,LoadNavigations:c,LoadQuickForms:a,LoadUtility:v}}();n.FormAccount=function(n,i){var u=null,r,f,e,o,s,h,c;return n!==undefined&&(u=n.getFormContext===undefined?n:n.getFormContext()),r=t.LoadForm(u),f={Address1_Composite:{},Address1_FreightTermsCode:{},Address1_ShippingMethodCode:{},CreditLimit:{},CreditOnHold:{},Description:{},DoNotBulkEMail:{},DoNotEMail:{},DoNotFax:{},DoNotPhone:{},DoNotPostalMail:{},Fax:{},FollowEmail:{},IndustryCode:{},Name:{},OwnershipCode:{},ParentAccountId:{},PaymentTermsCode:{},PreferredContactMethodCode:{},PrimaryContactId:{},SIC:{},Telephone1:{},TickerSymbol:{},TransactionCurrencyId:{},WebSiteURL:{}},t.LoadFields(u,f),e={SUMMARY_TAB:{Section:{ACCOUNT_INFORMATION:{},ADDRESS:{},MapSection:{},SOCIAL_PANE_TAB:{},Summary_section_6:{},SUMMARY_TAB_section_6:{}}},DETAILS_TAB:{Section:{COMPANY_PROFILE:{},DETAILS_TAB_section_6:{},CONTACT_PREFERENCES:{},BILLING:{},SHIPPING:{},ChildAccounts:{}}}},t.LoadTabs(u,e),f.Tab=e,r.Body=f,o={NumberOfEmployees:{},OwnerId:{},Revenue:{}},t.LoadFields(u,o,'header_'),r.Header=o,s={contactquickform:{}},t.LoadQuickForms(u,s),r.QuickForm=s,h={navAddresses:{},navSubAccts:{},navRelationships:{},navCampaignsInSFA:{},navProcessSessions:{},navAsyncOperations:{}},t.LoadNavigations(u,h),r.Navigation=h,r.Utility=t.LoadUtility(i),c={AccountCategoryCode:{Preferred_Customer:1,Standard:2},AccountClassificationCode:{Default_Value:1},AccountRatingCode:{Default_Value:1},Address1_AddressTypeCode:{Bill_To:1,Ship_To:2,Primary:3,Other:4},Address1_FreightTermsCode:{FOB:1,No_Charge:2},Address1_ShippingMethodCode:{Airborne:1,DHL:2,FedEx:3,UPS:4,Postal_Mail:5,Full_Load:6,Will_Call:7},Address2_AddressTypeCode:{Default_Value:1},Address2_FreightTermsCode:{Default_Value:1},Address2_ShippingMethodCode:{Default_Value:1},BusinessTypeCode:{Default_Value:1},CustomerSizeCode:{Default_Value:1},CustomerTypeCode:{Competitor:1,Consultant:2,Customer:3,Investor:4,Partner:5,Influencer:6,Press:7,Prospect:8,Reseller:9,Supplier:10,Vendor:11,Other:12},IndustryCode:{Accounting:1,Agriculture_and_Non_petrol_Natural_Resource_Extraction:2,Broadcasting_Printing_and_Publishing:3,Brokers:4,Building_Supply_Retail:5,Business_Services:6,Consulting:7,Consumer_Services:8,Design_Direction_and_Creative_Management:9,Distributors_Dispatchers_and_Processors:10,Doctors_Offices_and_Clinics:11,Durable_Manufacturing:12,Eating_and_Drinking_Places:13,Entertainment_Retail:14,Equipment_Rental_and_Leasing:15,Financial:16,Food_and_Tobacco_Processing:17,Inbound_Capital_Intensive_Processing:18,Inbound_Repair_and_Services:19,Insurance:20,Legal_Services:21,Non_Durable_Merchandise_Retail:22,Outbound_Consumer_Service:23,Petrochemical_Extraction_and_Distribution:24,Service_Retail:25,SIG_Affiliations:26,Social_Services:27,Special_Outbound_Trade_Contractors:28,Specialty_Realty:29,Transportation:30,Utility_Creation_and_Distribution:31,Vehicle_Retail:32,Wholesale:33},OwnershipCode:{Public:1,Private:2,Subsidiary:3,Other:4},PaymentTermsCode:{Net_30:1,_2_10_Net_30:2,Net_45:3,Net_60:4},PreferredAppointmentDayCode:{Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},PreferredAppointmentTimeCode:{Morning:1,Afternoon:2,Evening:3},PreferredContactMethodCode:{Any:1,Email:2,Phone:3,Fax:4,Mail:5},ShippingMethodCode:{Default_Value:1},StateCode:{Active:0,Inactive:1},StatusCode:{Active:1,Inactive:2},TerritoryCode:{Default_Value:1}},r.OptionSet=c,r};n.FormAccount_Quick_Create=function(n,i){var u=null,r,f,e,o;return n!==undefined&&(u=n.getFormContext===undefined?n:n.getFormContext()),r=t.LoadForm(u),f={Address1_City:{},Address1_Line1:{},Address1_Line2:{},Address1_PostalCode:{},Description:{},Name:{},NumberOfEmployees:{},PrimaryContactId:{},Revenue:{},Telephone1:{}},t.LoadFields(u,f),e={tab_1:{Section:{tab_1_column_1_section_1:{},tab_1_column_2_section_1:{},tab_1_column_3_section_1:{}}}},t.LoadTabs(u,e),f.Tab=e,r.Body=f,r.Utility=t.LoadUtility(i),o={AccountCategoryCode:{Preferred_Customer:1,Standard:2},AccountClassificationCode:{Default_Value:1},AccountRatingCode:{Default_Value:1},Address1_AddressTypeCode:{Bill_To:1,Ship_To:2,Primary:3,Other:4},Address1_FreightTermsCode:{FOB:1,No_Charge:2},Address1_ShippingMethodCode:{Airborne:1,DHL:2,FedEx:3,UPS:4,Postal_Mail:5,Full_Load:6,Will_Call:7},Address2_AddressTypeCode:{Default_Value:1},Address2_FreightTermsCode:{Default_Value:1},Address2_ShippingMethodCode:{Default_Value:1},BusinessTypeCode:{Default_Value:1},CustomerSizeCode:{Default_Value:1},CustomerTypeCode:{Competitor:1,Consultant:2,Customer:3,Investor:4,Partner:5,Influencer:6,Press:7,Prospect:8,Reseller:9,Supplier:10,Vendor:11,Other:12},IndustryCode:{Accounting:1,Agriculture_and_Non_petrol_Natural_Resource_Extraction:2,Broadcasting_Printing_and_Publishing:3,Brokers:4,Building_Supply_Retail:5,Business_Services:6,Consulting:7,Consumer_Services:8,Design_Direction_and_Creative_Management:9,Distributors_Dispatchers_and_Processors:10,Doctors_Offices_and_Clinics:11,Durable_Manufacturing:12,Eating_and_Drinking_Places:13,Entertainment_Retail:14,Equipment_Rental_and_Leasing:15,Financial:16,Food_and_Tobacco_Processing:17,Inbound_Capital_Intensive_Processing:18,Inbound_Repair_and_Services:19,Insurance:20,Legal_Services:21,Non_Durable_Merchandise_Retail:22,Outbound_Consumer_Service:23,Petrochemical_Extraction_and_Distribution:24,Service_Retail:25,SIG_Affiliations:26,Social_Services:27,Special_Outbound_Trade_Contractors:28,Specialty_Realty:29,Transportation:30,Utility_Creation_and_Distribution:31,Vehicle_Retail:32,Wholesale:33},OwnershipCode:{Public:1,Private:2,Subsidiary:3,Other:4},PaymentTermsCode:{Net_30:1,_2_10_Net_30:2,Net_45:3,Net_60:4},PreferredAppointmentDayCode:{Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},PreferredAppointmentTimeCode:{Morning:1,Afternoon:2,Evening:3},PreferredContactMethodCode:{Any:1,Email:2,Phone:3,Fax:4,Mail:5},ShippingMethodCode:{Default_Value:1},StateCode:{Active:0,Inactive:1},StatusCode:{Active:1,Inactive:2},TerritoryCode:{Default_Value:1}},r.OptionSet=o,r}})(LuckyStar||(LuckyStar={}))
/** @namespace OptionSet */
var OptionSet;(function(n){n.FormType={Undefined:0,Create:1,Update:2,ReadOnly:3,Disabled:4,BulkEdit:5};n.SaveOption={SaveAndClose:"saveandclose",SaveAndNew:"saveandnew"};n.SaveMode={Save:1,SaveAndClose:2,Deactivate:5,Reactivate:6,Email:7,Disqualify:15,Qualify:16,Assign:47,SaveAsCompleted:58,SaveAndNew:59,AutoSave:70};n.FormNotificationLevel={Error:"ERROR",Warning:"WARNING",Info:"INFO"};n.TabDisplayState={Expanded:"expanded",Collapsed:"collapsed"};n.ProcessDisplayState={Expanded:"expanded",Collapsed:"collapsed",Floating:"floating"};n.ProcessStatus={Active:"active",Aborted:"aborted",Finished:"finished"};n.FieldAttributeType={Boolean:"boolean",DateTime:"datetime",Decimal:"decimal",Double:"double",Integer:"integer",Lookup:"lookup",Memo:"memo",Money:"money",MultiOptionSet:"multioptionset",OptionSet:"optionset",String:"string"};n.FieldFormat={Date:"date",DateTime:"datetime",Duration:"duration",Email:"email",Language:"language",None:"none",TextArea:"textarea",Text:"text",TickerSymbol:"tickersymbol",Phone:"phone",TimeZone:"timezone",Url:"url"};n.FieldRequiredLevel={None:"none",Required:"required",Recommended:"recommended"};n.FieldSubmitMode={Always:"always",Never:"never",Dirty:"dirty"};n.FieldControlType={Standard:"standard",Iframe:"iframe",KbSearch:"kbsearch",Lookup:"lookup",MultiSelectOptionset:"multiselectoptionset",Notes:"notes",OptionSet:"optionset",QuickForm:"quickform",SubGrid:"subgrid",TimerControl:"TimerControl",TimelineWall:"timelinewall",WebResource:"webresource"};n.FieldNotificationLevel={Error:"ERROR",Recommendation:"RECOMMENDATION"};n.ProcessCategory={Qualify:0,Develop:1,Propose:2,Close:3,Identify:4,Research:5,Resolve:6};n.TimerState={NotSet:1,InProgress:2,Warning:3,Violated:4,Success:5,Expired:6,Canceled:7,Paused:8};n.ClientName={Web:"Web",Outlook:"Outlook",Mobile:"Mobile"};n.ClientState={Online:"Online",Offline:"Offline"};n.FormFactor={Unknown:0,Desktop:1,Tablet:2,Phone:3};n.AdvancedConfigSetting={MaxChildIncidentNumber:"MaxChildIncidentNumber",MaxIncidentMergeNumber:"MaxIncidentMergeNumber"};n.OpenFileOption={Open:1,Save:2};n.Account={AccountCategoryCode:{Preferred_Customer:1,Standard:2},AccountClassificationCode:{Default_Value:1},AccountRatingCode:{Default_Value:1},Address1_AddressTypeCode:{Bill_To:1,Ship_To:2,Primary:3,Other:4},Address1_FreightTermsCode:{FOB:1,No_Charge:2},Address1_ShippingMethodCode:{Airborne:1,DHL:2,FedEx:3,UPS:4,Postal_Mail:5,Full_Load:6,Will_Call:7},Address2_AddressTypeCode:{Default_Value:1},Address2_FreightTermsCode:{Default_Value:1},Address2_ShippingMethodCode:{Default_Value:1},BusinessTypeCode:{Default_Value:1},CustomerSizeCode:{Default_Value:1},CustomerTypeCode:{Competitor:1,Consultant:2,Customer:3,Investor:4,Partner:5,Influencer:6,Press:7,Prospect:8,Reseller:9,Supplier:10,Vendor:11,Other:12},IndustryCode:{Accounting:1,Agriculture_and_Non_petrol_Natural_Resource_Extraction:2,Broadcasting_Printing_and_Publishing:3,Brokers:4,Building_Supply_Retail:5,Business_Services:6,Consulting:7,Consumer_Services:8,Design_Direction_and_Creative_Management:9,Distributors_Dispatchers_and_Processors:10,Doctors_Offices_and_Clinics:11,Durable_Manufacturing:12,Eating_and_Drinking_Places:13,Entertainment_Retail:14,Equipment_Rental_and_Leasing:15,Financial:16,Food_and_Tobacco_Processing:17,Inbound_Capital_Intensive_Processing:18,Inbound_Repair_and_Services:19,Insurance:20,Legal_Services:21,Non_Durable_Merchandise_Retail:22,Outbound_Consumer_Service:23,Petrochemical_Extraction_and_Distribution:24,Service_Retail:25,SIG_Affiliations:26,Social_Services:27,Special_Outbound_Trade_Contractors:28,Specialty_Realty:29,Transportation:30,Utility_Creation_and_Distribution:31,Vehicle_Retail:32,Wholesale:33},OwnershipCode:{Public:1,Private:2,Subsidiary:3,Other:4},PaymentTermsCode:{Net_30:1,_2_10_Net_30:2,Net_45:3,Net_60:4},PreferredAppointmentDayCode:{Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},PreferredAppointmentTimeCode:{Morning:1,Afternoon:2,Evening:3},PreferredContactMethodCode:{Any:1,Email:2,Phone:3,Fax:4,Mail:5},ShippingMethodCode:{Default_Value:1},StateCode:{Active:0,Inactive:1},StatusCode:{Active:1,Inactive:2},TerritoryCode:{Default_Value:1}}})(OptionSet||(OptionSet={}))