---
title: Use the Send API
---

You must complete the Marketing Cloud API authentication process with a valid Marketing Cloud account before scheduling a Send using the Send API. This process requires calls to services outside of the Send API to retrieve a list of email messages and send classifications and the client-side logic for your send. The following process flow diagram represents each call using in your overall development effort (both prerequisite calls and calls to the Send API).
    <img src="images/SFSendAPISampleProcessFlow.jpg" class="img-responsive" style="margin: 25px 0;" />

##Prerequisites

To use this API, your Marketing Cloud user must already be integrated with the Sales Cloud.

#### Authenticate

To use the Send APIs, complete the Marketing Cloud API authentication process.

1. To get a client ID and secret, create an installed package with an API Integration component.
2. Using the above credentials, get an OAuth access token for authenticating your API calls.
3. Use the access token in the header to authenticate each subsequent call.

#### Collect and Build Send Definition

* Get Email List.
* Get Send Classification List.
* Gather client-side logic determining what Salesforce audience to send against.
* Gather client-side logic determining when the send should go out:
	* Immediate
	* Scheduled

##Use the Send API

1. Create the send definition using the Create Definition resource.
2. Create the scheduled send instance using the Schedule Send resource.
3. Get the instance status using the Get Instance Status resource.

###Send Definition Resources

When defining the Definition resource:
* `integrationType` defines the integration connector to be used. While Marketing Cloud offers connectors for both Salesforce and Microsoft Dynamics CRM, the Send API supports only Salesforce integrations at this time.
* `channel` defines the digital marketing channel. This resource only supports email at this time.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Logical Name</th>
<th>HTTP Method</th>
<th>Resource</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Create Definition](createDefinition.htm)</td>
<td>POST</td>
<td>/data/v1/integration/send/{integrationType}/{channel}</td>
</tr>
<tr>
<td>[Search Definitions](searchDefinitions.htm)</td>
<td>POST</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/search</td>
</tr>
<tr>
<td>[Get Definition by Id](getDefinitionById.htm)</td>
<td>GET</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/{definitionId}</td>
</tr>
<tr>
<td>[Update Definition by Id](updateDefinitionById.htm)</td>
<td>PUT</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/{definitionId}</td>
</tr>
<tr>
<td>[Delete Definition](deleteDefinitionById.htm)</td>
<td>DELETE</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/{definitionId}</td>
</tr>
<tr>
<td>[Schedule Send](scheduleSend.htm)</td>
<td>POST</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/{definitionId}/schedule</td>
</tr>
</tbody>
</table>

###Send Instance Resources
<table class="table table-hover">
<thead align="left">
<tr>
<th>Logical Name</th>
<th>HTTP Method</th>
<th>Resource</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Get Instance Status](getInstanceStatus.htm)</td>
<td>GET</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/instance/{instanceId}</td>
</tr>
<tr>
<td>[Cancel Instance](cancelInstance.htm)</td>
<td>GET</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/instance/{instanceId}/cancel</td>
</tr>
<tr>
<td>[Get Instances](getInstances.htm)</td>
<td>GET</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/instance</td>
</tr>
<tr>
<td>[Get Instances by Definition](getInstancesByDefinition.htm)</td>
<td>GET</td>
<td>/data/v1/integration/send/{integrationType}/{channel}/{definitionId}/instance</td>
</tr>
</tbody>
</table>

##Related Items
* [Get a Client ID and Secret)](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/api-integration.htm)
* [Get an OAuth Access Token](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/get-access-token.htm)
