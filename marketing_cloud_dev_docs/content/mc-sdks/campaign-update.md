---
title: Update a Campaign
---

Use the **Patch** method to update an existing campaign. Specify the unique identifier **id** in the **props** property in order to identify which campaign will be updated.

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaign = FuelSDK::Campaign.new
campaign.authStub = myClient
campaign.props = {"id" => "151515151", "name"=> "SDK Example, now Updated!"}
results = campaign.patch
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
$campaign->props = array("id" => "151515151", "name"=> "SDK Example, now Updated!");
$results = $campaign->patch();
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
  campaign.props = {"id" : "151515151", "name": "SDK Example, now Updated!"}
results = campaign.patch()
print results
```
{{/markdown}}

###Java
{{> javadocs }}
