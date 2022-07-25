---
title: 200-299 Asynchronous Operation
---
<table class="table table-hover">
<thead align="left">
<tr>
<th>Error</th>
<th>Message</th>
<th>Resolution</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>CallsInConversation don't match previous value in the Conversation. Conversation has been invalidated</td>
<td><ul>
<li>All conversation parts of a conversation must specify the same value for CallsInConversation. The error is returned when one or more conversation part has a CallsInConversation value that does not match the first conversation part CallsInConversation value.</li>
<li>Set all Options.CallsInConversation to the same value equal to the total number of conversation parts for the conversation.</li>
</ul></td>
</tr>
<tr>
<td>201</td>
<td>Async API Collection Total Mismatch</td>
<td></td>
</tr>
<tr>
<td>202</td>
<td>Missing Required Conversation Property SequenceCode. ConversationID, SequenceCode, and CallsInConversation are required for Conversations Requests</td>
<td><ul>
<li>SequenceCode has not been specified in the Options object for the Request. SequenceCode is a required property for conversation requests that specify a CallsInConversation, ConversationID, and RequestType == Asynchronous. SequenceCode is not required if the CallsInConversation is not specified. SequenceCode and CallsInConversation default to 1 when not provided and the request is interpreted as a single-part conversation. For multi-part Conversations, SequenceCode is required and must be a sequential whole number starting with 1.</li>
<li>If the request is intended to be asynchronous, then set the SequenceCode value to an integer greater than 0.</li>
<li>If the request is not intended to be asynchronous, then check that none of the asynchronous conditions below are true: <ul><li>Options.RequestType == Asynchronous</li><li>Options.ConversationID is specified</li><li>Options.SequenceCode is specified</li><li>Options.CallsInConversation is specified</li><li>hese conditions indicate that the call is intended to be asynchronous. Don't specify any of these properties for synchronous calls.</li></ul></li>
</ul></td>
</tr>
<tr>
<td>203</td>
<td>Async API Timeout</td>
<td>The status of the conversation context timed out. Ensure you use a current and correct conversation in your calls.</td>
</tr>
<tr>
<td>204</td>
<td>Async API Error</td>
<td>The object being created, updated, or deleted failed validation. Ensure you use a valid object in your code.</td>
</tr>
<tr>
<td>205</td>
<td>SequenceCode Out Of Bounds. Valid SequenceCode range is 1 to the value of CallsInConversation</td>
<td><ul>
<li>The SequenceCode denotes the sequential order to process the conversation parts. The application returns this error when the SequenceCode value is greater than the CallsInConversation value.</li>
<li>Set SequenceCode to an integer greater than zero and less than CallsInConversation.</li>
</ul></td>
</tr>
<tr>
<td>206</td>
<td>CallsInConversation Out Of Bounds. CallsInConversation is expected to be a positive number</td>
<td>Set Options.CallsInConversation to an integer greater than zero.</td>
</tr>
<tr>
<td>207</td>
<td>Missing Required Conversation Property ConversationID. ConversationID, SequenceCode, and CallsInConversation are required for Conversations Requests</td>
<td><ul>
<li>ConversationID has not been specified in the Options object for the request or the value is null or string.Empty.</li>
<li>If the request is intended to be asynchronous, that request requires a unique ConversationID per conversation. Set Options.ConversationID to a string value other than null or string.Empty.</li>
<li>If the request is not intended to be asynchronous, then check that none of the asynchronous conditions below are true:<ul><li>Options.RequestType == Asynchronous</li><li>Options.ConversationID is specified</li><li>Options.SequenceCode is specified</li><li>Options.CallsInConversation is specified</li><li>These conditions indicate that the call is intended to be asynchronous. Don't specify any of these properties for synchronous calls.</li></ul></li>
</ul></td>
</tr>
<tr>
<td>208</td>
<td>Missing Required Conversation Property CallsInConversation. ConversationID, SequenceCode, and CallsInConversation are required for Conversations Requests</td>
<td><ul>
<li>CallsInConversation has not been specified in the Options object for the request. CallsInConversation is a required property for conversation requests that specify a SequenceCode, ConversationID, and RequestType == Asynchronous. CallsInConversation is not required if the SequenceCode is not specified. SequenceCode and CallsInConversation default to 1 when not provided and the request is interpreted as a single-part conversation. For multi-part conversations, CallsInConversation is required, must be an integer greater than 0, and must equal the number of total conversation parts.</li>
<li>Set CallsInConversation to a whole number integer greater than 0 equal to the number of total conversation parts.</li>
<li>If the request is not intended to be asynchronous, then check that none of the asynchronous conditions below are true:<ul><li>Options.RequestType == Asynchronous</li><li>Options.ConversationID is specified</li><li>Options.SequenceCode is specified</li><li>Options.CallsInConversation is specified</li><li>These conditions indicate that the call is intended to be asynchronous. Don't specify any of these properties for synchronous calls.</li></ul></li>
</ul>
</td>
</tr>
<tr>
<td>209</td>
<td>Options.RequestType is required to be set to RequestType.Asynchronous</td>
<td><ul>
<li>Set Options.RequestType to RequestType.Asynchronous.</li>
<li>If the request is not intended to be asynchronous, then check that none of the asynchronous conditions below are true:<ul><li>Options.RequestType == Asynchronous</li><li>Options.ConversationID is specified</li><li>Options.SequenceCode is specified</li><li>Options.CallsInConversation is specified</li><li>These conditions indicate that the call is intended to be asynchronous. Don't specify any of these properties for synchronous calls.</li></ul></li>
</ul></td>
</tr>
<tr>
<td>211</td>
<td>Invalid ConversationID. ConversationID has already been used</td>
<td><ul>
<li>ConversationIDs are unique per client and cannot be reused. This error is returned when a client attempts to reuse a ConversationID. This includes conversations that have timed out or have produced an error condition. If the conversation has multiple parts, then each part has to use the same ConversationID.</li>
<li>Set Options.ConversationID to a unique value for each set of conversations.</li>
</ul>
</td>
</tr>
<tr>
<td>212</td>
<td>Invalid Conversation</td>
<td><ul>
<li>This general error indicates an unspecified problem with a conversation. The conversation does not contain a Closed, Processing, Error, Complete, or Timeout status.</li>
<li>Contact the Global Support team.</li>
</ul>
</td>
</tr>
<tr>
<td>213</td>
<td>Conversation is in an error state and is no longer able to accept conversation parts</td>
<td><ul>
<li>When a conversation is in an error state, any conversation parts for a given ConversationID return this message. The close conversation may not provide a valid conversation ID or may encounter an SQL error.</li>
<li>Review previous responses, locate the initial error, and fix. Resubmit the entire conversation with a new ConversationID.</li>
</ul>
</td>
</tr>
<tr>
<td>214</td>
<td>SequenceCode already used for Conversation. Conversation has been invalidated</td>
<td><ul>
<li>SequenceCodes within a conversation are unique. Once a conversation part has been accepted with a particular SequenceCode, that value cannot be repeated in the conversation. This is considered a fatal error that results in the conversation being in an error state.</li>
<li>Set Options.SequenceCodes in all conversation parts to sequential values starting with 1 and ending with the same value that is set in Options.CallsInConversation. Resubmit the entire conversation with a new ConversationID.</li>
</ul>
</td>
</tr>
<tr>
<td>215</td>
<td>Conversation is closed and cannot accept more parts</td>
<td><ul>
<li>Conversations are closed and ready for processing once all parts have been received. Once a conversation is closed, no new parts are accepted.</li>
<li>This error is informational and no action is required unless you intended for the rejected part to be part of the closed conversation. In this case, the proper course of action depends on the circumstances surrounding the conversation.</li>
</ul>
</td>
</tr>
<tr>
<td>218</td>
<td>Too many objects</td>
<td>Use fewer than 32,767 API objects in your request.</td>
</tr>
<tr>
<td>226</td>
<td>A request may not have ScheduledTime greater than 30 days from now</td>
<td>Schedule your conversation and non-conversation messages 30 days or fewer in the future.</td>
</tr>
<tr>
<td>227</td>
<td>An unsecure response address specified in the 'SendResponseTo' parameter.</td>
<td>Use an HTTPS endpoint for HTTP callbacks. After the July 2020 release, new customers can’t send callbacks from the Async API to unsecured HTTP endpoints.</td>
</tr>
</tbody>
</table>
