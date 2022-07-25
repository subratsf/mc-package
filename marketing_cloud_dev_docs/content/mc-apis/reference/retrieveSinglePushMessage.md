---
data: <%= swaggerdoc %>
path: "/push/v1/message/{messageID}"
method: "get"
---
###Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/message/MTIzOjExNDow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```json
200 (OK)
[
    {
        "id": "MTIzOjExNDow",
        "messageType": 1,
        "contentType": 1,
        "name": "My Message Name",
        "application": {
            "id": "237690ac-41ff-4d3f-82f2-9c7efd89185f",
            "name": "MyApplication"
        },
        "alert": "Alert message to show on device",
        "sound": "Sound to play, or 'default'",
        "badge": "+1",
        "content-available": 1,
        "openDirect": "OD001",
        "keys": [
            { "key": "key01", "value": "value01" },
            { "key": "key02", "value": "value02" },
            { "key": "key03", "value": "value03" }
        ],
        "custom": {
            "customA": 1,
            "customB": "custom text b",
            "customC": {
                "cC": "custom text c"
            }
        },
        "sendInitiator": 0,
        "startDate": "2014-04-30T14:50:00Z",
        "messagesPerPeriod": 1000,
        "minutesPerPeriod": 60,
        "numberOfPeriods": 24,
        "periodType": 5,
        "isRollingPeriod": false,
        "messageLimit": 1,
        "tzBased": true,
        "tzPastSendAction": 0,
        "scheduledTzOffset": -4.0,
        "scheduledTzSupportsDst": true,
        "inclusionLists": [
            { "id": "listID01" },
            { "id": "listID02" },
            { "id": "listID03" }
        ],
        "exclusionLists": [
            { "id": "listID04" },
            { "id": "listID05" },
            { "id": "listID06" }
        ],
        "status":  2
    } 
]
```

If the request includes invalid values, the API returns a 400 response with details on the error.