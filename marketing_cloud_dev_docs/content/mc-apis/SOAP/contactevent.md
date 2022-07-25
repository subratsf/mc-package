---
title: ContactEvent
---
The ContactEvent object associates information from an event with a contact.

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
			<td>Client</td>
			<td>ClientID</td>
			<td>Defines which account owns the object</td>
		</tr>
		<tr>
			<td>ContactID</td>
			<td>xsd:long</td>
			<td>Unique ID for the contact. You must provide a value for contactKey or contactID if the event links directly to the contact.</td>
		</tr>
		<tr>
			<td>ContactKey</td>
			<td>xsd:string</td>
			<td>Primary address for the contact. You must provide a value for contactKey or contactID if the event links directly to the contact.</td>
		</tr>
		<tr>
			<td>CorrelationID</td>
			<td>xsd:string</td>
			<td>Identifies calls involved in a specific asynchronous process</td>
		</tr>
		<tr>
			<td>CreatedDate</td>
			<td>xsd:dateTime</td>
			<td>Read-only date and time of the object's creation</td>
		</tr>
		<tr>
			<td>CustomerKey</td>
			<td>xsd:string</td>
			<td>User-supplied unique identifier for an object within an object type</td>
		</tr>
		<tr>
			<td>Data</td>
			<td>AttributeSet[]</td>
			<td>Any related data associated with the event, passed in as an AttributeSet. To batch multiple items in a single request, include multiple objects that each contain data. Don't include multiple AttributeSets in one object.</td>
		</tr>
		<tr>
			<td>EventDefinitionKey</td>
			<td>xsd:string</td>
			<td>Value identifying the event that is used to map event data to the data extension.</td>
		</tr>
		<tr>
			<td>ID</td>
			<td>xsd:int</td>
			<td>Read-only legacy identifier for an object. Not supported on all objects</td>
		</tr>
		<tr>
			<td>ModifiedDate</td>
			<td>Nullable</td>
			<td>Indicates the last time object information was modified</td>
		</tr>
		<tr>
			<td>ObjectID</td>
			<td>xsd:string</td>
			<td>System-controlled, read-only text string identifier for object</td>
		</tr>
		<tr>
			<td>ObjectState</td>
			<td>xsd:string</td>
			<td>Reserved for future use</td>
		</tr>
		<tr>
			<td>Owner</td>
			<td>Owner</td>
			<td>Describes account ownership of subscriber in an on-your-behalf account</td>
		</tr>
		<tr>
			<td>PartnerKey</td>
			<td>xsd:string</td>
			<td>Unique identifier provided by partner for an object. This property is accessible only via API.</td>
		</tr>
		<tr>
			<td>PartnerProperties</td>
			<td>APIProperty[]</td>
			<td>A collection of metadata supplied by client and stored by system. This property is accessible only via API.</td>
		</tr>
	</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Associate Event Data with a Contact](associate_event_data_with_a_contact.htm)
