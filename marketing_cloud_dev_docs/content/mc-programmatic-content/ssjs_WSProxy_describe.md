---
title: Describe via WSProxy
---
To return information on the structure of SOAP API objects, use the describe call. The function takes either a string representing the object type to describe, or an array of strings for multiple object types.

##Example: Describe a Data Extension

```
var prox = new Script.Util.WSProxy();
var res = prox.describe("DataExtension");
```

##Example Response
The returned object has two properties, “RequestID” and “Results.” The results contain ObjectDefinition SOAP items that describe the desired object types.
```
{
    "RequestID": "fb768ddc-6670-4183-8b9d-4f0d5518bb2e",
    "Results": [...]
}
```
