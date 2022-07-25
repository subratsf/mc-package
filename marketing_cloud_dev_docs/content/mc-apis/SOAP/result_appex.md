---
title: Result
---
<p>Base class for all result objects. Status Codes:</p> <ul> <li>OK</li> <li>Has Error</li> <li>Error</li> </ul>
 
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
<td>ConversationID</td>
<td>xsd:string</td>
<td>Unique ID of initial asynchronous API call.</td>
</tr>
<tr>
<td>ErrorCode</td>
<td>xsd:int</td>
<td>Identifies the error of an API request.</td>
</tr>
<tr>
<td>OrdinalID</td>
<td>xsd:int</td>
<td>Defines position of object within an array of information.</td>
</tr>
<tr>
<td>OverallStatusCode</td>
<td>xsd:string</td>
<td>Represents overall status of conversation via asynchronous API.</td>
</tr>
<tr>
<td>RequestID</td>
<td>xsd:string</td>
<td>Unique ID of initial asynchronous API call.</td>
</tr>
<tr>
<td>RequestType</td>
<td>RequestType</td>
<td>Defines request as synchronous or asynchronous API.</td>
</tr>
<tr>
<td>ResultDetailXML</td>
<td>xsd:string</td>
<td>Contains details of operation result in XML format.</td>
</tr>
<tr>
<td>ResultType</td>
<td>xsd:string</td>
<td>Defines result as coming from synchronous or asynchronous API.</td>
</tr>
<tr>
<td>StatusCode</td>
<td>xsd:string</td>
<td>Status of asynchronous API request.</td>
</tr>
<tr>
<td>StatusMessage</td>
<td>xsd:string</td>
<td>Describes the status of an API call.</td>
</tr>
</tbody>
</table>