---
title: Describe
---
Use the Describe method to get information about the metadata associated with an object. You could use the Describe method to dynamically build profile centers and track data retrieval interfaces. The Describe method supports a request for object metadata in the form of an ObjectDefinitionRequest and returns a single ObjectDefinition object.

##C# Syntax
```
ObjectDefinition[] describe = Describe(DescribeRequests, RequestID)
```
##Parameters
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>DescribeRequests</td>
<td>ObjectDefinitionRequest</td>
<td>A collection of requests to describe objects.</td>
</tr>
<tr>
<td>RequestID</td>
<td>String</td>
<td>Marketing Cloud's unique identifier for every request.</td>
</tr>
<tr>
<td>ObjectDefinition</td>
<td></td>
<td>Object containing the requested metadata.</td>
</tr>
</tbody>
</table>

##Output
<ul>
<li>PropertyDefinition Object</li>
</ul>

##Related Items
[Describe a Subscriber](describing_a_subscriber.htm)
