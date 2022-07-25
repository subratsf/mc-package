---
title: Update a Subscriber
---

Use the **Patch** method to update an existing subscriber. Specify a unique identifier in the **props** property in order to identify which subscriber will be updated:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
subscriber = FuelSDK::Subscriber.new
subscriber.authStub = myclient
subscriber.props = {"Status" => "Unsubscribed", "SubscriberKey" => "SDKSubscriber"}
results = subscriber.patch
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
$subscriber->props = array("Status" => "Unsubscribed", "SubscriberKey" => "SDKSubscriber");
$results = $subscriber->patch();
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
subscriber.props = {"Status" : "Unsubscribed", "SubscriberKey" : "SDKSubscriber"}
results = subscriber.patch()
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
subscriber.Status = SubscriberStatus.Unsubscribed;
PatchReturn results = subscriber.Patch();
Console.WriteLine("Patch Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

