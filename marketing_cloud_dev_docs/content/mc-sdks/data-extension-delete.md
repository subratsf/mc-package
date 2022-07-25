---
title: Delete a Data Extension
---

Use the **Delete** method to delete a data extension. Specify a unique identifier needs to be specified in the **props** properties in order to identify which data extension to update:

###Ruby
{{#markdown}}
```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextension = FuelSDK::DataExtension.new
dataextension.authStub = myClient
dataextension.props = {"CustomerKey" => "151515151"}
results = dataextension.delete
p results```
{{/markdown}}

###PHP
{{#markdown}}
```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextension = new ET_DataExtension();
$dataextension->authStub = $myclient;
$dataextension->props = array("CustomerKey" => "151515151");
$results = $dataextension->delete();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextension = ET_Client.ET_DataExtension()
dataextension.auth_stub = myClient
dataextension.props = {"CustomerKey" : "151515151"}
results = dataextension.delete()
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
DeleteReturn response = dataextension.Delete();
Console.WriteLine("Delete Status: " + response.Status.ToString());```
{{/markdown}}

###Java
{{> javadocs }}

