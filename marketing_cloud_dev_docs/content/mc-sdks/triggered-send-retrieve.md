---
title: Retrieve TriggeredSend Details
---

Use the **Get** method to return information about existing triggeredsends.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
triggeredsend = FuelSDK::TriggeredSend.new
triggeredsend.authStub = myclient
response = triggeredsend.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$triggeredsend = new ET_TriggeredSend();
$triggeredsend->authStub = $myclient;
$response = $triggeredsend->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
triggeredsend = ET_Client.ET_TriggeredSend()
triggeredsend.auth_stub = myclient
results = triggeredsend.get()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_TriggeredSend triggeredsend = new ET_TriggeredSend();
triggeredsend.AuthStub = myclient;
GetReturn results = triggeredsend.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   ObjectID
*   PartnerKey
*   CreatedDate
*   ModifiedDate
*   Client.ID
*   CustomerKey
*   Email.ID
*   List.ID
*   Name
*   Description
*   TriggeredSendType
*   TriggeredSendStatus
*   HeaderContentArea.ID
*   FooterContentArea.ID
*   SendClassification.ObjectID
*   SendClassification.CustomerKey
*   SenderProfile.CustomerKey
*   SenderProfile.ObjectID
*   DeliveryProfile.CustomerKey
*   DeliveryProfile.ObjectID
*   PrivateDomain.ObjectID
*   PrivateIP.ID
*   AutoAddSubscribers
*   AutoUpdateSubscribers
*   BatchInterval
*   FromName
*   FromAddress
*   BccEmail
*   EmailSubject
*   DynamicEmailSubject
*   IsMultipart
*   IsWrapped
*   TestEmailAddr
*   AllowedSlots
*   NewSlotTrigger
*   SendLimit
*   SendWindowOpen
*   SendWindowClose
*   SuppressTracking
*   Keyword
*   List.PartnerKey
*   Email.PartnerKey
*   SendClassification.PartnerKey
*   PrivateDomain.PartnerKey
*   PrivateIP.PartnerKey
*   Client.PartnerClientKey
*   IsPlatformObject
*   CategoryID

###Ruby
{{#markdown}}
```ruby  
triggeredsend.props = ['Name', 'CustomerKey']
```
{{/markdown}}

###PHP

{{#markdown}}
```php  
$triggeredsend->props = array('Name', 'CustomerKey');
```
{{/markdown}}

###Python

{{#markdown}}
```python  
triggeredsend.props = ["Name", "CustomerKey"]
```
{{/markdown}}

###CSharp

{{#markdown}}
```csharp  
triggeredsend.Props = new string[] { "Name", "CustomerKey" };
```
{{/markdown}}

###Java
{{> javadocs }}


##Filter Get Requests

Optionally, you can set the **filter** property  to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1.  **Property**: Any of the properties that can be returned for a triggeredsend
2.  **SimpleOperator**: Valid simple operators include the following:
	* equals
	* notEquals
	* greaterThan
	* lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
triggeredsend.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyTriggeredSend'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$triggeredsend->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyTriggeredSend');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
triggeredsend.filter = {"Property" : "CustomerKey", "SimpleOperator" : "equals", "Value" : "MyTriggeredSend"}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
triggeredsend.SearchFilter = new SimpleFilterPart() { Property = "CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "MyTriggeredSend" } };
```
{{/markdown}}

###Java  
{{> javadocs }}

