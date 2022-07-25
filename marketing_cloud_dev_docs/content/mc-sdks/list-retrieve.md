---
title: Retrieve List Details
---

Use the **Get** method to return information about existing lists.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
list = FuelSDK::List.new
list.authStub = myclient
response = list.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$list = new ET_List();
$list->authStub = $myclient;
$response = $list->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
list = ET_Client.ET_List()
list.auth_stub = myclient
results = list.get()
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
GetReturn results = list.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   ID
*   ObjectID
*   PartnerKey
*   CreatedDate
*   ModifiedDate
*   Client.ID
*   Client.PartnerClientKey
*   ListName
*   Description
*   Category
*   Type
*   CustomerKey
*   ListClassification
*   AutomatedEmail.ID

###Ruby
{{#markdown}}
```ruby  
list.props = ['Name', 'CustomerKey']
```
{{/markdown}}

###PHP

{{#markdown}}
```php  
$list->props = array('Name', 'CustomerKey');
```
{{/markdown}}

###Python

{{#markdown}}
```python  
list.props = ["Name", "CustomerKey"]
```
{{/markdown}}

###CSharp

{{#markdown}}
```csharp  
list.Props = new string[] { "Name", "CustomerKey" };
```
{{/markdown}}

###Java
{{> javadocs }}


##Filter Get Requests

Optionally, you can set the **filter** property  to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1.  **Property**: Any of the properties that can be returned for a list
2.  **SimpleOperator**: Valid simple operators include the following:
	*   equals
	*   notEquals
	*   greaterThan
	*   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
list.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyList'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$list->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyList');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
list.filter = {"Property" => "CustomerKey","SimpleOperator" => "equals","Value" => "MyList"}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
list.SearchFilter = new SimpleFilterPart() { Property = "CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new String[] { "MyList" } };
```
{{/markdown}}

###Java
{{> javadocs }}
