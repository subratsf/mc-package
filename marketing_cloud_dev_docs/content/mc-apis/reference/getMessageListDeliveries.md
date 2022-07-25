---
data: <%= swaggerdoc %>
path: "/push/v1/messageList/{messageId}/deliveries/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/messageList/ODg5MzoxMMM1MM/deliveries/aa11bb2c-1a03-4b50-9f97-81c88e233274
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js

HTTP/1.1 200
{
    "messageId": "ODg5MzoxMMM1MM",
    "message": {
        "id": "ODg5MzoxMMM1MM"
    },
    "completeDate": "2018-04-04T09:48:16",
    "count": 4,
    "createDate": "2018-04-04T09:47:58.89",
    "status": "Finished"
}
```
