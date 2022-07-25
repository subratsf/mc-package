---
title: When to Use Asynchronous Processing
---
Asynchronous processing is not necessary for all your API calls. Analyze these scenarios to identify which API calls are best suited for asynchronous processing.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Async Scenario</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>High Availability</td>
<td>If Marketing Cloud is unavailable or undergoing maintenance, your API calls are accepted and queued.</td>
</tr>
<tr>
<td>Instant Response</td>
<td>The asynchronous server responds instantly to let your system know that the call has been queued, even if the call is scheduled for future processing.
</td>
</tr>
<tr>
<td>Sequential Processing</td>
<td>To process multiple API calls in sequence, use the conversation concept. Multiple calls sent synchronously could process out of order, but the sequence numbers you assign to the calls in the conversation ensure the correct processing order.
</td>
</tr>
<tr>
<td>Avoid Duplication</td>
<td>Often, it is important not to repeat an API call, even if the call is sent more than once. For example, you don't want to send the same email message multiple times. The conversation concept prevents duplicate processing of API calls because each ConversationID must be unique and cannot be processed more than once.
</td>
</tr>
<tr>
<td>Scheduled API Calls</td>
<td>To schedule a date and time to process the call, use the Options parameter.
</td>
</tr>
<tr>
<td>Multiple Notification Mechanisms</td>
<td>Choose whether to receive notifications regarding your API calls via email, HTTP POST, or Retrieve.
</td>
</tr>
<tr>
<td>Prioritize Sends</td>
<td>Choose the order and frequency in which items in the asynchronous queue are processed.
</td>
</tr>
</tbody>
</table>

##Related Items
* [Triggered Send](submitting_a_triggered_send_definition_using_the_asynchronous_api.htm)
* [Data Extensions Async API](data-extensions-api.htm)
