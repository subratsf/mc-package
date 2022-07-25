---
title: Installed Package Types
---

Marketing Cloud has two types of installed packages: packages with enhanced functionality and packages with legacy functionality. Various details make it easy to tell whether you’re looking at a legacy package or enhanced package. All legacy packages have a banner at the top indicating that it’s a legacy package and a Licenses tab. Enhanced packages have an Access tab.

We recommend creating packages with enhanced functionality to use the latest updates and enhancements, including OAuth 2.0 functionality.

> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages.

##Comparing Legacy and Enhanced Packages
###API Integration Component
<table class="table table-hover">
<thead align="left">
<tr>
<th></th>
<th>Legacy Packages</th>
<th>Enhanced Packages</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Grant Types</b></td>
<td>Legacy OAuth client credentials</td>
<td>OAuth 2.0 client credentials, OAuth 2.0 authorization code</td>
</tr>
<tr>
<td><b>API Integration Types</b></td>
<td>Legacy server-to-server</td>
<td>Public app, web app, server-to-server</td>
</tr>
<tr>
<td><b>Credentials</b></td>
<td>Client ID and client secret</td>
<td>Public apps – Client ID and authorization code;
Web apps – Client ID, client secret, and authorization code;
Server-to-server – Client ID and client secret
</td>
</tr>
<tr>
<td><b>Access Token TTL</b></td>
<td>1-hour time-to-live</td>
<td>20-minute time-to-live</td>
</tr>
<tr>
<td><b>Business Unit Support</b></td>
<td>Unique credential set per business unit</td>
<td>Unique credential set per many business units</td>
</tr>
<tr>
<td><b>Endpoint</b></td>
<td>v1/requestToken</td>
<td>v2/token or v2/authorize</td>
</tr>
<tr>
<td><b>Host</b></td>
<td>exacttargetapis.com or marketingcloudapis.com</td>
<td>marketingcloudapis.com</td>
</tr>
</tbody>
</table>

###Marketing Cloud App Component
<table class="table table-hover">
<thead align="left">
<tr>
<th></th>
<th>Legacy Packages</th>
<th>Enhanced Packages</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Login Endpoint</b></td>
<td>Marketing Cloud posts JWT to login endpoint and iframes into app</td>
<td>Marketing Cloud iframes into app</td>
</tr>
<tr>
<td><b>Acquire End User Details</b></td>
<td>JWT that was posted to app’s login endpoint</td>
<td>v2/userinfo endpoint</td>
</tr>
</tbody>
</table>

###General
<table class="table table-hover">
<thead align="left">
<tr>
<th></th>
<th>Legacy Packages</th>
<th>Enhanced Packages</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Manage User Licensing</b></td>
<td>Supported on Licenses tab</td>
<td>Supported on Access tab</td>
</tr>
<tr>
<td><b>Assign User Licenses for API Integrations</b></td>
<td>Not supported</td>
<td>Supported for web and public app integrations</td>
</tr>
<tr>
<td><b>Manage Server-to-Server Integration Enablement</b></td>
<td>Not supported</td>
<td>Supported</td>
</tr>
<tr>
<td><b>Enable Server-to-Server Integration for Multiple Business Units</b></td>
<td>Not supported</td>
<td>Supported</td>
</tr>
</tbody>
</table>

##Related Items
* [Set Up Your Development Environment for Legacy Packages](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/mc-dev-setup.htm)
* [Set Up Your Development Environment for Enhanced Packages](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/mc-dev-setup-enhanced.htm)
* [API Integration](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm)
* [Manage Licensing for Installed Packages](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/license-installed-packages.htm)
