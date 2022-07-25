---
title: Retrieve Campaign Asset Details
---

Use the **Get** method to return information about existing campaign assets.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaignAsset = FuelSDK::Campaign::Asset.new
campaignAsset.authStub = myClient
campaignAsset.props = {"id" => "20"}
response = campaignAsset.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$campaignAsset = new ET_Campaign_Asset();
$campaignAsset->authStub = $myclient;
$campaignAsset->props = array("id" => "20")
$response = $campaignAsset->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
campaignAsset = ET_Client.ET_Campaign_Asset()
campaignAsset.auth_stub = myClient
results = campaignAsset.get()
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
campaignAsset.CampaignID = '20';
GetReturn results = campaignAsset.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}


##Filter Get Requests

Set values in the **props** property to specify the related campaign or to limit the number of results returned and handle paging.

1. **id** (Required) - Unique identifier for the campaign.
2. **assetId** - Unique identifier for the campaign asset association.
3. **$page** - 1 based ordinal for the page number.
4. **$pageSize** - Number of items to return. 50 is the maximum.  
5. **$orderBy** - Specifies the sort order
	+ ModifiedDate DESC
	+ ModifiedDate ASC
	+ Name DESC
	+ Name ASC
	+ CampaignCode DESC
	+ CampaignCode ASC
	+ Id DESC
	+ Id ASC
	+ CreatedDate DESC
	+ CreatedDate ASC

###Ruby
{{#markdown}}
```ruby  
campaignAsset.props = {"id" => "20", '$page' => '2', '$pageSize' => '10', '$orderBy' => 'ModifiedDate DESC'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$campaignAsset->props = array("id" => "20", '$page' => '2', '$pageSize' => '10', '$orderBy' => 'ModifiedDate DESC');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
campaignAsset.props = {"id" : "20", "$page" :  "2", "$pageSize" : "10", "$orderBy" : "ModifiedDate DESC"};
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
campaignAsset.CampaignID = '20';
```
{{/markdown}}