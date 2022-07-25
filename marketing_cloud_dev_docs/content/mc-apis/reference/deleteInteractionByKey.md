---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/{key}"
method: "delete"
published: false
---

###Usage
**Example Request**

This request deletes the journey specified with the key:{key} request parameter. If you don't provide the <samp class="codeph nolang">versionNumber</samp> request parameter, then **ALL** versions of the identified journey will be deleted. YOU CANNOT RECOVER THIS DATA.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /interaction/v1/interactions/key:{key}?versionNumber={versionNumber}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
HTTP/1.1 200 OK
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
