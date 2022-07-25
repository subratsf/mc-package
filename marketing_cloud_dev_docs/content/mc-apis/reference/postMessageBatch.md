---
data: <%= swaggerdoc %>
path: "/push/v1/messageBatch/{messageid}/send"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/messageBatch/MToxMTQ6MA/send?access_token=av77znk73nr87tgfgb9xky5r HTTP/1.1
Content-Type: application/json
Content-Length: 671
Authorization: Bearer YOUR_ACCESS_TOKEN

[
    {
        "DeviceTokens": [
            "DeviceToken1",
            "DeviceToken2"
        ],
        "InclusionTags": [
            "footballTeam"
        ],
        "Message": {
            "Alert": "Your team WINS!",
            "badge": "+1",
            "sound": "default",
            "custom": {
                "6": "20"
            }
        }
    },
    {
        "SubscriberKeys": [
            "SubscriberKey1"
        ],
        "InclusionTags": [
            "baseballTeam"
        ],
        "Message": {
            "Alert": "Good game team!",
            "badge": "+1",
            "sound": "default",
            "custom": {
                "6": "20"
            }
        }
    }
]

```
**Example Response**
```js
HTTP/1.1 200 OK
content-type: application/json
Date: Fri, 11 Jul 2014 15:05:11 GMT
Server: Mashery Proxy
Vary: Origin
X-Mashery-Message-ID: ec897e40-814d-4651-8ba3-54a70429eff3
X-Mashery-Responder: prod-j-worker-us-east-1c-37.mashery.com
Content-Length: 255
Connection: keep-alive

[
    {
        "tokenId": "1200f5da-d4b2-4b8d-89ff-68f9b3a97f06",
        "deviceTokens": [
            "DeviceToken1"
        ]
    },
    {
        "tokenId": "8984c0a9-83e7-4df0-98bc-7245debdb320",
        "subscriberKeys": [
            "SubscriberKey1"
        ]
    }
]
```

**Additional Example Request**

This request includes custom keys as an additional parameter. The mobile app must already include custom keys as part of the available functionality. The custom key name values must match between the message and application or the values will not update.
```js
[
    {
        "DeviceTokens": [
            "20tegf407161501332582300700000000"
        ],
        "InclusionTags": [
            "all"
        ],
        "Message": {
            "Alert": "messageBatch1_20140716152550170",
            "badge": "+1",
            "sound": "save1.wav",
            "Keys": [
                {
                    "Key": "key01",
                    "Value": "value01"
                },
                {
                    "Key": "key02",
                    "Value": "value02"
                },
                {
                    "Key": "key03",
                    "Value": "value03"
                }
            ],
            "Custom": {
                "customA": "customA_value"
            },
            "OpenDirect": "OD01"
        }
    },
    {
        "DeviceTokens": [
            "jtcPUSHDeviceId_20rtrtdsg906150137331"
        ],
        "InclusionTags": [
            "all"
        ],
        "Message": {
            "Alert": "messageBatch2",
            "badge": "+1",
            "sound": "save2.wav",
            "CustomKeys": [
                {
                    "Key": "key01",
                    "Value": "value01"
                },
                {
                    "Key": "key02",
                    "Value": "value02"
                }
            ],
            "Custom": {
                "customB": "customB_value"
            },
            "OpenDirect": "OD02"
        }
    }
]
```
