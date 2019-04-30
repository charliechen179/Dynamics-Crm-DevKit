﻿'use strict';var Rocket;(function(n){n.devkit_WebApiApi=function(n){function o(n,t,i,u,f,e,o,s){var h='@OData.Community.Display.V1.FormattedValue',l='@Microsoft.Dynamics.CRM.lookuplogicalname',c={},v=function(){return n[t+h]===undefined||n[t+h]===null?r:u!==undefined&&u.length>0?n[t+l]===f?n[t+h]:r:s?n[t+h].toString().split(';'):n[t+h]},a=function(){return n[t]===undefined||n[t]===null?null:u!==undefined&&u.length>0?n[t+l]===undefined||n[t+l]===f?n[t]:null:s?n[t].toString().split(','):n[t]},y=function(f){u!==undefined&&u.length>0?(f=f.replace('{',r).replace('}',r),o[i+'@odata.bind']='/'+u+'('+f+')'):o[t]=f;n[t]=f};return Object.defineProperty(c,'FormattedValue',{get:v}),e?Object.defineProperty(c,'Value',{get:a}):Object.defineProperty(c,'Value',{get:a,set:y}),c}var r='',t={CreatedBy:{b:'createdby',a:'_createdby_value',c:'systemusers',d:'systemuser',r:!0},CreatedOn_UtcDateAndTime:{a:'createdon',r:!0},CreatedOnBehalfBy:{b:'createdonbehalfby',a:'_createdonbehalfby_value',c:'systemusers',d:'systemuser',r:!0},devkit_MultiOptionSetCode:{a:'devkit_multioptionsetcode',f:!0},devkit_Name:{a:'devkit_name'},devkit_SingleOptionSetCode:{a:'devkit_singleoptionsetcode'},devkit_SingleOptionSetCodeCalculated:{a:'devkit_singleoptionsetcodecalculated',r:!0},devkit_WebApiId:{a:'devkit_webapiid'},ImportSequenceNumber:{a:'importsequencenumber'},ModifiedBy:{b:'modifiedby',a:'_modifiedby_value',c:'systemusers',d:'systemuser',r:!0},ModifiedOn_UtcDateAndTime:{a:'modifiedon',r:!0},ModifiedOnBehalfBy:{b:'modifiedonbehalfby',a:'_modifiedonbehalfby_value',c:'systemusers',d:'systemuser',r:!0},OverriddenCreatedOn_UtcDateOnly:{a:'overriddencreatedon'},OwnerId_systemuser:{b:'ownerid',a:'_ownerid_value',c:'systemusers',d:'systemuser'},OwnerId_team:{b:'ownerid',a:'_ownerid_value',c:'teams',d:'team'},OwningBusinessUnit:{b:'owningbusinessunit',a:'_owningbusinessunit_value',c:'businessunits',d:'businessunit',r:!0},OwningTeam:{b:'owningteam',a:'_owningteam_value',c:'teams',d:'team',r:!0},OwningUser:{b:'owninguser',a:'_owninguser_value',c:'systemusers',d:'systemuser',r:!0},statecode:{a:'statecode'},statuscode:{a:'statuscode'},TimeZoneRuleVersionNumber:{a:'timezoneruleversionnumber'},UTCConversionTimeZoneCode:{a:'utcconversiontimezonecode'},VersionNumber:{a:'versionnumber',r:!0}},u,f,i,e;if(arguments.length>1)for(u=1;u<arguments.length;u++)Object.assign(t,arguments[u]);n===undefined&&(n={});f={};for(i in t){var s=t[i].a,h=t[i].b,c=t[i].c,l=t[i].d,a=t[i].f,v=t[i].r;t[i]=o(n,s,h,c,l,v,f,a)}return t.Entity=f,t.EntityName='devkit_webapi',t.EntityCollectionName='devkit_webapis',t['@odata.etag']=n['@odata.etag'],e={devkit_SingleOptionSetCode:{Crm_4:1e8,Crm_2011:100000001,Crm_2013:100000002,Crm_2015:100000003,Crm_2016:100000004,Dynamics_365:100000005},devkit_SingleOptionSetCodeCalculated:{Crm_4:1e8,Crm_2011:100000001,Crm_2013:100000002,Crm_2015:100000003,Crm_2016:100000004,Dynamics_365:100000005},statecode:{Active:0,Inactive:1},statuscode:{Active:1,Inactive:2}},t.OptionSet=e,t}})(Rocket||(Rocket={}))