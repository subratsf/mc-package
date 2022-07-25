---
title: EmailSendDefinition
---
The EmailSendDefinition object contains the message information, sender profile, delivery profile, and audience information.
* To create an EmailSendDefinition with a SendDefinitionList where the DataSourceTypeID=List and SendDefinitionListType=SourceList, you need the Email | Subscribers | List | SendEmailToList permission.
* To create or update an EmailSendDefinition with a SendDefinitionList where the ID is the All Subs List, you need the Email | Subscribers | All Subscribers | SendEmailToList and View permissions.
* To start or test an EmailSendDefinition using the perform method, you need the Email | Content | Email | Send or Test Send permissions.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Additional</td>
<td>xsd:string</td>
<td>The ID for a send that customers use as a campaign ID. This property contains external campaign ID information or more metadata that appears in the tracking extract, and there is a personalization string for it. You can set this information at the time of the send or within an email send definition.
</td>
</tr>
<tr>
<td>AutoBccEmail</td>
<td>xsd:string</td>
<td>Defines blind carbon copy email address to which to send a message as part of an email send definition.</td>
</tr>
<tr>
<td>BccEmail</td>
<td>xsd:string</td>
<td>Indicates email addresses to receive blind carbon copy of a message. The BccEmail property allows access to the BCC feature if enabled on the account. It does not error out if feature is not enabled. The API returns no tracking information for BCC emails. You must specify this property in an email send definition, as you cannot specify this property at send time. You can create a profile attribute for this property and pass in a value at send time, however.</p>
</td>
</tr>
<tr>
<td>CategoryID</td>
<td>xsd:int</td>
<td>Specifies the identifier of the folder.</td>
</tr>
<tr>
<td>CCEmail</td>
<td>xsd:string</td>
<td>Carbon copy email address. You must specify the CCEmail property in an email send definition, as you cannot specify this property at send time. You can create a profile attribute for this property and pass in a value at send time, however.
</td>
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
<td>DeduplicateByEmail</td>
<td>xsd:boolean</td>
<td>Indicates whether a send definition de-duplicates multiple emails sent to the same email address. Set to <strong>true</strong> to ensure that only one message is sent to a single email address, if that email appears on several different lists or data extensions in a send definition.</td>
</tr>
<tr>
<td>DeliveryProfile</td>
<td>DeliveryProfile</td>
<td>Identifies the delivery profile included in a send classification.</td>
</tr>
<tr>
<td>DeliveryScheduledTime</td>
<td>xsd:dateTime</td>
<td>Defines scheduled data and time for a send related to an email send definition.</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>DomainType</td>
<td>DeliveryProfileDomainTypeEnum</td>
<td>Defines the type of domain associated with a delivery profile or send definition. Valid values include DefaultDomain or CustomDomain.</td>
</tr>
<tr>
<td>DynamicEmailSubject</td>
<td>xsd:string</td>
<td>Contains content to be used in a dynamic subject line.</td>
</tr>
<tr>
<td>Email</td>
<td>Email</td>
<td>Default email address for object. Indicates if subscriber information can be used for email sends.</td>
</tr>
<tr>
<td>EmailSubject</td>
<td>xsd:string</td>
<td>Subject for an email send. This property is required when updating a user-initiated send definition. If you don't pass the new subject to the email send definition, it retains the old subject for that definition. You must also specify the send classification to use as part of the send.</td>
</tr>
<tr>
<td>ExclusionFilter</td>
<td>xsd:string</td>
<td>Contains a string of AMPscript that can evaluate to true or false, used to exclude email addresses from a send definition. If you include an ExclusionFilter in a create call, you must also include the SendDefinitionList property. The ExclusionFilter property can cause performance issues with send time for large amounts of email addresses. Use the data filter function if you experience performance problems.</td>
</tr>
<tr>
<td>FooterContentArea</td>
<td>ContentArea</td>
<td>Defines footer content area to use as part of a delivery profile or send definition.</td>
</tr>
<tr>
<td>FooterSalutationSource</td>
<td>SalutationSourceEnum</td>
<td>Defines source of a footer salutation to use as part of a delivery profile or send definition. Valid values include:<ul>
<li>Default</li>
<li>Content Library</li>
<li>None</li>
</ul></td>
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
<td>HeaderContentArea</td>
<td>ContentArea</td>
<td>Defines content area to be used in the header of a delivery profile or a send definition.</td>
</tr>
<tr>
<td>HeaderSalutationSource</td>
<td>SalutationSourceEnum</td>
<td>Defines source of header salutation for a delivery profile or send definition. Valid values include:<ul>
<li>Default</li>
<li>Content Library</li>
<li>None</li>
</ul></td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>InteractionObjectID</td>
<td>xsd:string</td>
<td>Returns associated ID for activities within the asynchronous process of the overall conversation or program.</td>
</tr>
<tr>
<td>IsMultipart</td>
<td>xsd:boolean</td>
<td>Indicates whether the email is sent with Multipart/MIME enabled.</td>
</tr>
<tr>
<td>IsSeedListSend</td>
<td>xsd:boolean</td>
<td>Indicates whether a email send includes the use of a seed list.</td>
</tr>
<tr>
<td>IsSendLogging</td>
<td>xsd:boolean</td>
<td>Indicates whether send logging is enabled for the specified send definition</td>
</tr>
<tr>
<td>IsWrapped</td>
<td>xsd:boolean</td>
<td>Indicates whether an email send contains the links necessary to process tracking information for clicks.</td>
</tr>
<tr>
<td>Keyword</td>
<td>xsd:string</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>MessageDeliveryType</td>
<td>MessageDeliveryTypeEnum</td>
<td>Enumerates the types of message delivery options available for email send definitions. Valid values include:
<ul>
<li>Standard - use as default unless your account is configured to handle burst sending</li>
<li>DelayedDeliveryByMTAQueue</li>
</ul></td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified.</td>
</tr>
<tr>
<td>Name</td>
<td>xsd:string</td>
<td>Name of the object or property.</td>
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
<td>PreHeader</td>
<td>xsd:string</td>
<td>Contains text used in preheader of email message on mobile devices.</td>
</tr>
<tr>
<td>PrivateDomain</td>
<td>PrivateDomain</td>
<td>Defines private domain to use as part of a delivery profile or send definition.</td>
</tr>
<tr>
<td>PrivateIP</td>
<td>PrivateIP</td>
<td>Contains information on the private IP address associated with a delivery profile.</td>
</tr>
<tr>
<td>ReplyToAddress</td>
<td>xsd:string</td>
<td>Specifies the reply address used for any messages sent using this send definition.</td>
</tr>
<tr>
<td>ReplyToDisplayName</td>
<td>xsd:string</td>
<td>Optional value that specifies the display name for the email address contained in the ReplyToAddress property.</td>
</tr>
<tr>
<td>SeedListOccurance</td>
<td>xsd:int</td>
<td>Property definition.</td>
</tr>
<tr>
<td>SendClassification</td>
<td>SendClassification</td>
<td>Indicates the send classification to use as part of a send definition. This field is required when updating a user-initiated send definition.</td>
</tr>
<tr>
<td>SendDefinitionList</td>
<td>SendDefinitionList[]</td>
<td>Indicates the subscriber list to use as part of an email send definition.</td>
</tr>
<tr>
<td>SenderProfile</td>
<td>SenderProfile</td>
<td>Identifies the sender profile included in the send classification.</td>
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
<td>SendWindowDelete</td>
<td>xsd:boolean</td>
<td>Indicates whether an existing send window for a send definition is deleted.</td>
</tr>
<tr>
<td>SendWindowOpen</td>
<td>xsd:dateTime</td>
<td>Defines the beginning of a send window for a send definition.</td>
</tr>
<tr>
<td>SourceAddressType</td>
<td>DeliveryProfileSourceAddressTypeEnum</td>
<td>Indicates the source IP address type used with the delivery profile. Valid values include DefaultPrivateIPAddress and CustomPrivateIPAddress.</td>
</tr>
<tr>
<td>SuppressTracking</td>
<td>xsd:boolean</td>
<td>Indicates whether the send definition suppresses tracking results for associated sends.</td>
</tr>
<tr>
<td>TestEmailAddr</td>
<td>xsd:string</td>
<td>Defines an email address to which to send a test message as part of an email send definition.Use the Test action when sending a test email to an email send definition.</td>
</tr>
<tr>
<td>TimeZone</td>
<td>TimeZone</td>
<td>Contains time zone information for an Account. For Create and Update calls, this property defines the time zone for an Account object. On a Retrieve call, TimeZone indicates which time zone is in effect for the Account object in question. Without a specific time zone, the Account defaults to Central Standard Time.</td>
</tr>
<tr>
<td>TrackingUsers</td>
<td>TrackingUser[]</td>
<td>Defines account users with access to tracking information for that send definition.</td>
</tr>
</tbody>
</table>

##Methods
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><a href="create.htm" title="Create">Create</a></td>
<td>Creates an individual object or a batch of objects.</td>
</tr>
<tr>
<td><a href="delete.htm" title="Delete">Delete</a></td>
<td>Deletes an individual object or a batch of objects.</td>
</tr>
<tr>
<td><a href="perform.htm" title="Perform">Perform</a></td>
<td>Manages asynchronous processes.</td>
</tr>
<tr>
<td><a href="retrieve.htm" title="Retrieve">Retrieve</a></td>
<td>Retrieves an individual object or a batch of objects.</td>
</tr>
<tr>
<td><a href="update.htm" title="Update">Update</a></td>
<td>Updates an individual object or a batch of objects.</td>
</tr>
</tbody>
</table>

##Related Items
* [Data Filters Function](https://help.salesforce.com/articleView?id=mc_es_data_filters_with_enhanced_subscriber_feature.htm&type=5)
* [Personalization Strings](https://help.salesforce.com/articleView?id=mc_es_personalization_strings.htm&type=5)
* [Tracking Extract](https://help.salesforce.com/articleView?id=mc_es_tracking_extract.htm&type=5)
* [Create, Perform, and Delete Email Send Definitions](creating_performing_and_deleting_email_send_definitions.htm)
* [Create an Email Send Definition](creating_an_email_send_definition_using_the_web_service_api.htm)
* [Create an Email Send Definition with Dynamic Content](creating_an_email_send_definition_with_dynamic_content_using_the_web_service_api.htm)
* [Create a List-Based Email Send Definition](creating_email_send_definition.htm)
* [Retrieve the Audience of an Email Send Definition](retrieving_audience_of_send_definition.htm)
