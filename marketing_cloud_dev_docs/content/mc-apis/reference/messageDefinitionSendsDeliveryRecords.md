---
data: <%= swaggerdoc %>
path: "/messaging/v1/messageDefinitionSends/key:{key}/deliveryRecords"
method: "get"
---
###Usage
**Example Request Using Send ID**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/messageDefinitionSends/dfa5ab87-1b0f-e211-b71b-9c8e9920e9fc/deliveryRecords/a7038ea5-51b7-4574-ac22-183654378dd2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Request Using Send ID**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/messageDefinitionSends/key:external_key/deliveryRecords/a7038ea5-51b7-4574-ac22-183654378dd2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
HTTP/1.1 200 OK
{
	"deliveryTime": "2014-09-18T07:38:34.943",
	"id": "bd52a488-2f5c-de11-92ee-001cc494ae9e",
	"messageId": "a7038ea5-51b7-4574-ac22-183654378dd2",
	"status": "Sent",
	"to": {
		"address": "example@example.com",
		"id": 195711367,
		"key": "example@example.com"
	}
}
```

**Example Queued Response**
```js
HTTP/1.1 200 OK
{
   "id": "bd52a488-2f5c-de11-92ee-001cc494ae9e",
   "messageId": "ea0ebbe0-59fa-4f4d-a0fb-eda2fbda1052"</span>,
   "status": "Queued"
}
```

**Example Error Response**
```js
HTTP/1.1 200 OK
{
   "id": "bd52a488-2f5c-de11-92ee-001cc494ae9e",
   "messageId": "d74f4d52-e5d9-42ef-9999-8d24a68be89b",
   "status": "Error",
   "to":	{
  	  "address": "",
  	  "id": 0,
  	  "key": ""
   },
   "messageErrors": [{"messageErrorStatus": "The subscriber was excluded by List Detective."}]
}
```
