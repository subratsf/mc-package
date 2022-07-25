---
title: UpdateOptions
---
The UpdateOptions object defines the ability to save, update, or delete data extension fields using a container. If the Container property contains an instance of DataExtensionField, and the Action is <strong>DELETE</strong>, then the call drops any child fields. Otherwise, the call adds or updates all child fields depending upon whether they exist.

###Properties
<table class="table table-hover">
<thead align="left">
<tr>
<td>Name</td>
<td>Data Type</td>
<td>Description</td>
</tr>
</thead>
<tbody>
<tr>
<td>Action</td>
<td>xsd:string</td>
<td>Defines the action to take for the specified object. Valid values include:<ul><li>CREATE</li><li>DELETE</li><li>UPDATE</li></ul></td>
</tr>
<tr>
<td>CallsInConversation</td>
<td>xsd:int</td>
<td>Number of calls within an async API conversation.</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>Container</td>
<td>ContainerID</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>ConversationID</td>
<td>xsd:string</td>
<td>Unique ID of initial async API call.</td>
</tr>
<tr>
<td>Priority</td>
<td>xsd:byte</td>
<td>Deprecated.</td>
</tr>
<tr>
<td>RequestType</td>
<td>RequestType</td>
<td>Defines request as synchronous or asynchronous API.</td>
</tr>
<tr>
<td>SaveOptions</td>
<td>SaveOption[]</td>
<td>Allows upsert on selected objects.</td>
</tr>
<tr>
<td>ScheduledTime</td>
<td>xsd:dateTime</td>
<td>Keeps requests in asynchronous queue until time specified in the call.</td>
</tr>
<tr>
<td>SendResponseTo</td>
<td>AsyncResponse[]</td>
<td>Defines how responses are returned and under what conditions.</td>
</tr>
<tr>
<td>SequenceCode</td>
<td>xsd:int</td>
<td>Specifies the processing sequence of a multi-step conversation.</td>
</tr
</tbody>
</table>

###Sample Code
```
UpdateOptions uo = new UpdateOptions() ;
        uo.Container = new ContainerID() ;
        uo.Container.APIObject = new DataExtensionField() AS APIObject ;
        uo.Action = "DELETE" ;  //  case insensitive
```
