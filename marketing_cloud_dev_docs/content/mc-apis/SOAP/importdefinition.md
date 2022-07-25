---
title: ImportDefinition
---
The ImportDefinition object defines a reusable pattern of import options. For example, you could create an import definition to upload <strong>Subscribers.csv</strong> every day into the <strong>Customers</strong> list to prevent having to re-enter the same parameters every day.

If you import information to a data extension, you must create a data extension object and set the ObjectID property or customer key on the data extension object. You must then set the DestinationObject property to that object. If you are importing to a list, you must create a list object, set an ID property, and set the DestinationObject property to that object. You must specify the ID property for a list. Imports don't currently support the use of ObjectID or CustomerKey when importing to a list.

You can specify what character encoding you wish to use with your imports, but this specification applies to all imports in an account and can only be enabled by your Marketing Cloud representative.
* To create an ImportDefinition where the destination object is a list, you need the Email | Subscribers | List | Import Subscribers permission.
* To create or update an ImportDefinition where the destination object is a data extension, you need the Email | Subscribers | Data Extension | Import and Manage Data permissions.
* To create or update an ImportDefinition where the destination object is a list and the list ID is the All Subs List ID, you need the Email | Subscribers |  All Subscribers | Import Subscribers and View permissions.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AllowErrors</td>
<td>xsd:boolean</td>
<td>Specifies whether an import continues after an error occurs. A value of true permits the import process to continue, and a value of false stops the import process after the first error.</td>
</tr>
<tr>
<td>AutoGenerateDestination</td>
<td>ImportDefinitionAutoGenerateDestination</td>
<td>Specifies the properties of the destination to be generated automatically during an import.</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>ControlColumn</td>
<td>xsd:string</td>
<td>Specifies the column name in which to find control values as part of an import (use when the value ofImportDefinitionUpdateTypeis ColumnBased).</td>
</tr>
<tr>
<td>ControlColumnActions</td>
<td>ImportDefinitionColumnBasedAction[]</td>
<td>Specifies the control column actions to apply to an import.</td>
</tr>
<tr>
<td>ControlColumnDefaultAction</td>
<td>ImportDefinitionColumnBasedActionType</td>
<td>Defines default control column action to take as part of an import definition. Valid values include:<ul>
<li>AddAndUpdate</li>
<li>AddButDoNotUpdate</li>
<li>Delete</li>
<li>Skip</li>
<li>UpdateButDoNotAdd</li>
</ul>
</td>
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
<td>DateFormattingLocale</td>
<td>Locale</td>
<td>Specifies how dates are formatted in import data; used to ensure the data is interpreted correctly when it is being loaded.</td>
</tr>
<tr>
<td>DeleteFile</td>
<td>Boolean</td>
<td>Indicates whether the call deletes the file used in the import once the process completes.</td>
</tr>
<tr>
<td>Delimiter</td>
<td>xsd:string</td>
<td>Specifies the delimiter used as part of an import definition.</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>DestinationObject</td>
<td>APIObject</td>
<td>Specifies the destination of an import.</td>
</tr>
<tr>
<td>DestinationType</td>
<td>xsd:int</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>EndOfLineRepresentation</td>
<td>xsd:string</td>
<td>Specifies the line-ending character(s) used in delimited files to be imported.</td>
</tr>
<tr>
<td>FieldMappingType</td>
<td>ImportDefinitionFieldMappingType</td>
<td>Defines how fields are mapped within an import definition. Valid values include:<ul>
<li>InferFromColumnHeadings</li>
<li>MapByOrdinal</li>
<li>ManualMap</li>
</ul>
</td>
</tr>
<tr>
<td>FieldMaps</td>
<td>FieldMap[]</td>
<td>Specifies the mapping of fields to columns in a file.</td>
</tr>
<tr>
<td>FileSpec</td>
<td>xsd:string</td>
<td>Defines the file-naming pattern associated with an activity (valid substitutions include%%YEAR%%, %%MONTH%%, and %%DAY%%).</td>
</tr>
<tr>
<td>FileType</td>
<td>FileType</td>
<td>Specifies column delimiter of a file. Valid values include: <ul>
<li>CSV</li>
<li>TAB</li>
<li>Other</li>
</ul>
</td>
</tr>
<tr>
<td>Filter</td>
<td>xsd:string</td>
<td>Specifies filter to apply to retrieve.</td>
</tr>
<tr>
<td>HeaderLines</td>
<td>xsd:int</td>
<td>Specifies the number of header lines in the file to ignore.</td>
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
<td>MaxFileAge</td>
<td>xsd:int</td>
<td>Specifies the age of the oldest file to be included in an import definition. Any files older than the maximum age are not included in the import definition.</td>
</tr>
<tr>
<td>MaxFileAgeScheduleOffset</td>
<td>xsd:int</td>
<td>Specifies an offset in hours to associate with a file age for accomodating timezone differences. This time represents the maximum allowable difference between the scheduled time and the time the import definition actually accesses the file to be imported.</td>
</tr>
<tr>
<td>MaxImportFrequency</td>
<td>xsd:int</td>
<td>Specifies the number of hours to wait before allowing a file to be imported again. This property prevents an import definition run within a program from executing if a specified number of hours have passed since the program began.</td>
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
<td>Notification</td>
<td>AsyncResponse</td>
<td>Specifies the email address to which to send a notification.</td>
</tr>
<tr>
<td>NullRepresentation</td>
<td>xsd:string</td>
<td>Defines character used to represent a null value during an import.</td>
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
<td>RetrieveFileTransferLocation</td>
<td>FileTransferLocation</td>
<td>Specifies the file transfer location to contain the file.</td>
</tr>
<tr>
<td>SourceObject</td>
<td>APIObject</td>
<td>Specifies source of the import.</td>
</tr>
<tr>
<td>StandardQuotedStrings</td>
<td>xsd:boolean</td>
<td>Specifies whether standard quoted strings are used as part of an import definition. A true value indicates standard quoted strings are used in an import definition.</td>
</tr>
<tr>
<td>SubscriberImportType</td>
<td>ImportDefinitionSubscriberImportType</td>
<td>Specifies the subscriber import type for an import definition. Valid values include Email and SMS.</td>
</tr>
<tr>
<td>SubscriptionDefinitionId</td>
<td>xsd:string</td>
<td>Identifies subscription to which the import definition is associated.</td>
</tr>
<tr>
<td>UpdateType</td>
<td>ImportDefinitionUpdateType</td>
<td>Indicates update type associated with an import definition. Valid values include:<ul>
<li>AddAndUpdate</li>
<li>AddAndDoNotUpdate</li>
<li>UpdateButDoNotAdd</li>
<li>Merge</li>
<li>Overwrite</li>
<li>ColumnBased</li>
</ul>
</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)