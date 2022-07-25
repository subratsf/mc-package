---
data: <%= swaggerdoc %>
path: "/messaging/v1/email/messages/?type=notSent"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/email/messages/?type=notSent&$pagesize=20&lastEventId=35759
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "lastEventID": 35774,
  "messages": [
    {
      "statusCode": 24,
      "statusMessage": "ListDetectiveExclusion",
      "eventCategoryType": "TransactionalSendEvents.EmailNotSent",
      "timestamp": "2018-12-17T13:05:40.947",
      "definitionKey": "technical_deep_dive_1",
      "eventID": 35760,
      "info": {
        "messageKey": "2iQNfGHj2UqTalK9x2gPow"
      }
    }
  ],
  "count": 1
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
<td>Success. Review example response.</td>
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
