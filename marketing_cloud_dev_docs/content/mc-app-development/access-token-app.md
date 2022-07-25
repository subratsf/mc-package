---
title: Access Token for Web and Public App Integrations
---

##Access Token Request
Construct an endpoint for your request by appending v2/token to the Authorization Base URL provided when you created the API integration. You can’t use legacy endpoints. After constructing the token endpoint, request an access token and refresh token by posting the authorization code to the token endpoint. The authorization code was appended to the redirect URL after the user logged in to Marketing Cloud.

By default, the tokens are revoked when the user logs out of Marketing Cloud. To create a token that isn’t revoked, first select the offline access scope for your app in Marketing Cloud Installed Packages. You must also include the offline scope in your request. This request generates access and refresh tokens that you can use, even when the user is not logged in to Marketing Cloud.

> For AppExchange partners only: The subdomain, or TSSD, that is returned in the /authorize response is different from your own subdomain used as part of the /authorize request. Use the dynamic end-user subdomain returned from /authorize to construct subsequent token requests on your customer’s behalf.

###JSON Parameters
<table class="table table-hover">
<thead align="left">
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>grant_type</td>
<td>string</td>
<td>Required</td>
<td>Type of grant. Must be "authorization_code" for web apps and public apps.</td>
</tr>
<tr>
<td>code</td>
<td>string</td>
<td>Required</td>
<td>Authorization code obtained as part of the v2/authorize request.</td>
</tr>
<tr>
<td>client_id</td>
<td>string</td>
<td>Required</td>
<td>Client ID issued when you create the API integration in Installed Packages.</td>
</tr>
<tr>
<td>client_secret</td>
<td>string</td>
<td>Required</td>
<td>Required for web apps. Client secret issued when you create the API integration in Installed Packages.</td>
</tr>
<tr>
<td>redirect_uri</td>
<td>string</td>
<td>Required</td>
<td>Must match the redirect URL used to request the authorization code. Must be in plain text as it is in Installed Packages. It can’t be URL-encoded for this request.</td>
</tr>
<tr>
<td>scope</td>
<td>string</td>
<td>no</td>
<td>Space-separated list of data-access permissions for your application. Review [REST API Permission IDs and Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/rest-permissions-and-scopes.htm) for a full list of permissions. Must match the scopes or be a subset of the scopes requested as part of the authorization code request. If you don’t include the scope parameter in the request, the token is issued with the scopes specified on the API integration in Installed Packages. If you include the scope parameter and use an empty string for the values, the token is generated with no scope permissions.</td>
</tr>
<tr>
<td>account_id</td>
<td>number</td>
<td>no</td>
<td>Account identifier, or MID, of the target business unit if you’re trying to switch between different business units.</td>
</tr>
</tbody>
</table>

###Example Public App Request
```js
Host: https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com
POST /v2/token
Content-Type: application/json

{
  "grant_type": "authorization_code",
  "code": "eyJhbZciOiJIUzI1NiIsImtpZCI6IjIiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdG9rZW4iOiJhY0tlbEVIaTdzVERNNWd5VVR1VGdsS1YiLCJjbGllbnRfaWQiOiJmaG0yd2lsb2d2ajhqNXdzcWprZmgwejUiLCJlaWQiOjEwNzcxNzA2LCJzdGFja19rZXkiOiJRQTFTMSIsInBsYXRmb3JtX3ZlcnNpb24iOjIsImNsaWVudF90eXBlIjoiU2VydmVyVG9TZXJ2ZXIifQ.Q0qyABvInOiz3PfGsTDbj1coVTTdD8A4pCZS395P3Qo.DoROxfr3CQlMVMtVd5gYERWFYWoiNWojKObHxOq_5BqR98CDSAqfExfH-mv3PFMzy0U2NntttdgZK5wTL0UejXCxxH_XlcgL5k1TWzv_K-uTlPmliK2eI0LnaR1ti-TSqG36RnfUWzZ8KlAuGlqdGv-wgJtLeQTCEqE97yuqnlppgLLOB",
  "client_id": "7a7j47upktedde30uedl822p",
  "redirect_uri": "https://127.0.0.1:80/",
  "scope": "email_read email_write email_send offline"
}
```

###Example Web App Request
```js
Host: https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com
POST /v2/token
Content-Type: application/json

{
  "grant_type": "authorization_code",
  "code": "eyJhbZciOiJIUzI1NiIsImtpZCI6IjIiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdG9rZW4iOiJhY0tlbEVIaTdzVERNNWd5VVR1VGdsS1YiLCJjbGllbnRfaWQiOiJmaG0yd2lsb2d2ajhqNXdzcWprZmgwejUiLCJlaWQiOjEwNzcxNzA2LCJzdGFja19rZXkiOiJRQTFTMSIsInBsYXRmb3JtX3ZlcnNpb24iOjIsImNsaWVudF90eXBlIjoiU2VydmVyVG9TZXJ2ZXIifQ.Q0qyABvInOiz3PfGsTDbj1coVTTdD8A4pCZS395P3Qo.DoROxfr3CQlMVMtVd5gYERWFYWoiNWojKObHxOq_5BqR98CDSAqfExfH-mv3PFMzy0U2NntttdgZK5wTL0UejXCxxH_XlcgL5k1TWzv_K-uTlPmliK2eI0LnaR1ti-TSqG36RnfUWzZ8KlAuGlqdGv-wgJtLeQTCEqE97yuqnlppgLLOB",
  "client_id": "7a8j47upktedde30uedl822p",
  “client_secret: “lYkAjPxnmHP4Zarpv1U4cLf0”
  "redirect_uri": "https://127.0.0.1:80/",
  "scope": "email_read email_write email_send offline"
}
```

##Access Token Return
Upon successful validation of the request, the Marketing Cloud authorization service issues an access token and a refresh token. You can use the tokens returned from the v2/token route only with marketingcloudapis.com endpoints.

<div class="alert">Protect the access token as you would protect user credentials.</div>

###Response Parameters
<table class="table table-hover">
<thead align="left">
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>access_token</td>
<td>string</td>
<td>Acts as a session ID that the application uses to make requests. Maximum length is 512 characters. Lifetime is 20 minutes.</td>
</tr>
<tr>
<td>refresh_token</td>
<td>string</td>
<td>Token that can be used in the future to obtain a new access token. Maximum length is 512 characters. Default lifetime is 30 days.</td>
</tr>
<tr>
<td>expires_in</td>
<td>number</td>
<td>Length of time in seconds that the access token is valid.</td>
</tr>
<tr>
<td>scope</td>
<td>string</td>
<td>List of scopes available for the access token.</td>
</tr>
<tr>
<td>rest_instance_url</td>
<td>string</td>
<td>Your tenant’s REST base URL for making REST API calls.</td>
</tr>
<tr>
<td>soap_instance_url</td>
<td>string</td>
<td>Your tenant’s SOAP base URL for making SOAP API calls.</td>
</tr>
</tbody>
</table>

###Example Web App and Public App Response
```js
HTTP/1.1 200 OK
{
   "access_token":"eyJhbZciOiJIUzI1NiIsImtpZCI6IjEiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdG9rZW4iOiJjZ3RHRklkUjUydnY4WHhLRHZaTDU2VHAiLCJjbGllbnRfaWQiOiI5b2xhcnI3emEyZHplaWtlaTBxZ2Z0dm0iLCJlaWQiOjEwODU1ODQsInN0YWNrX2tleSI6IlFBM1MxIiwicGxhdGZvcm1fdmVyc2lvbiI6MiwiY2xpZW50X3R5cGUiOiJDb25maWRlbnRpYWwifQ.Hp6gLSnlvBsx9FI6qXwJ12HJVzStWLIJdlzrx4XIIN4.t2kCu9YBNHVask49MQZXMlKGvYMXEc50QkRTc3y5_ylEWC8hPyEkU9sIanqL0ALSwFNyhQmMF6aajnmSrsD5obIl-NjXNfIwYWmnDqZU6HFBgbMoR3ofuEGIhrGokqUbD8nHZtgp-otgQSOg5Qj_RqUHUC0N0Fo4BUCXTq5BiM_EjP_djIKZF",
 "refresh_token":"eyJhbZciOiJIUzI1NiIsImtpZCI6IjEiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJyZWZyZXNoX3Rva2VuIjoiY2JINUE0aUdnTnBQVmJzOTlCUlZnNmh6IiwiY2xpZW50X2lkIjoiOW9sYXJyN3phMmR6ZWlrZWkwcWdmdHZtIiwiZWlkIjoxMDg1NTg0LCJzdGFja19rZXkiOiJRQTNTMSIsInBsYXRmb3JtX3ZlcnNpb24iOjIsImNsaWVudF90eXBlIjoiQ29uZmlkZW50aWFsIn0.-kScEfPhdz2g75b-KgTnmYKK9YTbUu9m9AhDTKkYFr4.mFd_EyLlPeAmfmwqqiBi_0HrAL5Ndtj1R9zWMj0Y80FOjB9n_EPYR0nKGKkNeijVuxmdMNgnOSF_isxGDwqjDoor2x4B-gP9Erl0gl4u58yzAXcjesNoJ1L96HJ3kjg-Jwke4p4K1MEWoB0fsrbDUaIAkg2Tf5THwrTLAxKRhn-ANltUDwUt",
   "expires_in":1200,
   "token_type":"Bearer",
   "rest_instance_url":"mc563885gzs27c5t9-63k636tzgm.rest.marketingcloudapis.com",
   "soap_instance_url":"mc563885gzs27c5t9-63k636tzgm.soap.marketingcloudapis.com",
   "scope": "email_read email_write email_send offline"
}
```

###Example Error Response
Upon validation failure and for certain errors, the authorization service redirects the user's web browser to the callback URL in the redirect_uri parameter with an error code and description. The following error that doesn't redirect the user's browser: Invalid client identifier error.

```js
HTTP/1.1 401 Unauthorized
{
"error": "unauthorized_client"
"error_description": "The client is not authorized to request an authorization code using this method."
"error_uri": "https://developer.salesforce.com/docs"
}
```

##Refresh Access Token
The lifetime of the access token is 20 minutes. When the access token expires, your application must use the same token endpoint and refresh token to request a new access and refresh token pair. Public apps don’t have a client secret.

###Example Web App Request
```js
POST /v2/token
Host: https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com
Content-Type: application/json

{
  "grant_type": "refresh_token",
  "client_id": "7a8j47upktedde30uedl822p",
  "client_secret": "lYkAjPxnmHP4Zarpv1U4cLf0",
  "refresh_token": "eyJhbZciOiJIUzI1NiIsImtpZCI6IjEiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJyZWZyZXNoX3Rva2VuIjoiY2JINUE0aUdnTnBQVmJzOTlCUlZnNmh6IiwiY2xpZW50X2lkIjoiOW9sYXJyN3phMmR6ZWlrZWkwcWdmdHZtIiwiZWlkIjoxMDg1NTg0LCJzdGFja19rZXkiOiJRQTNTMSIsInBsYXRmb3JtX3ZlcnNpb24iOjIsImNsaWVudF90eXBlIjoiQ29uZmlkZW50aWFsIn0.-kScEfPhdz2g75b-KgTnmYKK9YTbUu9m9AhDTKkYFr4.mFd_EyLlPeAmfmwqqiBi_0HrAL5Ndtj1R9zWMj0Y80FOjB9n_EPYR0nKGKkNeijVuxmdMNgnOSF_isxGDwqjDoor2x4B-gP9Erl0gl4u58yzAXcjesNoJ1L96HJ3kjg-Jwke4p4K1MEWoB0fsrbDUaIAkg2Tf5THwrTLAxKRhn-ANltUDwUt",
  "account_id":"12345"
}
```

###JSON Parameters
<table class="table table-hover">
<thead align="left">
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>grant_type</td>
<td>string</td>
<td>Required</td>
<td>Type of grant. Must be "refresh_token".</td>
</tr>
<tr>
<td>client_id</td>
<td>string</td>
<td>Required</td>
<td>Client ID issued when you create the API integration in Installed Packages.</td>
</tr>
<tr>
<td>client_secret</td>
<td>string</td>
<td>Required</td>
<td>Required for web apps. Client secret issued when you create the API integration in Installed Packages.</td>
</tr>
<tr>
<td>refresh_token</td>
<td>string</td>
<td>Required</td>
<td>Refresh token provided as part of the previous token pair.</td>
</tr>
<tr>
<td>scope</td>
<td>string</td>
<td>no</td>
<td>Space-separated list of data-access permissions for your application. Review [REST API Permission IDs and Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/rest-permissions-and-scopes.htm) for a full list of permissions. Must match the scopes or be a subset of the scopes used in the previous refresh token request. If you don’t include the scope parameter in the request, the token is issued with the scopes scopes assigned to the refresh token. If you include the scope parameter and use an empty string for the values, the token is generated with no scope permissions.</td>
</tr>
<tr>
<td>account_id</td>
<td>number</td>
<td>no</td>
<td>Account identifier of the target business unit. Used to switch between business units.</td>
</tr>
</tbody>
</table>
