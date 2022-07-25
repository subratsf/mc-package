---
data: <%= swaggerdoc %>
path: "/push/v1/message/{messageId}"
method: "delete"
---
###Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /push/v1/message/mjK54s3RT
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

If the request includes a valid messageID value, the API returns the following response.

```json
HTTP/1.1 202 Accepted
```

If the request includes an invalid value, the API returns a 400 response with details on the error.