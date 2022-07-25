---
title: Perform via WSProxy
---
To perform an action on a single item or several items of the same type in a single call, use the performItem and performBatch functions.
* For the first parameter, both functions take the object type to perform the action on. For example, EmailContentCheck.
* The second parameter represents the properties to set on the APIObject being acted upon. For batch operations, the second parameter is passed in as an array of objects instead of a single item.
* The third parameter is the verb to use when executing the action.
* The fourth parameter is optional and includes any properties to be set using the SOAP PerformOptions object.

##Example: Perform a Content Check
This example performs a content check action using the EmailContentCheck SOAP object on an email with the ID 7378.
```
var prox = new Script.Util.WSProxy();
var action = "Start";
var props = {
	Email: {
		ID: 7838
	}
};
var opts = {};
var data = prox.performItem("EmailContentCheck", props, action, opts);
```
##Example Response
In both single and batch operations, the results contain four properties, “Status”, “StatusMessage”, “RequestID”, and “Results”. The performItem method returns one item, and the performBatch method returns as many items as were passed into the method.
```
{
    "Status": "OK",
    "StatusMessage": "",
    "RequestID": "fb768ddc-6670-4183-8b9d-4f0d5518bb2e",
    "Results": [...]
}
```
