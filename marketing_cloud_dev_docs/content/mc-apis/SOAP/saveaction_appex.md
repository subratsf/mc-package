---
title: SaveAction
---
<p>Defines how upsert acts on nested objects for create and update methods.</p>
<p>You can apply SaveAction to Subscriber, List, DataExtension, and Send objects.</p>

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
<td>AddOnly</td>
<td>SaveAction</td>
<td>Indicates that data is only added and not updated during a save action.</td>
</tr>
<tr>
<td>Default</td>
<td>SaveAction</td>
<td>Use the default action when saving an object.</td>
</tr>
<tr>
<td>Delete</td>
<td>SaveAction</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>Nothing</td>
<td>SaveAction</td>
<td>Indicates that nothing is saved.</td>
</tr>
<tr>
<td>UpdateAdd</td>
<td>SaveAction</td>
<td>Indicates an UpdateAdd type for a save action.</td>
</tr>
<tr>
<td>UpdateOnly</td>
<td>SaveAction</td>
<td>Indicates an UpdateOnly type for a save action.</td>
</tr>
</tbody>
</table>

##Related Items
* [Create Method](create_appex.htm)
* [Update Method](update_appex.htm)
* [Subscriber Object](subscriber_appex.htm)
* [List Object](list_appex.htm)
* [DataExtension Object](dataextension.htm)
* [Send Object](send.htm)
