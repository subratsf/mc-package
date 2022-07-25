---
data: <%= swaggerdoc %>
path: "/platform/v1/tokenContext"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/tokenContext
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "enterprise": {
        "id": 1081365
    },
    "organization": {
        "id": 1081365
    },
    "user": {
        "id": 1093240
    }
}
```
