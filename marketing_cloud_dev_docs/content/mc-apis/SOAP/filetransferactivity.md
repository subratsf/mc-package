---
title: FileTransferActivity
---
The FileTransferActivity object represents an instance of a file transfer activity within an account. Use the perform method on an existing file transfer activity. To start a FileTransferActivity using the perform method, you need the Interactions | Activities | File Transfer | Start permission.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
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
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
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
</tbody>
</table>

##PartnerProperties Values
The PartnerProperties property on this object accepts the following value and data types:
<table class="table table-hover">
<thead align="left">
<tr><td>Value</td><td>Data Type</td></tr>
</thead>
<tbody>
<tr>
<td>FileTransferLocationKey</td>
<td>string</td>
</tr>
<tr>
<td>FileTransferLocationID</td>
<td>GUID</td>
</tr>
<tr>
<td>PublicKeyManagementKey</td>
<td>string</td>
</tr>
<tr>
<td>PublicKeyManagementId</td>
<td>int</td>
</tr>
<tr>
<td>FileTransferActivityID</td>
<td>GUID</td>
</tr>
<tr>
<td>ClientID</td>
<td>int</td>
</tr>
<tr>
<td>OwnerID</td>
<td>int</td>
</tr>
<tr>
<td>Name</td>
<td>string</td>
</tr>
<tr>
<td>Description</td>
<td>string</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>string</td>
</tr>
<tr>
<td>FileSpec</td>
<td>string</td>
</tr>
<tr>
<td>IsActive</td>
<td>bool</td>
</tr>
<tr>
<td>IsEncrypted</td>
<td>bool</td>
</tr>
<tr>
<td>IsCompressed</td>
<td>bool</td>
</tr>
<tr>
<td>IsSigned</td>
<td>bool</td>
</tr>
<tr>
<td>Retries</td>
<td>int</td>
</tr>
<tr>
<td>RetryInterval</td>
<td>int</td>
</tr>
<tr>
<td>MaxFileAge</td>
<td>int</td>
</tr>
<tr>
<td>MaxFileAgeScheduleOffset</td>
<td>int</td>
</tr>
<tr>
<td>MaxImportFrequency</td>
<td>int</td>
</tr>
<tr>
<td>CreatedBy</td>
<td>int</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>datetime</td>
</tr>
<tr>
<td>ModifiedBy</td>
<td>int</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>datetime</td>
</tr>
<tr>
<td>IsSequential</td>
<td>bool</td>
</tr>
<tr>
<td>IsSuccessfulWithoutFile</td>
<td>bool</td>
</tr>
<tr>
<td>IsUpload</td>
<td>bool</td>
</tr>
<tr>
<td>IsPgp</td>
<td>bool</td>
</tr>
<tr>
<td>MaxAgeUnit</td>
<td>FileTransferActivityMaxAgeUnit enumeration</td>
</tr>
</tbody>
</table>

Currently, 0-Hour is the only valid enumeration for MaxAgeUnit. The PartnerProperties property on this object in a Perform call accepts the following value and data types:
<table class="table table-hover">
<thead align="left">
<tr><td>Value</td><td>Data Type</td></tr>
</thead>
<tbody>
<tr>
<td>Type</td>
<td>string</td>
</tr>
<tr>
<td>SourceResourceSpec</td>
<td>string</td>
</tr>
<tr>
<td>IsCompressed</td>
<td>bool</td>
</tr>
<tr>
<td>OutputFilename</td>
<td>string</td>
</tr>
<tr>
<td>IsEncrypted</td>
<td>bool</td>
</tr>
<tr>
<td>Encrypt</td>
<td>string</td>
</tr>
<tr>
<td>EncryptionKey</td>
<td>string</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Perform a File Transfer Activity](performing_a_file_transfer_activity_via_the_soap_api.htm)
