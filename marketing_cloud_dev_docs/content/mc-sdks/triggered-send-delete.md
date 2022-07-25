---
title: Delete a TriggeredSend
---

Use the **Delete** method to delete a triggeredsend. Specify a unique identifier in the **props** properties in order to identify which triggeredsend to update:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
triggeredsend = FuelSDK::TriggeredSend.new
triggeredsend.authStub = myclient
triggeredsend.props = {"CustomerKey" => "151515151"}
results = triggeredsend.delete
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
$triggeredsend->props = array("CustomerKey" => "151515151");
$results = $triggeredsend->delete();
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
triggeredsend.props = {"CustomerKey" : "151515151"}
results = triggeredsend.delete()
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
DeleteReturn results = triggeredsend.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

