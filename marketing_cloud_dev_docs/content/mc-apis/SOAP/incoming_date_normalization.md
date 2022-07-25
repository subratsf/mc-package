---
title: Incoming Date Normalization
---
<p>This page contains information about the normalization of incoming dates and times to the server time through a SOAP message on the API.</p>

##Date and Time Format
The Marketing Cloud application normalizes the following three date and time formats represented in a SOAP message:
<table class="table table-hover">
<thead align="left">
<tr><th>Format</th><th>Example</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>yyyy-MM-ddTHH:mm:ddZ</td>
<td>2009-08-21T18:32:15Z</td>
<td>UTC format</td>
</tr>
<tr>
<td>yyyy-MM-ddTHH:mm:dd</td>
<td>2009-08-21T14:32:15</td>
<td>Unknown timezone, considered to be the server time</td>
</tr>
<tr>
<td>yyyy-MM-ddTHH:mm:dd-zz:zz</td>
<td>2009-08-21T12:02:15-06:30</td>
<td>Time offset from UTC by specified amount</td>
</tr>
</tbody>
</table>
<p>All three of the times listed above refer to the same point in time on the server.</p>

##Methods and Parameters Affected by Normalization
<p>The time normalization applies to the following methods and parameters. The API searches for properties with a type of DateTime in any objects passed in through these parameters. The API then normalizes any time formats found, and this normalization applies recursively to any nested objects.</p>
<ul>
<li><a href="create.htm" title="Create">Create</a>: Options and Objects</li>
<li><a href="retrieve.htm" title="Retrieve">Retrieve</a>: RetrieveRequest</li>
<li><a href="update.htm" title="Update">Update</a>: Options and Objects</li>
<li><a href="delete.htm" title="Delete">Delete</a>: Options and Objects</li>
<li><a href="query.htm" title="Query">Query</a>: QueryRequest</li>
<li><a href="execute.htm" title="Execute">Execute</a>: Requests</li>
<li><a href="extract.htm" title="Extract">Extract</a>: Requests</li>
<li><a href="perform.htm" title="Perform">Perform</a>: Options and Definitions</li>
<li><a href="configure.htm" title="Configure">Configure</a>: Options and Configurations</li>
<li><a href="schedule.htm" title="Schedule">Schedule</a>: Options, Schedule, and Interactions</li>
</ul>
<p>Any response including the incoming request object presents a different time in that response. For example, the CreateResult object on a Create call contains the object from the request and presents any dates in the returned object in server time.</p>
<p>If normalization causes problems for your SOAP API implementation, contact your Marketing Cloud representative to disable this feature.</p>

##Related Items
[CreateResult Object](createresult.htm)
