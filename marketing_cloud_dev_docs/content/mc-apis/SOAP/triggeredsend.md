---
title: TriggeredSend
---
The TriggeredSend object represents a specific instance of a triggered email send.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Attributes</td>
<td>Attribute[]</td>
<td>Specifies attributes associated with an object.</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>CorrelationID</td>
<td>xsd:string</td>
<td>This property specifies a identifier for all objects and is returned in the async response so it can be used for tracking purposes. This property has no uniqueness constraints. (optional)</td>
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
<td>Subscribers</td>
<td>Subscriber[]</td>
<td>Indicates subscribers associated with an object.</td>
</tr>
<tr>
<td>TriggeredSendDefinition</td>
<td>TriggeredSendDefinition</td>
<td>Defines associated triggered send definition for triggered send.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Create a Triggered Send for a Lock and Publish Account](creating_a_triggered_send_for_a_lock_and_publish_account_via_the_web_service_api.htm)
* [Create a Triggered Send for an On-Your-Behalf Account](creating_a_triggered_send_for_an_on_your_behalf_account_via_the_web_service_api.htm)
* [Create a Triggered Send Using the Async API](creating_a_triggered_send_using_the_async_api.htm)
