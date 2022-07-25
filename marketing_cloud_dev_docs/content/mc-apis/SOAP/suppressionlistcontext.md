---
title: SuppressionListContext
---
The SuppressionListContext object defines a context that a SuppressionListDefinition can be associated with.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AppliesToAllSends</td>
<td>xsd:boolean</td>
<td>Indicates whether this context applies to all transactional and marketing sends.</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>Context</td>
<td>SuppressionListContextEnum</td>
<td>The context with which a SuppressionListDefinition is associated.</td>
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
<td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td>
</tr>
<tr>
<td>Definition</td>
<td>SuppressionListDefinition</td>
<td>The suppression list with which a SuppressionListContext is associated.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified.</td>
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
<td>Send</td>
<td>Send</td>
<td>Indicates send associated with the subscriber send result.</td>
</tr>
<tr>
<td>SendClassification</td>
<td>SendClassification</td>
<td>Indicates the send classification to use as part of a send definition.</td>
</tr>
<tr>
<td>SendClassificationType</td>
<td>SendClassificationTypeEnum</td>
<td>Defines the type for the applicable send classification. Valid values include Operational and Marketing.</td>
</tr>
<tr>
<td>SenderProfile</td>
<td>tns:SenderProfile</td>
<td>Indicates sender profile associated with context.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
