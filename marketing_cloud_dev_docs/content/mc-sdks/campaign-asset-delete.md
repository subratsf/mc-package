---
title: Delete a Campaign Asset
---

Use the **Delete** method to delete a campaign asset. Specify the unique identifier **id** in the **props** properties in order to identify which campaign the asset is related to and the unique identifier **assetId** to identify the specfic asset:

###Ruby
{{#markdown}}
```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaignAsset = FuelSDK::Campaign::Asset.new
campaignAsset.authStub = myClient
campaignAsset.props = {"id" => "20", "assetId" => "50"}
results = campaignAsset.delete
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
$campaignAsset->props = array("id" => "20", "assetId" => "50");
$results = $campaignAsset->delete();
print_r($results);
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_CampaignAsset campaignAsset = new ET_CampaignAsset();
campaignAsset.AuthStub = myclient;
campaignAsset.ID = 50;
campaignAsset.CampaignID = '20';
DeleteReturn results = campaignAsset.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```
{{/markdown}}
 
###Python
{{#markdown}}
```python
import ET_Client
myClient = ET_Client.ET_Client()
campaignAsset = ET_Client.ET_Campaign_Asset()
campaignAsset.auth_stub = myClient
campaignAsset.props = {"id" : "20", "assetId" : "50"}
results = campaignAsset.delete()
print results
```
{{/markdown}}

###Java
	{{> javadocs }}
            