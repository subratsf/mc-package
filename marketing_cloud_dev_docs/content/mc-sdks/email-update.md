---
title: Update an Email Message
---

{{md 'content-api-notice'}}

Use the **Patch** method to update an existing email message. Specify a unique identifier in the **props** property in order to identify which email will be updated:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
email = FuelSDK::Email.new
email.authStub = myClient
email.props = {"ID" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = email.patch
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
$email->props = array("ID" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $email->patch();
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
email.props = {"ID" : "151515151", "Name": "SDK Example, now Updated!"}
results = email.patch()
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
email.Name = "SDK Example, now Updated!";
PatchReturn response = email.Patch();
Console.WriteLine("Patch Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

