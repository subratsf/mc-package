---
data: <%= swaggerdoc %>
path: "/messaging/v1/email/messages/{messageKey}"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/email/messages/bcX0qaEp0USGciEnUJTW0w
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response: Sent Status
The message is sent to the outbound mail service for delivery.

```js
HTTP/1.1 200 OK
{
  "requestId": "77431635-1b6b-44db-a16d-420361a43dc1",
  "eventCategoryType": "TransactionalSendEvents.EmailSent",
  "timestamp": "2018-08-03T13:41:18.55",
  "compositeId": "1F3631D4-5497-E811-80E4-1402EC6B9540.214435.228431.1.231481617",
  "info": {
    "messageKey": "bcX0qaEp0USGciEnUJTW0w",
    "contactKey": "66d756bb-00b1-4547-a413-b6cf63f91a4d",
    "to": "recipient1@example.com"
  }
}
```

###Example Response: Queued Status
The message is queued for processing and assigned a sent or notSent status after processing.  The message remains in EmailQueued status when the definitionKey is inactive.

```js
HTTP/1.1 200 OK
{
  "requestId": "fcdbb2f9-438b-4d52-a380-2eade2f46396",
  "eventCategoryType": "TransactionalSendEvents.EmailQueued",
  "timestamp": "2018-08-16T10:44:41.2196"
}
```

###Example Response: NotSent Status
The message isn’t sent because of a processing error described in the info object.

```
HTTP/1.1 200 OK
{
  "requestId": "30486456-ed41-46ba-96eb-06c4ff3b95d9",
  "eventCategoryType": "TransactionalSendEvents.EmailNotSent",
  "timestamp": "2018-07-24T06:26:58.463",
  "compositeId": "56941A9F-3A8F-E811-80E0-1402EC6B9529.4647028.622338.1.318768528",
  "info": {
    "messageKey": "9a-zUvWf3UKxLpwwIrqTmQ",
    "contactKey": "ec25a8c8-6d4e-42f0-84c3-4ea23564cbe5",
    "to": "recipient2@example.com",
    "statusCode": 16,
    "statusMessage": "InvalidAttributeValue"
  }
```

###HTTP Responses
<table class="table table-hover">
<thead align="left">
<tr>
<th>Response</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td>200 OK</td>
<td>Success. Review example responses.</td>
</tr>
<tr>
<td>400 Bad Request</td>
<td>Invalid request</td>
</tr>
<tr>
<td>401 Unauthorized</td>
<td>Failed to pass authorization.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
