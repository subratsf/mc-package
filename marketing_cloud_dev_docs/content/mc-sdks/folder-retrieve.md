---
title: Retrieve Folder Details
---

Use the **Get** method to return information about existing folders. 

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
folder = FuelSDK::Folder.new 
folder.authStub = myclient
response = folder.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$folder = new ET_Folder();
$folder->authStub = $myclient;
$response = $folder->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
folder = ET_Client.ET_Folder()
folder.auth_stub = myclient
results = folder.get()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client()
ET_Folder folder = new ET_Folder();
folder.AuthStub = myclient;
GetReturn results = folder.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   ID
*   Client.ID
*   ParentFolder.ID
*   ParentFolder.CustomerKey
*   ParentFolder.ObjectID
*   ParentFolder.Name
*   ParentFolder.Description
*   ParentFolder.ContentType
*   ParentFolder.IsActive
*   ParentFolder.IsEditable
*   ParentFolder.AllowChildren
*   Name
*   Description
*   ContentType
*   IsActive
*   IsEditable
*   AllowChildren
*   CreatedDate
*   ModifiedDate
*   Client.ModifiedBy
*   ObjectID
*   CustomerKey
*   Client.EnterpriseID
*   Client.CreatedBy

###Ruby
{{#markdown}}
```ruby  
folder.props = ['ParentFolder.ID', 'ID']
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$folder->props = array('ParentFolder.ID', 'ID');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
folder.props = ["ParentFolder.ID", "ID"]
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
folder.Props = new string[] { "ParentFolder.ID", "ID"};
```
{{/markdown}}


##Filter Get Requests

Optionally, you can set the **filter** property  to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1.  **Property**: Any of the properties that can be returned for a folder
2.  **SimpleOperator**: Valid simple operators include the following:
	*   equals
	*   notEquals
	*   greaterThan
	*   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
folder.filter = {'Property' => 'ID','SimpleOperator' => 'equals','Value' => '121212'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$folder->filter = array('Property' => 'ID','SimpleOperator' => 'equals','Value' => '121212');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
folder.filter = {"Property" : "ID", "SimpleOperator" : "equals", "Value" : "121212"}
```
{{/markdown}}
