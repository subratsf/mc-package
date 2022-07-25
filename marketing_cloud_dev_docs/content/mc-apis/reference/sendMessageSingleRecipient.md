---
data: <%= swaggerdoc %>
path: "/messaging/v1/email/messages/{messageKey}"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/email/messages/f4fe74b7-c3c0-4e5a-9f49-b63a641109a2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "2FA_order_accounts",
  "recipient":
  {
   "contactKey": "recipient2",
    "to": "recipient2@example.com",
    "attributes": {
      "UserAttribute_1": "value_1",
      "UserAttribute_n": "value_n"
    }
  }
}
```

###Example Response
```js
HTTP/1.1 202 Accepted
{
  "requestId": "239a2bc3-bdcb-4f8a-9e08-28aff9f983b7",
  "errorcode": 0,
  "responses": [
    {
      "messageKey": "f4fe74b7-c3c0-4e5a-9f49-b63a641109a2"
    }
  ]
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
<td>202 Accepted</td>
<td>Request is accepted. Review example response.</td>
</tr>
<tr>
<td>400 Bad Request</td>
<td>Invalid request</td>
</tr>
<tr>
<td>401 Unauthorized</td>
<td>Failed to pass authorization</td>
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
