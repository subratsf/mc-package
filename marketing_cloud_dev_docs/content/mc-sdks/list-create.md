---
title: Create a List
---
Use the **Post** method to create a new list within a Marketing Cloud account.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
list = FuelSDK::List.new
list.authStub = myclient
list.props = {"ListName" => "SDKList", "Description" => "SDK Created List"}
results = list.post
p results
```
{{/markdown}}

##PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$list = new ET_List();
$list->authStub = $myclient;
$list->props = array("ListName" => "SDKList", "Description" => "SDK Created List");
$results = $list->post();
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
list.props = {"ListName" : "SDKList", "Description" : "SDK Created List"}
results = list.post()
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
list.ListName = "SDKList";
list.Description = "SDK Created List";
PostReturn results = list.Post();
Console.WriteLine("Post Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Properties

You can provide the following values for the **props** property on the object:

*   **ListName**
    *   String datatype
    *   Name of the list
*   **Description**
    *   String datatype
    *   Description of the list
*   **Category**
    *   Int32 datatype
    *   Identifies the folder containing the list
*   **Type**
    *   ListTypeEnum datatype
    *   Specifies either Public or Private as the type
*   **CustomerKey**
    *   String datatype
    *   User-supplied unique identifier for an object within an object type