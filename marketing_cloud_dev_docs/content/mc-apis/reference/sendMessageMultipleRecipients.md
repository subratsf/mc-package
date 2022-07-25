---
data: <%= swaggerdoc %>
path: "/messaging/v1/email/messages/"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/email/messages
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "2FA_order_accounts",
  "recipients": [
    {
      "contactKey": "recipient1",
      "to": "recipient1@example.com",
      "messageKey": "nFL4ULgheUeaGbPIMzJJSw",
      "attributes": {
        "RequestAttribute_1": "value_1",
        "RequestAttribute_2": "value_2",
        "Attribute1": "This is one for recipient1",
        "Attribute2": "This is two for recipient1"
      }
    },
    {
      "contactKey": "recipient2",
      "to": "recipient2@example.com",
      "messageKey": "GV1LhQ6NFkqFUAE1IsoQ9Q"
      "attributes": {
        "UserAttribute_3": "value_3",
        "UserAttribute_3": "value_4",
      }
    }
  ],
  "attributes": {
    "UserAttribute_a": "value_a",
    "UserAttribute_b": "value_b"
  }
}
```

###Example Response
```js
HTTP/1.1 202 Accepted
{
  "requestId": "ccdb94bf-fcac-4fef-b194-08f534a2079a",
  "errorcode": 0,
  "responses": [
    {
      "messageKey": "nFL4ULgheUeaGbPIMzJJSw"
    },
    {
      "messageKey": "GV1LhQ6NFkqFUAE1IsoQ9Q"
    }
  ]
}
```

###Example Response: Mixed Responses
```js
HTTP/1.1 202 Accepted
{
  "requestId": "c261d918-e99e-460c-94dc-3bbfda154c88",
  "errorcode": 109001,
  "message": "MCMS_UTM_ResponsesHasErrors: 1 subscribers failed to queue out of 2",
  "responses": [
    {
      "messageKey": "gHQ3VLsfCEOuAC2sl-CV1Q",
      "errorcode": 109106,
      "message": "MCMS_UTM_Validation_MissingRequiredField_to: Invalid subscriber"
    },
    {
      "messageKey": "oixAQE_zFUyr8bT8sJncdw"
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
<td>403 Forbidden</td>
<td>Failed to pass authorization.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
