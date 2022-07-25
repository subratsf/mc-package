---
data: <%= swaggerdoc %>
path: "/platform/v1/webhooks/verify"
method: "post"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/webhooks/verify
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "id": "ea9a29ef-4742-4575-9da3-940e1b6bc0fb",
   "callbackKey": "MID12345678TriggeredSendCallback1",
   "secretToken": "16doYkwHzQpd9OoeJwy430qYCnSfcy5IiArfbIo6eis="
}
```
**Example Response**
```js
HTTP/1.1 200 OK
{
   "id": "ea9a29ef-4742-4575-9da3-940e1b6bc0fb",
   "name": "12345678-webhook 1",
   "callbackUrl": "http://companyname.herokuapp.com/12345678/",
   "callbackKey": "MID12345678TriggeredSendCallback1",
   "isVerified": true,
   "configuration": {"triggeredSendEvents":[
            "sent",
            "bounce",
            "open",
            "click",
            "unsubscribe"
        ]
    }
}
```