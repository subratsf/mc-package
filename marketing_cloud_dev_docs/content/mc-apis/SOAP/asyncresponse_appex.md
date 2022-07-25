---
title: AsyncResponse
---
<p>Used to modify return of data sent in response to asynchronous API request.</p>
<p>Available for 30 days after initial response.</p> 
<p>The valid values for the ResponseType property include the following:</p> <ul> <li>None</li> <li>email</li> <li>FTP</li> <li>HTTPPost</li> </ul>
 
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
<td>IncludeObjects</td>
<td>xsd:boolean</td>
<td>Indicates whether the APIObject is included in the response.</td>
</tr>
<tr>
<td>IncludeResults</td>
<td>xsd:boolean</td>
<td>Controls whether the results are returned in the response.</td>
</tr>
<tr>
<td>OnlyIncludeBase</td>
<td>xsd:boolean</td>
<td>Reduce object to base APIObject information.</td>
</tr>
<tr>
<td>RespondWhen</td>
<td></td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>ResponseAddress</td>
<td>xsd:string</td>
<td>Email address or public URL to receive POST response to asynchronous request.</td>
</tr>
<tr>
<td>ResponseType</td>
<td>AsyncResponseType</td>
<td>Specifies type of response associated with an asynchronous operation.</td>
</tr>
</tbody>
</table>

## Related Items
[Asynchronous Processing](asynchronous_processing.htm)