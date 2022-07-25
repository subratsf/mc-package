---
title: APIProperty
---
The APIProperty object associates more information about an object in a name/value pair. An object can have none, one, or many APIProperty objects associated with it. Use this property to provide information for values on a DataExtension object.

Use the PartnerProperties property on an APIObject to define the information available via the APIProperty. PartnerProperties can be created and retrieved. A PartnerProperties cannot be used as a filter value for a RetrieveRequest.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Name</td><td>xsd:string</td><td>Name of the object or property.</td></tr><tr><td>Value</td><td>xsd:string</td><td>Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error.</td></tr></tbody></table>

##Related Items
[Add Data to a Data Extension](adding_data_to_data_extension_object.htm)
