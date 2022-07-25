---
title: Retrieve Data Extension Details
---

Use the **Get** method to return information about existing data extensions.

###Ruby
{{#markdown}}
```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
dataextension = FuelSDK::DataExtension.new
dataextension.authStub = myClient
response = dataextension.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php
require('ET_Client.php');
$myclient = new ET_Client();
$dataextension = new ET_DataExtension();
$dataextension->authStub = $myclient;
$response = $dataextension->get();
print_r($response);```
{{/markdown}}

###Python
{{#markdown}}
```python
import ET_Client
myClient = ET_Client.ET_Client()
dataextension = ET_Client.ET_DataExtension()
dataextension.auth_stub = myClient
results = dataextension.get()
print results```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_DataExtension dataextension = new ET_DataExtension();
dataextension.AuthStub = myclient;
GetReturn response = dataextension.Get();
Console.WriteLine("Get Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   ObjectID
*   PartnerKey
*   CustomerKey
*   Name
*   CreatedDate
*   ModifiedDate
*   Client.ID
*   Description
*   IsSendable
*   IsTestable
*   SendableDataExtensionField.Name
*   SendableSubscriberField.Name
*   Template.CustomerKey
*   CategoryID
*   Status
*   IsPlatformObject
*   DataRetentionPeriodLength
*   DataRetentionPeriodUnitOfMeasure
*   RowBasedRetention
*   ResetRetentionPeriodOnImport
*   DeleteAtEndOfRetentionPeriod
*   RetainUntil
*   DataRetentionPeriod

###Ruby
{{#markdown}}
```ruby  
dataextension.props = ['Name', 'CustomerKey']
```
{{/markdown}}

###PHP

{{#markdown}}
```php  
$dataextension->props = array('Name', 'CustomerKey');
```
{{/markdown}}

###Python

{{#markdown}}
```python
dataextension.props = ['Name', 'CustomerKey']
```
{{/markdown}}


##Filtering Get Requests

Optionally, you can set the **filter** property to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1.  **Property**: Any of the properties that can be returned for a data extension
2.  **SimpleOperator**: Valid simple operators include the following:
	*   equals
	*   notEquals
	*   greaterThan
	*   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby
dataextension.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyDataExtension'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$dataextension.filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyDataExtension');
```
{{/markdown}}

###Python
{{#markdown}}
```python
dataextension.search_filter = {'Property' : 'CustomerKey','SimpleOperator' : 'equals','Value' : 'MyDataExtension'}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp
dataextension.SearchFilter = new SimpleFilterPart() { Property = "DataExtension.CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "MyDataExtension" } };
```
{{/markdown}}
