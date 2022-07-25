---
title: ListTypeEnum
---
<p>Specifies how a list stores subscriber information.</p>

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
<td>GlobalUnsubscribe</td>
<td>ListTypeEnum</td>
<td>This list stores email addresses that do not receive messages as part of a send.</td>
</tr>
<tr>
<td>Master</td>
<td>ListTypeEnum</td>
<td>Indicates the specified list is a master type.</td>
</tr>
<tr>
<td>Private</td>
<td>ListTypeEnum</td>
<td>Subscriber information is stored by SubscriberID and email address. This list is not displayed in a subscription center.</td>
</tr>
<tr>
<td>Public</td>
<td>ListTypeEnum</td>
<td>Subscriber information is stored by SubscriberID and email address. This list is displayed in a subscription center.</td>
</tr>
<tr>
<td>SalesForce</td>
<td>ListTypeEnum</td>
<td>Subscriber information is stored by SubscriberID, SubscriberKey, and email address in a list not made available in Marketing Cloud. This list also includes a Salesforce Object ID to link it to information in a Salesforce instance.</td>
</tr>
</tbody>
</table>
