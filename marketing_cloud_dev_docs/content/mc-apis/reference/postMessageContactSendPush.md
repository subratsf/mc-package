---
data: <%= swaggerdoc %>
path: "/push/v1/messageContact/{messageId}/send"
method: "post"
---
###Usage
##Example Request
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/messageContact/OEl8ODow/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "DeviceTokens": [
    "DeviceToken1",
    "DeviceToken2",
    "DeviceToken3"
  ],
  "InclusionTags": [
    "Midwest"
  ],
  "ExclusionTags": [
    "Indiana",
    "Ohio"
  ],
  "Override": true,
  "MessageText": "New information available!",
  "title": "Boost your winnings!",
  "subtitle": "Check your app to see what else is in store.",
  "mutable-content": 1,
  "SendTime": "2012-10-31 09:00",
  "MessageCategory": {
    "Name": "ETubeDemo"
  },
  "Sound": "MyFile.caf",
  "Badge": "+1",
  "OpenDirect": "OD01",
  "CustomKeys": {
    "keyA": "keyA_value",
    "keyB": "keyB_value"
  },
  "CustomPayload": {
    "customA": "customA_value"
  }
}
```

##Example Response
```
HTTP/1.1 200
{
    "tokenId": "TokenIDValue"
}
```
