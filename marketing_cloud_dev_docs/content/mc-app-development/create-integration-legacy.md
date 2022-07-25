---
title: Create an API Integration in Legacy Packages
---
> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages. You can still use legacy authentication and API requests with existing legacy packages.

1. Navigate to an existing legacy package.
1. Under Components, click **Add Component**.
1. Select **API Integration**.
1. Assign the appropriate scope for your integration.
  <ul>
    <li>**Perform server-to-server requests** is automatically selected for all API Integrations.</li>
    <li>If this package contains a Marketing Cloud app, select **Perform requests on behalf of the user**.</li>
    <li>Select the Marketing Cloud scope for your API calls. Assign only the scope your package needs.</li>
  </ul>
1. Save the component.

###Related Items
* [Installed Packages Scope](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/data-access-permissions.htm)
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
