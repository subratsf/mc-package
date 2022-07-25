---
title: Subscriber
---
<p>A person subscribed to receive email or SMS communication. Subscriber represents a single instance of a subscriber.</p>
 
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
<td>Addresses</td>
<td>SubscriberAddress[]</td>
<td>Indicates addresses belonging to a subscriber.</td>
</tr>
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
<td>EmailAddress</td>
<td>xsd:string</td>
<td>Contains the email address for a subscriber.</td>
</tr>
<tr>
<td>EmailTypePreference</td>
<td>EmailType</td>
<td>Indicates the email format.</td>
</tr>
<tr>
<td>GlobalUnsubscribeCategory</td>
<td>GlobalUnsubscribeCategory</td>
<td>Indicates how the application handles a globally unsubscribed subscriber.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only legacy identifier for an object. Not supported on all objects.</td>
</tr>
<tr>
<td>Lists</td>
<td>SubscriberList[]</td>
<td>Defines lists a subscriber resides on.</td>
</tr>
<tr>
<td>Locale</td>
<td>Locale</td>
<td>Contains the locale information for an Account.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Last time object information was modified.</td>
</tr>
<tr>
<td>ObjectID</td>
<td>xsd:string</td>
<td>System-controlled, read-only text string identifier for object.</td>
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
<td>PartnerType</td>
<td>xsd:string</td>
<td>Defines partner associated with a subscriber.</td>
</tr>
<tr>
<td>PrimaryEmailAddress</td>
<td>EmailAddress</td>
<td>Indicates primary email address for a subscriber.</td>
</tr>
<tr>
<td>PrimarySMSAddress</td>
<td>SMSAddress</td>
<td>Indicates primary SMS address for a subscriber.</td>
</tr>
<tr>
<td>PrimarySMSPublicationStatus</td>
<td>SubscriberAddressStatus</td>
<td>Indicates the subscriber's modality status.</td>
</tr>
<tr>
<td>Status</td>
<td>SubscriberStatus</td>
<td>Defines status of object.</td>
</tr>
<tr>
<td>SubscriberKey</td>
<td>xsd:string</td>
<td>Identification of a specific subscriber.</td>
</tr>
<tr>
<td>SubscriberTypeDefinition</td>
<td>SubscriberTypeDefinition</td>
<td>Specifies if a subscriber resides in an integration, such as Salesforce or Microsoft Dynamics CRM.</td>
</tr>
<tr>
<td>UnsubscribedDate</td>
<td>xsd:dateTime</td>
<td>Represents date subscriber unsubscribed from a list.</td>
</tr>
</tbody>
</table>