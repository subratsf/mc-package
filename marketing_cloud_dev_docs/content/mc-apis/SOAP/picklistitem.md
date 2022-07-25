---
title: PicklistItem
---
The PicklistItem object defines values for a property. The object represents a single item in a restricted list.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>IsDefaultValue</td><td>xsd:boolean</td><td>Indicates whether an item is the default value in a list.</td></tr><tr><td>Label</td><td>xsd:string</td><td>Name or text that is displayed next to the field.</td></tr><tr><td>Value</td><td>xsd:string</td><td>Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error.</td></tr></tbody></table>
