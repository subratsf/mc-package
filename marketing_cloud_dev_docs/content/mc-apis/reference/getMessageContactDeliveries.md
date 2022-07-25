---
data: <%= swaggerdoc %>
path: "/push/v1/messageContact/{messageId}/deliveries/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/messageContact/OEl8ODow/deliveries/1b1a8ca8-ee31-4f50-9ab3-efb30efef72d
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200
{
    "messageId": "OEl8ODow",
    "message": {
      "id: "OEl8ODow"
    },
    "count": 50,
    "createDate": "2012-8-21T11:57:19.247",
    "scheduledDate":"2017-06-26T12:14:03.45",
    "status":"Finished",
    "triggeredSendStatus": "Active"
}
```
