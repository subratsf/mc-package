---
data: <%= swaggerdoc %>
path: "/contacts/v1/operations/delete/{operationID}/retry"
method: "post"
---
###Usage

**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/operations/delete/10315/retry
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

```
**Example Response**
```js
{
	"operationID": 10315,
	"operationRestarted": true,
	"requestServiceMessageID": "fb8daeca-deea-4009-bb4a-2c8b5251c2a6",
	"responseDateTime": "2018-06-05T10:03:09.5032301-06:00",
	"resultMessages": [],
	"serviceMessageID": "77f33340-84a1-46d2-af5c-8195156f89b9"
}
```
