---
data: <%= swaggerdoc %>
path: "/data/v1/integration/send/{integrationType}/{channel}/{definitionId}/schedule"
method: "post"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /data/v1/integration/send/salesforce/0000000/schedule
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
		"Schedule": {
			"StartImmediately": true,
			"AllRecipientsOptedIn": true
		}
}

```
**Example Response**
```js
HTTP/1.1 200

{
		"InstanceId": "0000000",
		"IsError": false
 }
```
**Example Response**
```js
HTTP/1.1 200
{
		"IsError": true,
		"Message": "Error scheduling integrated send definition: Unable to find a salesforce email send definition with the Id 0000000 for mid 00000000"
}
```


