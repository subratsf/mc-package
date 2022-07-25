---
title: Delete
---
Use the Delete method to delete objects individually or in batches. Multiple object types can be deleted with one call. Objects are deleted in the order they are added to the APIObject array.
>If no objects match the delete criteria, the call does not return an error (similar to a SQL delete call).

##C# Syntax
```
DeleteResult[] delete = Delete(Options, Objects, RequestID, OverallStatus)</p>
```
##Parameters
<table class="table table-hover"><thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Objects</td><td>APIObject[]</td><td>A collection of one or more objects to delete. The objects are deleted in the order they have been acted upon: first in, first out. This array can hold different object types, which allows you to perform complex interactions like deleting an account and two emails, in one call.</td></tr>
<tr><td>Options</td><td>DeleteOptions</td><td>Optionally specifies [more processing options](deleteoptions.htm). A DeleteOptions instance is required for this parameter. However, no properties need to be defined for the instance.</td></tr>
<tr><td>OverallStatus</td><td>String</td><td>Specifies the overall status of the request. Valid status values include:
<ul>
<li>OK - This status code states that all objects were successfully deleted.</li>
<li>Has Error - Valid for Delete method calls with multiple APIObject objects, this status code states that some of the operations failed, while some succeeded.</li>
<li>Error - This status code states that all delete operations failed during validation or processing.</li>
</ul></td></tr>
<tr><td>RequestID</td><td>String</td><td>Marketing Cloud's unique identifier for every request. This string contains an output variable of the key of the request. By default, this value is a Marketing Cloud generated GUID.</td></tr>
</tbody></table>

##Output
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>DeleteResult</td>
<td>Array</td>
<td>An array of objects holding a list of return values. The objects are returned in the order they are deleted: first in, first out. This array contains one DeleteResult object per input APIObject.</td></tr>
</tbody>
</table>

##Related Items
* [Delete a Data Extension](deleting_a_data_extension_object.htm)
* [Delete a Row from a Data Extension](deleting_a_row_from_a_data_extension_via_the_web_service_api.htm)
* [Delete a Subscriber List](deleting_a_subscriber_list.htm)
* [Delete a Subscriber Profile Attribute](deleting_a_subscriber_profile_attribute.htm)
