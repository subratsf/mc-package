---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-callbacks"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/ens-callbacks
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 Success  
[{
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
    "callbackName": "cb1",
    "url": "https://example1.com/",
    "maxBatchSize": 1000,
    "status": "verified",
    "statusReason": "none"
  },
  {
    "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057e",
    "callbackName": "cb2",
    "url": "https://example2.com/",
    "maxBatchSize": 750,
    "status": "verified",
  	    "statusReason": "none"
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
<td>200 Success</td>
<td>Callbacks retrieved. Review example response.</td>
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
<td>Callback doesn’t exist</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
