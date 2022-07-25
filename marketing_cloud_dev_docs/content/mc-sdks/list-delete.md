---
title: Delete a List
---

Use the **Delete** method to delete a list. Specify a unique identifier needs to be specified in the **props** properties in order to identify which list to update:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
list = FuelSDK::List.new
list.authStub = myclient
list.props = {"ID" => "151515151"}
results = list.delete
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
$list->props = array("ID" => "151515151");
$results = $list->delete();
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
list.props = {"ID" : "151515151"}
results = list.delete()
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
DeleteReturn results = list.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

