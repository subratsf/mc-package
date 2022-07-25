---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-regenerate"
method: "put"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /platform/v1/ens-regenerate
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d"
}]
```

###Example Response
```js
HTTP/1.1 200 OK
[{
  "callbackName": "cb1",
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "url": "https://example.com/",
  "signatureKey": "KktBXb9V556KtSDG7Wb5a0xHAu/z9n3k+YekDzLy7i0="
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
<td>New signature key generated. Review example response.</td>
</tr>
<tr>
<td>400 Bad Request</td>
<td>Unable to process the request.</td>
</tr>
<tr>
<td>401 Unauthorized</td>
<td>Request not authorized; missing or incorrect bearer token.</td>
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
