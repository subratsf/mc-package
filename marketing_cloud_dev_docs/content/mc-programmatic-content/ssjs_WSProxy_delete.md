---
title: Delete via WSProxy
---
To delete a single item or several items of the same type in a single call, use the deleteItem and deleteBatch functions.
* Specify the first two parameters of the delete functions like you do for the create functions.
* The optional third parameter includes any properties to be set using the SOAP DeleteOptions object.

##Example: Delete a Data Extension
This example deletes a data extension using its ObjectID.
```
var prox = new Script.Util.WSProxy();
var objectID = "c9875a80-4dad-e411-b071-ac7ba13db5bc";

var res = prox.deleteItem("DataExtension", { "ObjectID":objectID });
```
The returned object has the same properties as the Create functions, except the results contain properties from the SOAP DeleteResult items.

##Related Items
[Create via WSProxy](ssjs_WSProxy_create.htm)
