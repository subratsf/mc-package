---
title: Retrieve
---
Use the Retrieve method to return a single object type. This method retrieves only the specified object properties for properties that have values. Apply filters to ensure that you get only relevant results.

##C# Syntax
```
System.String retrieve = Retrieve(RetrieveRequest, RequestID, Results)
```

##Parameters
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>RequestID</td>
<td>String</td>
<td>Marketing Cloud's unique identifier for every request. This parameter contains a string value containing an output variable of the key of the request. By default, this value is a Marketing Cloud-generated GUID.</td>
</tr>
<tr>
<td>Results</td>
<td>APIObject[]&</td>
<td>A collection of one or more objects to retrieve. This array contains one APIObjects object for each object that meets the retrieve criteria. To use the APIObject, cast the object into the object type specified in the string value of the ObjectType property. Then you are able to access the properties of the strongly typed object defined by the Properties property.</td>
</tr>
<tr>
<td>RetrieveRequest</td>
<td>RetrieveRequest</td>
<td>Specifies a request to retrieve data. A RetrieveRequest instance is required for this parameter.</td>
</tr>
</tbody>
</table>

##Output
OverallStatus - A string value containing the overall status of the request. Valid status values include:
<ul>
<li>OK - All objects were successfully retrieved.</li>
<li>Error - this status means that an error occurred during the retrieve option. The first step to resolve this error is to verify the value of the Properties property.</li>
<li>MoreDataAvailable - this status means that more data is available for the RetrieveRequest. A RetrieveRequest returning more than 2500 records has this status.</li>
</ul>
