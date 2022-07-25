---
title: Delete a Campaign
---

Use the **Delete** method to delete a campaign.  Specify the unique identifier **id** in the **props** properties in order to identify which campaign to delete:

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaign = FuelSDK::Campaign.new 
campaign.authStub = myClient
campaign.props = {"id" => "151515151"}		
results = campaign.delete
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$campaign = new ET_Campaign();
$campaign->authStub = $myclient;
$campaign->props = array("id" => "151515151");
$results = $campaign->delete();
print_r($results);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
   	campaign = ET_Client.ET_Campaign()
  campaign.auth_stub = myClient 
  campaign.props = {"id" : "151515151"}
results = campaign.delete()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_Campaign campaign = new ET_Campaign();
campaign.AuthStub = myclient;    
campaign.ID = 151515151;
DeleteReturn results = campaign.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

