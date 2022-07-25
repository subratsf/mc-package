---
title: ClientID
---
The ClientID object contains the ID of the owner of a subaccount. Use this object to set imply ownership of an object to a subaccount. For example, the Send object contains a Client property that enables the email send to be attributed to subaccount. If no ClientID is specified, the email send is attributed to the main SOAP API account.

>Marketing Cloud maintains the PartnerClientKey property for legacy functionality and backwards compatibility. To avoid performance issues, we discourage the use of this property in new code or integrations. Replace this property with ClientID whenever possible.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>ClientID1</td>
<td>xsd:int</td>
<td>Specifies system account ID (deprecated)</td>
</tr>
<tr>
<td>CreatedBy</td>
<td>xsd:int</td>
<td>Returns user ID for user who created object</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>xsd:string</td>
<td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td>
</tr>
<tr>
<td>EnterpriseID</td>
<td>xsd:long</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>ModifiedBy</td>
<td>xsd:int</td>
<td>Returns user ID for user who modified object.</td>
</tr>
<tr>
<td>PartnerClientKey</td>
<td>xsd:string</td>
<td>User-defined partner key for an account.</td>
</tr>
<tr>
<td>PartnerUserKey</td>
<td>xsd:string</td>
<td>Specifies the partner key value of a user.</td>
</tr>
<tr>
<td>UserID</td>
<td>xsd:int</td>
<td>Indicates username for an account.</td>
</tr>
</tbody>
</table>
