---
title: Create an OAuth 2.0 API Integration in Enhanced Packages
---

1. [Create an installed package](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/install-packages.htm) with enhanced functionality, or navigate to an existing package created with enhanced functionality.
1. Under Components, click **Add Component**.
1. Select **API Integration**. After you add an API integration component, it can’t be removed.
1. Select an integration type.
1. Set the properties for the integration, including scopes and the redirect URIs for web and public apps. You can’t use a redirect URI that is URL encoded. You can use `https://127.0.0.1:80/` as a valid redirect URI for local testing.
1. Save the component.

##Related Items
* [Installed Packages Scope](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/data-access-permissions.htm)
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
