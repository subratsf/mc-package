---
title: Create a Campaign
---

Use the **Post** method to create a new campaign within a Marketing Cloud account.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaign = FuelSDK::Campaign.new
campaign.authStub = myClient
campaign.props = {"name" => "SDKCampaign", "description" => "SDK Created Campaign"}
results = campaign.post
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
$campaign->props = array("name" => "SDKCampaign", "description" => "SDK Created Campaign");
$results = $campaign->post();
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
  campaign.props = {"name" : "SDKCampaign", "description": "SDK Created Campaign"}
results = campaign.post()
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
campaign.Name = "SDKCampaign";
campaign.Description = "SDK Created Campaign";
PostReturn results = campaign.Post();
Console.WriteLine("Post Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

##Properties

You can provide the following values for the **props** property on the object:

+ **name**
  + String datatype
  + Name of the campaign
+ **description**
  + String datatype
  + Description of the campaign
+ **campaignCode**
  + String datatype
  + User-supplied unique identifier for an object within an object type
+ **color**
  + String datatype
  + Specifies either Public or Private as the type
+ **favorite**
  + Boolean datatype
  + Specifies if campaign is a favorite
