---
title: Email
---
<div class="alert">Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.</div>

The Email object represents an email in Marketing Cloud.
* To create or update an Email with PreHeader populated, you need the Email | Content | Email | PreHeaderAccess permission.
* To create or update an Email with ClonedFromID populated, you need the Email | Content | Simple Automated Email | Create From Existing Email permission.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>CategoryID</td>
<td>xsd:int</td>
<td>Specifies the identifier of the folder containing the email.</td>
</tr>
<tr>
<td>CharacterSet</td>
<td>xsd:string</td>
<td>Indicates encoding used in an email message. Valid values include:
<ul>
<li><strong>us-ascii</strong> (United States)</li>
<li><strong>shift-jis</strong> (Japanese)</li>
<li><strong>EUC-KR</strong> (Korean)</li>
<li><strong>iso-8859-1</strong> (Western European)</li>
<li><strong>big5</strong> (Chinese)</li>
<li><strong>koi8-r</strong> (Russian)</li>
<li><strong>utf-8</strong> (Unicode)</li>
<li><strong>iso-2022-JP</strong> (Japanese)</li>
<li><strong>iso-8859-2</strong> (Central European)</li>
<li><strong>ISO-8859-11</strong> (Thai)</li>
<li><strong>GB2312</strong> (Simplified Chinese)</li>
<li><strong>iso-8859-6</strong> (Arabic)</li>
</ul></td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>ClonedFromID</td>
<td>xsd:int</td>
<td>ID of email message from which the specified email message was created.</td>
</tr>
<tr>
<td>ContentAreas</td>
<td>ContentArea[]</td>
<td>Contains information on content areas included in an email message.</td>
</tr>
<tr>
<td>ContentCheckStatus</td>
<td>xsd:string</td>
<td>Indicates whether content validation has completed for this email message.</td>
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
<td>EmailType</td>
<td>xsd:string</td>
<td>Defines preferred email type.</td>
</tr>
<tr>
<td>Folder</td>
<td>xsd:string</td>
<td>Specifies folder information (Retrieve only) - Deprecated.</td>
</tr>
<tr>
<td>HasDynamicSubjectLine</td>
<td>xsd:boolean</td>
<td>Indicates whether email message contains a dynamic subject line.</td>
</tr>
<tr>
<td>HTMLBody</td>
<td>xsd:string</td>
<td>Contains HTML body of an email message.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>IsActive</td>
<td>xsd:boolean</td>
<td>Specifies whether the object is active.</td>
</tr>
<tr>
<td>IsHTMLPaste</td>
<td>xsd:boolean</td>
<td>Indicates whether email message was created via pasted HTML.</td>
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
<td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.Pre</td>
</tr>
<tr>
<td>PreHeader</td>
<td>xsd:string</td>
<td>Contains text used in preheader of email message on mobile devices.</td>
</tr>
<tr>
<td>Status</td>
<td>xsd:string</td>
<td>Defines status of object. Status of an address.</td>
</tr>
<tr>
<td>Subject</td>
<td>xsd:string</td>
<td>Contains subject area information for a message.</td>
</tr>
<tr>
<td>SyncTextWithHTML</td>
<td>xsd:boolean</td>
<td>Makes the text version of an email contain the same content as the HTML version.</td>
</tr>
<tr>
<td>TextBody</td>
<td>xsd:string</td>
<td>Contains raw text body of a message.</td>
</tr>
<tr>
<td>&#95;&#95;AdditionalEmailAttribute1</td>
<td>xsd:string</td>
<td>Optional field that lets you specify up to five email attributes on CREATE or RETRIEVE calls. Used to capture analytics or other metadata. Additional attributes are &#95;&#95;AdditionalEmailAttribute 2, &#95;&#95;AdditionalEmailAttribute3, and so on.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
* [Analytics Strings in Help](https://help.salesforce.com/articleView?id=mc_es_available_personalization_strings.htm&type=5)
* [Create a Text-Only Email](creating_a_text_only_email_via_the_web_service_api.htm)
* [Create a Triggered Send Email Campaign Workflow](creating_a_triggered_email_campaign_workflow.htm)
* [Create an Email](creating_an_email_via_the_web_service_api.htm)
