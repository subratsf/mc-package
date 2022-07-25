---
data: <%= swaggerdoc %>
path: "/messaging/v1/email/definitions/{definitionKey}"
method: "patch"
---
##Usage

Use this call to update a specific message definition.

If you want your existing definition to appear as a Transactional Send Journey, update the definition using the “createJourney”:true option.

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /messaging/v1/email/definitions/2FA_order_accounts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "status": "Inactive",
  "description": "description updated",
  "options": {
    "cc": [],
    "bcc": ["bcc_address@example.com"]
    "createJourney": true
  }
}
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "requestId": "1f1e8755-819b-424d-a914-e066b5ba20f8",
  "name": "My Unique Definition Name",
  "definitionKey": "2FA_order_accounts",
  "definitionId": "c13a2f02-2e02-e911-80e9-1402ec6b9711",
  "description": "description updated",
  "classification": "Default Transactional",
  "status": "Active",
  "createdDate": "2018-12-17T13:00:00",
  "modifiedDate": "2018-12-31T09:52:00",
  "content": {
    "customerKey": "bebf8650-137a-494c-8727-cdeb32534961"
  },
  "subscriptions": {
    "dataExtension": "test-de",
    "list": "test-list"
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
     "interactionKey": "81bcd4b9-10b0-47c2-be8e-fce576c8110c"
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
<td>200 OK</td>
<td>Send definition is updated. Review example response.</td>
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
