---
title: Configure
---
Use the Configure method to configure an account. Like many other SOAP methods, the Configure method accepts an array of objects to act upon and returns one result object for each object in the array. Therefore, a web service client can create one or many subscriber attributes (or property definitions) in one call and receive detailed results for each completed action.

##C# Syntax
```
ConfigureResult[] configure = Configure(Options, Action, Configurations, OverallStatus, OverallStatusMessage, RequestID)
```

##Parameters
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Action</td>
<td>String</td>
<td>Specifies an action to perform on one or many objects. Valid values include: Create, Update, or Delete. Marketing Cloud defines the number of subscriber attributes that you can create for your account when your account is configured. Contact Marketing Cloud to create more subscriber attributes.</td>
</tr>
<tr>
<td>Configurations</td>
<td>APIObject[]</td>
<td>A collection of account configurations.</td>
</tr>
<tr>
<td>Options</td>
<td>ConfigureOptions</td>
<td>Optionally specifies more processing options.</td>
</tr>
<tr>
<td>OverallStatus</td>
<td>String</td>
<td>Specifies the overall status of the request. Valid values include:
<ul><li>OK - All objects were successfully configured.</li>
<li>Has Error - When configuring multiple APIObject objects, this status means that some of the operations failed, while some succeeded.</li>
<li>Error - All configure operations failed during validation or processing.</li>
<li>MoreDataAvailable</li><li>UnsupportedAsyncOperation</li></ul></td>
</tr>
<tr>
<td>OverallStatusMessage</td>
<td>String</td>
<td>Specifies the overall status message of the request.</td>
</tr>
<tr>
<td>RequestID</td>
<td>String</td>
<td>Marketing Cloud's unique identifier for every request.</td>
</tr>
</tbody>
</table>

##Related Items
[Create a Subscriber Attribute Using Configure Method](creating_a_subscriber_attribute.htm)
