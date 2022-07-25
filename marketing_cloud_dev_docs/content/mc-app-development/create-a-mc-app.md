---
title: Create a Marketing Cloud App
---
> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages.

A Marketing Cloud app is an externally hosted app that is iframed into Marketing Cloud. Marketing Cloud apps include custom apps built by your organization or apps installed from AppExchange. You launch an app via the Marketing Cloud app menu.

For a legacy package, Marketing Cloud posts a JSON Web Token (JWT) to your externally hosted app so that it can acquire access tokens on behalf of logged-in users. After you know the hosted endpoint for your app, you must register the endpoint in a Marketing Cloud installed package.

An enhanced package doesn’t use a posted JWT. Instead, your externally hosted app must use a web app or public app OAuth 2.0 integration to acquire an access token. Use that access token to request information about the end user by calling the v2/userinfo REST endpoint.

1. [Create an installed package](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/install-packages.htm), or navigate to an existing package.
1. Under Components, click **Add Component**.
1. Select **Marketing Cloud App**.
1. Enter a name and description for your app.
1. (Legacy packages only) Check your SSO Claim Version. The decoded JWT includes a refreshToken only if your package has an API Integration component.
1. Enter your app’s login, redirect, and logout URLs. Point to localhost or test locations first, if needed, and edit these values later. All URLs must be HTTPS (TLS).
	* **Login** – Marketing Cloud uses this endpoint to iframe your externally hosted app. Your app can show anything here. Your app must set a cookie at login. To retrieve information about the end user, ensure that your externally hosted app immediately kicks off Marketing Cloud’s [OAuth 2.0 authorization code flow](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-app-auth-code.htm) and then calls the [v2/userinfo route](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/getUserInfo.htm) after calling your login endpoint. Legacy packages only: Marketing Cloud posts the JWT here.
	* **Redirect** – (Legacy packages only) A redirect is required as another endpoint that you can use to provide app information. The redirect endpoint is returned in the JWT payload, but Marketing Cloud doesn’t do anything with it.
	* **Logout** - Marketing Cloud performs a GET on the logout endpoint from the browser. This logout URL ends the user’s session and unsets the cookie set on login. When the user logs out of Marketing Cloud, the app session also ends.
1. Save the component.
1. Log out of Marketing Cloud, and log back in to see your app in the AppExchange menu in Marketing Cloud.

For your app to load in the Marketing Cloud iframe, ensure that your app’s x-frame-options allow the <samp class="codeph nolang">exacttarget.com</samp> domain.

##Related Items
* [Installed Packages Scope](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/data-access-permissions.htm)
* [Upgrade SSO Claim Version](upgrade-sso.htm)
* [List Your App in AppExchange](list-app-appexchange.htm)
