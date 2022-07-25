---
title: Create
---
Use the Create method to create an individual or batch of objects. Multiple objects can be created with one call.
>Don't use existing objects with the Create method. Adding existing objects to the Create method causes an error.

##C# Syntax
```
CreateResult[] create = Create(Options, Objects, RequestID, OverallStatus)
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
<td>A collection of one or more objects to create. The objects are created in the order they have been acted upon--first in, first out. This array can hold different object types, which allows you to perform complex interactions like creating an email, creating a list, and sending the email, in one call.</td>
</tr>
<tr>
<td>Options</td>
<td>CreateOptions</td>
<td>Optionally specifies [more processing options](createoptions.htm). A CreateOptions instance is required for this parameter. However, no properties need to be defined for the instance.</td>
</tr>
<tr>
<td>RequestID</td>
<td>String</td>
<td>Marketing Cloud's unique identifier for every request. This parameter contains a string value containing an output variable of the key of the request. By default, this value is a Marketing Cloud-generated GUID.</td>
</tr>
</tbody>
</table>

##Output
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>CreateResult</td>
<td>Array</td>
<td>An array of objects holding a list of return values. The objects are returned in the order they are created: first in, first out. This array contains one CreateResult object per input APIObject.</td></tr>
<tr>
<td>OverallStatus</td>
<td>String</td>
<td>A string value containing the overall status of the request. Valid status values include:
<ul>
<li>OK - All objects were successfully created.</li>
<li>Has Error - When creating multiple APIObject objects, this status means that some of the operations failed, while some succeeded.</li>
<li>Error - All create operations failed during validation or processing.</li>
</ul></td>
</tr>
</tbody>
</table>
