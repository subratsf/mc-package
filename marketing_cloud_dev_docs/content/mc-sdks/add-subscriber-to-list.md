---
title: Use AddSubscriberToList Method
---

Use the **AddSubscriberToList** helper method to add a subscriber to a list (EmailAddress, Lists, SubscriberKey). This method applies to new subscribers in an account or existing subscribers added to an additional list.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myclient= FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
response = myclient.AddSubscriberToList("example@example.com", [12121212])	
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$response = $myclient->AddSubscriberToList("example@example.com", array(12121212));
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myclient = ET_Client.ET_Client()
response = myclient .AddSubscriberToList("example@example.com", [12121212])
print response
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myclient = new ET_Client();
FuelReturn response = myclient.AddSubscribersToList("example@example.com", new List<int>() { 12121212 });
Console.WriteLine("Helper Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}
