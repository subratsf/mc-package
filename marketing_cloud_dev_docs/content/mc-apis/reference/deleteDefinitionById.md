---
data: <%= swaggerdoc %>
path: "/data/v1/integration/send/{integrationType}/{channel}/{definitionId}"
method: "delete"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /data/v1/integration/send/salesforce/email/00000000
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200
{
		"IsError": false
}
```
**Example Response**
```js
HTTP/1.1 200
{
		"IsError": true,
		"Message": "Error deleting integrated send definition: Unable to find a salesforce email send definition with the Id 123456 for mid 0000000"
}
```

