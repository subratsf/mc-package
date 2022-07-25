---
title: Schedule
---
Use the Schedule method to schedule an action or event to occur at a specific time. When using the Schedule method as part of an email send definition, you can override certain aspects of the SenderProfile object.

##C# Syntax
```
ScheduleResult[] schedule = Schedule(Options, Action, Schedule1, Interactions, OverallStatus, OverallStatusMessage, RequestID)
```
##Parameters
<table class="table table-hover"><thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Action</td><td>String</td><td>Specifies an action to perform on one or many objects.</td></tr>
<tr><td>Interactions</td><td>APIObject[]</td><td>InteractionBaseObject[]</td></tr>
<tr><td>Options</td><td>ScheduleOptions</td><td>Optionally specifies more processing options.</td></tr>
<tr><td>OverallStatus</td><td>String</td><td>Specifies the overall status of the request.</td></tr>
<tr><td>OverallStatusMessage</td><td>String</td><td>Specifies the overall status message of the request.</td></tr>
<tr><td>RequestID</td><td>String</td><td>Marketing Cloud's unique identifier for every request.</td></tr>
<tr><td>Schedule1</td><td>ScheduleDefinition</td><td>Definition</td></tr></tbody></table>

##Related Items
[SenderProfile Object](senderprofile.htm)
