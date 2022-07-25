---
data: <%= swaggerdoc %>
path: "/push/v1/message"
method: "post"
---
###Usage

You can create different types of messages using this call. Ensure that you include the correct properties for each message type using the list below.

API Rate Limits: We might enforce a rate limit if you perform more than 100 requests per minute or have more than 1,000 active push message templates. Rather than create a unique push message template for each subscriber, use personalization strings, AMPscript, or message field overrides when sending a push message.

####Outbound Alert Message

* messageType
* contentType
* name (required)
* application (required)
* alert
* sound
* badge
* content-available
* openDirect
* keys
* custom
* sendInitiator
* startDate (required)
* messagesPerPeriod
* minutesPerPeriod
* tzBased
* tzPastSendAction
* scheduledTzOffset
* scheduledTzSupportsDst
* inclusionLists
* exclusionLists
* inclusionDataExtensions
* exclusionDataExtensions
* status
* media
* title
* subtitle

####Location Entry or Exit Alert Message

* messageType
* contentType
* name (required)
* application (required)
* alert (required)
* sound
* badge
* openDirect
* keys
* custom
* sendInitiator
* startDate (required)
* messagesPerPeriod
* numberOfPeriods
* periodType
* isRollingPeriod
* messageLimit
* scheduledTzOffset
* scheduledTzSupportsDst
* geofences (required)
* status
* media
* title
* subtitle

####Location Entry or Exit Alert+Page Message

* messageType
* contentType
* name (required)
* application (required)
* alert (required)
* sound
* badge
* keys
* custom
* sendInitiator
* startDate (required)
* messagesPerPeriod
* numberOfPeriods
* periodType
* isRollingPeriod
* messageLimit
* scheduledTzOffset
* scheduledTzSupportsDst
* geofences (required)
* status
* pageId (required)
* url (required)
* media
* title
* subtitle

####Inbox Only Message

* messageType
* contentType
* name (required)
* application (required)
* keys
* custom
* sendInitiator
* startDate (required)
* tzBased
* tzPastSendAction
* scheduledTzOffset
* scheduledTzSupportsDst
* inclusionLists
* exclusionLists
* inclusionDataExtensions
* exclusionDataExtensions
* status
* pageId (required)
* url (required)
* subject (required)

####Inbox+Alert Message

* messageType
* contentType
* name (required)
* application (required)
* alert (required)
* sound
* badge
* content-available
* openDirect
* keys
* custom
* sendInitiator
* startDate (required)
* messagesPerPeriod
* minutesPerPeriod
* tzBased
* tzPastSendAction
* scheduledTzOffset
* scheduledTzSupportsDst
* inclusionLists
* exclusionLists
* inclusionDataExtensions
* exclusionDataExtensions
* status
* pageId (required)
* url (required)
* subject (required)
* media
* title
* subtitle

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/message
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
    "endDate": "2014-04-30T14:55:00Z",
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
    "media": {
      "iosUrl":"https://example.com",  
      "androidUrl":"https://example.com",
      "alt":"Example ALT Text"
    },
    "geofences": [
        { "id": "MTIzOjEyODow" },
        { "id": "MzIxOjEyODow" }
    ]
}
```

**Example Response**

If all values in the request are valid, the API returns a response with the message parameters.

```json
HTTP/1.1 201
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
```

If the request was not valid, the API returns a 400 response with details on the error. The example below includes the error for not including any DeviceTokens values:

```json
HTTP/1.1 400 Bad Request
{
    "errors":    [
        "The count of DeviceTokens cannot be zero."
    ]
}
```

**Possible Errors**

<table class="table table-hover">
<thead align="left">
<tr>
<th>Message</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>Message id {0} is not valid.</td>
<td>The messageID value provided in the URL was not in a valid format.</td>
</tr>
<tr>
<td>Message {0} is not valid for the client.</td>
<td>The messageID value included in the URL does not match a valid value within the account.</td>
</tr>
<tr>
<td>The status for Message {0} is not set to Active.</td>
<td>The status for the message used in the call must be set to Active.</td>
</tr>
<tr>
<td>The count of DeviceTokens cannot be zero.</td>
<td>At least one value needs to be passed in the DeviceTokens parameter.</td>
</tr>
<tr>
<td>One or more DeviceTokens must be specified in order to send a message.</td>
<td>The call does not include a parameter for the DeviceToken value.</td>
</tr>
<tr>
<td>Message is blank and no override message was provided.</td>
<td>The message definition within the MobilePush interface does not have a message specified so the messageText parameter is required.</td>
</tr>
<tr>
<td>Cannot override message text with a blank message.</td>
<td>The parameter for Override was set to true, but the value passed for messageText does not contain a value.</td>
</tr>
<tr>
<td>MessageText is not applicable when Override is false.</td>
<td>The call does not require passing a value for messageText if Override is set to true.</td>
</tr>
<tr>
<td>{0} is not a valid send time (yyyy-MM-dd HH:mm).</td>
<td>The call includes an invalid send time.</td>
</tr>
</tbody>
</table>
