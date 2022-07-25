---
title: Anatomy of the Options Base Object
---
To make existing calls asynchronous, include the Options base object parameters that influence asynchronous processing.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Name</th>
<th>Required?</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>CallsInConversation</td>
<td>No</td>
<td>Specifies the number of calls in the conversation. This value must be the same for all calls within a specific conversation.</td>
</tr>
<tr>
<td>ConversationID</td>
<td>No</td>
<td>Specifies a unique string used to identify and coordinate conversations and result processing. If CallsInConversation or SequenceCode are included, this field is required.</td>
</tr>
<tr><td>CorrelationID</td>
<td>No</td>
<td>Specifies an identifier for all objects. This property is returned in the async response for tracking purposes. It has no uniqueness constraints.</td>
</tr>
<tr>
<td>QueuePriority</td>
<td>No</td>
<td>Specifies triggered send priority, determining the order and frequency that the items in the asynchronous queue are processed. Valid options include: High, Medium, Low.</td>
</tr>
<tr>
<td>RequestType</td>
<td>Yes</td>
<td>Defines the request as Asynchronous or Synchronous.</td>
</tr>
<tr>
<td>ScheduledTime</td>
<td>No</td>
<td>Keeps requests in asynchronous queue until time specified in the call. <div class="alert">To maintain compliance with data privacy regulations, avoid scheduling tasks in the future. Scheduling async tasks in the future can reintroduce deleted or restricted contacts into the system.</div></td>
</tr>
<tr>
<td>SendResponseTo</td>
<td>No</td>
<td>Array that defines how and when responses are returned.</td>
</tr>
<tr>
<td>SendResponseTo.ResponseType</td>
<td>Yes</td>
<td>Types of responses returned to the caller:<ul><li>None - No response is sent. Use Retrieve to get the response.</li><li>email - An email message that contains the response is sent.</li><li>FTP</li><li>HTTPPost - An HTTP POST request is made that contains the response. After the July 2020 release, new customers can’t send callbacks from the Async API to unsecured HTTP endpoints. Use an HTTPS endpoint for HTTP callbacks.</li></ul></td>
</tr>
<tr>
<td>SendResponseTo.ResponseAddress</td>
<td>No</td>
<td>The address to send the response to.<ul><li>If ResponseType is email, this value must be an email address.</li><li>If ResponseType is HTTPPost, this value must be the callback URL to POST to. After the July 2020 release, new customers can’t send callbacks from the Async API to unsecured HTTP endpoints. Use an HTTPS endpoint for HTTP callbacks.</li></ul></td>
</tr>
<tr>
<td>SendResponseTo.RespondWhen</td>
<td>Yes</td>
<td>When notifications are sent:<ul><li>Never</li><li>OnError - Sent only if an error occurs.</li><li>Always</li><li>OnConversationError - Sent if an error occurs within a conversation.</li><li>OnConversationComplete - Sent when all parts of the conversation have completed processing.</li><li>OnCallComplete - Sent when a call completes.</li></ul></td>
</tr>
<tr>
<td>SendResponseTo.IncludeResults</td>
<td>Yes</td>
<td>To control whether the XML serialized Result objects are returned, specify true or false. If ResponseType is email, this information arrives as an email attachment.</td>
</tr>
<tr>
<td>SendResponseTo.IncludeObjects</td>
<td>Yes</td>
<td>To control whether the Object property is populated in the result XML, specify true or false. If IncludeResults is false, this property is ignored.</td>
</tr>
<tr>
<td>SendResponseTo.OnlyIncludeBase</td>
<td>Yes</td>
<td>To control whether the Object property is populated with the entire object that was received or if only the APIObject properties are present, specify true or false. If IncludeObjects is false, this property is ignored.</td>
</tr>
<tr><td>SequenceCode</td>
<td>No</td>
<td>Specifies the processing sequence of a multi-step conversation. SequenceCode must start at 1 and continue in sequence. You can send the parts of the conversation in any order, but they process in SequenceCode order.
</td>
</tr>
</tbody>
</table>

##ConversationID Details
Conversations group API calls to be processed in sequence. To indicate the order within the conversation, provide a unique ConversationID value for each grouping of calls and a sequence number. Once a ConversationID is processed, you can’t use it again. A ConversationID must be unique, but it can match the ID of another data type in your account.
>Use the matching IDs to associate the ConversationID activity with other data in reports.

Calls within a conversation process serially. When one of the calls in the conversation returns an Error status, any calls following an error fail. If a conversation’s processing fails during one of the sequenced calls, identify the calls that did not complete and resubmit them with a new ConversationID.

Conversations begin processing after all parts of the conversation are received. If SequenceCode and CallInConversation are not sent, the application assumes that the conversation has only one part to process and begins processing immediately. If a conversation fails during processing, subsequent calls in the conversation are not processed.

When a conversation fails, record the ConversationID and the Sequence code. The exception logic of the SOAP client processes the error message and creates a new conversation with the remaining steps. As a result, a conversation may use a few ConversationIDs before it processes completely. For example, if your conversation consists of three Create calls that each have 10 Subscriber objects, and the first call fails while processing, you need to create a new conversation. The new conversation requires a different ConversationID that consists of the last two Create calls.

If more than five minutes elapse between sending parts, the conversation is placed into an error state and is not processed. Start a new conversation with a different ConversationID.

##CorrelationID Details
A CorrelationID identifies individual top-level objects in a call. Use the CorrelationID to provide an identifier to determine the results of an individual top-level object with a call. Each object in a call must have a unique CorrelationID. Different calls can reuse CorrelationID values.

For example, a Create call containing a List object to be processed asynchronously can identify that object in the results as having the CorrelationID of "X". Subsequent calls can also have an "X" CorrelationID.

ConversationID is not required to specify CorrelationID. If ConversationID is not specified for a call, the call uses RequestID to get the results.

The CorrelationID replaces the array index when passing multiple objects into a call for asynchronous processing. The CorrelationID allows reporting on individual top-level objects in a call.

CorrelationID is exposed via:
<ul><li>Retrieving ResultItems</li><li>Async Results Data Extract</li><li>Email response that includes results based on a setting in the call's Options parameter</li></ul>

##QueuePriority Details
When asynchronous triggered send processing is enabled, the system validates required fields and email addresses before queuing the request. This provides immediate feedback to callers of invalid requests. Options for QueuePriority are: <ul><li>High - Queued immediately. It may take up to 60 seconds to send the email, and that window stays open to allow for more triggered sends as necessary.</li><li>Medium - Queued every minute. It may take up to 90 seconds to send the email. This is the default value.</li><li>Low - Queued every 5 minutes. It may take up to 5 minutes to send the email.</li></ul>

##Related Items
* [Options Base Object](options.htm)
