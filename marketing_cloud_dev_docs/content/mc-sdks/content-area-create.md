---
title: Create a Content Area
---

{{md 'content-api-notice'}}

Use the **Post** method to create a new content area within a Marketing Cloud account. 

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
contentarea = FuelSDK::ContentArea.new 
contentarea.authStub = myClient
contentarea.props = {"CustomerKey" => "ExampleContentArea", "Name"=>"ExampleContentArea", "Content"=> "<b>Some HTML Content Goes here</b>"}		
results = contentarea.post
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
$contentarea->props = array("CustomerKey" => "ExampleContentArea", "Name"=>"ExampleContentArea", "Content"=> "<b>Some HTML Content Goes here</b>");
$results = $contentarea->post();
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
  contentarea.props = {"CustomerKey" : "ExampleContentArea", "Name" : "ExampleContentArea", "Content" : "<b>Some HTML Content Goes here</b>"}
results = contentarea.post()
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
contentArea.Name = "ExampleContentArea";
contentArea.CustomerKey = "ExampleContentArea";
contentArea.Content = "%3Cb%3ESome%20HTML%20Content%20Goes%20here%3C%2Fb%3E";
PostReturn response = contentArea.Post();
Console.WriteLine("Post Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Properties

You can provide the following values for the **props** property on the object:

+ **CustomerKey**
	+ String datatype
	+ User-supplied unique identifier for an object within an object type
+ **CategoryID**
	+ Int32 datatype
	+ Specifies the identifier of the folder
+ **Name**
	+ String datatype
	+ Name of the object or property
+ **Content**
	+ String datatype
	+ Identifies content contained in a content area

