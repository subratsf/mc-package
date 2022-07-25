---
title: Update a TriggeredSend
---

Use the **Patch** method to update an existing triggeredsend. Specify a unique identifier in the **props** property in order to identify which triggeredsend will be updated:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
triggeredsend = FuelSDK::TriggeredSend.new
triggeredsend.authStub = myclient
triggeredsend.props = {"CustomerKey" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = triggeredsend.patch
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$triggeredsend = new ET_TriggeredSend();
$triggeredsend->authStub = $myclient;
$triggeredsend->props = array("CustomerKey" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $triggeredsend->patch();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
triggeredsend = ET_Client.ET_TriggeredSend()
triggeredsend.auth_stub = myclient
triggeredsend.props = {"CustomerKey" : "151515151", "Name" : "SDK Example, now Updated!"}
results = triggeredsend.patch()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_TriggeredSend triggeredsend = new ET_TriggeredSend();
triggeredsend.AuthStub = myclient;
triggeredsend.CustomerKey = "151515151";
triggeredsend.Name = "SDK Example, now Updated!";
PatchReturn results = triggeredsend.Patch();
Console.WriteLine("Patch Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

