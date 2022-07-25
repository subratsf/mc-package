---
title: FieldMap
---
The FieldMap object defines how the imported file columns map to Marketing Cloud attributes. Different SOAP clients render the SourceName and SourceOrdinal properties differently. .NET creates a single property name item that accepts either an integer or a string. In order to manually map these fields, you must include relationships for all fields using this object.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>DestinationName</td><td>xsd:string</td><td>Defines field where imported data resides.</td></tr><tr><td>Item</td><td>Object</td><td>Identifies an item in a mapped relationship.</td></tr></tbody></table>
