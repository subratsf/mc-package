---
title: AutomationInstance
---
The AutomationInstance object defines an automation in Automation Studio for an account.

>The only supported operators for the AutomationInstance object are: IN, EQUALS. Complex filter is not supported.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AutomationID</td>
<td>xsd:string</td>
<td>Identifies automation associated with this instance. If you already use ProgramID, it is still supported for migrated accounts.</td>
</tr>
<tr>
<td>AutomationSource</td>
<td>AutomationSource</td>
<td>Identifies source of automation</td>
</tr>
<tr>
<td>AutomationTasks</td>
<td>AutomationTasks[]</td>
<td>Identifies tasks within automation</td>
</tr>
<tr>
<td>AutomationType</td>
<td>xsd:string</td>
<td>Identifies type of automation</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Defines which account owns the automation</td>
</tr>
<tr>
<td>CompletedTime</td>
<td>xsd:dateTime</td>
<td>Indicates when automation completed</td>
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
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only legacy identifier for an object. Not supported on all objects</td>
</tr>
<tr>
<td>InteractionObjectID</td>
<td>xsd:string</td>
<td>Returns associated ID for activities within the asynchronous process of the overall conversation or program</td>
</tr>
<tr>
<td>IsActive</td>
<td>xsd:boolean</td>
<td>Specifies whether the object is active</td>
</tr>
<tr>
<td>Keyword</td>
<td>xsd:string</td>
<td>Reserved for future use</td>
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
<td>Notifications</td>
<td>AutomationNotification[]</td>
<td>Indicates notifications to use when automation completes</td>
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
<td>Schedule</td>
<td>ScheduleDefinition</td>
<td>Indicates schedule for automation</td>
</tr>
<tr>
<td>ScheduledTime</td>
<td>xsd:dateTime</td>
<td>Keeps requests in asynchronous queue until time specified in call</td>
</tr>
<tr>
<td>StartTime</td>
<td>xsd:dateTime</td>
<td>Indicates time this instance of an automation started</td>
</tr>
<tr>
<td>Status</td>
<td>xsd:int</td>
<td>Indicates status of automation</td>
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
<tr>
<td>TaskInstances</td>
<td>AutomationTaskInstance[]</td>
<td>Indicates instances of tasks associated with this automation instance</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
