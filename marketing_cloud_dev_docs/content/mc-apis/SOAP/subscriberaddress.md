---
title: SubscriberAddress
---
The SubscriberAddress object is an address used to communicate with a person. The address is the base class from which other address classes (such as SMSAddress and EmailAddress) derive.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Address</td>
<td>xsd:string</td>
<td>The physical mailing address required at the bottom of all email messages contains the information described by this property (no P.O. Boxes). The address used to communicate with a Person.</td>
</tr>
<tr>
<td>AddressType</td>
<td>xsd:string</td>
<td>Indicates what type of address this object represents</td>
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
