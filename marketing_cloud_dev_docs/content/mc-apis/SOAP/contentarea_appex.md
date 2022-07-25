---
title: ContentArea
---
<p>ContentArea represents a defined section of reusable content. One or many ContentAreas can be defined for an Email object. A ContentArea is always acted upon in the context of an Email object.</p>
 
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
<td>Content</td>
<td>xsd:string</td>
<td>Identifies content contained in a content area.</td>
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
<td>ID</td>
<td>xsd:int</td>
<td>Read-only legacy identifier for an object. Not supported on all objects.</td>
</tr>
<tr>
<td>IsBlank</td>
<td>xsd:boolean</td>
<td>Indicates if specified content area contains no content.</td>
</tr><tr>
<td>IsDynamicContent</td>
<td>xsd:boolean</td>
<td>Indicates if specific content area contains dynamic content.</td>
</tr>
<tr>
<td>IsSurvey</td>
<td>xsd:boolean</td>
<td>Indicates whether a specific content area contains survey questions.</td>
</tr><tr>
<td>Key</td>
<td>xsd:string</td>
<td>Specifies key associated with content area in HTML body.</td>
</tr>
<tr>
<td>Layout</td>
<td></td>
<td>Indicates layout type of content area.</td>
</tr><tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Last time object information was modified.</td>
</tr>
<tr>
<td>Name</td>
<td>xsd:string</td>
<td>Name of the object or property.</td>
</tr><tr>
<td>ObjectID</td>
<td>xsd:string</td>
<td>System-controlled, read-only text string identifier for object.</td>
</tr>
<tr>
<td>Owner</td>
<td>Owner</td>
<td>Describes account ownership of subscriber in an on-your-behalf account.</td>
</tr><tr>
<td>PartnerKey</td>
<td>xsd:string</td>
<td>Unique identifier provided by partner for an object. This property is accessible only via API.</td>
</tr>
<tr>
<td>PartnerProperties</td>
<td>APIProperty[]</td>
<td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td>
</tr></tbody>
</table>