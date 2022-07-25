---
title: Update a Folder
---

Use the **Patch** method to update an existing folder. Specify a unique identifier in the **props** property to identify the folder to update:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
folder = FuelSDK::Folder.new
folder.authStub = myclient
folder.props = {"ID" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = folder.patch
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$folder = new ET_Folder();
$folder->authStub = $myclient;
$folder->props = array("ID" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $folder->patch();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
folder = ET_Client.ET_Folder()
folder.auth_stub = myclient
folder.props = {"ID" => "151515151", "Name" : "SDK Example, now Updated!"}
results = folder.patch()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client()
ET_Folder folder = new ET_Folder();
folder.AuthStub = myclient;
folder.ID = 151515151;
folder.Name = "SDK Example, now Updated!";
PatchReturn results = folder.Patch();
Console.WriteLine("Patch Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

