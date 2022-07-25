---
data: <%= swaggerdoc %>
path: "/ott/v1/send/{messageId}"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /ott/v1/send/812ed7d7-f11c-43dd-9eaa-b32ca3264278
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
###Example Response: Retrieve a Send Message Request to Messenger
```
HTTP/1.1 200 OK

{
    "requestBody": {
        "messageKey": "e1c3514160f969e52b0d",
        "ottRequestId": "942adfff-817e-4276-bca6-c1cbcd7b6241",
        "from": {
            "senderType": "messenger",
            "senderId": "200012913364042"
        },
        "to": {
            "ottId": "1061820367222105"
        },
        "message": {
            "subject": "Message Name",
            "contents": [
                {
                    "type": "text",
                    "text": "Hello, Messenger World!",
                    "duration": 0,
                    "isReusable": false
                }
            ],
            "customKeys": [
                {
                    "messagingType": "RESPONSE"
                }
            ]
        },
        "validityPeriod": 30
    },
    "status": [
        {
            "event": "Created",
            "eventDateTime": "2018-05-24T13:36:52.747"
        },
        {
            "event": "Queued",
            "eventDateTime": "2018-05-24T13:37:01.29"
        },
        {
            "event": "Sent",
            "eventDateTime": "2018-05-24T13:37:01.337"
        }
    ]
}
```
###Example Response: Retrieve Send Message Request to LINE
```
HTTP/1.1 200 OK

{
    "requestBody": {
        "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
        "ottRequestId": "2dd53e4a-56a5-497a-b5f2-1a34187e1641",
        "from": {
            "senderType": "line",
            "senderId": "1415451353"
        },
        "to": {
            "ottId": "U0098560c6da67ea9cab11d4405e3c018"
        },
        "message": {
            "subject": "Message Name",
            "contents": [
                {
                    "type": "text",
                    "text": "Hello, LINE World!",
                    "duration": 0,
                    "isReusable": false
                }
            ],
            "customKeys": []
        },
        "validityPeriod": 30
    },
    "status": [
        {
            "event": "Created",
            "eventDateTime": "2018-05-24T14:58:14.36"
        },
        {
            "event": "Queued",
            "eventDateTime": "2018-05-24T14:58:15.01"
        },
        {
            "event": "Sent",
            "eventDateTime": "2018-05-24T14:58:15.337"
        }
    ]
}
```
