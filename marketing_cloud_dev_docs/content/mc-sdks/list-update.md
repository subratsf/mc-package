---
title: Update a List
---

Use the **Patch** method to update an existing list. Specify a unique identifier in the **props** property in order to identify which list will be updated:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
list = FuelSDK::List.new
list.authStub = myclient
list.props = {"ID" => "151515151", "ListName"=> "SDK Example, now Updated!"}
results = list.patch
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$list = new ET_List();
$list->authStub = $myclient;
$list->props = array("ID" => "151515151", "ListName"=> "SDK Example, now Updated!");
$results = $list->patch();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
list = ET_Client.ET_List()
list.auth_stub = myclient
list.props = {"ID" : "151515151", "ListName": "SDK Example, now Updated!"}
results = list.patch()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_List list = new ET_List();
list.AuthStub = myclient;
list.ID = 151515151;
list.ListName = "SDK Example, now Updated!";
PatchReturn results = list.Patch();
Console.WriteLine("Patch Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

