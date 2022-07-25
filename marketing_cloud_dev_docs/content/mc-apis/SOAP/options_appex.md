---
title: Options
---
The Options object is the base object for all options on methods, such as Create. Specify ClientID on this option during a call to avoid having to specify ClientID on all objects within the call.

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
</tr>
</tbody>
</table>
