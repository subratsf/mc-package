---
title: Send
---
The Send object sends email and retrieves aggregate data based on a JobID.
* To create a Send using a list, you need the Email | Subscribers | List | SendEmailToList permission.
* To create or update a Send where the list ID is the All Subs List ID, you need the Email | Subscribers | All Subscribers | Send and View permissions.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Additional</td>
<td>xsd:string</td>
<td>The ID for a send that customers use as a campaign ID.</td>
</tr>
<tr>
<td>BccEmail</td>
<td>xsd:string</td>
<td>Indicates email addresses to receive blind carbon copy of a message.</td>
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
<td>Duplicates</td>
<td>xsd:int</td>
<td>Represent the number of duplicate email addresses associated with a send (exists only when a send occurs to multiple lists).</td>
</tr>
<tr>
<td>Email</td>
<td>Email</td>
<td>Default email address for object. Indicates if subscriber information can be used for email sends.</td>
</tr>
<tr>
<td>EmailName</td>
<td>xsd:string</td>
<td>Specifies the name of an email message associated with a send.</td>
</tr>
<tr>
<td>EmailSendDefinition</td>
<td>EmailSendDefinition</td>
<td>Indicates email send definition to which the send object is attached.</td>
</tr>
<tr>
<td>Events</td>
<td>TrackingEvent[]</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>ExistingUndeliverables</td>
<td>xsd:int</td>
<td>Indicates whether bounces occurred on previous send.</td>
</tr>
<tr>
<td>ExistingUnsubscribes</td>
<td>xsd:int</td>
<td>Indicates whether unsubscriptions occurred on previous send.</td>
</tr>
<tr>
<td>ForwardedEmails</td>
<td>xsd:int</td>
<td>Number of emails forwarded for a send.</td>
</tr>
<tr>
<td>FromAddress</td>
<td>xsd:string</td>
<td>Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions.</td>
</tr>
<tr>
<td>FromName</td>
<td>xsd:string</td>
<td>Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions.</td>
</tr>
<tr>
<td>HardBounces</td>
<td>xsd:int</td>
<td>Indicates number of hard bounces associated with a send.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>InvalidAddresses</td>
<td>xsd:int</td>
<td>Specifies the number of invalid addresses associated with a send.</td>
</tr>
<tr>
<td>IsAlwaysOn</td>
<td>xsd:boolean</td>
<td>Indicates whether the request can be performed while the system is is maintenance mode. A value of true indicates that the system processes the request.</td>
</tr>
<tr>
<td>IsMultipart</td>
<td>xsd:boolean</td>
<td>Indicates whether the email is sent with Multipart/MIME enabled.</td>
</tr>
<tr>
<td>Links</td>
<td>Link[]</td>
<td>Contains an array of links included in a send.</td>
</tr>
<tr>
<td>List</td>
<td>List[]</td>
<td>List associated with an object.</td>
</tr>
<tr>
<td>MissingAddresses</td>
<td>xsd:int</td>
<td>Specifies number of missing addresses encountered within a send.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified.</td>
</tr>
<tr>
<td>NumberDelivered</td>
<td>Nullable&#96;1</td>
<td>Number of sent emails that did not bounce.</td>
</tr>
<tr>
<td>NumberErrored</td>
<td>xsd:int</td>
<td>Number of emails not sent as part of a send because an error occurred while trying to build the email.</td>
</tr>
<tr>
<td>NumberExcluded</td>
<td>xsd:int</td>
<td>Indicates the number recipients excluded froman email send because of a held, unsubscribed, master unsubscribed, or global unsubscribed status.</td>
</tr>
<tr>
<td>NumberSent</td>
<td>Nullable&#96;1</td>
<td>Number of emails actually sent as part of an email send. This number reflects all of the sent messages and may include bounced messages.</td>
</tr>
<tr>
<td>NumberTargeted</td>
<td>xsd:int</td>
<td>Indicates the number of possible recipients for an email send. This number does not include unsubscribed or excluded subscribers for a given list or data extension.</td>
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
<td>OtherBounces</td>
<td>xsd:int</td>
<td>Specifies number of Other-type bounces in a send.</td>
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
<td>PreviewURL</td>
<td>xsd:string</td>
<td>Indicates URL used to preview the message associated with a send.</td>
</tr>
<tr>
<td>SendDate</td>
<td>xsd:dateTime</td>
<td>Indicates the date on which a send occurred. Set this value to have a CST (Central Standard Time) value.</td>
</tr>
<tr>
<td>SendLimit</td>
<td>xsd:int</td>
<td>Indicates limit of messages to send as part of a send definition within a predefined send window.</td>
</tr>
<tr>
<td>SendWindowClose</td>
<td>xsd:dateTime</td>
<td>Defines the end of a send window for a send definition.</td>
</tr>
<tr>
<td>SendWindowOpen</td>
<td>xsd:dateTime</td>
<td>Defines the beginning of a send window for a send definition.</td>
</tr>
<tr>
<td>SentDate</td>
<td>Nullable&#96;1</td>
<td>Indicates date on which a send took place.</td>
</tr>
<tr>
<td>SoftBounces</td>
<td>xsd:int</td>
<td>Indicates number of soft bounces associated with a specific send.</td>
</tr>
<tr>
<td>Sources</td>
<td>APIObject[]</td>
<td>Specifies multiple sources included in a campaign.</td>
</tr>
<tr>
<td>Status</td>
<td>xsd:string</td>
<td>Defines status of object. Status of an address.</td>
</tr>
<tr>
<td>Subject</td>
<td>xsd:string</td>
<td>Contains subject area information for a message.</td>
</tr>
<tr>
<td>SuppressionLists</td>
<td>AudienceItem[]</td>
<td>Array of suppression lists associated with a send.</td>
</tr>
<tr>
<td>UniqueClicks</td>
<td>xsd:int</td>
<td>Indicates number of unique clicks on message.</td>
</tr>
<tr>
<td>UniqueOpens</td>
<td>xsd:int</td>
<td>Indicates number of unique opens resulting from a triggered send.</td>
</tr>
<tr>
<td>Unsubscribes</td>
<td>xsd:int</td>
<td>Indicates the number of unsubscribe events associated with a send.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
