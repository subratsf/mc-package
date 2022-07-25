---
data: <%= swaggerdoc %>
path: "/platform/v1/accounts/current/webhooks"
method: "get"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/accounts/current/webhooks
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200 OK
{
	"count":1,
	"page":1,
	"pageSize":50,
	"links":{
		"self":
			{"href":"/v1/accounts/current/webhooks?%24pagesize=50&%24page=1"}
		},
	"items":[
		{
		"id":"ea9a29ef-4742-4575-9da3-940e1b6bc0fb",
		"name":"12345678-webhook 1",
		"callbackUrl":"http://companyname.herokuapp.com/12345678/",
		"callbackKey":"MID10734700TriggeredSendCallback1",
		"isVerified":false,
		"configuration":{
			"triggeredSendEvents":[
				"Sent",
				"Bounce",
				"Open",
				"Click",
				"Unsubscribe"]
			}
		}
	]
}

```
