---
title: SendSummary
---
The SendSummary object is a retrieve-only object that contains summary information about a specific send event.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AccountEmail</td>
<td>xsd:string</td>
<td>Specifies email address attached to account</td>
</tr>
<tr>
<td>AccountID</td>
<td>xsd:int</td>
<td>Identifier for account</td>
</tr>
<tr>
<td>AccountName</td>
<td>xsd:string</td>
<td>Name of account</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>CorrelationID</td>
<td>xsd:string</td>
<td>Identifies correlation of objects across several requests.</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>xsd:dateTime</td>
<td>Read-only date and time of the object's creation.</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>xsd:string</td>
<td>User-supplied unique identifier for an object within an object type.</td>
</tr>
<tr>
<td>DeliveredTime</td>
<td>xsd:string</td>
<td>Indicates the time a message was delivered.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only legacy identifier for an object. Not supported on all objects.</td>
</tr>
<tr>
<td>IsTestAccount</td>
<td>xsd:boolean</td>
<td>Specifies whether an account is a "Test" account</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Last time object information was modified.</td>
</tr>
<tr>
<td>NonTransactional</td>
<td>xsd:int</td>
<td>Specifies number of marketing (non-transactional) messages included as part of a send.</td>
</tr>
<tr>
<td>ObjectID</td>
<td>xsd:string</td>
<td>System-controlled, read-only text string identifier for object.</td>
</tr>
<tr>
<td>ObjectState</td>
<td>xsd:string</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>Owner</td>
<td>Owner</td>
<td>Describes account ownership of subscriber in an on-your-behalf account.</td>
</tr>
<tr>
<td>PartnerKey</td>
<td>xsd:string</td>
<td>Unique identifier provided by partner for an object. This property is accessible only via API.</td>
</tr>
<tr>
<td>PartnerProperties</td>
<td>APIProperty[]</td>
<td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td>
</tr>
<tr>
<td>SendID</td>
<td>xsd:int</td>
<td>Contains identifier for a specific send.</td>
</tr>
<tr>
<td>TotalSent</td>
<td>xsd:int</td>
<td>Indicates total number of messages sent as part of a send.</td>
</tr>
<tr>
<td>Transactional</td>
<td>xsd:int</td>
<td>Indicates number of transactional messages included in a send.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
