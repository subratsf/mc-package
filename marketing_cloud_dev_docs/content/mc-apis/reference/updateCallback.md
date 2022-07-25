---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-callbacks"
method: "put"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /platform/v1/ens-callbacks
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "maxBatchSize": 1000
}]
```

###Example Response
```js
HTTP/1.1 200 OK
[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "callbackName": "cb1",
  "url": "https://example.com/",
  "maxBatchSize": 1000
}]
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
<td>Callback is updated. Review example response.</td>
</tr>
<tr>
<td>201 Created</td>
<td>Callback is new. Response includes callbackId, callbackName, url, and maxBatchSize.</td>
</tr>
<tr>
<td>304 No Change</td>
<td>Callback already exists on the server.</td>
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
<td>Callback ID doesn’t exist for this MID.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
