---
title: SalesforceSend
---
<p>Defines a single instance of an email send using Salesforce information.</p>
 
###Properties
<table class="table table-hover">
<thead align="left">
<tr>
<td>Name</td>
<td>Data Type</td>
<td>Description</td>
</tr>
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
<td>User-supplied unique identifier for an object within an object type.</td>
</tr>
<tr>
<td>Email</td>
<td>Email</td>
<td>Default email address for object.</td>
</tr>
<tr>
<td>Exclusions</td>
<td>Target[]</td>
<td>Definition.</td>
</tr>
<tr>
<td>FromAddress</td>
<td>xsd:string</td>
<td>Indicates From address associated with a object.</td>
</tr>
<tr>
<td>FromName</td>
<td>xsd:string</td>
<td>Specifies the default email message From Name.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only legacy identifier for an object. Not supported on all objects.</td>
</tr>
<tr>
<td>IndividualResults</td>
<td>xsd:boolean</td>
<td>Indicates whether individual email results show in a Salesforce instance.</td>
</tr>
<tr>
<td>IsMultipart</td>
<td>xsd:boolean</td>
<td>Indicates whether the email is sent with Multipart/MIME enabled.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Last time object information was modified.</td>
</tr>
<tr>
<td>ObjectID</td>
<td>xsd:string</td>
<td>System-controlled, read-only text string identifier for object.</td>
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
<td>SendDate</td>
<td>xsd:dateTime</td>
<td>Indicates the date on which a send occurred.</td>
</tr>
<tr>
<td>Subject</td>
<td>xsd:string</td>
<td>Contains subject area information for a message.</td>
</tr>
<tr>
<td>Targets</td>
<td>Target[]</td>
<td>Identifies the targets used as part of a Salesforce send.</td>
</tr>
</tbody>
</table>