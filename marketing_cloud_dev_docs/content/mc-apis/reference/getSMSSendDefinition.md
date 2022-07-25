---
data: <%= swaggerdoc %>
path: "/messaging/v1/sms/definitions/{definitionKey}"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/sms/definitions/2FA_order_accounts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 Success
{
  "requestId": "582bec09-6d04-4222-bbba-cea616495596",
  "name": "account-reset",
  "definitionKey": "account-reset",
  "description": "Using new SMS Transactional API",
  "status": "Active",
  "createdDate": "2019-05-14T21:05:00",
  "modifiedDate": "2019-05-14T21:05:00",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "8201221",
    "countryCode": "US",
    "autoAddSubscriber": true,
    "keyword": "PASSWORD"
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
<td>200 Success</td>
<td>Definition retrieved. Review example response.</td>
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
<td>Definition key doesn’t exist for this MID</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
