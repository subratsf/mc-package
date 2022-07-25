---
title: Fire an Entry Event
---

There are two ways to send events to Journey Builder:
* Using a Fire Event Activity in Automation Studio
* By POSTing an event to the Journey Builder API

To send events using the API:
1. Define the event and its properties.
	* If defining the event in Marketing Cloud, make note of the Event Definition Key for API.
	* If defining the event via the API, use the POST /eventDefinition resource.
2. Use a valid OAuth access token to authorize requests to the Marketing Cloud REST APIs.
3. Using the POST /events resource, POST the required fields and event properties to the API.

##Results

When an event is posted to the API, the data schema of the associated data extension validates that all fields from the API call exist in the data extension. The data extension associated with an event is defined in the DataExtensionID field in the EventDefinition table.
*   If a field is missing, a validation exception is thrown.
*   If the request is successful, an eventInstanceId is returned. This ID is a unique identifier for this specific request.

##Related Items
* [Fire Event Activity in Automation Studio](https://help.salesforce.com/articleView?id=mc_jb_fire_event.htm&type=5)
* [POST /eventDefinition Resource](createEventDefinition.htm)
* [POST /events Resource](postEvent.htm)
