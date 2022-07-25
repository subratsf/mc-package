---
title: AutomationTaskInstance
---
The AutomationTaskInstance object defines a specific instance of a task associated with an automation in Automation Studio for an account.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Activities</td>
<td>AutomationActivity[]</td>
<td>Identifies the activities associated with task</td>
</tr>
<tr>
<td>ActivityInstances</td>
<td>AutomationActivityInstance[]</td>
<td>Identifies specific instances of activies associated with task</td>
</tr>
<tr>
<td>Automation</td>
<td>Automation</td>
<td>Identifies automation associated with task</td>
</tr>
<tr>
<td>AutomationInstance</td>
<td>AutomationInstance</td>
<td>Identifies the specific instance of an automation associated with task</td>
</tr>
<tr>
<td>AutomationTaskType</td>
<td>xsd:string</td>
<td>Identifies type of activity associated with task</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Defines which account owns the task</td>
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
<td>Read-only legacy identifier for an object. Not supported on all objects.</td>
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
<td>Sequence</td>
<td>xsd:int</td>
<td>Indicates sequence number associated with instance</td>
</tr>
<tr>
<td>StepDefinition</td>
<td>AutomationTask</td>
<td>Indicates step definition within automation task associated with instance</td>
</tr>
</tbody>
</table>
