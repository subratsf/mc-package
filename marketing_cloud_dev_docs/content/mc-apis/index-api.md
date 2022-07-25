---
title: Intro to Marketing Cloud APIs
---
<div class="alert">Use HTTPS to call Marketing Cloud REST API authentication endpoints.</div>

The Marketing Cloud offers two APIs that share a common authentication mechanism based on OAuth 2:
* The REST API exposes broader access to Marketing Cloud capabilities.
* The SOAP API provides comprehensive access to most email functionality.

To use either API, you need a client ID and secret, obtained from Marketing Cloud | Installed Packages. The APIs don't have full parity, and you may need to use both SOAP and REST to accomplish your business goals.
>You do not need a Marketing Cloud user to call the APIs, but you do need a Marketing Cloud user when creating an API integration in Installed Packages. The Marketing Cloud user must have the Installed Package | Administer permission.

##REST API

The REST API uses JSON request and response bodies and resource endpoints to support multi-channel use. All new Marketing Cloud technologies implement REST API. REST calls are synchronous, with timeout values of 120 for non-tracking operations and 300 seconds for tracking and data retrieve operations. The maximum payload of any call is four megabytes.

Use the REST API for this functionality:
* Contacts
* Content Builder
* Journey Builder
* Mobile Connect
* MobilePush
* Campaigns
* Triggered Sends (may also use SOAP)

##Web Services SOAP API

The SOAP API uses SOAP envelopes to pass information between you and Marketing Cloud. We recommend a limit of no more than 2k per minute for SOAP calls. Support may request your SOAP envelope to troubleshoot issues.

Use the SOAP API for this functionality:
* Tracking
* Subscribers and lists
* Automations
* Triggered sends (may also use REST)
* Content
* Most other email activities

##Related Items
* [Get a Client ID and Secret](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm)
