---
title: TriggeredSendDefinition
---
The TriggeredSendDefinition object defines a triggered send in the account.
* To create or update a TriggeredSendDefinition where the list ID is the All Subs List ID, you need the Email | Subscribers | All Subscribers | View and SendEmailToList permissions.
* To update a TriggeredSendDefinition where the TriggeredSendStatus is Active, Moved, Inactive, or Canceled, you need the Email | Interactions | Messages | Email | Triggered | Start, Move, Pause, or Archive permissions, respectively.
* To update a TriggeredSendDefinition where RefreshContent is enabled, you need the Email | Interactions | Messages | Email | Triggered | Publish Changes permission.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AllowedSlots</td>
<td>xsd:short</td>
<td>Reserved for future use</td>
</tr>
<tr>
<td>AutoAddSubscribers</td>
<td>xsd:boolean</td>
<td>Indicates whether a triggered send recipient is added to a subscriber list. If set to <strong>True</strong>, the call automatically adds the email address associated with the triggered send to a specified subscriber list.</td>
</tr>
<tr>
<td>AutoUpdateSubscribers</td>
<td>xsd:boolean</td>
<td>Indicates if any subscriber information is updated as part of a triggered send. If set to <strong>True</strong>, the triggered send call updates any applicable subscriber information with information from the send.</td>
</tr>
<tr>
<td>BatchInterval</td>
<td>xsd:int</td>
<td>Deprecated</td>
</tr>
<tr>
<td>BccEmail</td>
<td>xsd:string</td>
<td>Indicates email addresses to receive blind carbon copy of a message. This property allows access to the BCC feature. if enabled on the account. The API returns no tracking information for BCC emails and does not error out if the BCC feature is disabled. You cannot specify this property at send time. Either specify the BccEmail in a triggered send or email send definition, or create a profile attribute and pass in a value at send time.</td>
</tr>
<tr>
<td>CategoryID</td>
<td>xsd:int</td>
<td>Specifies the identifier of the folder</td>
</tr>
<tr>
<td>CCEmail</td>
<td>xsd:string</td>
<td>Carbon copy email address. You cannot specify this property at send time. Either specify the CCEmail in a triggered send or email send definition, or create a profile attribute and pass in a value at send time.</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object</td>
</tr>
<tr>
<td>CorrelationID</td>
<td>xsd:string</td>
<td>Identifies correlation of objects across several requests</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>xsd:dateTime</td>
<td>Read-only date and time of the object's creation</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>xsd:string</td>
<td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud</td>
</tr>
<tr>
<td>DeliveryProfile</td>
<td>DeliveryProfile</td>
<td>Identifies the delivery profile included in a send classification</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object</td>
</tr>
<tr>
<td>DisableOnEmailBuildError</td>
<td>xsd:boolean</td>
<td>Indicates whether an email send continues or not after reaching an error threshold specified by Marketing Cloud. This property corresponds to a Marketing Cloud checkbox. Contact your Marketing Cloud representative to change the threshold. The error threshold defaults to 10.</td>
</tr>
<tr>
<td>DomainType</td>
<td>DeliveryProfileDomainTypeEnum</td>
<td>Defines the type of domain (DefaultDomain or CustomDomain) associated with a delivery profile or send definition</td>
</tr>
<tr>
<td>DynamicEmailSubject</td>
<td>xsd:string</td>
<td>Contains content to be used in a dynamic subject line</td>
</tr>
<tr>
<td>Email</td>
<td>Email</td>
<td>Refers to the Email object representing the email used in the send</td>
</tr>
<tr>
<td>EmailSubject</td>
<td>xsd:string</td>
<td>Subject for an email send</td>
</tr>
<tr>
<td>ExclusionFilter</td>
<td>xsd:string</td>
<td>Contains a string of AMPscript that can evaluate to true or false. Use this property to exclude email addresses from a send definition that match that string value. This property can cause performance issues with send time for large amounts of email addresses. Use the data filter function instead.</td>
</tr>
<tr>
<td>ExclusionListCollection</td>
<td>TriggeredSendExclusionList[]</td>
<td>Specifies one or many exclusion lists</td>
</tr>
<tr>
<td>FooterContentArea</td>
<td>ContentArea</td>
<td>Defines footer content area to use as part of a delivery profile or send definition</td>
</tr>
<tr>
<td>FooterSalutationSource</td>
<td>SalutationSourceEnum</td>
<td>Defines source of a footer salutation to use as part of a delivery profile or send definition. Valid values include:
<ul>
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
<td>Defines content area to be used in the header of a delivery profile or a send definition</td>
</tr>
<tr>
<td>HeaderSalutationSource</td>
<td>SalutationSourceEnum</td>
<td>Defines source of header salutation for a delivery profile or send definition. Valid values include:
<ul>
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
<td>Returns associated ID for activities within the asynchronous process of the overall conversation or program</td>
</tr>
<tr>
<td>IsAlwaysOn</td>
<td>xsd:boolean</td>
<td>Indicates whether the request can be performed while the system is maintenance mode. A value of true indicates that the system processes the request.</td>
</tr>
<tr>
<td>IsMultipart</td>
<td>xsd:boolean</td>
<td>Indicates whether the email is sent with Multipart/MIME enabled</td>
</tr>
<tr>
<td>IsSendLogging</td>
<td>xsd:boolean</td>
<td>Indicates whether send logging is enabled for the specified send definition</td>
</tr>
<tr>
<td>IsWrapped</td>
<td>xsd:boolean</td>
<td>Indicates whether an email send contains the links necessary to process tracking information for clicks</td>
</tr>
<tr>
<td>Keyword</td>
<td>xsd:string</td>
<td>Reserved for future use</td>
</tr>
<tr>
<td>List</td>
<td>List</td>
<td>List associated with an object</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified</td>
</tr>
<tr>
<td>Name</td>
<td>xsd:string</td>
<td>Name of the object or property</td>
</tr>
<tr>
<td>NewSlotTrigger</td>
<td>xsd:int</td>
<td>Deprecated</td>
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
<td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td>
</tr>
<tr>
<td>PreHeader</td>
<td>xsd:string</td>
<td>Contains text used in preheader of email message on mobile devices.</td>
</tr>
<tr>
<td>Priority</td>
<td>xsd:string</td>
<td>Defines the priority for a triggered send. Valid values include Low, Medium, and High.</td>
</tr>
<tr>
<td>PrivateDomain</td>
<td>PrivateDomain</td>
<td>Defines private domain to use as part of a delivery profile or send definition</td>
</tr>
<tr>
<td>PrivateIP</td>
<td>PrivateIP</td>
<td>Contains information on the private IP address associated with a delivery profile</td>
</tr>
<tr>
<td>RefreshContent</td>
<td>xsd:boolean</td>
<td>Indicates whether the triggered send definition refreshes content as part of the send. A value of true indicates that the triggered send contains refreshed content.</td>
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
<td>SendClassification</td>
<td>SendClassification</td>
<td>Indicates the send classification to use as part of a send definition</td>
</tr>
<tr>
<td>SenderProfile</td>
<td>SenderProfile</td>
<td>Identifies the sender profile included in the send classification</td>
</tr>
<tr>
<td>SendLimit</td>
<td>xsd:int</td>
<td>Indicates limit of messages to send as part of a send definition within a predefined send window</td>
</tr>
<tr>
<td>SendSourceCustomerKey</td>
<td>xsd:string</td>
<td>Deprecated</td>
</tr>
<tr>
<td>SendSourceDataExtension</td>
<td>DataExtension</td>
<td>Indicates the data extension used as the source of information for a triggered send definition</td>
</tr>
<tr>
<td>SendWindowClose</td>
<td>xsd:dateTime</td>
<td>Defines the end of a send window for a send definition</td>
</tr>
<tr>
<td>SendWindowDelete</td>
<td>xsd:boolean</td>
<td>Indicates whether an existing send window for a send definition is deleted</td>
</tr>
<tr>
<td>SendWindowOpen</td>
<td>xsd:dateTime</td>
<td>Defines the beginning of a send window for a send definition</td>
</tr>
<tr>
<td>SourceAddressType</td>
<td>DeliveryProfileSourceAddressTypeEnum</td>
<td>Indicates the source IP address type used with the delivery profile. Valid values include DefaultPrivateIPAddress and CustomPrivateIPAddress.</td>
</tr>
<tr>
<td>SuppressTracking</td>
<td>xsd:boolean</td>
<td>Indicates whether the send definition suppresses tracking results for associated sends</td>
</tr>
<tr>
<td>TriggeredSendClass</td>
<td>TriggeredSendClassEnum</td>
<td>Indicates usage of the triggered send for standard <strong>API</strong> sends or <strong>SMTPRestV2</strong> SMTP relay sends</td>
</tr>
<tr>
<td>TriggeredSendStatus</td>
<td>TriggeredSendStatusEnum</td>
<td>Represent status of triggered send. Valid values include:<ul>
<li>New (Same as <strong>New</strong> in UI)</li>
<li>Inactive (Same as <strong>Paused</strong> in UI)</li>
<li>Active (Same as Running in UI)</li>
<li>Canceled (Same as Archived in UI)</li>
<li>Deleted (Not displayed in UI)</li>
</ul></td>
</tr>
<tr>
<td>TriggeredSendSubClass</td>
<td>TriggeredSendSubClassEnum</td>
<td>Indicates if and how a template applies to <strong>SMTPRestV2</strong> SMTP relay sends</td>
</tr>
<tr>
<td>TriggeredSendType</td>
<td>TriggeredSendTypeEnum</td>
<td>Deprecated</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Data Filters](https://help.salesforce.com/articleView?id=mc_es_data_filters_with_enhanced_subscriber_feature.htm&type=5)
* [Create a Triggered Send Email Campaign Workflow](creating_a_triggered_email_campaign_workflow.htm)
* [Create a Triggered Send Definition](creating_a_triggered_send_definition.htm)
