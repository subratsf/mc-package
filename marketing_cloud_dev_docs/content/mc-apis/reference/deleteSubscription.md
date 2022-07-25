---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-subscriptions/{subscriptionId}"
method: "delete"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /platform/v1/ens-subscriptions/d89c87c4-70f8-43d6-be1e-f01dce97fe4c
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
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
<td>Subscription deleted.</td>
</tr>
<tr>
<td>403 Forbidden</td>
<td>Failed to pass authorization.</td>
</tr>
<tr>
<td>404 Not Found</td>
<td>Subscription ID doesn’t exist.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
