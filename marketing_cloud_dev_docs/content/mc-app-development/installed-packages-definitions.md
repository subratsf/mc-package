---
title: Installed Package Definitions
---

<table class="table table-hover">
<thead align="left">
<tr>
<th>Term</th>
<th>Definition</th>
</tr>
</thead>
<tbody>
<tr>
<td>App Center</td>
<td>Previously, an external site for managing Marketing Cloud packages. Packages are now installed and managed in Marketing Cloud Setup.</td>
</tr>
<tr>
<td>Component</td>
<td>An installed package comprises one or more components. Each component contains basic configuration details for the API integration or app that you are creating.</td>
</tr>
<tr>
<td>Enhanced Package</td>
<td>An enhanced package includes the following functionality and enhancements. All installed packages created after August 1, 2019 are enhanced packages.
  <ul>
    <li>OAuth 2.0 flows for public apps, web apps, and server-to-server API integrations.</li>
    <li>Single server-to-server integration to work on behalf of all your business units.</li>
  </ul>
</td>
</tr>
<tr>
<td>JWT signing secret</td>
<td>Use the JWT signing secret on the installed package to validate the signature for the JWT sent on a Marketing Cloud app. Journey Builder also uses the JWT signing secret from the package containing the activity as the default signing key for the JWT. The JWT signing secret was called App Signature in App Center.</td>
</tr>
<tr>
<td>Legacy Package</td>
<td>One of two types of installed packages. All installed packages created before the Marketing Cloud January 2019 release are legacy packages. All installed packages created after August 1, 2019 are enhanced packages. Legacy packages use legacy functionality and can make requests to legacy endpoints, such as v1/requestToken for authentication.</td>
</tr>
<tr>
<td>Package</td>
<td>A bundling of one or more components, including a Marketing Cloud app, Journey Builder entry sources and activities, and API Integrations. A package is installed from AppExchange or created in Marketing Cloud.</td>
</tr>
<tr>
<td>Package ID</td>
<td>Unique identifier for the package. The package ID was called App ID in App Center.</td>
</tr>
<tr>
<td>Public App Integration</td>
<td>A type of OAuth 2.0 API integration in enhanced packages. A public app allows applications that can’t securely store a client secret to integrate with Marketing Cloud on behalf of an end user using the intersection of the app’s and the user’s permissions. Examples of public apps include a single-page application or a native mobile application.</td>
</tr>
<tr>
<td>Scope</td>
<td>Your package only accesses the scope you specify when creating the package. Scope was called Data Access in App Center.</td>
</tr>
<tr>
<td>Server-to-Server Integration</td>
<td>A type of OAuth 2.0 API integration in enhanced packages. A server-to-server integration performs tasks on behalf of the integration without an end-user context, user interaction, or user interface.</td>
</tr>
<tr>
<td>Source Account</td>
<td>Name of the business unit that created this package.</td>
</tr>
<tr>
<td>Status</td>
<td><ul><li>In Development - Status for any package that isn't on AppExchange.</li> <li>Published - Package is available on AppExchange.</li></ul></td>
</tr>
<tr>
<td>Tenant</td>
<td>Depending on your [tenant type](https://help.salesforce.com/articleView?id=mc_overview_tenant_types.htm&type=5), your top-level Enterprise account and its business units, your Core account, your top-level Agency account, or your Client account.</td>
</tr>
<tr>
<td>Tenant-specific endpoint (TSE)</td>
<td>An endpoint that uses a tenant-specific subdomain. An alternative to legacy endpoints that include www.exacttargetapis.com. There are three types of TSEs for APIs:<ul><li>Auth Base URI - https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com</li> <li>REST Base URI - https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com</li> <li>SOAP Base URI - https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com</li></ul></td>
</tr>
<tr>
<td>Tenant-specific subdomain, or subdomain</td>
<td>A unique system-generated 28-character string that represents a customer’s tenant.</td>
</tr>
<tr>
<td>Type</td>
<td><ul><li>Custom - You or another user in your enterprise created this package.</li> <li>Third Party - This package came from AppExchange or an external website.</li></ul></td>
</tr>
<tr>
<td>Unique Key</td>
<td>This read-only key is auto-assigned to custom Journey Builder activities and events when they are created. Journey Builder automatically uses this value as the <samp class="codeph nolang">applicationExtensionKey</samp> on the activity and overrides the <samp class="codeph nolang">applicationExtensionKey</samp> in the config.json if it is incorrect.</td>
</tr>
<tr>
<td>Web App Integration</td>
<td>A type of OAuth 2.0 API integration in enhanced packages. A web app allows applications that can securely store a client secret to integrate with Marketing Cloud on behalf of an end user using the intersection of the app’s and the user’s permissions.</td>
</tr>
</tbody>
</table>

## Related Items
*  [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
