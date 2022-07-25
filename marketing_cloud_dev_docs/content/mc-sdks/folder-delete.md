---
title: Delete a Folder
---

Use the **Delete** method to delete a folder. Specify a unique identifier in the **props** properties to identify the folder to update:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }} 
folder = FuelSDK::Folder.new 
folder.authStub = myclient
folder.props = {"ID" => "151515151"}		
results = folder.delete
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
$folder->props = array("ID" => "151515151");
$results = $folder->delete();
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
folder.props = {"ID" : "151515151"}
results = folder.delete()
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
DeleteReturn results = folder.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

