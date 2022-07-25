---
title: Endpoints, Methods, and Objects for Asynchronous Processing
---
Make sure the endpoints, methods, and objects you use support asynchronous processing.

##SOAP API with Your Tenant's Endpoints
All instances: https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com

##Methods
These methods support asynchronous processing.
<ul><li>Create, passing a properly configured CreateOptions object</li><li>Update, passing a properly configured UpdateOptions object</li><li>Delete, passing a properly configured DeleteOptions object</li><li>Perform, passing a properly configured PerformOptions object</li></ul>

##Objects
All objects available in the WSDL can be processed asynchronously. Use CustomerKey or SubscriberKey instead of ID or ObjectID for objects that you include in a conversation.

These objects have full CRUD Support with CustomerKey or SubscriberKey.
<ul><li>TriggeredSendDefinition</li><li>ImportDefinition</li><li>EmailSendDefinition</li><li>SubscriberKey</li><li>DataExtension</li></ul>

These objects are commonly used for asynchronous processing.
<ul><li>TriggeredSend</li><li>SMSTriggeredSend</li><li>VoiceTriggeredSend</li><li>DataExtensionObject</li></ul>

##Related Items
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
