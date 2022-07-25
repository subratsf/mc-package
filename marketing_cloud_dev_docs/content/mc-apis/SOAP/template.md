---
title: Template
---

<div class="alert">Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.</div>

The Template object represents an email template in Marketing Cloud.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>ActiveFlag</td>
<td>xsd:int</td>
<td>Indicates whether the template is available for use within the account. Valid values include:<ul>
<li>0 - Not active</li>
<li>1 - Active</li>
</ul></td>
</tr>
<tr>
<td>Align</td>
<td>xsd:string</td>
<td>Indicates the alignment of elements within the template.</td>
</tr>
<tr>
<td>BackgroundColor</td>
<td>xsd:string</td>
<td>Specifies background color used for template.</td>
</tr>
<tr>
<td>BorderColor</td>
<td>xsd:string</td>
<td>Specifies border color used in template.</td>
</tr>
<tr>
<td>BorderWidth</td>
<td>xsd:int</td>
<td>Specifies border pixel width used in template.</td>
</tr>
<tr>
<td>CategoryID</td>
<td>xsd:int</td>
<td>Indicates whether content validation has completed for this email message.</td>
</tr>
<tr>
<td>CategoryType</td>
<td>xsd:string</td>
<td>Identifies correlation of objects across several requests.</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>Cellpadding</td>
<td>xsd:int</td>
<td>Specifies pixel width of padding within cells used in template.</td>
</tr>
<tr>
<td>Cellspacing</td>
<td>xsd:int</td>
<td>Specifies pixel spacing between cells used in template.</td>
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
<td>HeaderContent</td>
<td>ContentArea</td>
<td>Contains content used in header of template.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only legacy identifier for an object. Not supported on all objects.</td>
</tr>
<tr>
<td>IsTemplateSubjectLocked</td>
<td>xsd:boolean</td>
<td>Indicates whether the subject defined in the header can be changed or not by email using template.</td>
</tr>
<tr>
<td>Layout</td>
<td>Layout</td>
<td>Specifies how elements within template are laid out, including content areas.</td>
</tr>
<tr>
<td>LayoutHTML</td>
<td>xsd:string</td>
<td>Contains HTML used to define layout of fields and content within template.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable'1</td>
<td>Last time object information was modified.</td>
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
<td>OwnerID</td>
<td>xsd:int</td>
<td>Specifies MID of business unit that created the template within an Enterprise 2.0 account.</td>
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
<td>PreHeader</td>
<td>xsd:string</td>
<td>Contains text used in preheader of email message on mobile devices.</td>
</tr>
<tr>
<td>TemplateName</td>
<td>xsd:string</td>
<td>Name used to identify template within Marketing Cloud application.</td>
</tr>
<tr>
<td>TemplateSubject</td>
<td>xsd:string</td>
<td>Contains email subject line specified by the template.</td>
</tr>
<tr>
<td>Width</td>
<td>xsd:int</td>
<td>Specifies the pixel width of the entire template</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
