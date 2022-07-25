---
title: Retrieve Content Area Details
---

{{md 'content-api-notice'}}

Use the **Get** method to return information about existing content areas. 

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
contentarea = FuelSDK::ContentArea.new 
contentarea.authStub = myClient
response = contentarea.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$contentarea = new ET_ContentArea();
$contentarea->authStub = $myclient;
$response = $contentarea->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
contentarea = ET_Client.ET_ContentArea()
contentarea .auth_stub = myClient 
results = contentarea.get()
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
GetReturn response = contentArea.Get();
Console.WriteLine("Get Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

*   RowObjectID
*   ObjectID
*   ID
*   CustomerKey
*   Client.ID
*   ModifiedDate
*   CreatedDate
*   CategoryID
*   Name
*   Layout
*   IsDynamicContent
*   Content
*   IsSurvey
*   IsBlank
*   Key

###Ruby
{{#markdown}}
```ruby  
contentarea.props = ['Name', 'CustomerKey']
```
{{/markdown}}

###PHP

{{#markdown}}
```php  
$contentarea->props = array('Name', 'CustomerKey');
```
{{/markdown}}

###Python

{{#markdown}}
```python  
contentarea.props = ['Name', 'CustomerKey']
```
{{/markdown}}

###CSharp

{{#markdown}}
```csharp  
contentArea.Props = new string[] { "Name", "CustomerKey"};
```
{{/markdown}}

###Java
{{> javadocs }}


##Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a content area
2.  **SimpleOperator**: Valid simple operators include the following:
	*   equals
	*   notEquals
	*   greaterThan
	*   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
contentarea.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyContent Area'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$contentarea->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyContent Area');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
contentarea.search_filter = {'Property' : 'CustomerKey','SimpleOperator' : 'equals','Value' : 'MyContent Area'}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
contentArea.SearchFilter = new SimpleFilterPart() { Property = "CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new String[] { "MyContent Area" } }; 
```
{{/markdown}}