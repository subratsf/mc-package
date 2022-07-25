---
data: <%= swaggerdoc %>
path: "/platform/v1/key/type"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/key/type
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
HTTP/1.1 200 (OK)
{
    "key": "RSA",
    "value": 2048
}
```
