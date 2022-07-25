---
title: Use CreateDataExtensions Method
---

Use the **CreateDataExtension** helper method create multiple data extensions in a single call (such as when setting up new data environments). You can define additional details on the properties for a data extension.
* **DataExtensions** - Collection of data extensions

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
# Declare a Ruby Hash containing all of the details for a DataExtension
deOne = {"Name" => "HelperDEOne","CustomerKey" => "HelperDEOne"}
deOne['columns'] = [{"Name" => "Name", "FieldType" => "Text", "IsPrimaryKey" => "true", "MaxLength" => "100", "IsRequired" => "true"},{"Name" => "OtherField", "FieldType" => "Text"}]

# Declare a 2nd Ruby Hash containing all of the details for a DataExtension
deTwo = {"Name" => "HelperDETwo","CustomerKey" => "HelperDETwo"}
deTwo['columns'] = [{"Name" => "Name", "FieldType" => "Text", "IsPrimaryKey" => "true", "MaxLength" => "100", "IsRequired" => "true"},{"Name" => "OtherField", "FieldType" => "Text"}]

# Call CreateDataExtensions, passing in both DataExtension Hashes as an Array
createDEResponse = myclient.CreateDataExtensions([deOne, deTwo])
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
// Declare an associative array containing all of the details for a DataExtension
$deOne = array("Name" => "HelperDEOne","CustomerKey" => "HelperDEOne");
$deOne['columns'] = array(array("Name" => "Name", "FieldType" => "Text", "IsPrimaryKey" => "true", "MaxLength" => "100", "IsRequired" => "true"),array("Name" => "OtherField", "FieldType" => "Text"));

// Declare a second array containing all of the details for another DataExtension
$deTwo = array("Name" => "HelperDETwo","CustomerKey" => "HelperDETwo");
$deTwo['columns'] = array( array("Name" => "Name", "FieldType" => "Text", "IsPrimaryKey" => "true", "MaxLength" => "100", "IsRequired" => "true"),array("Name" => "OtherField", "FieldType" => "Text"));

// Call CreateDataExtensions, passing in both DataExtension arrays
$response = $myclient->CreateDataExtensions(array($deOne, $deTwo));
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
# Declare a Python dict which contain all of the details for a DataExtension
deOne = {"Name" : "HelperDEOne","CustomerKey" : "HelperDEOne"}
deOne['columns'] = [{"Name" : "Name", "FieldType" : "Text", "IsPrimaryKey" : "true", "MaxLength" : "100", "IsRequired" : "true"},{"Name" : "OtherField", "FieldType" : "Text"}]

# Declare a 2nd Python dict which contain all of the details for a DataExtension
deTwo = {"Name" : "HelperDETwo","CustomerKey" : "HelperDETwo"}
deTwo['columns'] = [{"Name" : "Name", "FieldType" : "Text", "IsPrimaryKey" : "true", "MaxLength" : "100", "IsRequired" : "true"},{"Name" : "OtherField", "FieldType" : "Text"}]

# Call CreateDataExtensions, passing in both DataExtension dicts
response = myClient.CreateDataExtensions([deOne, deTwo])
print response
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();

ET_DataExtension DEOne = new ET_DataExtension() {Name = "HelperDEOne",CustomerKey = "HelperDEOne"};
ET_DataExtensionColumn DEOneColumnOne = new ET_DataExtensionColumn() {Name = "Name", FieldType = DataExtensionFieldType.Text, IsPrimaryKey = true, MaxLength = 100, IsRequired = true};
ET_DataExtensionColumn DEOneColumnTwo = new ET_DataExtensionColumn() {Name = "OtherField", FieldType = DataExtensionFieldType.Text};
DEOne.Columns = new ET_DataExtensionColumn[] {DEOneColumnOne, DEOneColumnTwo};

ET_DataExtension DETwo = new ET_DataExtension() {Name = "HelperDETwo",CustomerKey = "HelperDETwo"};
ET_DataExtensionColumn DETwoColumnOne = new ET_DataExtensionColumn() {Name = "Name", FieldType = DataExtensionFieldType.Text, IsPrimaryKey = true, MaxLength = 100, IsRequired = true};
ET_DataExtensionColumn DETwoColumnTwo = new ET_DataExtensionColumn() {Name = "OtherField", FieldType = DataExtensionFieldType.Text};
DETwo.Columns = new ET_DataExtensionColumn[] {DETwoColumnOne, DETwoColumnTwo};

FuelReturn response = myclient.CreateDataExtensions(new ET_DataExtension[] { DEOne, DETwo });
Console.WriteLine("Helper Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

##Related Items
[Review Related Columns when Creating Data Extensions](data-extension-create.htm)
