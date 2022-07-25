---
data: <%= swaggerdoc %>
path: "/data/v1/integration/send/{integrationType}/{channel}/{definitionId}"
method: "put"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /data/v1/integration/send/salesforce/email/00000000
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
		"EmailDefinition": {
			"Name": "Update to Demo Definition Name",
			"Description":"An updated definition for the demo",
			"EmailId": 123456,
			"SendClassificationId": "123456",
			"Targets": [
				{
					"Type": "Report",
					"Name": "Contacts",
					"Id": "000000000000000000"
				}
			]
		}
}

```
**Example Response**
```js
HTTP/1.1 200 OK
{
		"IsError": false,
		"Message": "Error creating integrated send definition: One or more required fields are missing from this email send definition: Name"
}
```
**Example Response**
```js
HTTP/1.1 200
{
		"IsError": true,
		"Message": "Error updating integrated send definition: Unable to find a salesforce email send definition with the Id 123456 for mid 0000000"
}
```