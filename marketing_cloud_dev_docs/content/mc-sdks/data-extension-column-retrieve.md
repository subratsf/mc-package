---
title: Retrieve Data Extension Column Details
---

Use the **Get** method to return information about existing data extension columns.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextensioncolumn = FuelSDK::DataExtension::Column.new
dataextensioncolumn.authStub = myClient
response = dataextensioncolumn.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$dataextensioncolumn = new ET_DataExtension_Column();
$dataextensioncolumn->authStub = $myclient;
$response = $dataextensioncolumn->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
dataextensioncolumn = ET_Client.ET_DataExtension_Column()
dataextensioncolumn.auth_stub = myClient
response = dataextensioncolumn.get()
print response
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_DataExtensionColumn dataextensioncolumn = new ET_DataExtensionColumn();
dataextensioncolumn.AuthStub = myclient;
PostReturn response = dataextensioncolumn.Post();
Console.WriteLine("Post Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   ObjectID
*   PartnerKey
*   Name
*   DefaultValue
*   MaxLength
*   IsRequired
*   Ordinal
*   IsPrimaryKey
*   FieldType
*   CreatedDate
*   ModifiedDate
*   Scale
*   Client.ID
*   CustomerKey

###Ruby
{{#markdown}}
```ruby  
dataextensioncolumn.props = ['Name', 'CustomerKey']
```
{{/markdown}}

###PHP

{{#markdown}}
```php  
$dataextensioncolumn->props = array('Name', 'CustomerKey');
```
{{/markdown}}

###Python

{{#markdown}}
```python  
dataextensioncolumn.props = ["Name", "CustomerKey"]
```
{{/markdown}}

###CSharp

{{#markdown}}
```csharp  
dataextensioncolumn.Props = new string[] { "Name", "CustomerKey" };
```
{{/markdown}}


##Filtering Get Requests

Optionally, you can set the **filter** property to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1.  **Property**: Any of the properties that can be returned for a data extension column
2.  **SimpleOperator**: Valid simple operators include the following:
	*   equals
	*   notEquals
	*   greaterThan
	*   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
dataextensioncolumn.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyDataExtension'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$dataextensioncolumn->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyDataExtension');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
dataextensioncolumn.search_filter = {'Property' : 'CustomerKey','SimpleOperator' : 'equals','Value' : 'MyDataExtension'}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
dataextensioncolumn.SearchFilter = { Property = "DataExtension.CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "MyDataExtension" } };
```
{{/markdown}}