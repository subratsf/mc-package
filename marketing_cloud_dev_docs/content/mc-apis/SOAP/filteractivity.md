---
title: FilterActivity
---
The FilterActivity object applies the logic of a data filter to a subscriber list you select to create a group of subscribers who satisfy the filter criteria.
* To create a FilterActivity where the SourceTypeID is the SubscriberList and SourceObjectID is the All Subs List Object ID, you need the Email | Subscribers | All Subscribers | View permission.
* To start a FilterActivity using the perform method, you need the Interactions | Activities | Filter | Start permission.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>FilterActivityID</td>
<td>xsd:string</td>
<td>Specifies the ID of the filter activity.</td>
</tr>
<tr>
<td>FilterDefinitionID</td>
<td>xsd:string</td>
<td>Specifies the related filter definition ID for the filter activity.</td>
</tr>
<tr>
<td>DestinationObjectID</td>
<td>Specifies the ID of the destination object for the filtered data.</td>
<td>xsd:string</td>
</tr>
<tr>
<td>DestinationTypeID</td>
<td>xsd:int</td>
<td>Specifies the type of destination object for the filtered data using one of the following values.<ul><li>SubscriberList = 1</li><li>DataExtension = 2</li><li>GroupWizard = 3</li><li>BehavioralData = 4</li></ul></td>
</tr>
<tr>
<td>SourceObjectID</td>
<td>xsd:string</td>
<td>Specifies the ID of the source object used to filter on.</td>
</tr>
<tr>
<td>SourceTypeID</td>
<td>xsd:int</td>
<td>Specifies the type of source object used to filter on using one of the following values.<ul><li>SubscriberList = 1</li><li>DataExtension = 2</li><li>GroupWizard = 3</li><li>BehavioralData = 4</li></ul></td>
</tr>
<tr>
<td>OwnerID</td>
<td>xsd:string</td>
<td>Specifies the user ID that owns the filter activity.</td>
</tr>
<tr>
<td>StatusID</td>
<td>xsd:string</td>
<td>Determines whether the filter activity is deleted. 1 means the filter activity was not deleted and is still active. 0 indicates it was deleted.</td>
</tr>
<tr>
<td>CreatedBy</td>
<td>tns:ClientID</td>
<td>Specifies the user ID that created the filter activity.</td>
</tr>
<tr>
<td>ModifiedBy</td>
<td>tns:ClientID</td>
<td>Specifies the user ID that last modified the filter activity.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Apply Filter to Subscriber List](apply_filteractivity.htm)
