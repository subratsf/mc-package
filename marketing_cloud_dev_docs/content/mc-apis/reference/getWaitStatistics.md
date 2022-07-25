---
data: <%= swaggerdoc %>
path: "/interaction/v1/"
method: "get"
published: false
---

###Usage
**Example Request**

This request retrieves the Wait statistics for the journey specified by the KEY request parameter. You can only retrieve wait and goal statistics for a *running* journey.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions/waitstatistics/{id}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
HTTP/1.1 200
[]
```