---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-subscriptions"
method: "put"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /platform/v1/ens-subscriptions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "subscriptionName": "subscriptionName1",
  "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",   
  "TransactionalSendEvents.EmailSent"],
  "subscriptionId": "55afe59f-8d20-46fd-a2d1-ff01453abe90",
         "filters": ["definitionKey=12345"],
         "status": "paused",
         "statusReason": "max retries exhausted trying to post to callback url"
}]
```

###Example Response
```js
HTTP/1.1 200 OK
[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "url": "https://example.com/",
  "maxBatchSize": 1000,
  "status": "paused",
  "statusReason": "max retries exhausted trying to post to callback url"
  "subscriptionName": "subscriptionName1",
  "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
  "TransactionalSendEvents.EmailSent"],
  "subscriptionId": "d89c87c4-70f8-43d6-be1e-f01dce97fe4c",
  "filters": ["definitionKey=12345"]
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
<td>200 OK</td>
<td>Callback description updated. Review example response.</td>
</tr>
<tr>
<td>304 No Change</td>
<td>Update already exists on the server.</td>
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
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
