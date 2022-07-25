---
title: Create a Campaign Asset
---

Use the **Post** method to create a new campaign within a Marketing Cloud account.

###Ruby
{{#markdown}}
```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaignAsset = FuelSDK::Campaign::Asset.new
campaignAsset.authStub = myClient
campaignAsset.props = {"id" => "1212", "ids"=> [1000154], "type"=> "EMAIL"}
results = campaignAsset.post
p results
```
{{/markdown}}

###PHP
{{#markdown}}
```php
require('ET_Client.php');
$myclient = new ET_Client();
$campaignAsset = new ET_Campaign_Asset();
$campaignAsset->authStub = $myclient;
$campaignAsset->props = array("id" => "1212", "ids"=> [1000154], "type"=> "EMAIL");
$results = $campaignAsset->post();
print_r($results);
``` 
{{/markdown}}

###Python
{{#markdown}}
```python
import ET_Client
myClient = ET_Client.ET_Client()
campaignAsset = ET_Client.ET_Campaign_Asset()
campaignAsset.auth_stub = myClient
campaignAsset.props = {"id" : "1212", "ids": (1000154), "type": "EMAIL"}
results = campaignAsset.post()
print results
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_CampaignAsset campaignAsset = new ET_CampaignAsset();
campaignAsset.AuthStub = myclient;
campaignAsset.CampaignID = "1212";
campaignAsset.IDs = new string[] { "1000154" };
campaignAssets.Type = "EMAIL";
PostReturn results = campaignAsset.Post();
Console.WriteLine("Post Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

##Properties

You can provide the following values for the **props** property on the object:

*   **id**
    *   String datatype
    *   Id of the campaign
*   **ids**
    *   Array datatype
    *   Unique IDs for assets
*   **type**
    *   String datatype
    *   User-supplied unique identifier for an object within an object type
    *   Valid Values:
        *   email
        *   automation_definition
        *   calendar_event
        *   triggered
        *   list
        *   group
        *   data_extension
        *   sendable_custom_object
        *   landing_page
        *   facebook_tab
        *   ct_facebook_post
        *   ct_twitter_post
        *   sms_message
        *   push_message