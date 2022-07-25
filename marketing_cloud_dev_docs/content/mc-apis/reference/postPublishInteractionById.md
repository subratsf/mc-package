---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/publishAsync/{id}?versionNumber={versionNumber}"
method: "post"
---

###Usage
**Example Request**

This request **asynchronously** publishes the journey specified by the ID request parameter. Only the versionNumber specified in the versionNumber QUERY Parameter will be published. You must provide a valid versionNumber.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/publishAsync/{id}?versionNumber={versionNumber}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
HTTP/1.1 200
{
    "statusId": "bd93502a-773c-4588-81d9-d3c7ca0cc10a"
}
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
