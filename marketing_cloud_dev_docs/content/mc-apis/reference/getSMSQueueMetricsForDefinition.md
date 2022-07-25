---
data: <%= swaggerdoc %>
path: "/messaging/v1/sms/definitions/{definitionKey}/queue"
method: "get"
---
##Usage

Check the queue depth and age of the oldest record not yet processed. If you set a definition to inactive and continue to send message requests to it, the count and age increase.

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/sms/definitions/2FA_order_accounts/queue
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "requestId": "ba9633fa-5c8d-4c42-8efa-a16412ac0c53",
  "count": 22,
  "ageSeconds": 45
}
```
