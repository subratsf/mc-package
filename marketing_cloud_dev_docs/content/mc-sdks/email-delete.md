---
title: Delete an Email Message
---

{{md 'content-api-notice'}}

Use the **Delete** method to delete an email message. Specify a unique identifier needs to be specified in the **props** properties in order to identify which email message to update:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
email = FuelSDK::Email.new
email.authStub = myClient
email.props = {"ID" => "151515151"}
results = email.delete
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$email = new ET_Email();
$email->authStub = $myclient;
$email->props = array("ID" => "151515151");
$results = $email->delete();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
email = ET_Client.ET_Email()
email.auth_stub = myClient
email.props = {"ID" : "151515151"}
results = email.delete()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
Using FuelSDK;
ET_Client myClient = new ET_Client();
ET_Email email = new ET_Email();
email.AuthStub = myclient;
email.ID = 151515151;
DeleteReturn response = email.Delete();
Console.WriteLine("Delete Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

