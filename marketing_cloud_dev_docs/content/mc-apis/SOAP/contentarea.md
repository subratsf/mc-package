---
title: ContentArea
---

<div class="alert">Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.</div>

The ContentArea object represents a defined section of reusable content. One or many ContentAreas can be defined for an Email object. A ContentArea is always acted upon in the context of an Email object.

##Properties
<table class="table table-hover">
	<thead align="left">
		<tr>
			<th>Name</th>
			<th>Data Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>BackgroundColor</td>
			<td>xsd:string</td>
			<td>Indicates background color of content area</td>
		</tr>
		<tr>
			<td>BorderColor</td>
			<td>xsd:string</td>
			<td>Indicates color of border surrounding content area</td>
		</tr>
		<tr>
			<td>BorderWidth</td>
			<td>xsd:int</td>
			<td>Indicates pixel width of border surrounding content area</td>
		</tr>
		<tr>
			<td>CategoryID</td>
			<td>xsd:int</td>
			<td>Specifies the identifier of the folder.</td>
		</tr>
		<tr>
			<td>Cellpadding</td>
			<td>xsd:int</td>
			<td>Indicates pixel value of padding around content area</td>
		</tr>
		<tr>
			<td>Cellspacing</td>
			<td>xsd:int</td>
			<td>Indicates pixel value of spacing for content area</td>
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
			<td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td>
		</tr>
		<tr>
			<td>FontFamily</td>
			<td>xsd:string</td>
			<td>Indicates font family used in content area</td>
		</tr>
		<tr>
			<td>HasFontSize</td>
			<td>xsd:boolean</td>
			<td>Indicates whether the content area includes a specified font size or not</td>
		</tr>
		<tr>
			<td>ID</td>
			<td>xsd:int</td>
			<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
		</tr>
		<tr>
			<td>IsBlank</td>
			<td>xsd:boolean</td>
			<td>Indicates if specified content area contains no content.</td>
		</tr>
		<tr>
			<td>IsDynamicContent</td>
			<td>xsd:boolean</td>
			<td>Indicates if specific content area contains dynamic content.</td>
		</tr>
		<tr>
			<td>IsLocked</td>
			<td>xsd:boolean</td>
			<td>Indicates if specific email content area within an Enterprise or Enterprise 2.0 account is locked and cannot be changed by subaccounts.</td>
		</tr>
		<tr>
			<td>IsSurvey</td>
			<td>xsd:boolean</td>
			<td>Indicates whether a specific content area contains survey questions.</td>
		</tr>
		<tr>
			<td>Key</td>
			<td>xsd:string</td>
			<td>Specifies key associated with content area in HTML body. Relates to the Email object via a custom type.</td>
		</tr>
		<tr>
			<td>Layout</td>
			<td>LayoutType</td>
			<td>Indicates layout type of content area. Valid values include:
			<ul>
				<li>HTMLWrapped</li>
				<li>RawText</li>
				<li>SMS</li>
			</ul>
			The layout value <samp class="codeph nolang">HTMLWrapped</samp> displays as a Free Form orientation content area in the UI. The value RawText displays as HTML Only.</td>
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
			<td>Width</td>
			<td>xsd:int</td>
			<td>Indicates pixel width of content area</td>
		</tr>
	</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
