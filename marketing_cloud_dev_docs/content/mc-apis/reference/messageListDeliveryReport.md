---
data: <%= swaggerdoc %>
path: "/sms/v1/messageList/{id}/deliveryReport/{tokenId}"
method: "post"
---
###Usage
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/messageList/{messageID}/deliveryReport/{tokenid}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "filename": "DeliveryReportFileName"
}
```