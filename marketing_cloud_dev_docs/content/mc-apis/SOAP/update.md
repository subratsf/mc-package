---
title: Update
---
Use the Update method to update an individual object or batch of objects. Multiple object types can be updated with one call.
>Don't use the Update method to create new objects. Creating new objects using the Update method causes an error.

##C# Syntax
```
UpdateResult[] update = Update(Options, Objects, RequestID, OverallStatus)
```

##Parameters
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Objects</td>
<td>APIObject[]</td>
<td>A collection of one or more objects to update. The objects are updated in the order they have been acted upon: first in, first out. This array can hold different object types, which allows you to perform complex interactions, like updating an email, a list, and an email, in one call.</td>
</tr>
<tr>
<td>Options</td>
<td>UpdateOptions</td>
<td>Optionally specifies [more processing options](updateoptions.htm). An UpdateOptions instance is required for this parameter. However, no properties need to be defined for the instance.</td>
</tr>
<tr>
<td>OverallStatus</td>
<td>String</td>
<td>Specifies the overall status of the request. Valid status values include:
<ul>
<li>OK - All objects were updated successfully.</li>
<li>Has Error - When updating multiple APIObject objects, this status means that some of the operations failed, while some succeeded.</li>
<li>Error - All update operations failed during validation or processing.</li>
</ul></td>
</tr>
<tr>
<td>RequestID</td>
<td>String</td>
<td>Marketing Cloud's unique identifier for every request.</td>
</tr>
</tbody>
</table>

##Output
<ul>
<li>UpdateResult - An array of objects holding a list of return values. The objects are returned in the order acted upon: first in, first out. This array contains one UpdateResult object per input APIObject.</li>
</ul>
