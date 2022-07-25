---
title: Execute
---
Use the Execute method to get access to and execute individual or batches of helper requests. The helper functions provide access to functionality that would be tedious to build using other methods. Requests execute in the order they are added to the ExecuteRequest array.

An ExecuteRequest accepts any number of request parameters. Each request type has a set number of request parameters that are required to make the request work or to configure the request.

##C# Syntax
```
System.String execute = Execute(Requests, RequestID, Results)
```

##Parameters
This method has the following parameters.
<table class="table table-hover"><thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead><tbody>
<tr><td>RequestID</td><td>String</td><td>Marketing Cloud's unique identifier for every request. This parameter requires a null RequestId string. By default, this value is a Marketing Cloud-generated GUID.</td></tr>
<tr><td>Requests</td><td><a href="executerequest.htm" title="ExecuteRequest">ExecuteRequest</a></td><td>An array of ExecuteRequest objects that specify the execution properties for a method. The objects are acted on in the order they have been added. This array can hold different ExecuteRequest types, which allows you to execute complex interactions in one call.</td></tr>
<tr><td>Results</td><td>ExecuteResponse[]&</td><td>The results of a method execution returned as an output parameter.</td></tr></tbody></table>

##Request Types
<ul>
<li><a href="retrieving_the_email_folder_hierarchy.htm" title="Retrieve the Email Folder Hierarchy">GetFolderHierarchy</a> - This method retrieves the email folder hierarchy for an account.</li>
<li>MasterUnsub - Deprecated: Please use the Subscriber Object to unsubscribe a subscriber.</li>
</ul>

##Output
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td><a href="executeresponse.htm" title="ExecuteResponse">ExecuteResponse</a></td>
<td>array</td>
<td>This output contains an array of objects holding a list of return values. The objects are returned in the order they are executed. This array contains one ExecuteResponse object per input ExecuteRequest.</td>
<tr>
<td>OverallStatus</td>
<td>String</td>
<td>A string value containing the overall status of the request. Valid status values include:
<ul>
<li>OK - All requests were successfully executed.</li>
<li>Has Error - When executing multiple APIObject requests, this status code states that some of the operations failed, while some succeeded.</li>
<li>Error - All execute operations failed during validation or processing.</li>
</ul></td>
</tr>
</tbody>
</table>
