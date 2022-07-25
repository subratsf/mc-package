---
data: <%= swaggerdoc %>
path: "/data/v1/integration/send/{integrationType}/{channel}/search"
method: "post"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /data/v1/integration/send/salesforce/email/search?page=1&pageSize=50
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
		"Criteria":
		{
			"Operation": "and"
			"Name": "Demo definition",
			"SubscriberListId": "000000000000000"
		}
}


```
**Example Response**
```js
HTTP/1.1 200 OK
{
		"Count": 1,
		"Page": 1,
		"PageSize": 50,
		"Definitions": [
			{
			"DefinitionId": "00000000",
			"ExternalKey": "00000000"
			}],
		"IsError": false
}
```