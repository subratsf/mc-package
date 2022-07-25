---
title: Retrieve Sent Event Details
---
The **ET_SentEvent** object represents a column with a sent event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

Use the **Get** method to return information about existing sent events.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
sentevent = FuelSDK::SentEvent.new
sentevent.authStub = myClient
response = sentevent.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$sentevent = new ET_SentEvent();
$sentevent->authStub = $myclient;
$response = $sentevent->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
sentevent = ET_Client.ET_SentEvent()
sentevent.auth_stub = myClient
results = sentevent.get()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_SentEvent sentevent = new ET_SentEvent();
sentevent.AuthStub = myclient;
GetReturn results = sentevent.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
<ul>
	<li>SendID</li>
	<li>SubscriberKey</li>
	<li>EventDate</li>
	<li>Client.ID</li>
	<li>EventType</li>
	<li>BatchID</li>
	<li>TriggeredSendDefinitionObjectID</li>
	<li>ListID</li>
	<li>PartnerKey</li>
	<li>SubscriberID</li>
</ul>

###Ruby
{{#markdown}}
```ruby  
sentevent.props = ['SendID', 'EventDate']
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$sentevent->props = array('SendID', 'EventDate');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
sentevent.props = ["SendID", "EventDate"]
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
sentevent.Props = new string[] { "SendID", "EventDate" };
```
{{/markdown}}

###Java
{{> javadocs }}


##Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1. **Property**: Any of the properties that can be returned for a sent event
2. **SimpleOperator**: Valid simple operators include the following:
	*   equals
	*   notEquals
	*   greaterThan
	*   lessThan
3. **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.
            
###Ruby
{{#markdown}}
```ruby  
sentevent.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$sentevent->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
sentevent.filter = {"Property" : "SubscriberKey","SimpleOperator" : "equals","Value" : "example@example.com"}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
sentevent.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.greaterThan, Value = new string[] { "example@example.com" } };
```
{{/markdown}}

###Java
{{> javadocs }}

