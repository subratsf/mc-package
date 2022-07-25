---
title: Delete a Subscriber
---

Use the **Delete** method to delete a subscriber. Specify a unique identifier needs to be specified in the **props** properties in order to identify which subscriber to update:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
subscriber = FuelSDK::Subscriber.new
subscriber.authStub = myclient
subscriber.props = {"SubscriberKey" => "SDKSubscriber"}
results = subscriber.delete
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$subscriber = new ET_Subscriber();
$subscriber->authStub = $myclient;
$subscriber->props = array("SubscriberKey" => "SDKSubscriber");
$results = $subscriber->delete();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
subscriber = ET_Client.ET_Subscriber()
subscriber.auth_stub = myclient
subscriber.props = {"SubscriberKey" : "SDKSubscriber"}
results = subscriber.delete()
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
subscriber.SubscriberKey = "SDKSubscriber";
DeleteReturn results = subscriber.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

