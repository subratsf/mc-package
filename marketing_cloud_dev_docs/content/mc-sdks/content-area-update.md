---
title: Update a Content Area
---

{{md 'content-api-notice'}}

Use the **Patch** method to update an existing content area. Specify a unique identifier in the **props** property to identify the content area to update:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
contentarea = FuelSDK::ContentArea.new
contentarea.authStub = myClient
contentarea.props = {"ID" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = contentarea.patch
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
$contentarea->props = array("ID" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $contentarea->patch();
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
  contentarea.props = {"ID" : "151515151", "Name" : "SDK Example, now Updated!"}
results = contentarea.patch()
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
contentArea.Name = "SDK Example, now Updated!";
PatchReturn response = contentArea.Patch();
Console.WriteLine("Patch Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

