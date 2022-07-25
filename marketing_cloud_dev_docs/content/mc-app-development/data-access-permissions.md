---
title: API Integration Permission Scopes
---
To let your API integration access Marketing Cloud functionality, assign it permissions, or scopes, in Installed Packages. Assign only the scopes that your package needs. A scope usually represents a collection of related permissions and behaviors in Marketing Cloud. Review [REST Permissions and Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/rest-permissions-and-scopes.htm) to see how these scopes map to permission IDs and API resources.

Server-to-server integrations using the client credentials grant type perform tasks on behalf of the integration. The scopes that are assigned to these integrations represent which Marketing Cloud functionality the integration can access.  

Web app and public app integrations using the authorization code grant type perform tasks on behalf of an end user and use the intersection of the app’s permissions and the user’s permissions. The scopes that are assigned to these integrations represent which Marketing Cloud functionality the integration can access. However, the scopes don’t account for the functionality that the end user can access. Request and compare scopes against user permissions by calling the v2/userinfo resource after your app completes the authorization code flow.  

This list shows the available scopes you can request.

Channels
* Email - Read, Write, Send
<br />
Email message management and sending
* OTT - Read, Send
<br />
Chat message management and sending
* Push - Read, Write, Send
<br />
Push message management and sending
* SMS - Read, Write, Send
<br />
SMS message management and sending
* Social - Read, Write, Publish, Post
* Web - Read, Write, Publish

Assets
* Documents and Images - Read, Write
<br />
Documents and images in the portfolio or image library
* Saved Content - Read, Write
<br />
Content saved in content areas, surveys, and coupons

Automation
* Automations - Read, Write, Execute
<br />
Programs and activities
* Journeys (Interactions) - Read, Write, Execute

Contacts
* Audiences - Read, Write
* Lists and Subscribers - Read, Write
<br />
Subscribers, lists, groups, filters, measures, and preference management

Data
* Data Extensions - Read, Write
<br />
Data extensions and relationships
* File Locations - Read, Write
* Tracking Events - Read
<br />
Tracking event data associated with channels

Hub
* Approvals - Write
<br />
Create, manage, and delete approval items. Edit and delete approval comments. Enable approvals for any channel.
* Calendar - Read, Write
<br />
Calendar event management
* Campaign - Read, Write
<br />
Campaign management and association
* Tags - Write
<br />
* Workflows - Write
<br />
Create, manage, and delete workflow teams. Add and remove users to teams. Create and edit workflow definitions.

Provisioning
* Organizations - Read, Write
<br />
Accounts, business units, and child accounts
* OTT Channels - Read, Write
<br />
Chat message resource provisioning
* Users - Read, Write
<br />
Users, roles, and permissions

Webhooks
* Webhooks - Read, Write

###Related Items
* [REST API Permission IDs and Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/rest-permissions-and-scopes.htm)
* [v2/userinfo Resource](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/getUserInfo.htm)
* [Server-to-Server Integrations with Client Credentials Grant Type](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-s2s-client-credentials.htm)
* [Web and Public App Integrations with Authorization Code Grant Type](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-app-auth-code.htm)
