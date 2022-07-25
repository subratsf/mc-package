---
title: DataFolder
---
The DataFolder object represents a folder in Marketing Cloud.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AllowChildren</td>
<td>xsd:boolean</td>
<td>Specifies whether a data folder can have child data folders.</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>ContentType</td>
<td>xsd:string</td>
<td>Defines the type of content contained within a folder.</td>
</tr>
<tr>
<td>CorrelationID</td>
<td>xsd:string</td>
<td>Identifies correlation of objects across several requests.</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>xsd:dateTime</td>
<td>Read-only date and time of the object's creation.</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>xsd:string</td>
<td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>IsActive</td>
<td>xsd:boolean</td>
<td>Specifies whether the object is active</td>
</tr>
<tr>
<td>IsEditable</td>
<td>xsd:boolean</td>
<td>Indicates if the property can be edited by the end-user in the profile center</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified.</td>
</tr>
<tr>
<td>Name</td>
<td>xsd:string</td>
<td>Name of the object or property.</td>
</tr>
<tr>
<td>ObjectID</td>
<td>xsd:string</td>
<td>System-controlled, read-only text string identifier for object.</td>
</tr>
<tr>
<td>ObjectState</td>
<td>xsd:string</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>Owner</td>
<td>Owner</td>
<td>Describes account ownership of subscriber in an on-your-behalf account.</td>
</tr>
<tr>
<td>ParentFolder</td>
<td>DataFolder</td>
<td>Specifies the parent folder for a data folder.</td>
</tr>
<tr>
<td>PartnerKey</td>
<td>xsd:string</td>
<td>Unique identifier provided by partner for an object. This property is accessible only via API.</td>
</tr>
<tr>
<td>PartnerProperties</td>
<td>APIProperty[]</td>
<td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td>
</tr>
</tbody>
</table>

##Content Types for Child Folders
Use these content types when creating child folders for existing entities within your account. The Type column corresponds to the ContentType property for the DataFolder object.

<table class="table table-hover">
<thead align="left">
<tr><td>Entity</td><td>Type</td></tr>
</thead>
<tbody>
<tr>
<td>AB test</td>
<td>ABTest</td>
</tr>
<tr>
<td>Asset</td>
<td>asset</td>
</tr>
<tr>
<td>simple automated emails</td>
<td>automated_email</td>
</tr>
<tr>
<td>Automations</td>
<td>automations</td>
</tr>
<tr>
<td>Build audience activity</td>
<td>BuildAudienceActivity</td>
</tr>
<tr>
<td>Campaign</td>
<td>campaign</td>
</tr>
<tr>
<td>Condensed preview</td>
<td>condensedlpview</td>
</tr>
<tr>
<td>my contents</td>
<td>content</td>
</tr>
<tr>
<td>Contextual suppression list</td>
<td>contextual_suppression_list</td>
</tr>
<tr>
<td>Data extensions</td>
<td>dataextension</td>
</tr>
<tr>
<td>my documents</td>
<td>document</td>
</tr>
<tr>
<td>ELT activity</td>
<td>ELTactivity</td>
</tr>
<tr>
<td>my emails</td>
<td>email</td>
</tr>
<tr>
<td>Email hidden message model</td>
<td>email_hidden_messagemodel</td>
</tr>
<tr>
<td>Filter activities</td>
<td>filteractivity</td>
</tr>
<tr>
<td>Data Filters</td>
<td>filterdefinition</td>
</tr>
<tr>
<td>Global email</td>
<td>global_email</td>
</tr>
<tr>
<td>Global email subscribers</td>
<td>global_email_sub</td>
</tr>
<tr>
<td>my groups</td>
<td>group</td>
</tr>
<tr>
<td>Hidden</td>
<td>Hidden</td>
</tr>
<tr>
<td>my images</td>
<td>image</td>
</tr>
<tr>
<td>my tracking</td>
<td>job</td>
</tr>
<tr>
<td>my lists</td>
<td>list</td>
</tr>
<tr>
<td>Live content</td>
<td>livecontent</td>
</tr>
<tr>
<td>Measures</td>
<td>measure</td>
</tr>
<tr>
<td>Portfolio</td>
<td>media</td>
</tr>
<tr>
<td>Message</td>
<td>message</td>
</tr>
<tr>
<td>Microsites</td>
<td>microsite</td>
</tr>
<tr>
<td>Microsite layouts</td>
<td>micrositelayout</td>
</tr>
<tr>
<td>my subscribers</td>
<td>mysubs</td>
</tr>
<tr>
<td>Organizations</td>
<td>organization</td>
</tr>
<tr>
<td>Playbooks</td>
<td>playbooks</td>
</tr>
<tr>
<td>Programs</td>
<td>programs2</td>
</tr>
<tr>
<td>Publication lists</td>
<td>publication</td>
</tr>
<tr>
<td>Query Activity</td>
<td>queryactivity</td>
</tr>
<tr>
<td>Salesforce data extension</td>
<td>salesforcedataextension</td>
</tr>
<tr>
<td>Salesforce sends</td>
<td>salesforcesends</td>
</tr>
<tr>
<td>Salesforce sends v5</td>
<td>salesforcesendsv5</td>
</tr>
<tr>
<td>Shared content</td>
<td>shared_content</td>
</tr>
<tr>
<td>Shared contextual suppression list</td>
<td>shared_contextual_suppression_list</td>
</tr>
<tr>
<td>Shared data</td>
<td>shared_data</td>
</tr>
<tr>
<td>Shared data extensions</td>
<td>shared_dataextension</td>
</tr>
<tr>
<td>Shared email messages</td>
<td>shared_email</td>
</tr>
<tr>
<td>Shared items</td>
<td>shared_item</td>
</tr>
<tr>
<td>Shared portfolios</td>
<td>shared_portfolio</td>
</tr>
<tr>
<td>Shared publication lists</td>
<td>shared_publication</td>
</tr>
<tr>
<td>Shared Salesforce data extension</td>
<td>shared_salesforcedataextension</td>
</tr>
<tr>
<td>Shared suppression lists</td>
<td>shared_suppression_list</td>
</tr>
<tr>
<td>Shared surveys</td>
<td>shared_survey</td>
</tr>
<tr>
<td>Shared templates</td>
<td>shared_template</td>
</tr>
<tr>
<td>SSJS Activity</td>
<td>ssjsactivity</td>
</tr>
<tr>
<td>Suppression Lists</td>
<td>suppression_list</td>
</tr>
<tr>
<td>my surveys</td>
<td>survey</td>
</tr>
<tr>
<td>Synchronized Data Extension</td>
<td>synchronizeddataextension</td>
</tr>
<tr>
<td>my templates</td>
<td>template</td>
</tr>
<tr>
<td>Triggered sends</td>
<td>triggered_send</td>
</tr>
<tr>
<td>Triggered sends Journey Builder</td>
<td>triggered_send_journeybuilder</td>
</tr>
<tr>
<td>User-initiated sends</td>
<td>userinitiatedsends</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Creating, Retrieving, Updating, and Deleting Folders](creating_retrieving_updating_and_deleting_folders.htm)
