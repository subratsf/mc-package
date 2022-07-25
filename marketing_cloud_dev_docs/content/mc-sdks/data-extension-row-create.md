---
title: Identify the Data Extension Using CustomerKey or Name
---

**ET_DataExtensionRow** includes unique properties called **CustomerKey** and **Name** for specifying the data extension for the rows. You need to define only one of these properties to identify the data extension.

###Ruby
{{#markdown}}
```ruby  
# Specify Name
dataextensionrow.Name = 'ExampleDEName'
# Specify CustomerKey
dataextensionrow.CustomerKey = 'ExampleDECustomerKey'
# Only specify one of these properties as the unique identifier
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
// Specify Name
$dataextensionrow->Name = 'ExampleDEName';
// Specify CustomerKey
$dataextensionrow->CustomerKey = 'ExampleDECustomerKey';
// Only specify one of these properties as the unique identifier
```
{{/markdown}}

###Python
{{#markdown}}
```python  
# Specify Name
dataextensionrow.Name = 'ExampleDEName'
# Specify CustomerKey
dataextensionrow.CustomerKey = 'ExampleDECustomerKey'
# Only specify one of these properties as the unique identifier
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
# Specify Name
dataextensionrow.DataExtensionName = 'ExampleDEName'
# Specify CustomerKey
dataextensionrow.DataExtensionCustomerKey = 'ExampleDECustomerKey'
# Only specify one of these properties as the unique identifier
```
{{/markdown}}

###Java
{{> javadocs }}


#Creating a Data Extension Row

Use the **Post** method to create a new data extension row within a Marketing Cloud account.

##Properties

You must set the **props** property when using the **Post** method in order to specify the columns values. The values that can be specified for props vary by data extension. If the column names are not known, use the ET_DataExtension_Column SDK object to return those names:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextensionrow = FuelSDK::DataExtension::Row.new
dataextensionrow.authStub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = {"Name" => "ExampleNameValue", "OtherField" => "Some randon text for the other field"}
results = dataextensionrow.post
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$dataextensionrow = new ET_DataExtension_Row();
$dataextensionrow->authStub = $myclient;
$dataextensionrow->Name = 'ExampleDEName';
$dataextensionrow->props = array("Name" => "ExampleNameValue", "OtherField" => "Some randon text for the other field");
$results = $dataextensionrow->post();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
dataextensionrow = ET_Client.ET_DataExtension_Row()
dataextensionrow.auth_stub = myClient
dataextensionrow.Name = 'ExampleDEName'
dataextensionrow.props = {"Name" : "ExampleNameValue", "OtherField" : "Some randon text for the other field"}
results = dataextensionrow.post()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
                ET_DataExtensionRow dataextensionrow = new ET_DataExtensionRow();
                dataextensionrow.AuthStub = myclient;
                dataextensionrow.DataExtensionName = "ExampleDEName";
                dataextensionrow.ColumnValues.Add("Name", "ExampleNameValue");
                dataextensionrow.ColumnValues.Add("OtherField", "Some randon text for the other field");
                PostReturn response = dataextensionrow.Post();
                Console.WriteLine("Post Status: " + response.Status.ToString());
```
{{/markdown}}
