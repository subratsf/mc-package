---
title: GetSystemStatus
---
Use the GetSystemStatus method to retrieve the status of your Marketing Cloud account. Use this method only during exception handling or as the first Marketing Cloud SOAP API call.
>Do not use this method before every API call or at intervals less than 60 seconds. When troubleshooting, we recommend running this method every 10 minutes.

##C# Syntax
```
SystemStatusResult[] getsystemstatus = GetSystemStatus(Options, OverallStatus, OverallStatusMessage, RequestID)
```

##Parameters
<table class="table table-hover"><thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead><tbody>
<tr><td>Options</td><td>SystemStatusOptions</td><td>Optionally specifies more processing options</td></tr>
<tr><td>OverallStatus</td><td>String</td><td>Specifies the overall status of the request.</td></tr>
<tr><td>OverallStatusMessage</td><td>String</td><td>Specifies the overall status message of the request.</td></tr>
<tr><td>RequestID</td><td>String</td><td>Marketing Cloud's unique identifier for every request.</td></tr>
</tbody></table>

##Output
This method returns an array of SystemStatusResult objects.
<ul>
<li>If the SystemStatusResult SystemStatus property equals <strong>OK</strong>, no action is required.</li>
<li>If the SystemStatusResult SystemStatus property equals <strong>InMaintenance</strong>, place your application in queue mode and periodically make the GetSystemStatus call until the status returns to OK.</li>
<li>If the SystemStatusResult SystemStatus property equals <strong>UnplannedOutage</strong>, place your application in queue mode, contact Marketing Cloud, and periodically make the GetSystemStatus call until the status returns to OK.</li>
</ul>

To understand and act on the system status of Marketing Cloud, we recommend you have the following elements:
<ul>
<li>A global Marketing Cloud status container in your application. This container can allow your application to change code paths to ensure that all messages are stored while waiting for Marketing Cloud's status to return to OK. If the global status container contains an InMaintenance or UnplannedOutage status, wait for the scheduled status checking component to update the global status container to the OK status.</li>
<li>A scheduled status checking component in your software, so it can respond to error situations and update the global status container if the status is different.</li>
</ul>
