---
data: <%= swaggerdoc %>
path: "/messaging/v1/sms/definitions/{definitionKey}"
method: "delete"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /messaging/v1/sms/definitions/{definitionKey}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```
HTTP/1.1 200 OK
{
  "message": “Success",
  "requestId": "UUID",
  "deletedDefinitionKey": "51a05a43-0a75-49dd-8cc7-8d316025c87f"
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
<td>Send definition is updated on server. Review example response.</td>
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
<td>404 Not Found</td>
<td>Send definition doesn’t exist.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
