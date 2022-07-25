---
title: Get an Access Token for Legacy Packages
---

> This document applies only to API integrations in legacy packages. To get an access token for OAuth 2.0 API integrations, review [Set Up Your Development Environment for Enhanced Packages](mc-dev-setup-enhanced.htm).

> For your authentication requests, we recommend using our tenant-specific Marketing Cloud-branded endpoint structure, which includes your tenant’s subdomain. Find your authentication endpoint in Installed Packages.

The first step in any API-based integration is getting an OAuth access token to authenticate your calls.

Using the client ID and secret from the installed package, call the REST Auth service to obtain an OAuth access token for authenticating your API calls. This sample call demonstrates how to POST to that resource to acquire an access token.

    POST https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v1/requestToken
    Content-Type: application/json
    {
        "clientId": "YOUR_CLIENT_ID",
        "clientSecret": "YOUR_CLIENT_SECRET"
    }

    200 OK
    {
        "accessToken": "YOUR_ACCESS_TOKEN"
        "expiresIn": 3600
    }

The access token is returned in the **accessToken** property. Specify this access token to authenticate all other REST API calls via the **Authorization** header field with the **Bearer** HTTP authorization scheme.

```
GET https://www.YOUR_SUBDOMAIN.rest.marketingcloudapis.com/platform/v1/endpoints
Accept: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

The following example uses the same access token to authenticate with the SOAP API.

	 <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
	  <s:Header>
		<h:fueloauth xmlns="http://exacttarget.com"
					 xmlns:h="http://exacttarget.com">
		  YOUR_ACCESS_TOKEN
		</h:fueloauth>
	  </s:Header>
	  [...]
	 </s:Envelope>

##Refresh an Access Token

Note the **expiresIn** property in the HTTP response to the **requestToken** API call. Access tokens expire one hour after they are issued. If you attempt to use an expired token, you receive a **401 Unauthorized** HTTP response. If this happens, refresh your access token by calling **requestToken** again.

##Important Considerations

Follow these considerations when using the API directly and doing your own OAuth token management.

1. Do not request a new access token for every API call you make—-each access token is good for an hour and is reusable. Making two API calls for every one operation is inefficient and causes throttling.

2. Be careful where you store your client ID and secret. Never expose this information on the client side via JavaScript or store it in a mobile application. Ensure that these credentials are stored securely in your application.

##Related Items
* [requestToken Reference](requestToken.htm)
* [Introduction to SDKs](https://developer.salesforce.com/docs/atlas.en-us.mc-sdks.meta/mc-sdks/index-sdk.htm)
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
