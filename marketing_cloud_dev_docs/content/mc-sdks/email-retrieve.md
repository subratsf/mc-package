---
title: Retrieve Email Details
---

{{md 'content-api-notice'}}

Use the **Get** method to return information about existing email messages.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
email = FuelSDK::Email.new
email.authStub = myClient
response = email.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$email = new ET_Email();
$email->authStub = $myclient;
$response = $email->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
email = ET_Client.ET_Email()
email.auth_stub = myClient
results = email.get()
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
GetReturn response = email.Get();
Console.WriteLine("Get Status: " + response.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Streamline Your usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:
*   ID
*   PartnerKey
*   CreatedDate
*   ModifiedDate
*   Client.ID
*   Name
*   Folder
*   CategoryID
*   HTMLBody
*   TextBody
*   Subject
*   IsActive
*   IsHTMLPaste
*   ClonedFromID
*   Status
*   EmailType
*   CharacterSet
*   HasDynamicSubjectLine
*   ContentCheckStatus
*   Client.PartnerClientKey
*   ContentAreas
*   CustomerKey

###Ruby
{{#markdown}}
```ruby  
email.props = ['Name', 'CustomerKey']
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$email->props = array('Name', 'CustomerKey');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
email.props = ['Name', 'CustomerKey']
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
email.Props = new string[] { "Name", "CustomerKey" };
```
{{/markdown}}

##Filter Get Requests

Optionally, you can set the **filter** property  to limit the number of results returned.  If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:
1.  **Property**: Any of the properties that can be returned for an email
2.  **SimpleOperator**: Valid simple operators include the following:
	*   equals
	*   notEquals
	*   greaterThan
	*   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

###Ruby
{{#markdown}}
```ruby  
email.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyEmail'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$email->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyEmail');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
email.search_filter = {'Property' : 'CustomerKey','SimpleOperator' : 'equals','Value' : 'MyEmail'}
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
email.SearchFilter = new SimpleFilterPart() { Property = "CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new String[] { "MyEmail" } };
```
{{/markdown}}