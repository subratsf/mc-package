---
title: Explanation of the Decoded JWT
---

##Sample Decoded JWT

After you decode the JWT, the JSON request body looks similar to this example.

> For multi-tenant applications, such as apps on AppExchange, the authEndpoint and apiEndpointBase show your customer’s endpoint.

```
{
	"exp": 1366605874,
	"jti": "******************",
	"request": {
		"claimsVersion": 2,
		"rest": {
			"authEndpoint": "AUTH_TOKEN_ENDPOINT",
			"apiEndpointBase": "REGION_ENDPOINT",
			"refreshToken": "YOUR_REFRESH_TOKEN"
		},
		"user": {
			"id": 10083350,
			"email": "user@marketing.com",
			"culture": "en-US",
			"timezone": {
				"longName": "(GMT-06:00) Central Time (No Daylight Saving)",
				"shortName": "CST",
				"offset": -6.0,
				"dst": false
			}
		},
		"organization": {
			"id": 10088797,
			"enterpriseId": 10088797,
			"dataContext": "core",
			"stackKey": "S1",
			"region": "NA1"
		},
		"application": {
			"id": "******************",
			"package": "sandbox.SSO_APP",
			"redirectUrl": "https://localhost/SSOExample/Home.aspx",
			"features": {},
			"userPermissions": []
		}
	}
}
```

##Field Reference for Decoded JWT

<table class="table table-hover">
<thead align="left">
<tr>
<th>JSON Element</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>exp</td>
<td>The exp (expiration time) claim identifies the expiration time on or after which the token MUST NOT be accepted for processing. Contains an **IntDate** value in **UTC**.</td>
</tr>
<tr>
<td>request.claimsVersion</td>
<td>The version of the JWT claims structure. <ul><li>1 - legacy version</li><li>2 - default version for all new apps that provides greater security.</li></ul></td>
</tr>
<tr>
<td>request.rest.authEndpoint</td>
<td>Contains the correct request token URL for the environment or region. For example, <samp class="codeph nolang">`https://auth.exacttargetapis.com/v1/requestToken`</samp>. For multi-tenant applications, it can contain a tenant-specific endpoint. For example, <samp class="codeph nolang">`https://YOUR_CUSTOMERS_TSSD.auth.marketingcloudapis.com/v1/requestToken`</samp></td>
</tr>
<tr>
<td>request.rest.apiEndpointBase</td>
<td>Contains the correct URL for the base of the REST API. For example, <samp class="codeph nolang">`https://www.exacttargetapis.com/`</samp>. For multi-tenant applications, it can contain a tenant-specific endpoint. For example, <samp class="codeph nolang">`https://YOUR_CUSTOMERS_TSSD.rest.marketingcloudapis.com/`</samp></td>
</tr>
<tr>
<td>request.rest.refreshToken</td>
<td>An OAuth refresh token for getting an updated accessToken. The refreshToken is valid for up to 700 days or until it has been used. If the token expires, inform the user to log out and log back in. This process generates a new refresh token for your app. If the refreshToken was used previously, you receive a 401 Unauthorized. The refreshToken has a 5-minute revocation period after use, allowing for more attempts in case the auth service doesn't respond immediately. If your package doesn't have an API Integration component, you don't receive a refreshToken.</td>
</tr>
<tr>
<td>request.user.id</td>
<td>The user ID of the Marketing Cloud user.</td>
</tr>
<tr>
<td>request.user.oauthToken</td>
<td>(field no longer used in claims version 2) An OAuth token valid for 1 hour that can access REST Services for the user. For more information, see [Get an Access Token](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/get-access-token.htm) services page.</td>
</tr>
<tr>
<td>request.user.internalOauthToken</td>
<td>(field no longer used in claims version 2) An OAuth token that can access the SOAP API. It is also referred to as the legacyToken.</td>
</tr>
<tr>
<td>request.user.refreshToken</td>
<td>(field no longer used in claims version 2) An OAuth refresh token for getting an updated oauthToken. Refresh tokens expire after 700 days or once they have been used. When the token expires, inform the user to log out and log back in. This process generates a new refresh token for your app.</td>
</tr>
<tr>
<td>request.user.expiresIn</td>
<td>(field no longer used in claims version 2) Length in seconds before tokens expire. Value of 1200 is equal to 20 minutes, for example.</td>
</tr>
<tr>
<td>request.user.email</td>
<td>The email address of the user.</td>
</tr>
<tr>
<td>request.user.culture</td>
<td>The culture code of the user. [Timezone and Date Format Settings](http://help.marketingcloud.com/en/documentation/exacttarget/admin/timezone_and_date_format_settings/)</td>
</tr>
<tr>
<td>request.user.timezone.longName</td>
<td>The friendly name of the user's timezone.</td>
</tr>
<tr>
<td>request.user.timezone.shortName</td>
<td>The timezone code of the user.</td>
</tr>
<tr>
<td>request.user.timezone.offset</td>
<td>The Greenwich Mean Time (GMT) offset.</td>
</tr>
<tr>
<td>request.user.timezone.dst</td>
<td>Is Daylight Savings Time (DST) applied to this timezone setting?</td>
</tr>
<tr>
<td>request.organization.id</td>
<td>The Marketing Cloud account ID. <ul><li>For agency sub-accounts, this ID is the agency client ID and must match the value for the enterprise ID.</li><li>For enterprise sub-accounts, ID this is the sub-account ID and can be different from the enterprise ID.</li></ul></td>
</tr>
<tr>
<td>request.organization.enterpriseId</td>
<td>The Marketing Cloud top-level enterprise account ID. For agency sub-accounts, use the agency client ID for the enterprise ID.</td>
</tr>
<tr>
<td>request.organization.dataContext</td>
<td>The data context value represents the Marketing Cloud edition of the account. The valid values are: <ul><li>**core** - Marketing Cloud Core or Advanced Edition</li><li>**reseller** - Marketing Cloud Agency or Agency Client (Reseller Edition or Agency)</li><li>**tiered** - Marketing Cloud Enterprise Edition (Lock & Publish or On Your Behalf)</li><li>**enterprise** - Marketing Cloud Enterprise 2.0 Edition</li></ul></td>
</tr>
<tr>
<td>request.organization.stackKey</td>
<td>The Marketing Cloud server instance that the account is on. Usual production values are **S1**, **S4**, **S6**, **S7**, **S10**, or **S50**. Utilized when making Email SOAP API calls to set the appropriate web service end point.</td>
</tr>
<tr>
<td>request.organization.region</td>
<td>The currently supported data center regions are <samp class="codeph nolang">NA1</samp> and <samp class="codeph nolang">EU1</samp>.</td>
</tr>
<tr>
<td>request.application.id</td>
<td>The package ID of your application. This value is in the installed package details.</td>
</tr>
<tr>
<td>request.application.customerEnvironment</td>
<td>Value used to distinguish production versus development environments, for example.</td>
</tr>
<tr>
<td>request.application.redirectUrl</td>
<td>The URL you set for the home page of your application in the installed package. This URL is where you forward the user upon successful completion of SSO through your login page.</td>
</tr>
<tr>
<td>request.application.features</td>
<td>Reserved for internal use</td>
</tr>
<tr>
<td>request.application.userPermissions</td>
<td>Reserved for internal use</td>
</tr>
</tbody>
</table>

###Refresh Token Implementation Restrictions

Be aware of these restrictions in your implementation code when using the refreshToken to refresh the OauthToken (accessToken) that is about to expire and keep it contextualized to the logged-in user:
* The App must be installed in the account that is being used to log in. If logging in via Marketing Cloud and selecting the app from the AppExchange listings, the app is installed in the correct account.
* Only use the refreshToken parameter in the request body if you need a new contextualized token.
* Each time you get a new accessToken, include a request to GET /platform/v1/endpoints. This request ensures that your app is calling the correct customer endpoints.
* If you are using the scope parameter (retired) while requesting a new accessToken and you want to contextualize the accessToken to the logged in user, the internalOauthToken you're using MUST NOT be expired. (The expiration time is denoted in the JWT.request.user.expiresIn value, which is in seconds.)
* Here is an example /requestToken request body structure to follow.
```
{"clientId": "", "clientSecret": "", "refreshToken": "", "accessType": "offline"}
```
When you use this structure to receive a new accessToken, you also receive a new refreshToken. This newly provided refreshToken must be used in the subsequent call to get a new accessToken. The previous refreshToken provided in the JWT is now invalid because you’ve used it once.

##Related Items
* [requestToken Reference](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/requestToken.htm)
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
