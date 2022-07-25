---
data: <%= swaggerdoc %>
path: "/data/v1/integration/send/{integrationType}/{channel}"
method: "post"
published: false
---
### One Step Send or Two Step Send

By default, the Send API is designed as a two-step process. First, create the send definition. Second, schedule the send. In scheduling the send, the send instance is created. You can schedule as many sends of the same definition as you see fit. Without breaking these out, resending or reusing the send definition would not be possible.

To define and schedule in one step, include the `Schedule` object in the request. If there is an error or warning on the creation of the definition and a schedule is part of the request, the send will not be forwarded to the send engine for scheduling.

###Scope by User Support

This call respects only those options that your account supports. For example, if your Marketing Cloud account is configured as scope by user, errors may result if the user associated with the token attached to the request does not have permissions to the report.

###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /data/v1/integration/send/salesforce/email
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

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
		"Schedule": {
			"StartImmediately": true,
			"AllRecipientsOptedIn": true
		}
}

```
**Example Response**
```js
HTTP/1.1 201

{
		"DefinitionId": "0000000",
		"InstanceId": "0000000",
		"IsError": false
 }
```
**Example Response**
```js
HTTP/1.1 200 OK
{
		"IsError": true,
		"Message": "Error creating integrated send definition: One or more required fields are missing from this email send definition: Name"
}
```


