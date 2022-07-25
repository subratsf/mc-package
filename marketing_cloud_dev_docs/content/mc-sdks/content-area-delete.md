---
title: Delete a Content Area
---

{{md 'content-api-notice'}}

Use the **Delete** method to delete a content area. Specify a unique identifier in the **props** properties to identify the content area to update:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
contentarea = FuelSDK::ContentArea.new 
contentarea.authStub = myClient
contentarea.props = {"ID" => "151515151"}		
results = contentarea.delete
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$contentarea = new ET_ContentArea();
$contentarea->authStub = $myclient;
$contentarea->props = array("ID" => "151515151");
$results = $contentarea->delete();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
   	contentarea = ET_Client.ET_ContentArea()
  contentarea.auth_stub = myClient 
  contentarea.props = {"ID" : "151515151"}
results = contentarea.delete()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_ContentArea contentArea = new ET_ContentArea();
contentArea.AuthStub = myclient;
contentArea.ID = 151515151;
DeleteReturn response = contentArea.Delete();
Console.WriteLine("Delete Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

