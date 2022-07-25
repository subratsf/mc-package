---
title: MobilePushSendMessageActivity
---
The MobilePushSendMessageActivity object defines an activity used to send a message in MobilePush.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Defines which account owns the activity</td>
</tr>
<tr>
<td>CorrelationID</td>
<td>xsd:string</td>
<td>Identifies calls involved in a specific asynchronous process</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>xsd:dateTime</td>
<td>Read-only date and time of the object's creation</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>xsd:string</td>
<td>User-supplied unique identifier for an object within an object type</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only legacy identifier for an object. Not supported on all objects</td>
</tr>
<tr>
<td>InteractionObjectID</td>
<td>xsd:string</td>
<td>Returns associated ID for activities within the asynchronous process of the overall conversation or program</td>
</tr>
<tr>
<td>Keyword</td>
<td>xsd:string</td>
<td>Keyword associated with activity</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable</td>
<td>Indicates the last time object information was modified</td>
</tr>
<tr>
<td>Name</td>
<td>xsd:string</td>
<td>Name of the object or property</td>
</tr>
<tr>
<td>ObjectID</td>
<td>xsd:string</td>
<td>System-controlled, read-only text string identifier for object</td>
</tr>
<tr>
<td>ObjectState</td>
<td>xsd:string</td>
<td>Reserved for future use</td>
</tr>
<tr>
<td>Owner</td>
<td>Owner</td>
<td>Describes account ownership of subscriber in an on-your-behalf account</td>
</tr>
<tr>
<td>PartnerKey</td>
<td>xsd:string</td>
<td>Unique identifier provided by partner for an object. This property is accessible only via API.</td>
</tr>
<tr>
<td>PartnerProperties</td>
<td>APIProperty[]</td>
<td>A collection of metadata supplied by client and stored by system. This property is accessible only via API.</td>
</tr>
</tbody>
</table>
