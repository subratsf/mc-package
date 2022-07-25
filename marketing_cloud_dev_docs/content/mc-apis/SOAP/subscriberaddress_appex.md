---
title: SubscriberAddress
---
<p>An address used to communicate with a person. The address is the base class from which other address classes, such as SMSAddress and EmailAddress, derive.</p>
 
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
<td>Address</td>
<td>xsd:string</td>
<td>Address used to communicate with a subscriber.</td>
</tr>
<tr>
<td>AddressType</td>
<td>xsd:string</td>
<td>The type of address.</td>
</tr>
<tr>
<td>Statuses</td>
<td>AddressStatus[]</td>
<td>Array of status values for an address.</td>
</tr>
</tbody>
</table>

##Related Items
* [SMSAddress](smsaddress.htm)
* [EmailAddress](emailaddress.htm)