---
title: Portfolio
---
<div class="alert">Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.</div>

The Portfolio object indicates a file within the Portfolio of a Marketing Cloud account. You cannot upload a Portfolio item with the same name as a previously deleted Portfolio item. The application retains the old file and filename in case the Portfolio image remains in use by an existing email campaign. To replace that file with a new file of the same name, set the SaveOptions on your call to UpdateAdd.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>CacheClearTime</td>
<td>xsd:dateTime</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>CategoryID</td>
<td>xsd:int</td>
<td>Specifies the identifier of the folder. This property defaults to media. In Enterprise 2.0 accounts, you can define a folder as shared or private. Valid values include:
<ul>
<li>shared_portfolio</li>
<li>media</li>
</ul></td>
</tr>
<tr>
<td>CategoryType</td>
<td>xsd:string</td>
<td>Defines whether a folder within a Portfolio is shared to other account users or not.</td>
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
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>DisplayName</td>
<td>xsd:string</td>
<td>Name to be displayed for an item within a Portfolio.</td>
</tr>
<tr>
<td>FileHeightPX</td>
<td>xsd:int</td>
<td>Specifies height of image contained in Portfolio (read-only value)</td>
</tr>
<tr>
<td>FileName</td>
<td>xsd:string</td>
<td>Indicates name of file associated with the object.</td>
</tr>
<tr>
<td>FileSizeKB</td>
<td>xsd:int</td>
<td>Specifies file size of a Portfolio item (read-only).</td>
</tr>
<tr>
<td>FileURL</td>
<td>xsd:string</td>
<td>Specifies the URL at which a Portfolio file is stored.</td>
</tr>
<tr>
<td>FileWidthPX</td>
<td>xsd:int</td>
<td>Specifies the width of a Portfolio image in pixels (read-only).</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>IsActive</td>
<td>xsd:boolean</td>
<td>Specifies whether the object is active</td>
</tr>
<tr>
<td>IsUploaded</td>
<td>xsd:boolean</td>
<td>Indicates whether the Portfolio object in question was uploaded. A value of true indicates an uploaded Portfolio object.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified.</td>
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
<td>Source</td>
<td>ResourceSpecification</td>
<td>Defines source of Portfolio object. Source information includes the URN and authentication.</td>
</tr>
<tr>
<td>ThumbSizeKB</td>
<td>xsd:int</td>
<td>Indicates size of a thumbnail image associated with a Portfolio object.</td>
</tr>
<tr>
<td>ThumbURL</td>
<td>xsd:string</td>
<td>Indicates URL of a thumbnail image associated with a Portfolio object.</td>
</tr>
<tr>
<td>TypeDescription</td>
<td>xsd:string</td>
<td>Describes type for a Portfolio object.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
* [SaveOptions Object](saveoptions.htm)
* [UpdateAdd Object](updateadd.htm)
* <a href="copying_an_image_from_a_website_into_the_portfolio.htm" title="Copying_an_Image_from_a_Website_into_the_Portfolio">Copy an Image from a Website into the Portfolio</a>
* <a href="creating_a_portfolio_object_via_the_web_service_api.htm" title="Creating_A_Portfolio_Object_Via_the_Web_Service_API">Create a Portfolio Object</a>
