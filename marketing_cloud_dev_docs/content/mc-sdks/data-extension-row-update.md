---
title: Update a Data Extension Row
---

Use the **Patch** method to update an existing data extension row. The data extension must include a column set as the primary key, and you must pass a value for that primary key column in the **props** property:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextensionrow = FuelSDK::DataExtension::Row.new
dataextensionrow.authStub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = {"NameOfKeyField" => "151515151", "ExampleField"=> "SDK Example, now Updated!"}
results = dataextensionrow.patch
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$dataextensionrow = new ET_DataExtension_Row();
$dataextensionrow->authStub = $myclient;
$dataextensionrow->Name = 'ExampleDEName';
$dataextensionrow->props = array("NameOfKeyField" => "151515151", "ExampleField" => "SDK Example, now Updated!");
$results = $dataextensionrow->patch();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
dataextensionrow = ET_Client.ET_DataExtension_Row()
dataextensionrow.auth_stub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = {"NameOfKeyField" : "151515151", "ExampleField" : "SDK Example, now Updated!"}
results = dataextensionrow.patch()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_DataExtensionRow dataextensionrow = new ET_DataExtensionRow();
dataextensionrow.AuthStub = myclient;
dataextensionrow.DataExtensionCustomerKey = "ExampleDEName";
dataextensionrow.ColumnValues.Add("NameOfKeyField", "151515151");
dataextensionrow.ColumnValues.Add("ExampleField", "SDK Example, now Updated!");
PatchReturn response = dataextensionrow.Patch();
Console.WriteLine("Patch Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

