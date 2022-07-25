---
data: <%= swaggerdoc %>
path: "/messaging/v1/sms/messages/"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/sms/messages
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "account_rest",
  "recipients": [
    {
      "contactKey": "Astro25",
      "to": "15555551234",
      "messageKey": "nFL4ULgheUeaGbPIMzJJSw",
      "attributes": {
        "FirstName": "Astro",
        "Password": "1234567"
      }
    },
    {
      "contactKey": "Codey36",
      "to": "15555554321",
      "messageKey": "GV1LhQ6NFkqFUAE1IsoQ9Q"
      "attributes": {
        "FirstName": "Code",
        "Password": "2345678"
      }
    }
  ],
  "attributes": {
    "RequestTrackingAttribute": "2",
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
