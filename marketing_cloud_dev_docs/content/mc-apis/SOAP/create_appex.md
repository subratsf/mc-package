---
title: Create
---
Creates an individual object or a batch of objects.

###Parameters
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
<td>Objects</td>
<td>APIObject[]</td>
<td>A collection of objects.</td>
</tr>
<tr>
<td>Options</td>
<td>UpdateOptions</td>
<td>Optionally specifies processing options.</td>
</tr>
<tr>
<td>OverallStatus</td>
<td>String</td>
<td>Specifies the overall status of the request.</td>
</tr>
<tr>
<td>RequestID</td>
<td>String</td>
<td>Marketing Cloud's unique identifier for every request.</td>
</tr>
</tbody>
</table>

###Description
The Create method allows objects to be created-individually or in batches. Multiple object types can be created with one call. Objects are created when they are added to the APIObject array.

###Input 
<ul> <li>CreateOptions - A CreateOptions instance is required for this parameter, but you don't need to define properties for the instance.</li> <li>APIObjects - An array of objects to be acted upon. The objects are acted on in the order they have been added - first in, first out. This array can hold different object types. Therefore, complex interactions like creating an email, creating a list, and sending the email can be accomplished in one call.</li> <li>RequestID - This parameter contains a string value containing an output variable of the key of the request. By default, this value is a Marketing Cloud generated GUID (Globally Unique Identifier).</li> <li>OverallStatus - This parameter returns a string value containing the overall status of the request. Valid status values include: <ul> <li>OK - This status code states that all objects were successfully created.</li> <li>Has Error -Valid for Create method calls with multiple APIObject objects, this status code states that some of the operations failed, while some succeeded.</li> <li>Error - This status code states that all create operations failed during validation or processing.</li> </ul> </li> </ul>

Don't use existing objects with the Create method. Adding existing objects to the Create method causes the overall status to Has Error or Error.

###Output
<ul><li>CreateResult - An array of objects holding a list of return values. The objects are returned in the order acted upon: first in, first out. This array contains one CreateResult object per input APIObject.</li> </ul> 