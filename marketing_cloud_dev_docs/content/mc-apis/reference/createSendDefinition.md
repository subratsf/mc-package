---
data: <%= swaggerdoc %>
path: "/messaging/v1/email/definitions"
method: "post"
---
##Usage
<!-- a normal html comment -->
###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/email/definitions/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "2FA_order_accounts",
  "status": "Active",
  "name": "My Unique Definition Name",
  "description": "Created via REST",
  "classification": "Default Transactional",
  "content": {
    "customerKey": "bebf8650-137a-494c-8727-cdeb32534961"
  },
  "subscriptions": {
    "list": "test-list",
    "dataExtension": "test-de",
    "autoAddSubscriber": true,
    "updateSubscriber": true
  },
  "options": {
    "trackLinks": true,
    "cc": ["cc_address@example.com"],
    "bcc": ["bcc_address@example.com"]
    "createJourney": true
  }
}
```

###Example Response
```js
HTTP/1.1 201 Created
{
  "requestId": "1f1e8755-819b-424d-a914-e066b5ba20f8",
  "name": "My Unique Definition Name",
  "definitionKey": "2FA_order_accounts",
  "definitionId": "c13a2f02-2e02-e911-80e9-1402ec6b9711",
  "description": "Created via REST",
  "classification": "Default Transactional",
  "status": "Active",
  "createdDate": "2018-12-17T13:00:00",
  "modifiedDate": "2018-12-31T09:52:00",
  "content": {
    "customerKey": "bebf8650-137a-494c-8727-cdeb32534961"
  },
  "subscriptions": {
    "dataExtension": "test-de",
    "list": "test-list",
    "autoAddSubscriber": true,
    "updateSubscriber": true
  },
  "options": {
    "trackLinks": true,
    "bcc": [
      "bcc_address@example.com"
    ],
    "cc": [
      "cc_address@example.com"
    ]
  },
  "journey": {
     "interactionKey": "9995e819-728b-43ca-822a-f912070ab7cf"
  }
}
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
<td>Send definition is created. Review example response.</td>
</tr>
<tr>
<td>409 Conflict</td>
<td>Send definition already exists on the server</td>
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
