---
title: DataExtension
---
The DataExtension object represents a data extension within an account.
* To create or update a DataExtension, and if your account has the data extension retention policies business rule and any data retention fields are populated, you need the Data Extension | Manage Data Extension Retention permission. Data retention fields are: DataRetentionPeriod, DataRetentionPeriodLength, DataRetentionPeriodUnitOfMeasure, RowBasedRetention, ResetRetentionPeriodOnImport, DeleteAtEndOfRetentionPeriod, and RetainUntil.
* To clear data from a DataExtension using the perform method, you need the Email | Subscribers | Data Extension | Clear Data permission. Also, your AccountType must be E2.0 or BU, or you need the role based access control business rule. If you don't own the data extension, you can't clear its data.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>CategoryID</td>
<td>xsd:long</td>
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
<td>DataRetentionPeriod</td>
<td>DateTimeUnitOfMeasure</td>
<td>Specifies the period during which the application retains the data within a data extension. Valid values include:
<ul>
<li>Days</li>
<li>Weeks</li>
<li>Months</li>
<li>Years</li>
</ul></td>
</tr>
<tr>
<td>DataRetentionPeriodLength</td>
<td>xsd:int</td>
<td>Specifies the number of time units for which data is retained. This property is used with DataRetentionPeriodUnitOfMeasureto specify the full data retention time.</td>
</tr>
<tr>
<td>DataRetentionPeriodUnitOfMeasure</td>
<td>xsd:int</td>
<td>Specifies the units of time for which data is retained. Deprecated. Use DataRetentionPeriodLength and DataRetentionPeriod instead.</td>
</tr>
<tr>
<td>DeleteAtEndOfRetentionPeriod</td>
<td>xsd:boolean</td>
<td>Indicates whether data is deleted at the end of the retention period. If the value is <strong>false</strong>, the application deletes the entire data extension. If the value is <strong>true</strong>, the application deletes the data within the data extension but retains the data extension itself.</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>Fields</td>
<td>DataExtensionField[]</td>
<td>Specifies fields contained within a data extension.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>IsSendable</td>
<td>xsd:boolean</td>
<td>Indicates whether you can use a data extension as part of an audience for a message send.</td>
</tr>
<tr>
<td>IsTestable</td>
<td>xsd:boolean</td>
<td>Indicates whether a sendable data extension can be used within tests sends for a message.</td>
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
<td>ResetRetentionPeriodOnImport</td>
<td>xsd:boolean</td>
<td>Indicates whether a data retention period is reset after a successful import of new data. A value of true indicates that the data retention period resets to the beginning upon completion of a successful data import. A value of false indicates that the data retention period continues from the original starting point.</td>
</tr>
<tr>
<td>RetainUntil</td>
<td>xsd:string</td>
<td>Indicates the date that ends the retention period for a data extension. Make sure that the value passed to this property is correctly formatted based on the Date Format setting of the API user. Failure to do so may result in an error.</td>
</tr>
<tr>
<td>RowBasedRetention</td>
<td>xsd:boolean</td>
<td>Indicates whether the data retention policy removes data by row or deletes all data in an entire data extension. A value of true indicates that all records within a data extension are removed at the same time. A value of false indicates that the application can remove individual rows within a data extension.</td>
</tr>
<tr>
<td>SendableDataExtensionField</td>
<td>DataExtensionField</td>
<td>Indicates the field within a sendable data extension to use as an address as part of a send. Possible values include SubscriberID, CustomerKey, or EmailAddress. The application uses this field to establish a data relationship between a value specified by theSendableSubscriberFieldproperty and a value within a sendable data extension.</td>
</tr>
<tr>
<td>SendableSubscriberField</td>
<td>Attribute</td>
<td>Indicates field to use as sending address. The application uses this field to establish a data relationship between a subscriber field and a value specified by the SendableDataExtensionField property.</td>
</tr>
<tr>
<td>Status</td>
<td>xsd:string</td>
<td>Defines status of object. Status of an address.</td>
</tr>
<tr>
<td>Template</td>
<td>DataExtensionTemplate</td>
<td>Indicates template used to create a data extension.</td>
</tr>
</tbody>
</table>

>The DataExtensionObject does not support LIKE operators in filters for the retrieve method.

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Add Column to a Data Extension](adding_new_column_to_an_existing_data_extension.htm)
* [Create a Data Extension Using an Existing Template](creating_a_data_extension_using_an_existing_template.htm)
* [Create a Data Extension](creating_a_data_extension_using_web_service_api.htm)
