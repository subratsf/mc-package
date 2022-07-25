---
title: Retrieve List Subscriber Details
---

Use the **Get** method to return information about existing list subscribers.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
listsubscriber = FuelSDK::List::Subscriber.new
listsubscriber.authStub = myclient
response = listsubscriber.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$listsubscriber = new ET_List_Subscriber();
$listsubscriber->authStub = $myclient;
$response = $listsubscriber->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
listsubscriber = ET_Client.ET_List_Subscriber()
listsubscriber.auth_stub = myclient
results = listsubscriber.get()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_List_Subscriber listsubscriber = new ET_List_Subscriber();
listsubscriber.AuthStub = myclient;
GetReturn getResponse = listsubscriber.Get();
Console.WriteLine("Get Status: " + getResponse.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   ObjectID
*   SubscriberKey
*   CreatedDate
*   ModifiedDate
*   Client.ID
*   Client.PartnerClientKey
*   ListID
*   Status
*   UnsubscribedDate
*   ID

###Ruby
{{#markdown}}
```ruby  
listsubscriber.props = ['ListID', 'SubscriberKey']
```
{{/markdown}}

###PHP

{{#markdown}}
```php  
$listsubscriber->props = array('ListID', 'SubscriberKey');
```
{{/markdown}}

###Python

{{#markdown}}
```python  
listsubscriber.props = ["ListID", "SubscriberKey"]
```
{{/markdown}}

###CSharp

{{#markdown}}
```csharp  
listsubscriber.Props = new string[] { "ObjectID", "SubscriberKey", "CreatedDate", "Client.ID", "Client.PartnerClientKey", "ListID", "Status" };
```
{{/markdown}}

###Java
{{> javadocs }}


##Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1.  **Property**: Any of the properties that can be returned for a list subscriber
2.  **SimpleOperator**: Valid simple operators include the following:
	*   equals
	*   notEquals
	*   greaterThan
	*   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
listsubscriber.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$listsubscriber->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'example@example.com');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
listsubscriber.search_filter = {"Property" => "SubscriberKey","SimpleOperator" => "equals","Value" => "example@example.com"}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
listsubscriber.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "example@example.com" } };
```
{{/markdown}}

###Java
{{> javadocs }}

