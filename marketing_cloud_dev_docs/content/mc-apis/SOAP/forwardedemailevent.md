---
title: ForwardedEmailEvent
---
The ForwardedEmailEvent object indicates a subscriber used the Forward To A Friend feature to send an email to another person.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>BatchID</td><td>xsd:int</td><td>Ties triggered send sent events to other events (like clicks and opens that occur at a later date and time)</td></tr><tr><td>Client</td><td>ClientID</td><td>Specifies the account ownership and context of an object.</td></tr><tr><td>CorrelationID</td><td>xsd:string</td><td>Identifies correlation of objects across several requests.</td></tr><tr><td>CreatedDate</td><td>xsd:dateTime</td><td>Read-only date and time of the object's creation.</td></tr><tr><td>CustomerKey</td><td>xsd:string</td><td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td></tr><tr><td>EventDate</td><td>xsd:dateTime</td><td>Date when a tracking event occurred.</td></tr><tr><td>EventType</td><td>EventType</td><td>The type of tracking event</td></tr><tr><td>ID</td><td>xsd:int</td><td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td></tr><tr><td>ModifiedDate</td><td>Nullable&#96;1</td><td>Indicates the last time object information was modified.</td></tr><tr><td>ObjectID</td><td>xsd:string</td><td>System-controlled, read-only text string identifier for object.</td></tr><tr><td>ObjectState</td><td>xsd:string</td><td>Reserved for future use.</td></tr><tr><td>Owner</td><td>Owner</td><td>Describes account ownership of subscriber in an on-your-behalf account.</td></tr><tr><td>PartnerKey</td><td>xsd:string</td><td>Unique identifier provided by partner for an object. This property is accessible only via API.</td></tr><tr><td>PartnerProperties</td><td>APIProperty[]</td><td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td></tr><tr><td>SendID</td><td>xsd:int</td><td>Contains identifier for a specific send.</td></tr><tr><td>SubscriberKey</td><td>xsd:string</td><td>Identification of a specific subscriber.</td></tr><tr><td>TriggeredSendDefinitionObjectID</td><td>xsd:string</td><td>Identifies the triggered send definition associated with an event. This value also appears in tracking events to allow you to tie those events to a specific triggered send.</td></tr></tbody></table>

##SOAP Envelope
```
<soapenv:Body>
<RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
  <RetrieveRequest>
  <ObjectType>ForwardedEmailEvent</ObjectType>
  <Properties>ID</Properties>
  <Properties>PartnerKey</Properties>
  <Properties>CreatedDate</Properties>
  <Properties>ModifiedDate</Properties>
  <Properties>Client.ID</Properties>
  <Properties>SendID</Properties>
  <Properties>SubscriberKey</Properties>
  <Properties>EventDate</Properties>
  <Properties>EventType</Properties>
  <Properties>TriggeredSendDefinitionObjectID</Properties>
  <Properties>BatchID</Properties>
  </RetrieveRequest>
</RetrieveRequestMsg>
</soapenv:Body>
```
##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
