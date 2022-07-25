---
data: <%= swaggerdoc %>
path: "/platform/v1/key/{keyId}"
method: "delete"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /platform/v1/key/bd48dc1c-161b-4c94-8ee0-ff72a6430317
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
HTTP/1.1 204 (No Content)
Successfully soft deleted meta data and hard deleted from keystore
```
