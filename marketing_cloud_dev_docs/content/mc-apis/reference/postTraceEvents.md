---
data: <%= swaggerdoc %>
path: "/interaction/v1/"
method: "post"
published: false
---

###Usage
**Example Request**

This request returns a set of event traces that expose information relating to the position of contacts as they flow into Journey Builder.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/traceevents/search
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
