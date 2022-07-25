---
data: <%= swaggerdoc %>
path: "/data/v1/integration/send/{integrationType}/{channel}/{definitionId}"
method: "get"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/integration/send/salesforce/email/00000000
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

```
**Example Response**
```js
HTTP/1.1 200 OK
{
		"EmailDefinition": {
			"Name": "Demo Definition",
			"Description":"A definition for the demo",
			"EmailId": 123456,
			"SendClassificationId": "123456",
			"Targets": [
				{
					"Type": "Report",
					"Name": "Contacts",
					"Id": "000000000000000000"
				}
			]
		},
		"IsError": false
}
```
**Example Response**
```js
HTTP/1.1 200
{
		"IsError": true,
		"Message": "Error retrieving integrated send definition: Unable to find a salesforce email send definition with the Id 123456 for mid 0000000"
}
```

