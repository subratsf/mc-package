---
title: CreateResult
---
<p>Contains results of each object in a Create request. This array of objects holds a list of return values. The objects are returned in the order acted upon: first in, first out. This array contains one CreateResult object per input APIObject.</p> 

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
<td>Unique ID of initial async API call.</td>
</tr>
<tr>
<td>CreateResults</td>
<td>CreateResult[]</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>ErrorCode</td>
<td>xsd:int</td>
<td>Identifies the error of an API request.</td>
</tr>
<tr>
<td>NewID</td>
<td>xsd:int</td>
<td>System identifier for new object.</td>
</tr>
<tr>
<td>NewObjectID</td>
<td>xsd:string</td>
<td>System identifier for new object.</td>
</tr>
<tr>
<td>Object</td>
<td>APIObject</td>
<td>Specifies definition of object.</td>
</tr>
<tr>
<td>OrdinalID</td>
<td>xsd:int</td>
<td>Defines position of object within an array of information.</td>
</tr>
<tr>
<td>OverallStatusCode</td>
<td>xsd:string</td>
<td>Represents overall status of conversation via async API.</td>
</tr>
<tr>
<td>ParentPropertyName</td>
<td>xsd:string</td>
<td>Deprecated</td>
</tr>
<tr>
<td>PartnerKey</td>
<td>xsd:string</td>
<td>Unique identifier provided by partner for an object. This property is accessible only via API.</td>
</tr>
<tr>
<td>RequestID</td>
<td>xsd:string</td>
<td>Unique ID of initial async API call.</td>
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
<td>Status of async API request.StatusMessage</td>
</tr>
<tr>
<td>StatusMessage</td>
<td>xsd:string</td>
<td>Describes the status of an API call.</td>
</tr>
</tbody>
</table>
