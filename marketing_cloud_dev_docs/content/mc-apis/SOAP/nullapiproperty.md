---
title: NullAPIProperty
---
The NullAPIProperty object takes an API property and specifies a null property for that value. Use this object to avoid problems associated with sending an empty string.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Name</td><td>xsd:string</td><td>Name of the object or property.</td></tr><tr><td>Value</td><td>xsd:string</td><td>Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error.</td></tr></tbody></table>
