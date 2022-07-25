---
data: <%= swaggerdoc %>
path: "/messaging/v1/email/definitions/{definitionKey}/queue"
method: "delete"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /messaging/v1/email/definitions/2FA_order_accounts/queue
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "requestId":"78fc694e-3c13-406d-b9ee-d309aa38d77b",
  "message":"Queued"
}
```

###Error Response
```js
HTTP/1.1 400 Bad Request
{
  "message":"MCMS_UTM_Runtime_InvalidOperation: Definition status must be inactive to delete queue",
  "errorcode":30001,
  "documentation":""
}
```