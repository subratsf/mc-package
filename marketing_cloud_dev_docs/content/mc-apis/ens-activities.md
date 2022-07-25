---
title: Event Notification Service Activities
---
For the Event Notification Service to establish an active subscription that receives and processes notification events involves a sequence of activities. You are responsible for creating a callback (setup), for providing a callback URL endpoint (callbackURL), and for processing posted notifications (customerSystem).

The diagram shows the sequence of events and the required components.

<img src="images/ens-activities.png" class="img-responsive" style="margin: 25px 0;" />

1. To register your callback URL, your system calls the [Create Callback API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createCallback.htm).
1. The ENS syntactically validates your callback URL and issues an HTTPS POST to that URL. The [response body](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createCallback.htm) contains a unique callback ID and verification key.
1. To [complete callback creation](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/verifyCallback.htm), your callback captures the callback ID and verification key and returns an HTTP 200 status.
1. Your system [verifies the callback](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/verifyCallback.htm). Ensure that your callback completes verification within four hours.
1. The ENS compares the verification key supplied and confirms that it is the same as the verification key provided during callback validation. Your callback prepares to receive event notification payloads for the [events you subscribe to](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens-supported-events.htm).
1. Your setup uses the [Create Subscription API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createSubscription.htm) to register interest in event notifications and provides the callback ID returned during callback validation.
1. The ENS sends batches of event notifications to your callback via an HTTPS POST up to the maximum batch size you indicated when you created the callback.
1. Your callback receives a batch of notification events and has a maximum of two seconds to [process them and return](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens-retries-suspensions.htm) an HTTP 200, 201, 202, 203, or 204, indicating successful processing.
