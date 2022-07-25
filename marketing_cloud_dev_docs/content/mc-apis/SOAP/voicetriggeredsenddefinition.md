---
title: VoiceTriggeredSendDefinition
---
The VoiceTriggeredSendDefinition object is deprecated.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>CategoryID</td>
<td>xsd:int</td>
<td>Specifies the identifier of the folder.</td>
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
<td>DeliveryProfile</td>
<td>DeliveryProfile</td>
<td>Identifies the delivery profile included in a send classification.</td>
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
<td>FooterContentArea</td>
<td>ContentArea</td>
<td>Defines footer content area to use as part of a delivery profile or send definition.</td>
</tr>
<tr>
<td>FooterSalutationSource</td>
<td>SalutationSourceEnum</td>
<td>Defines source of a footer salutation to use as part of a delivery profile or send definition (Default, Content Library, or None)</td>
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
<td>Defines source of header salutation for a delivery profile or send definition.</td>
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
<td>IsSendLogging</td>
<td>xsd:boolean</td>
<td>Indicates whether send logging is enabled for the specified send definition</td>
</tr>
<tr>
<td>Keyword</td>
<td>xsd:string</td>
<td>Reserved for future use.</td>
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
<td>SendClassification</td>
<td>SendClassification</td>
<td>Indicates the send classification to use as part of a send definition.</td>
</tr>
<tr>
<td>SenderProfile</td>
<td>SenderProfile</td>
<td>Identifies the sender profile included in the send classification.</td>
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
</tbody>
</table>
