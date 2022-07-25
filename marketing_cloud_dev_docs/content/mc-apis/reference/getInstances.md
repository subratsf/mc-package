---
data: <%= swaggerdoc %>
path: "/data/v1/integration/send/{integrationType}/{channel}/instance"
method: "get"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/integration/send/salesforce/email/instance?page=1&pageSize=50
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200
{
		"Count": 1,
		"Page": 1,
		"PageSize": 50,
		"Instances": [
			{
			"InstanceId": "00000000",
			"DefinitionId": "00000000",
			"Status": "Scheduled",
			"SyncId": -1,
			"JobId": -1,
			}],

		"IsError": false
}
```


