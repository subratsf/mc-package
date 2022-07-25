---
title: Retrieve Unsub Event Details
---
The **ET_UnsubEvent** object represents a column with a unsub event in a Marketing Cloud account. Use the SDK to interact with this object as described below:

Use the **Get** method to return information about existing unsub events.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
unsubevent = FuelSDK::UnsubEvent.new
unsubevent.authStub = myClient
response = unsubevent.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$unsubevent = new ET_UnsubEvent();
$unsubevent->authStub = $myclient;
$response = $unsubevent->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python
import ET_Client
myClient = ET_Client.ET_Client()
unsubevent = ET_Client.ET_UnsubEvent()
unsubevent.auth_stub = myClient
results = unsubevent.get()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_UnsubEvent unsubevent = new ET_UnsubEvent();
unsubevent.AuthStub = myclient;
GetReturn results = unsubevent.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   **ID**
*   **ObjectID**
*   **PartnerKey**
*   **CreatedDate**
*   **ModifiedDate**
*   **Client.ID**
*   **SendID**
*   **SubscriberKey**
*   **EventDate**
*   **EventType**
*   **TriggeredSendDefinitionObjectID**
*   **BatchID**

###Ruby
{{#markdown}}
```ruby  
unsubevent.props = ['SendID', 'EventDate']
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$unsubevent->props = array('SendID', 'EventDate');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
unsubevent.props = ["SendID", "EventDate"]
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
unsubevent.Props = new string[] { "SendID", "EventDate" };
```
{{/markdown}}

###Java
{{> javadocs }}

##Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1. **Property: Any of the properties that can be returned for a unsub event
2. **SimpleOperator**: Valid simple operators include the following:
	- equals
	- notEquals
	- greaterThan
	- lessThan
3. **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
unsubevent.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$unsubevent->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
unsubevent.filter = {"Property" : "SubscriberKey","SimpleOperator" : "equals","Value" : "example@example.com"}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
unsubevent.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.greaterThan, Value = new string[] { "example@example.com" } };
```
{{/markdown}}

###Java
{{> javadocs }}