---
title: SaveAction
---
The SaveAction object defines how upsert acts on nested objects for Create and Update methods. You can apply SaveAction to Subscriber, List, DataExtension, Role, and Send objects.

The Default property indicates whether the object uses the default action when saving an object. In general, the default action is the same as the method being called. If the Create method is called, the object is inserted into the system if it does not exist. If it does exist, an error returns stating that the object already exists. If the Update method is called, the object is updated in the system if it already exists. If it does not exist, an error returns stating that the object does not exist.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AddOnly</td>
<td>Enumeration</td>
<td>Indicates that data is only added and not updated during a save action.</td>
</tr>
<tr>
<td>Default</td>
<td>Enumeration</td>
<td>Specifies default source of salutation when building an email (SalutationSourceEnum). Use the default action when saving an object. (SaveAction)</td>
</tr>
<tr>
<td>Delete</td>
<td>Enumeration</td>
<td>Indicates whether an object is deleted.</td>
</tr>
<tr>
<td>Nothing</td>
<td>Enumeration</td>
<td>Indicates that nothing is saved.</td>
</tr>
<tr>
<td>UpdateAdd</td>
<td>Enumeration</td>
<td>Indicates an UpdateAdd type for a save action. If this property is specified, the save action updates existing information and adds new information.</td>
</tr>
<tr>
<td>UpdateOnly</td>
<td>Enumeration</td>
<td>Indicates an UpdateOnly type for a save action. If this property is specified, the save action with update existing information only.</td>
</tr>
</tbody>
</table>

##Related Items
* [Subscriber Object](subscriber.htm)
* [List Object](list.htm)
* [DataExtension Object](dataextension.htm)
* [Role Object](role.htm)
* [Send Object](send.htm)
