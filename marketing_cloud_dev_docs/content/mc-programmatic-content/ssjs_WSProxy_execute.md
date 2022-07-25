---
title: Execute via WSProxy
---
To execute an action, use the execute function.
* The first parameter is an array of Name/Value parameters to include in the call.
* The second parameter is the name of the execute request.

##Example Request
This example shows the parameters but is not a working example.
```
var prox = new Script.Util.WSProxy();
var props = [
   { Name: "SomeName", Value: "SomeValue" }
];
var data = prox.execute(props, "Name of the execute request");
```

##Example Response
The returned object has three properties, “Status”, “RequestID”, and “Results.” The results contain properties from the SOAP ExecuteResponse items.
```
{
    "Status": "OK",
    "RequestID": "fb768ddc-6670-4183-8b9d-4f0d5518bb2e",
    "Results": [...]
}
```
