---
title: DataExtensionDeleteResult
---
The DataExtensionDeleteResult object provides error messages related to an attempt to delete information in a data extension. This object provides information for primary key errors only.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>ConversationID</td><td>xsd:string</td><td>Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID.</td></tr><tr><td>ErrorCode</td><td>xsd:int</td><td>Identifies the error of an API request via a numeric code.</td></tr><tr><td>ErrorMessage</td><td>xsd:string</td><td>Contains a human-readable detailed message that provides more information about the error. For example, row errors for a data extension where rows cannot be found.</td></tr><tr><td>KeyErrors</td><td>DataExtensionError[]</td><td>Specifies errors associated with primary keys during operations involving data extensions. For example, using the wrong characters in the field.</td></tr><tr><td>Object</td><td>APIObject</td><td>Specifies definition of object.</td></tr><tr><td>OrdinalID</td><td>xsd:int</td><td>Defines position of object within an array of information.</td></tr><tr><td>OverallStatusCode</td><td>xsd:string</td><td>Represents overall status of conversation via async API.</td></tr><tr><td>RequestID</td><td>xsd:string</td><td>Unique ID of initial async API call.</td></tr><tr><td>RequestType</td><td>RequestType</td><td>Defines request as synchronous or asynchronous API.</td></tr><tr><td>ResultDetailXML</td><td>xsd:string</td><td>Contains details of operation result in XML format.</td></tr><tr><td>ResultType</td><td>xsd:string</td><td>Defines result as coming from synchronous or asynchronous API.</td></tr><tr><td>StatusCode</td><td>xsd:string</td><td>Status of async API request.</td></tr><tr><td>StatusMessage</td><td>xsd:string</td><td>Describes the status of an API call.</td></tr></tbody></table>