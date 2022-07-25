---
title: API Integration
---
To obtain credentials for authentication, add an API integration to your installed package in Marketing Cloud. Under the component details, locate the client ID and client secret, if applicable. Use these credentials with your Authentication Base URI to get an access token to authenticate your API requests.

<div class="alert">Store your client ID and secret securely. Never expose this information on the client side via JavaScript or store it in a mobile application.</div>

To create an API integration, you must have the Installed Package | Administer permission. This permission is automatically applied to the Administrator and Marketing Cloud Administrator system-defined roles. Add the permission for a role or user in the Administration area.

An enhanced package can have a server-to-server integration or a web or public app integration. These types of integration use OAuth 2.0 authentication to obtain an access token. Legacy packages don’t support OAuth 2.0, and they use legacy routes for API authentication.


##Related Items
* [Installed Packages Scope](data-access-permissions.htm)
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
* [Create an OAuth 2.0 API Integration in Enhanced Packages](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/create-integration-enhanced.htm)
* [Create an API Integration in Legacy Packages](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/create-integration-legacy.htm)
