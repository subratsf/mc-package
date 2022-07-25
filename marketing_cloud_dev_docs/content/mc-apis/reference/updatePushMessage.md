---
data: <%= swaggerdoc %>
path: "/push/v1/message/{messageId}"
method: "put"
---
###Usage

You don't have to include all values for the message, but you must ensure that any updates to the existing message provide all required parameters for the message. Use the following information as a reference:

####Outbound Alert Message

* messageType
* contentType
* name
* application
* alert
* sound
* badge
* content-available
* openDirect
* keys
* custom
* sendInitiator
* startDate
* messagesPerPeriod
* minutesPerPeriod
* tzBased
* tzPastSendAction
* scheduledTzOffset
* scheduledTzSupportsDst
* inclusionLists
* exclusionLists
* status

####Outbound Page-Only Message

* messageType
* contentType
* name
* application
* keys
* custom
* sendInitiator
* startDate
* messagesPerPeriod
* minutesPerPeriod
* tzBased
* tzPastSendAction
* scheduledTzOffset
* scheduledTzSupportsDst
* inclusionLists
* exclusionLists
* status
* pageId
* url
* subject

####Outbound Alert+Page Message

* messageType
* contentType
* name
* application
* alert
* sound
* badge
* content-available
* openDirect
* keys
* custom
* sendInitiator
* startDate
* messagesPerPeriod
* minutesPerPeriod
* tzBased
* tzPastSendAction
* scheduledTzOffset
* scheduledTzSupportsDst
* inclusionLists
* exclusionLists
* status
* pageId
* url

####Location Entry or Exit Alert Message

* messageType
* contentType
* name
* application
* alert
* sound
* badge
* openDirect
* keys
* custom
* sendInitiator
* startDate
* messagesPerPeriod
* numberOfPeriods
* periodType
* isRollingPeriod
* messageLimit
* scheduledTzOffset
* scheduledTzSupportsDst
* geofences
* status

####Location Entry or Exit Alert+Page Message

* messageType
* contentType
* name
* application
* alert
* sound
* badge
* keys
* custom
* sendInitiator
* startDate
* messagesPerPeriod
* numberOfPeriods
* periodType
* isRollingPeriod
* messageLimit
* scheduledTzOffset
* scheduledTzSupportsDst
* geofences
* status
* pageId
* url

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /push/v1/message/mjK54s3RT
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
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
    "status":  2,
    "pageId": 456,
    "url": "http://www.example.com",
    "subject": "My inbox subject line",
    "geofences": [
        { "id": "MTIzOjEyODow" },
        { "id": "MzIxOjEyODow" }
    ]
}
```

**Example Response**

```json
HTTP/1.1 200
{
    200 (OK)
}
```

If the request includes invalid values, the API returns a 400 response with details on the error.