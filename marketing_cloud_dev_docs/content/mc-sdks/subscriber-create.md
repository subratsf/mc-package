---
title: Create a Subscriber
---

Use the **Post** method to create a new subscriber within a Marketing Cloud account.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
subscriber = FuelSDK::Subscriber.new
subscriber.authStub = myclient
subscriber.props = {"EmailAddress" => "example@example.com", "SubscriberKey" => "SDKSubscriber"}
subscriber.props['Attributes'] = [{'Name' => 'First Name', 'Value' => 'ExactTarget Example'}]
results = subscriber.post
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
$subscriber->props = array("EmailAddress" => "example@example.com", "SubscriberKey" => "SDKSubscriber");
$subscriber->props['Attributes'] = array(array('Name' => 'First Name', 'Value' => 'ExactTarget Example'));
$results = $subscriber->post();
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
subscriber.props = {"EmailAddress" : "example@example.com", "SubscriberKey" : "SDKSubscriber"}
subscriber.props['Attributes'] = [{'Name': 'First Name', 'Value': 'ExactTarget Example'}]
results = subscriber.post()
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
subscriber.EmailAddress = "example@example.com";
subscriber.Attributes = new ET_ProfileAttribute[] {new ET_ProfileAttribute(){ Name= "First Name", Value = "ExactTarget Example"} };
PostReturn results = subscriber.Post();
Console.WriteLine("Post Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Properties

You can provide the following values for the **props** property on the object:

*   **EmailAddress**
    *   String datatype
    *   Contains the email address for a subscriber
*   **SubscriberKey**
    *   String datatype
    *   Identification of a specific subscriber
*   **UnsubscribedDate**
    *   DateTime datatype
    *   Represents date subscriber unsubscribed from a list
*   **Status**
    *   SubscriberStatus datatype
    *   Defines status of object
    *   Valid Values
        *   Active
        *   Held
        *   Unsubscribed
*   **EmailTypePreference**
    *   String datatype
    *   Description
    *   Valid Values
        *   Text
        *   HTML
*   **Attributes**
    *   Array datatype
    *   **Name**
        *   String datatype
        *   Name of the profile attribute
    *   **Value**
        *   String datatype
        *   Value of the profile attribute
*   **Lists**
    *   Array datatype
    *   **ID**
        *   Int32 datatype
        *   Identifies the list