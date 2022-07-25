---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-callbacks"
method: "post"
---
##Usage

> Your URL endpoint must be online and reachable before you create a callback. The Event Notification Service immediately attempts to post verification details to the endpoint.

If your callback doesn’t respond within 30 seconds or returns a non-200 HTTP status, the callback creation fails with a 400 HTTP status and the reason for the failure similar to the following.

```
"MCMS_UWH_Runtime_GeneralFailure_probeCallbackLiveness: CallbackId is 08b67f0e-5be8-4673-97e9-682c133f778c. Could not verify callback url `'https://example.com'`. Please test that the url is reachable with a https POST call and returns a 200 http status code. To retry please delete the callback and create it again. Status: NameResolutionFailure. The remote name could not be resolved: 'example.com'"
```

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/ens-callbacks
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[{
  "callbackName": "cb1",
  "url": "https://example.com/",
  "maxBatchSize": 1000
}]
```

###Example Response
```js
HTTP/1.1 201 Created
[{
  "callbackName": "cb1",
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "url": "https://example.com/",
  "signatureKey":"V27FXfqI3DnhfQW1bhFDeJixpt8eDAY5R24UJI3cK6M=",
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
<td>201 Created</td>
<td>Callback created. Review example response.</td>
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
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>

##Related Items
* [Verify Callback](verifyCallback.htm)
