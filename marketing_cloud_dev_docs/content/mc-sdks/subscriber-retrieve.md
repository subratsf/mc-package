---
title: Retrieve Subscriber Details
---

Use the **Get** method to return information about existing subscribers.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
subscriber = FuelSDK::Subscriber.new
subscriber.authStub = myclient
response = subscriber.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$subscriber = new ET_Subscriber();
$subscriber->authStub = $myclient;
$response = $subscriber->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
subscriber = ET_Client.ET_Subscriber()
subscriber.auth_stub = myclient
results = subscriber.get()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_Subscriber subscriber = new ET_Subscriber();
subscriber.AuthStub = myclient;
GetReturn results = subscriber.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   ID
*   PartnerKey
*   CreatedDate
*   Client.ID
*   Client.PartnerClientKey
*   EmailAddress
*   SubscriberKey
*   UnsubscribedDate
*   Status
*   EmailTypePreference

###Ruby
{{#markdown}}
```ruby  
subscriber.props = ['EmailAddress', 'SubscriberKey']
```
{{/markdown}}

###PHP

{{#markdown}}
```php  
$subscriber->props = array('EmailAddress', 'SubscriberKey');
```
{{/markdown}}

###Python

{{#markdown}}
```python  
subscriber.props = ["EmailAddress","SubscriberKey"]
```
{{/markdown}}

###CSharp

{{#markdown}}
```csharp  
subscriber.Props = new string[] { "EmailAddress", "SubscriberKey" };
```
{{/markdown}}

###Java
{{> javadocs }}


##Filter Get Requests

Optionally, you can set the **filter** property  to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1.  **Property**: Any of the properties that can be returned for a subscriber
2.  **SimpleOperator**: Valid simple operators include the following:
	* equals
	* notEquals
	* greaterThan
	* lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
subscriber.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'MySubscriber'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$subscriber->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'MySubscriber');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
subscriber.search_filter = {"Property" => "SubscriberKey","SimpleOperator" => "equals","Value" => "MySubscriber"}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
subscriber.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "MySubscriber" } };
```
{{/markdown}}

###Java
{{> javadocs }}

