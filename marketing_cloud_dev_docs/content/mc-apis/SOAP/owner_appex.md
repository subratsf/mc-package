---
title: Owner
---
<p>Specifies owner of subscriber for triggered sends. Use the Client property to specify the On-Your-Behalf AccountID as the owner of the triggered send. Otherwise, use the FromAddress and FromName to specify the owner.</p>
 
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
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>FromAddress</td>
<td>xsd:string</td>
<td>Indicates From address associated with a object.</td>
</tr>
<tr>
<td>FromName</td>
<td>xsd:string</td>
<td>Specifies the default email message From Name.</td>
</tr>
</tbody>
</table>
