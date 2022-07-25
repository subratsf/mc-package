---
data: <%= swaggerdoc %>
path: "/platform/v1/webhooks/{webhookId}"
method: "get"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/webhooks/ea9a29ef-4742-4575-9da3-940e1b6bc0fb/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200 OK
{
	"id":"ea9a29ef-4742-4575-9da3-940e1b6bc0fb",
	"name":"12345678-webhook 1",
	"callbackUrl":"http://companyname.herokuapp.com/12345678/",
	"callbackKey":"MID12345678TriggeredSendCallback1",
	"isVerified":true,
	"configuration": {
   		"triggeredSendEvents":[
            "sent",
            "bounce",
            "open",
            "click",
            "unsubscribe"
        ]
	}
}
```

