---
title: Access Token for Server-to-Server Integrations
---

##Access Token Request
Construct a static endpoint for your request by appending v2/token to the Authorization Base URI provided to you when you created the API integration in Installed Packages. You can’t use legacy endpoints. Request an access token by providing the client ID and secret that you received when you created the API integration in Installed Packages.

When the access token expires, your application must request a new access token using the same v2/token route as before. The lifetime of an access token is 20 minutes.

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
<td>Type of grant. Must be "client_credentials" for server-to-server integrations.</td>
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
<td>Client secret issued when you create the API integration in Installed Packages.</td>
</tr>
<tr>
<td>scope</td>
<td>string</td>
<td>no</td>
<td>Space-separated list of data-access permissions for your application. Review [REST API Permission IDs and Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/rest-permissions-and-scopes.htm) for a full list of permissions. If you don’t include the scope parameter in the request, the token is issued with the scopes specified on the API integration in Installed Packages. If you include the scope parameter and use an empty string for the values, the token is generated with no scope permissions.</td>
</tr>
<tr>
<td>account_id</td>
<td>number</td>
<td>no</td>
<td>Account identifier, or MID, of the target business unit. Use to switch between business units. If you don’t specify account_id, the returned access token is in the context of the business unit that created the integration.</td>
</tr>
</tbody>
</table>

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com
POST /v2/token
Content-Type: application/json

{
"grant_type": "client_credentials",
"client_id": "7a9j47upktedde30uedl822p",
"client_secret": "1955278925675241571",
"scope": "email_read email_write email_send",
"account_id": "12345"
}
```
##Important Considerations

Follow these considerations when using the API directly and doing your own OAuth token management.

1. Do not request a new access token for every API call you make—-each access token is good for 20 minutes and is reusable. Making two API calls for every one operation is inefficient and causes throttling.

2. Be careful where you store your client ID and secret. Never expose this information on the client side via JavaScript or store it in a mobile application. Ensure that these credentials are stored securely in your application.

##Access Token Return
Marketing Cloud returns an access token. Your application must extract the access token and store it safely.

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
<td>token_type</td>
<td>string</td>
<td>Will be “Bearer”.</td>
</tr>
<tr>
<td>expires_in</td>
<td>number</td>
<td>Length of time in seconds that the token is valid: approximately 1080 seconds, or 18 minutes. The actual access token lifetime is 20 minutes, but the expires_in setting is 18 minutes because we recommend that you refresh your token two minutes before its lifetime ends.</td>
</tr>
<tr>
<td>scope</td>
<td>string</td>
<td>Scope values assigned to the client ID and secret pair. Returns all scopes for the integration in Installed Packages if the request doesn’t contain scopes. If scopes are included in the request, it returns these scopes, provided that the integration has these scopes in Installed Packages.</td>
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

###Example Response
```js
HTTP/1.1 200 OK
{
"access_token":"eyJhbLciOiJIPzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjIifQ.eyJhY2Nlc3NfdG9rZW4iOiJhYmJUQTlpSHZqRjkyd3Jkb0xWZEFCaloiLCJjbGllbnRfaWQiOiI3ZTRmYW1xaWUzcWtzdzlhNDRrcmxvZDgiLCJlaWQiOjEwNzU3Njc2LCJzdGFja19rZXkiOiJRQTFTMSJ9.wSFfEdeNrkoiU_tnmJ2ihm8iUqnJKlZoI3GlavTGBhs.hU4EsiC1e9txh_TCt90YlI2l7xZZ5E6_oa0xku3Jj9CCk1B72M4bhO3kUIyhwfVuB0MFbL0y9KD_RRFzg-nuqPgjPyONnby-iWopdZPBHd-3woupxCMST5-vfJO9qAED9qiUfYLS4WmHRuJTCX4NPScyu8BdROTVEe-D3iAoAeFoJX_rLZ9d5eEhIn1AvkYgoj9siuxAprHEvmySTgNIXkQA6uT_IQ-H1dbfOyJmlFKpYzvhvHb0KH7NJ24zy5bd2MQ5",
"expires_in":1080,
"token_type":"Bearer",
"rest_instance_url":"mc563885gzs27c5t9-63k636tzgm.rest.marketingcloudapis.com",
"soap_instance_url":"mc563885gzs27c5t9-63k636tzgm.soap.marketingcloudapis.com",
"scope": "email_read email_write email_send"
}
```

###Example Error Response
```js
HTTP/1.1 401 Unauthorized
{
"error": "invalid_client"
"error_description": "Invalid client ID. Use the client ID in Marketing Cloud Installed Packages."
"error_uri": "https://developer.salesforce.com/docs"
}
```

##Related Items
* [Server-to-Server Integrations with Client Credentials Grant Type](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-s2s-client-credentials.htm)
* [Web and Public App Integrations with Authorization Code Grant Type](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-app-auth-code.htm)
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
