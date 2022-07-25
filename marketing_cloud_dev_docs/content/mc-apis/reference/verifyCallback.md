---
data: <%= swaggerdoc %>
path: "/platform/v1/ens-verify"
method: "post"
---
##Usage

The Event Notification Service requires a two-step verification process for registering a callback. Two-step verification ensures that the stream of event notifications can’t be used to attack an external URL endpoint. To achieve this security, the URL endpoint must have a critical role in the verification process. Therefore, it’s the only receiver of the single-use verification key needed to complete callback verification.

In callback verification, a unique, single-use verification key is generated when you create a callback and is sent to the callback URL that you registered using the create callback route. The payload that is posted to the callback URL is the same payload used to call the verify callback route.

```
{
     "callbackId": "<callbackIDString>",
     "verificationKey": “<verificationKeyString>"
}
```

The URL endpoint must do one of the following.
* Capture verification details, including the verification key, and immediately return them by calling the verify callback route.
* Capture verification details, including the verification key, in a way that allows a developer to manually call the verify callback route.

If you choose to allow manual verification, use the following code in your callback implementation to log the verification details.

```
JSONObject req = new JSONObject(<httprequest>);

if (req.getString("verificationKey") != null) {
   System.out.println("Verification details: " + <httprequest>);
   // return HTTP 200 code
} else {
   // Do notification processing
}
```

To manually verify the callback, use the logged verification details to invoke the verify callback route.

```
curl -X POST \
 https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com/platform/v1/ens-verify \
 -H 'Authorization: Bearer BEARER_TOKEN' \
 -H 'Content-Type: application/json' \
 -d '{
   "callbackId": "<callbackIDString>",
   "verificationKey": "<verificationKeyString>"
}'
```

Ensure that your callback completes verification within four hours.

###Example Request

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/ens-verify
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "callbackId": "65b885ab-c2b4-46fe-85d0-d6cb8be8057d",
  "verificationKey": "CZwJw4XATH6LK1fPWFeMDkIyVbro6T3ijXK8CrzQe2s=\"
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
<td>Callback successfully verified</td>
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
<td>Incorrect callback ID, verification key, or both.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
