---
title: ResultItem
---
The ResultItem object contains the results of an asynchronous API call. When calling the asynchronous API, ResultItem contains zero objects until that request is picked up from the asynchronous queue. The amount of time a call remains in the queue depends on the current volume of Marketing Cloud.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Client</td><td>ClientID</td><td>Specifies the account ownership and context of an object.</td></tr><tr><td>ConversationID</td><td>xsd:string</td><td>Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID.</td></tr><tr><td>CorrelationID</td><td>xsd:string</td><td>Identifies correlation of objects across several requests.</td></tr><tr><td>CreatedDate</td><td>xsd:dateTime</td><td>Read-only date and time of the object's creation.</td></tr><tr><td>CustomerKey</td><td>xsd:string</td><td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td></tr><tr><td>ErrorCode</td><td>xsd:int</td><td>Identifies the error of an API request via a numeric code.</td></tr><tr><td>ID</td><td>xsd:int</td><td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td></tr><tr><td>ModifiedDate</td><td>Nullable&#96;1</td><td>Indicates the last time object information was modified.</td></tr><tr><td>ObjectID</td><td>xsd:string</td><td>System-controlled, read-only text string identifier for object.</td></tr><tr><td>ObjectState</td><td>xsd:string</td><td>Reserved for future use.</td></tr><tr><td>OrdinalID</td><td>xsd:int</td><td>Defines position of object within an array of information.</td></tr><tr><td>Owner</td><td>Owner</td><td>Describes account ownership of subscriber in an on-your-behalf account.</td></tr><tr><td>PartnerKey</td><td>xsd:string</td><td>Unique identifier provided by partner for an object. This property is accessible only via API.</td></tr><tr><td>PartnerProperties</td><td>APIProperty[]</td><td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td></tr><tr><td>RequestID</td><td>xsd:string</td><td>Unique ID of initial async API call.</td></tr><tr><td>RequestObjectType</td><td>xsd:string</td><td>Defines type of the Request object, such as email or triggered send.</td></tr><tr><td>RequestType</td><td>RequestType</td><td>Defines request as synchronous or asynchronous API.</td></tr><tr><td>StatusCode</td><td>xsd:string</td><td>Status of async API request.</td></tr><tr><td>StatusMessage</td><td>xsd:string</td><td>Describes the status of an API call.</td></tr></tbody></table>

##Sample SOAP Envelope
```
<Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <RetrieveRequest>
            <ObjectType>ResultItem</ObjectType>
            <Properties>RequestType</Properties>
            <Filter xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:SimpleFilterPart">
                <Property>RequestID</Property>
                <SimpleOperator>equals</SimpleOperator>
                <Value>69b55db2-c71d-4886-b127-f789c4efe3b7</Value>
            </Filter>
        </RetrieveRequest>
    </RetrieveRequestMsg>
</body>
```
##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
