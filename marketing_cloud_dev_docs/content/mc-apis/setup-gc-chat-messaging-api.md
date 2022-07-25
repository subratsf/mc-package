---
title: Set Up Your GroupConnect Chat Messaging API
---

##Prerequisites
Your account must be provisioned for GroupConnect before you can use the GroupConnect Chat Messaging API.

Follow these steps to set up the GroupConnect Chat Messaging API in your account.

1. [Create an API integration](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/install-packages.htm) to use Marketing Cloud API.
1. [Get an API integration key](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm).
1. For the installed packages scope, [provide these permissions](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/data-access-permissions.htm).
  * Channels
    * OTT
      * Read
      * Send
  * Provisioning
    * OTT Channels
      * Read
      * Update
1. Register new Facebook pages or LINE channels with Marketing Cloud's Chat Messaging API. Use the [POST /ott/v1/registration](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/OTTregisterProperty.htm) endpoint. Skip this step if you already have channels and pages registered with Marketing Cloud.
1. Send outbound messages to Facebook Messenger and LINE via Chat Messaging API. Use the POST /ott/v1/send endpoint.

##Related Items
* [Register accounts in Marketing Cloud](https://help.salesforce.com/articleView?id=mc_gc_getting_started_with_groupconnect.htm&type=5)
