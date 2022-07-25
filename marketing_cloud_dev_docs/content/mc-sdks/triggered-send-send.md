---
title: Send with a TriggeredSend
---

Use the **Send** method to use a TriggeredSend to send an email. Specify a unique identifier in the **props** properties in order to identify which triggeredsend to send:

* CustomerKey
* ObjectID

##Set the Subscribers

The ET_TriggeredSend object has a unique property called **subscribers** which specifies the subscribers who will receive an email when using the send method. This property accepts an array and each definition in the array can have the following properties:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
sendTrig = FuelSDK::TriggeredSend.new
sendTrig.authStub = myclient
sendTrig.props = [{"CustomerKey" => NameOfTestTS, "Subscribers" => {"EmailAddress"=>"testing@bh.exacttarget.com", "SubscriberKey" => "testing@bh.exacttarget.com"}}]
results = sendTrig.send
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$triggeredsend = new ET_TriggeredSend();
$triggeredsend->authStub = $myclient;
$triggeredsend->props = array("CustomerKey" => "TriggerTest");
$triggeredsend->subscribers = array(array("EmailAddress"=>"example@example.com", "SubscriberKey" => "example@example.com", "Attributes" => array(array('Name' => 'FirstName', 'Value' => 'Bob'), array('Name' => 'LastName', 'Value' => 'Smith'))));
$results = $triggeredsend->send();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
triggeredsend = ET_Client.ET_TriggeredSend()
triggeredsend.auth_stub = myclient
triggeredsend.props = {"CustomerKey" : "TriggerTest"}
triggeredsend.subscribers = [{"EmailAddress" : "example@example.com", "SubscriberKey" : "example@example.com, "Attributes" : [{'Name' : 'FirstName', 'Value' : 'Bob'}, {'Name' : 'LastName', 'Value' : 'Smith'}]}]
results = triggeredsend.send()
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
triggeredsend.CustomerKey = "TriggerTest";
triggeredsend.Subscribers = new ET_Subscriber[] { new ET_Subscriber() { EmailAddress = "example@example.com", SubscriberKey = "example@example.com" } };
SendReturn results = triggeredsend.Send();
Console.WriteLine("Send Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

