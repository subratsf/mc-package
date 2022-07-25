---
data: <%= swaggerdoc %>
path: "/messaging/v1/sms/definitions"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/sms/definitions/?$filter=status%20eq%20active&$pageSize=10&$page=1&$orderBy=name
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "requestId": "ba9633fa-5c8d-4c42-8efa-a16412ac0c53",
  "definitions": [
    {
      "definitionKey": "account-reset",
      "status": "Active",
      "name": "Using new SMS Transactional API",
      "createdDate": "2018-07-18T19:52:00",
      "modifiedDate": "2018-07-18T19:52:00"
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 10
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
<td>403 Forbidden</td>
<td>Failed to pass authorization.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
