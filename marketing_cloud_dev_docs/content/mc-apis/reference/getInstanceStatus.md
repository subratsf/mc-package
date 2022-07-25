---
data: <%= swaggerdoc %>
path: "/data/v1/integration/send/{integrationType}/{channel}/instance/{instanceId}"
method: "get"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/integration/send/salesforce/instance/0000000/cancel
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200
{
		"Status": "Scheduled",
		"isError": false
}
```