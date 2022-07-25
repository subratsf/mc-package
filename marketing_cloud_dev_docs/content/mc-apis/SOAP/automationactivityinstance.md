---
title: AutomationActivityInstance
---
The AutomationActivityInstance object defines the specific instance of an activity using an automation in Automation Studio for an account.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>ActivityDefinition</td>
<td>AutomationActivity</td>
<td>Identifies the activity definitionassociated with activity</td>
</tr>
<tr>
<td>ActivityID</td>
<td>xsd:string</td>
<td>Identifies the activity associated with activity</td>
</tr>
<tr>
<td>ActivityObject</td>
<td>APIObject</td>
<td>Indicates activity associated with automation instance</td>
</tr>
<tr>
<td>Automation</td>
<td>Automation</td>
<td>Identifies automation associated with activity</td>
</tr>
<tr>
<td>AutomationID</td>
<td>xsd:string</td>
<td>Identifies the specific automation associated with activity. If you already use ProgramID, it is still supported for migrated accounts.</td>
</tr>
<tr>
<td>AutomationInstance</td>
<td>AutomationInstance</td>
<td>Identifies the specific instance of an automation associated with activity. If you already use ProgramID, it is still supported for migrated accounts.</td>
</tr>
<tr>
<td>AutomationTask</td>
<td>AutomationTask</td>
<td>Identifies task within automation</td>
</tr>
<tr>
<td>AutomationTaskInstance</td>
<td>AutomationTaskInstance</td>
<td>Identifies instance of automation task associated with activity</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Defines which account owns the automation</td>
</tr>
<tr>
<td>CompletedTime</td>
<td>xsd:string</td>
<td>Indicates time instance of activity completed</td>
</tr>
<tr>
<td>CorrelationID</td>
<td>xsd:string</td>
<td>Identifies calls involved in a specific asynchronous process</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>xsd:dateTime</td>
<td>Read-only date and time of the object's creation</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>xsd:string</td>
<td>User-supplied unique identifier for an object within an object type</td>
</tr>
<tr>
<td>Definition</td>
<td>APIObject</td>
<td>Indicates definition associated with automation instance</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only legacy identifier for an object. Not supported on all objects.</td>
</tr>
<tr>
<td>IsActive</td>
<td>xsd:boolean</td>
<td>Specifies whether the object is active</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable</td>
<td>Indicates the last time object information was modified</td>
</tr>
<tr>
<td>Name</td>
<td>xsd:string</td>
<td>Name of the object or property</td>
</tr>
<tr>
<td>ObjectID</td>
<td>xsd:string</td>
<td>System-controlled, read-only text string identifier for object</td>
</tr>
<tr>
<td>ObjectState</td>
<td>xsd:string</td>
<td>Reserved for future use</td>
</tr>
<tr>
<td>Owner</td>
<td>Owner</td>
<td>Describes account ownership of subscriber in an on-your-behalf account</td>
</tr>
<tr>
<td>PartnerKey</td>
<td>xsd:string</td>
<td>Unique identifier provided by partner for an object. This property is accessible only via API.</td>
</tr>
<tr>
<td>PartnerProperties</td>
<td>APIProperty[]</td>
<td>A collection of metadata supplied by client and stored by system. This property is accessible only via API.</td>
</tr>
<tr>
<td>ScheduledTime</td>
<td>xsd:dateTime</td>
<td>Indicates time scheduled for this instance of an activity</td>
</tr>
<tr>
<td>Sequence</td>
<td>xsd:int</td>
<td>Indicates sequence number for instance</td>
</tr>
<tr>
<td>SequenceID</td>
<td>xsd:int</td>
<td>Identifies sequence associated with instance</td>
</tr>
<tr>
<td>StartTime</td>
<td>xsd:dateTime</td>
<td>Indicates time this instance of an activity started</td>
</tr>
<tr>
<td>Status</td>
<td>xsd:int</td>
<td>Indicates status for this instance of an activity</td>
</tr>
<tr>
<td>StatusLastUpdate</td>
<td>xsd:dateTime</td>
<td>Indicates date and time status last updated</td>
</tr>
<tr>
<td>StatusMessage</td>
<td>xsd:string</td>
<td>Indicates message associated with status</td>
</tr>
</tbody>
</table>
