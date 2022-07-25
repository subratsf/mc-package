---
title: requestToken Reference for Legacy Packages
---
> This document applies only to API integrations in legacy packages. To get an access token for OAuth 2.0 API integrations, review [Set Up Your Development Environment for Enhanced Packages](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-getting-started.meta/mc-getting-started/mc-dev-setup-enhanced.htm).

> For your authentication requests, we recommend using our tenant-specific Marketing Cloud-branded endpoint structure, which includes your tenant’s subdomain. Find your endpoints in Installed Packages. New and existing customers on S1 through S10 can continue to use https://auth.exacttargetapis.com, which does not include your subdomain.

To obtain an OAuth token, perform an HTTP POST specifying your clientID and clientSecret in the request body.

##Query Parameters
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
<td>legacy</td>
<td>boolean</td>
<td>no</td>
<td>Set to 1 to return a legacy token</td>
</tr>
</tbody>
</table>

##JSON Parameters
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
<td>clientID</td>
<td>string</td>
<td>Required</td>
<td>First part of the Client Credentials App Key pair generated when creating an API Integration</td>
</tr>
<tr>
<td>clientSecret</td>
<td>string</td>
<td>Required</td>
<td>Second part of the Client Credentials App Key pair generated when creating an API Integration</td>
</tr>
<tr>
<td>accessType</td>
<td>string</td>
<td>no</td>
<td>Set to <strong>offline</strong> to return a RefreshToken that is not session-based for later use</td>
</tr>
<tr>
<td>refreshToken</td>
<td>string</td>
<td>no</td>
<td>Use the refreshToken obtained through SSO for Marketing Cloud Apps along with the accessType option to return an accessToken that is contextualized for your app. The refreshToken is valid for up to 700 days until it is used and can only be used once. It has a 5-minute revocation period after use, allowing for more attempts in case the service doesn't respond immediately.</td>
</tr>
</tbody>
</table>

##Example Request for Production
```json
//Request token for a Marketing Cloud Production environment https://mc.exacttarget.com.

POST https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v1/requestToken
Content-Type: application/json
{
  "clientId": "gyjzvytv7ukqtfn3x2qdyfsn",
  "clientSecret": "************"
}
```
##Example Request for Testing
```json
//Request token for a Marketing Cloud Production Support (sandbox) environment https://mc.test.exacttarget.com.

POST https://auth-test.exacttargetapis.com/v1/requestToken
Content-Type: application/json
{
  "clientId": "gyjzvytv7ukqtfn3x2qdyfsn",
  "clientSecret": "************"
}
```
##Example Response

The HTTP POST with valid values for clientID and clientSecret returns two values:

1. **accessToken** - An OAuth token passed to subsequent API requests.
2. **expiresIn** - The expiration period of the OAuth token in seconds. The default value of 3600 seconds cannot be changed.

```json
{
  "accessToken": "************************",
  "expiresIn": 3600
}
```
##Example Request for SSO
```json
//Request token for a Marketing Cloud app.

POST https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v1/requestToken
Content-Type: application/json
{
  "clientId": "gyjzvytv7ukqtfn3x2qdyfsn",
  "clientSecret": "************",
  "refreshToken": "************************",
  "accessType": "offline"
}
```
##Example Response for SSO
```json
{
  "accessToken": "************************",
  "expiresIn": 3600
  "refreshToken": "************************"
}
```
##Related Items
* [SSO for Marketing Cloud Apps](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/single-sign-on.htm)
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
* [Determine Your Marketing Cloud Instance](https://help.salesforce.com/articleView?id=mc_overview_determine_your_marketing_cloud_instance.htm&type=5)
