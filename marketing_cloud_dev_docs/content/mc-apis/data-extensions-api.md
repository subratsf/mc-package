---
title: Data Extensions Async API
---
The Marketing Cloud REST API supports the ability to persist data into an identified data extension asynchronously.

##Prerequisites

To use the Data Extensions Async APIs, complete the Marketing Cloud API authentication process.

1. To get a client ID and secret, create an installed package with an API Integration component.
2. Using the above credentials, get an OAuth access token for authenticating your API calls.
3. Use the access token in the header to authenticate each subsequent call.

##API Specification
<table class="table table-hover">
<thead align="left">
<tr>
<th>HTTP Method</th>
<th>Resource</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<td>POST</td>
<td>[/data/v1/async/dataextensions/{id}/rows or /data/v1/async/dataextensions/key:{key}/rows](insertDataExtensionIDAsync.htm)</td>
<td>Asynchronously insert data into an identified data extension by id or key, where id is the unique identifier of the data extension and key is the external key (customer key) of the data extension.</td>
</tr>
<tr>
<td>PUT</td>
<td>[/data/v1/async/dataextensions/{id}/rows or /data/v1/async/dataextensions/key:{key}/rows](updateDataExtensionIDAsync.htm)</td>
<td>Asynchronously upsert data into an identified data extension by id or key, where id is the unique identifier of the data extension and key is the external key (customer key) of the data extension.</td>
</tr>
<tr>
<td>GET</td>
<td>[/data/v1/async/{requestid}/status](getStatusDataExtensionAsync.htm)</td>
<td>Retrieve the status of the originally posted asynchronous request. Use the status to determine if the request has completed and whether or not there were errors in processing.</td>
</tr>
<tr>
<td>GET</td>
<td>[/data/v1/async/{requestid}/results](getResultsDataExtensionAsync.htm)</td>
<td>Once the request has been picked up by the asynchronous framework and passed off to the appropriate service for processing, use this resource to retrieve the results of that service operation.</td>
</tr>
</tbody>
</table>

##Related Items
* [When to Use Asynchronous Processing](asynchronous_processing_scenarios.htm)
