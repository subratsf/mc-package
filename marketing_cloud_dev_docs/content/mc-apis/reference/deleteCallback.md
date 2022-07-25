---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-callbacks/{callbackId}"
method: "delete"
---
##Usage

###Example Request
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /platform/v1/ens-callbacks/65b885ab-c2b4-46fe-85d0-d6cb8be8057d
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
<td>Callback is deleted.</td>
</tr>
<tr>
<td>403 Forbidden</td>
<td>Failed to pass authorization.</td>
</tr>
<tr>
<td>404 Not Found</td>
<td>Callback ID doesn’t exist.</td>
</tr>
<tr>
<td>409 Conflict</td>
<td>Subscriptions exist for the callback. Delete all subscriptions for the callback before deleting the callback.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
