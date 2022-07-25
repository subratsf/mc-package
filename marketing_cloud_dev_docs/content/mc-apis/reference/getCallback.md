---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-callbacks/{callbackId}"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/ens-callbacks/65b885ab-c2b4-46fe-85d0-d6cb8be8057d
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 Success
{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "url": "https://example.com/",
  "maxBatchSize": 1000,
  "status": "verified",
  "statusReason": "none"
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
<td>200 Success</td>
<td>Callback retrieved. Review example response.</td>
</tr>
<tr>
<td>400 Bad Request</td>
<td>Unable to process the request.</td>
</tr>
<tr>
<td>403 Forbidden</td>
<td>Failed to pass authorization.</td>
</tr>
<tr>
<td>404 Not Found</td>
<td>Callback ID doesn't exist.</td>
</tr>
</tbody>
</table>
