---
title: RespondWhen
---
<p>Sends response via email or HTTP post for asynchronous call. Can send to separate URLs for different actions as necessary.</p>

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
<td>Always</td>
<td>RespondWhen</td>
<td>Indicates a response is always sent.</td>
</tr>
<tr>
<td>Never</td>
<td>RespondWhen</td>
<td>Specifies that a response is never sent for an asynchronous process.</td>
</tr>
<tr>
<td>OnCallComplete</td>
<td>RespondWhen</td>
<td>Specifies that a response is sent when an asynchronous call is complete.</td>
</tr>
<tr>
<td>OnConversationComplete</td>
<td>RespondWhen</td>
<td>Specifies that a response is sent when an asynchronous conversation is complete.</td>
</tr>
<tr>
<td>OnConversationError</td>
<td>RespondWhen</td>
<td>Specifies that a response is sent when an asynchronous conversation returns an error.</td>
</tr>
<tr>
<td>OnError</td>
<td>RespondWhen</td>
<td>Specifies that a response is sent when an asynchronous process returns an error.</td>
</tr>
</tbody>
</table>
