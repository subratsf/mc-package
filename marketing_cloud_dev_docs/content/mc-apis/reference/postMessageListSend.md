---
data: <%= swaggerdoc %>
path: "/push/v1/messageList/{messageId}/send"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/messageList/OEl8ODow/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "InclusionListIds": [
        "UTZ6QTh4MVRmMC1XZlN5QUtnS3hWdzo2NTow"
    ],
    "ExclusionListIds": [
        "VWRoY1IzcWh2RXVvc3FDYTRfcGtvQTo2NTow"
    ],
    "Override": true,
    "MessageText": "New information available!",
    "title": "Boost your winnings!",
    "subtitle": "Check your app to see what else is in store.",
    "mutable-content": 1,
    "SendTime": "2012-10-31 09:00",
    "Sound": "MyFile.caf",
    "Badge": "+1",
    "OpenDirect": "OD01",
    "CustomKeys": {
        "keyA": "keyA_value",
        "keyB": "keyB_value"
    },
    "CustomPayload": { "customA": "customA_value" }
}
```
**Example Response**
```js
HTTP/1.1 200
{
    "tokenId": "TokenIDValue"
}
```
