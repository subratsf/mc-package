---
title: Build Custom Activities and Events
---
{{md 'custom-jb-activities'}}

<div class="alert">Salesforce Customer Support doesn't provide support for your custom Journey Builder events and activities.</div>

##Prerequisites
* A working knowledge of RequireJS for dependency management
* A working knowledge of jQuery
* An understanding of the Postmonger event framework
* Access to a Marketing Cloud account with a fully provisioned and operational Journey Builder instance
* An understanding of how journeys function in Journey Builder

##Steps
1. Create the custom activity. Custom activities contain three fundamental components.
  - [Custom activity UI](custom-activity-ui.htm) - Contains the activity's code and assets and is hosted on a public web server.
  - [config.json](custom-activity-config.htm) - Application extension that defines your custom activity.
  - customActivity.js - Contains Postmonger events and sits in between your configuration app in the iframe and Journey Builder. See the [Example Custom Activity](example-rest-activity.htm) and [Postmonger Events Reference](using-postmonger.htm) for details.
2. Host the custom activity. Use a web server that communicates via SSL (port 443). Salesforce recommends using Heroku as a hosting provider.
3. [Register the custom component endpoint](define-jb-extension-app-center.htm). Register the hosting endpoint for your custom activity in a Marketing Cloud installed package.

##Related Items
* [Journey Spec](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/getting-started-spec.htm)
* [Data Binding](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/how-data-binding-works.htm)
* [Troubleshoot Custom Activities](troubleshoot-custom-activities.htm)
* [Considerations for Building Custom Events](creating-events.htm)
