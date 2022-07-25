---
data: <%= swaggerdoc %>
path: "/platform/v1/webhooks"
method: "post"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/webhooks/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
{
   "name": "12345678-Rest-webhook1",
   "callbackUrl": "http://companyname.herokuapp.com/12345678/",
   "callbackKey": "MID10734700TriggeredSendCallback1",
   "configuration": {
        "FuelMessagingEvents": [
        	"sent",
         	"bounce",
         	"open",
        	"click",
			"unsubscribe"
        ],
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
**Example Response**
```js
HTTP/1.1 200 OK
{
   "id": "e2ddb203-ea53-4843-b2d4-9f8c0c862913",
   "name": "12345678-Rest-webhook1",
   "callbackUrl": "http://companyname.herokuapp.com/12345678/",
   "callbackKey": "MID10734700TriggeredSendCallback1",
   "isVerified": false,
   "configuration": {
   		"FuelMessagingEvents": [
        	"sent",
         	"bounce",
         	"open",
        	"click",
        	"unsubscribe"
        ],
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

