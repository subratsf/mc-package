---
title: Webhooks Subscription API
---
##Overview
Use the Webhooks platform to receive notifications of various Marketing Cloud events as they happen. For example, when you initiate an email campaign through Marketing Cloud and the subscribers engage by opening, clicking, or unsubscribing from your messages, these events flow into your Marketing Cloud account. You can configure Webhooks to forward a copy of those events to your servers.

<div class="alert">Webhooks is currently only available for Beta Program participants. Salesforce may change or remove information depending on testing results or other factors. Please contact your relationship manager for more information on the Beta Program.</div>


##What are Webhooks?
Webhooks provides a catalog of events available for consumption from Marketing Cloud Customers can subscribe to all or a subset of these events using the Webhooks Subscription API. Webhooks currently supports Email Tracking events and will include additional Marketing Cloud events in the future. Once a subscription exists, Webhooks starts sending a copy of events to your preferred servers and endpoints as HTTP POST messages.

Set up Webhooks so that all or some of the events forward to a single callback URL or multiple URLs.

For example:
    <img src="images/webhooks_endpoints.png" class="img-responsive" style="margin: 25px 0;" />

##How to Set Up Webhooks

###Prerequisites
To use the Webhooks Subscription API, you must complete the Marketing Cloud API authentication process.

1. To get a client ID and secret, create an installed package with an API Integration component.
2. For the **Give your app access to account features** step, select **Webhooks: READ, WRITE**.
3. Using the above credentials, get an OAuth access token for authenticating your API calls.
4. Provision the Webhooks feature for any appropriate Marketing Cloud account (using MID values).
5. Use the access token in the header to authenticate each subsequent call.

###Webhooks Workflow
1. Create a Webhook as a combination of events and a URL using the POST /webhooks resource. For example, you could create a Webhook using **Click Event > example.com/endpoint-1**.
This request creates a Webhook using the configuration in the request body. However, the resource is not operational until the verification step is completed.
2. After creating the Webhook, the API POSTs the ID, callbackKey, and secretToken to the specified callback URL endpoint.
3. Using the POST /webhooks/verify resource, POST the ID, callbackKey, and secretToken back in order to complete the verification.
Once verified, the Webhooks engine starts sending copies of the subscribed events to the callback URL.
4. You can retrieve a specific Webhook at any point to view applicable details or delete it.
    - Get a list of subscriptions
    - Get a specific Webhook by ID
    - Delete Webhooks, as needed

##API Specification
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
<td>[Create Webhooks](createWebhooks.htm)</td>
<td>POST</td>
<td>/webhooks</td>
</tr>
<tr>
<td>[Verify Webhooks](verifyWebhook.htm)</td>
<td>POST</td>
<td>/webhooks/verify</td>
</tr>
<tr>
<td>[Get Subscriptions](retrieveWebhookID.htm)</td>
<td>GET</td>
<td>/accounts/current/webhooks</td>
</tr>
<tr>
<td>[Get Webhooks by ID](retrieveWebhookID.htm)</td>
<td>GET</td>
<td>/webhooks/{webhookId}</td>
</tr>
<tr>
<td>[Delete Webhooks](deleteWebhooks.htm)</td>
<td>DELETE</td>
<td>/webhooks/{webhookId}</td>
</tr>
</tbody>
</table>

##Applicable Webhooks Events
You are currently able to use Webhooks to receive notifications of email tracking events. Other events, such as mobile or Journey Builder events, may be added in the future.

###Email Tracking Events
<table class="table table-hover">
<thead align="left">
<tr>
<th>Triggered Send Events</th>
<th>Batch Send Events</th>
</tr>
</thead>
<tbody>
<tr>
<td>Send</td>
<td>Send</td>
</tr>
<tr>
<td>Open</td>
<td>Open</td>
</tr>
<tr>
<td>Click</td>
<td>Click</td>
</tr>
<tr>
<td>Bounce</td>
<td>Bounce</td>
</tr>
<tr>
<td>Unsubscribe</td>
<td>Unsubscribe</td>
</tr>
</tbody>
</table>

##Related Items
* [Get a Client ID and Secret)](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/api-integration.htm)
* [Get an OAuth Access Token](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/get-access-token.htm)
