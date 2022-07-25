---
title: Folder
---
The Folder object is deprecated. Use DataFolder instead.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>ID</td><td>xsd:int</td><td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td></tr><tr><td>Name</td><td>xsd:string</td><td>Name of the object or property.</td></tr><tr><td>ParentID</td><td>xsd:int</td><td>Specifies the ID number of the parent account for Lock and Publish, On Your Behalf, Enterprise, and Enterprise 2.0 account children and business units.</td></tr><tr><td>Value</td><td>xsd:string</td><td>Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two values. IN can handle multiple values. All other operators require only one value. isNull and isNotNull ignores any supplied values and don't return an error.</td></tr></tbody></table>

##Related Items
[DataFolder Object](datafolder.htm)
