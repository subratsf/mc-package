---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-subscriptions-by-cb/{callbackId}"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/ens-subscriptions-by-cb/65b885ab-c2b4-46fe-85d0-d6cb8be8057d
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 Success
[{
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
    "callbackName": "cbName",
    "url": "https://example.com/",
    "maxBatchSize": 1000,
    "subscriptionId": "d89c87c4-70f8-43d6-be1e-f01dce97fe4c",
    "subscriptionName": "subscriptionName",
    "eventCategoryTypes": ["TransactionalSendEvents.EmailNotSent",
    "TransactionalSendEvents.EmailSent"],
    "filters": ["definitionKey=12345"],
    "status": "active",
    "statusReason": ""
  },
{
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
    "callbackName": "cbName",
    "url": "https://example.com/",
    "maxBatchSize": 1000,
    "subscriptionId": "55afe59f-8d20-46fd-a2d1-ff01453abe90",
    "subscriptionName": "subscriptionName2",
    "eventCategoryTypes": ["TransactionalOpenEvents.EmailOpen",
    "TransactionalOpenEvents.EmailNotOpen"],
    "filters": ["definitionKey=12345"],
    "status": "active",
    "statusReason": ""
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
<td>200 Success</td>
<td>Callback subscriptions retrieved.</td>
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
<td>404 Not Found</td>
<td>Callback ID doesn’t exist for this MID.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
