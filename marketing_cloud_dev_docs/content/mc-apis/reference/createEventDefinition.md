---
data: <%= swaggerdoc %>
path: "/interaction/v1/eventDefinitions"
method: "post"
---

###Usage
**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/eventDefinitions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
		"type": "Event",
		"name": "New event definition via API",
		"description": "",
		"mode": "Production",
		"eventDefinitionKey": "NeweventviaAPI",
		"dataExtensionId": "####-####-####-####-####",
		"dataExtensionName": "<some data extension",
		"sourceApplicationExtensionId": "####-####-####-####-####",
		"filterDefinitionTemplate": "<FilterDefinition></FilterDefinition>",
		"iconUrl": "/events/images/customer.png",
		"arguments":
			{
			"criteria": "null"
 			},
 		"isVisibleInPicker": true,
 		"category": "Event"
}
```

**Example Response**
```js
HTTP/1.1 200
{
		"eventDefinitionKey": "NeweventviaAPI",
}
```
