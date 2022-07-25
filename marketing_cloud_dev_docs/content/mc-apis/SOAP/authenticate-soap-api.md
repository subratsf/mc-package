---
title: Authenticate Your SOAP API Calls
---
The first step in an API-based integration is authenticating your calls. OAuth access token authentication is the most secure way to authenticate SOAP API calls. You can also use a Marketing Cloud username and password to authenticate your calls. UsernameToken authentication is not as secure as access token authentication.

##Authenticate with an Access Token
1. [Get a Client ID and Secret](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm).
Obtain a client ID and secret by creating a package in Marketing Cloud with an API Integration component. Once you have your client ID and secret credentials, use them to acquire an OAuth access token directly from the API authentication service.
>The Marketing Cloud user for your integrated account must have the Installed Package | Administer permission.

2. [Get an access token](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/create-integration-enhanced.htm).
Call the REST auth service to obtain an access token.
3. Use the access token to authenticate your SOAP calls in the header.
>This access token authorizes calls in the account where you created the token. It does not flow down through child accounts.
```
 <soap:header>
	 <fueloauth>YOUR_ACCESS_TOKEN</fueloauth>
 </soap:header>
```

##Authenticate with UsernameToken
1. When setting up the Marketing Cloud user, select <strong>API User</strong>.
2. For Marketing Cloud accounts with role-based permissions, select the <strong>Role | Email | Admin | API Access | WebServices API</strong> permission. For accounts with legacy permissions, select the <strong>Grant the user access to the web services</strong> permission.
3. Enable the username and password security setting. Go to **Setup | Security | Security Settings** and find the setting under **Username and Logins**.
4. Use the Marketing Cloud username and password to authenticate your SOAP calls in the header.
```
 <soap:header>
	<Security xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
		<UsernameToken>
			<Username>XXXXX</Username>
			<Password>XXXXX</Password>
		</UsernameToken>
	</Security>
 </soap:header>
```
