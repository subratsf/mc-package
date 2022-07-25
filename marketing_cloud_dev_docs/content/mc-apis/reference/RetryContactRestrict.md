---
data: <%= swaggerdoc %>
path: "/contacts/v1/operations/restrict/{operationID}/retry"
method: "post"
---
###Usage

**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/operations/restrict/16411/retry
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

```
**Example Response**
```js
{
	"operationID": 16411,
	"operationRestarted": true,
	"requestServiceMessageID": "70f956f8-cd35-4c75-b045-86dff08f7e21",
	"responseDateTime": "2018-06-05T10:00:00.4006445-06:00",
	"resultMessages": [],
	"serviceMessageID": "94a88190-d9e3-4ed4-8256-eb0c62c7d5e1"
}
```
