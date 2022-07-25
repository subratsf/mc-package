---
title: Authorization Code Reference
---

##Authorization Code Request
Your application initiates the authorization code flow by directing the end user to the v2/authorize URL. You can specify the required scopes or permissions as part of the URL. Upon successful validation, the Marketing Cloud authorization service redirects the user’s web browser to the Marketing Cloud login page.

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
<td>response_type</td>
<td>string</td>
<td>Required</td>
<td>Type of response. Must be "code" for web apps and public apps.</td>
</tr>
<tr>
<td>client_id</td>
<td>string</td>
<td>Required</td>
<td>Client ID issued when you create the API integration in Installed Packages.</td>
</tr>
<tr>
<td>redirect_uri</td>
<td>string</td>
<td>Required</td>
<td>Where the end user is directed after login. Must match a redirect URL specified on the API integration in Installed Packages. The URL must be encoded for this request.</td>
</tr>
<tr>
<td>scope</td>
<td>string</td>
<td>no</td>
<td>Space-separated list of data-access permissions for your application. Review [REST API Permission IDs and Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/rest-permissions-and-scopes.htm) for a full list of permissions. If you don’t include the scope parameter in the request, the token is issued with the scopes assigned to the API integration in Installed Packages. If you include the scope parameter and use an empty string for the values, the token is generated with no scope permissions.</td>
</tr>
<tr>
<td>state</td>
<td>string</td>
<td>no</td>
<td>Used by your application to maintain state between the request and the redirect. The authorization server includes this value when redirecting the end-user’s browser back to your application. This parameter is recommended because it helps to minimize the risk of cross-site forgery attack.</td>
</tr>
</tbody>
</table>

###Example Request URL
```
https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/authorize?response_type=code&client_id=vqwyswrlzzfk024ivr682esb&redirect_uri=https%3A%2F%2F127.0.0.1%3A80%2F&scope=email_read%20email_write%20email_send&state=mystate
```

##Authorization Code Return
After the user logs in, Marketing Cloud generates an authorization code and redirects the user’s web browser to the callback URL specified by the redirect_uri parameter. The authorization code is appended to the redirect URL.

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
<td>code</td>
<td>string</td>
<td>Authorization code that must be exchanged for access tokens. Maximum length is 512 characters. Lifetime is 5 minutes.</td>
</tr>
<tr>
<td>state</td>
<td>string</td>
<td>State value that you passed as part of the original request, if applicable.</td>
</tr>
<tr>
<td>tssd</td>
<td>string</td>
<td>(AppExchange partners only) tssd is a dynamic value that represents the end user’s subdomain and is returned only when your customers use your app. Each of your customers has a unique tssd. Use the returned tssd to construct all subsequent requests on your customer’s behalf. [To make offline requests on behalf of a customer](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-considerations.htm), store this value so that you can construct requests at a later date. Ensure that your app validates tssd with the character set [a-zA-Z0-9-]. tssd is not returned in local testing.</td>
</tr>
</tbody>
</table>

###Example URL Response
```
https://127.0.0.1:80/?state=mystate&tssd={APPEXCHANGE_CUSTOMER’S_SUBDOMAIN}
&code=aWekysIEeqM9PiThEfm0Cnr0MoLIfwWyRJcqOqHdF8f9INokharAS09ia7UNP6RiVScerfhc4w
```

###Example Error Response
Upon validation failure, the authorization service redirects the user’s web browser to the callback URL specified in the redirect_uri parameter with an error code and description.

```js
{
"error": "unauthorized_client"
"error_description": "The client is not authorized to request an authorization code using this method."
"error_uri": "https://developer.salesforce.com/docs"
}
```
