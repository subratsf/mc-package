---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-subscriptions"
method: "post"
---
##Usage

> The subscription you create is in active status, and event notifications are sent to the associated callback. Ensure that the callback you specify is ready to receive events before creating a subscription for it.

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/ens-subscriptions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "subscriptionName": "sub1",
  "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
  "TransactionalSendEvents.EmailSent"],
  "filters": ["definitionKey=12345"]
}]
```

###Example Response
```js
HTTP/1.1 201 Created
[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "subscriptionName": "sub1",
  "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
  "TransactionalSendEvents.EmailSent"],
  "subscriptionId": "d89c87c4-70f8-43d6-be1e-f01dce97fe4c",
  "filters": ["definitionKey=12345"],
  "status": "active"
}]
```

###HTTP Responses
<table class="table table-hover">
<thead align="left">
<tr>
<th>Response</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td>201 Created</td>
<td>Subscription is created. Review example response.</td>
</tr>
<tr>
<td>304 No Change</td>
<td>Subscription already exists on the server.</td>
</tr>
<tr>
<td>400 Bad Request</td>
<td>Invalid request</td>
</tr>
<tr>
<td>403 Forbidden</td>
<td>Failed to pass authorization.</td>
</tr>
<tr>
<tr>
<td>404 Not Found</td>
<td>Callback ID doesn't exist.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
