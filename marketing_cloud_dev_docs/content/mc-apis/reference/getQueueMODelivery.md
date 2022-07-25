---
data: <%= swaggerdoc %>
path: "/sms/v1/queueMO/deliveries/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/queueMO/deliveries/OXFoN2ZtT2xWazJLSFZkOVY3MGNZQTo3Njow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
{
  "tracking": [
    {
      "mobileNumber": "15555555555",
      "statusCode": "200",
      "message": "Carrier Success"
    }
  ]
}
```
