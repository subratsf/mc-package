---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/stop/{id}?versionNumber={versionNumber}"
method: "post"
---

###Usage
**Example Request**

This request stops the journey specified by the ID request parameter. Only the versionNumber specified in the versionNumber QUERY Parameter will be stopped. You must provide a valid versionNumber.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/stop/{id}?versionNumber={versionNumber}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
HTTP/1.1 200
```

**Example Error Response**
```js
HTTP/1.1 500
{
    "documentation": "",
    "errorcode": 500,
    "message": "Internal Server Error"
}
```
