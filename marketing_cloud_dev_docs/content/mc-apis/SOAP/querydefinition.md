---
title: QueryDefinition
---
The QueryDefinition object represents a SQL query activity accessed and performed by the SOAP API.
* To update a QueryDefinition where the CategoryID is greater than 0, you need the Email | Interactions | Activities | Query | Move permission.
* To start a QueryDefinition using the perform method, you need the Email | Interactions | Activities | Query | Move permission.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>CategoryID</td><td>xsd:int</td><td>Specifies the identifier of the folder.</td></tr><tr><td>Client</td><td>ClientID</td><td>Specifies the account ownership and context of an object.</td></tr><tr><td>CorrelationID</td><td>xsd:string</td><td>Identifies correlation of objects across several requests.</td></tr><tr><td>CreatedDate</td><td>xsd:dateTime</td><td>Read-only date and time of the object's creation.</td></tr><tr><td>CustomerKey</td><td>xsd:string</td><td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td></tr><tr><td>DataExtensionTarget</td><td>InteractionBaseObject</td><td>Indicates data extension to use as a template when auto-generating a new data extension. To ensure that the query activity targets the correct data extension, specify a unique external key for each data extension. For Enterprise 2.0 accounts, the external key must be unique among business unit and enterprise shared data extensions.</td></tr><tr><td>Description</td><td>xsd:string</td><td>Describes and provides information regarding the object.</td></tr><tr><td>FileSpec</td><td>xsd:string</td><td>Defines the file-naming pattern associated with an activity (valid substitutions include%%YEAR%%, %%MONTH%%, and %%DAY%%).</td></tr><tr><td>FileType</td><td>xsd:string</td><td>Specifies column delimiter of a file. Valid values include: <ul> <li>CSV</li> <li>TAB</li> <li>Other</li> </ul></td></tr><tr><td>ID</td><td>xsd:int</td><td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td></tr><tr><td>InteractionObjectID</td><td>xsd:string</td><td>Returns associated ID for activities within the asynchronous process of the overall conversation or program.</td></tr><tr><td>Keyword</td><td>xsd:string</td><td>Reserved for future use.</td></tr><tr><td>ModifiedDate</td><td>Nullable&#96;1</td><td>Indicates the last time object information was modified.</td></tr><tr><td>Name</td><td>xsd:string</td><td>Name of the object or property.</td></tr><tr><td>ObjectID</td><td>xsd:string</td><td>System-controlled, read-only text string identifier for object.</td></tr><tr><td>ObjectState</td><td>xsd:string</td><td>Reserved for future use.</td></tr><tr><td>Owner</td><td>Owner</td><td>Describes account ownership of subscriber in an on-your-behalf account.</td></tr><tr><td>PartnerKey</td><td>xsd:string</td><td>Unique identifier provided by partner for an object. This property is accessible only via API.</td></tr><tr><td>PartnerProperties</td><td>APIProperty[]</td><td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td></tr><tr><td>QueryText</td><td>xsd:string</td><td>Specifies text associated with a query definition.</td></tr><tr><td>Status</td><td>xsd:string</td><td>Defines status of object. Status of an address.</td></tr><tr><td>TargetType</td><td>xsd:string</td><td>Indicates target type for a query definition.</td></tr><tr><td>TargetUpdateType</td><td>xsd:string</td><td>Indicates the target update type for a query definition.</td></tr></tbody></table>


##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)