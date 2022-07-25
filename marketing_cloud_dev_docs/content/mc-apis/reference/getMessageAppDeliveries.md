---
data: <%= swaggerdoc %>
path: "/push/v1/messageApp/{messageId}/deliveries/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/messageApp/OEl8ODow/deliveries/98sdkj23
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200
{
    "message": "MyPushMessage",
    "count": 50,
    "createDate": "2012-8-21T11:57:19.247"
}
```
