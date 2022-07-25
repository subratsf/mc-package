---
title: ImportDefinitionColumnBasedAction
---
The ImportDefinitionColumnBasedAction object contains multiple value and action pairs that determine the action to take in a column depending on the value in a field. For example, you can set this object to skip and not add a value of A, delete a value of B, and update a value of C.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Action</td><td>ImportDefinitionColumnBasedActionType</td><td>Defines the action to take for the specified object. Valid values include:<ul><li>CREATE</li><li>DELETE</li><li>UPDATE</li></ul></td></tr><tr><td>Value</td><td>xsd:string</td><td>Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error.</td></tr></tbody></table>
