---
title: SOAP API Performance
---
You can increase SOAP API performance with smaller API load increments. Unless you need near real-time data, avoid using the API to retrieve event or tracking data. Instead, we recommend one of these approaches.
* Use a data extract.
* Create a query activity that pulls the data into a data extension, then retrieve the data from the data extension using the API.
* Schedule an SSIS package to pull large amounts of data a few times a day.
* Filter each call based on the JobID, or limit each request to a single JobID.

##Error Responses
The API does not enforce concurrent call restrictions or maximum per time period thresholds. Some clients have their own dedicated stacks, databases, and web service pools, while others share resources. Because one client could impact other clients' performance, we actively monitor service telemetry for sudden spikes in API activity and sends errors to all offending accounts. Your API should watch for an error status so that you can respond accordingly.

##Batch Size
Most API objects have a predefined batch size of 2500. If you specify a batch size, the API uses the lesser of the two values. If the results exceed the batch size, the API returns a status of "MoreDataAvailable" instead of "OK". Continue making calls until the API returns "OK".
