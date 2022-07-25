---
title: Update a Data Extension
---

Use the **Patch** method to update an existing data extension. Specify a unique identifier in the **props** property in order to identify which data extension will be updated:

###Ruby
{{#markdown}}
```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextension = FuelSDK::DataExtension.new
dataextension.authStub = myClient
dataextension.props = {"CustomerKey" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = dataextension.patch
p results```
{{/markdown}}

###PHP
{{#markdown}}
```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextension = new ET_DataExtension();
$dataextension->authStub = $myclient;
$dataextension->props = array("CustomerKey" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $dataextension->patch();
print_r($results);```
{{/markdown}}

###Python
{{#markdown}}
```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextension = ET_Client.ET_DataExtension()
dataextension.auth_stub = myClient
dataextension.props = {"CustomerKey" : "151515151", "Name": "SDK Example, now Updated!"}
results = dataextension.patch()
print results```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp
Using FuelSDK;

ET_Client myclient = new ET_Client();
ET_DataExtension dataextension = new ET_DataExtension();
dataextension.AuthStub = myclient;
dataextension.CustomerKey = "151515151";
dataextension.Name = "SDK Example, now Updated!";
PatchReturn response = dataextension.Patch();
Console.WriteLine("Patch Status: " + response.Status.ToString());```
{{/markdown}}

###Java
{{> javadocs }}

