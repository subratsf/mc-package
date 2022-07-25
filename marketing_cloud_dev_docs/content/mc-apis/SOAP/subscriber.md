---
title: Subscriber
---
The Subscriber object is a single instance of a person subscribed to receive email or SMS communication. When using the Describe method on a Subscriber object, the ExtendedProperties property contains the definitions for all of the data profile and preference attributes defined by a client.
* To update a Subscriber with a SubscriberType of 1 or 2 and a SFIntegrationVersion less than 2, you need the Email | Integrations | Salesforce CRM | Resubscribe permission.
* To update a Subscriber with a SubscriberType of 4, 5, or 6 and the MSCRMIntegration feature enabled, you need the Email | Integrations | Microsoft CRM | Resubscribe permission.

##Required Attributes
* All Subscriber objects require at minimum a value for EmailAddress (and SubscriberKey, if that feature is enabled for your account) for Create calls involving email messages.
* For SMS subscribers, you must include a valid value for SubscriberKey.
* For Update and Delete calls, you must identify the subscriber via a valid EmailAddress, SubscriberKey, or ID.
* In addition, include any attributes required by your account.
* All Subscriber objects in Enterprise accounts must contain a value for a valid On-Your-Behalf account in the ChannelMemberID property.
* Review your error messages for more required attributes if necessary.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Addresses</td>
<td>SubscriberAddress[]</td>
<td>Indicates addresses belonging to a subscriber, used to create, retrieve, update or delete an email or SMS Address for a given subscriber.</td>
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
<td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td>
</tr>
<tr>
<td>EmailAddress</td>
<td>xsd:string</td>
<td>Contains the email address for a subscriber. Indicates the data extension field contains email address data.</td>
</tr>
<tr>
<td>EmailTypePreference</td>
<td>EmailType</td>
<td>The format to use when sending an email to a subscriber. Valid values include:
<ul>
<li>HTML</li>
<li>Text</li>
</ul></td>
</tr>
<tr>
<td>GlobalUnsubscribeCategory</td>
<td>GlobalUnsubscribeCategory</td>
<td>Indicates how the application handles a globally unsubscribed subscriber.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>Lists</td>
<td>SubscriberList[]</td>
<td>Defines lists a subscriber resides on.</td>
</tr>
<tr>
<td>Locale</td>
<td>Locale</td>
<td>Contains the locale information for an Account. If no location is set, Locale defaults to en-US.</td>
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
<td>Indicates primary SMS address for a subscriber. Used to create and update SMS Address for a given subscriber.</td>
</tr>
<tr>
<td>PrimarySMSPublicationStatus</td>
<td>SubscriberAddressStatus</td>
<td>Indicates the subscriber's modality status.</td>
</tr>
<tr>
<td>Status</td>
<td>SubscriberStatus</td>
<td>Defines status of object. Status of an address.</td>
</tr>
<tr>
<td>SubscriberKey</td>
<td>xsd:string</td>
<td>Identification of a specific subscriber.</td>
</tr>
<tr>
<td>SubscriberTypeDefinition</td>
<td>SubscriberTypeDefinition</td>
<td>Specifies if a subscriber resides in an integration, such as Salesforce or Microsoft Dynamics CRM</td>
</tr>
<tr>
<td>UnsubscribedDate</td>
<td>xsd:dateTime</td>
<td>Represents date subscriber unsubscribed from a list.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Add Subscribers to a List](adding_subscribers_to_a_list.htm)
* [Add Subscribers to a Lock and Publish Account](adding_subscribers_to_a_lock_and_publish_account.htm)
* [Add Subscribers to an On-Your-Behalf Account](adding_subscribers_to_an_on_your_behalf_account.htm)
* [Create a Subscriber](creating_a_subscriber.htm)
* [Describe a Subscriber](describing_a_subscriber.htm)
* [Manage Enterprise 2.0 Accounts](managing_enterprise_20_accounts_with_the_web_services_api.htm)
* [Manage Subscribers On Lists](managing_subscribers_on_lists.htm)
* [Retrieve a Subscriber](retrieve_a_subscriber_via_the_web_service_api.htm)
