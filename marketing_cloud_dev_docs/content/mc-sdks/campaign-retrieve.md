---
title: Retrieve Campaign Details
---

Use the **Get** method to return information about existing campaigns. 

###Ruby
{{#markdown}}
```ruby  
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaign = FuelSDK::Campaign.new 
campaign.authStub = myClient
response = campaign.get
p response
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
require('ET_Client.php');
$myclient = new ET_Client();
$campaign = new ET_Campaign();
$campaign->authStub = $myclient;
$response = $campaign->get();
print_r($response);
```
{{/markdown}}

###Python
{{#markdown}}
```python  
import ET_Client
myClient = ET_Client.ET_Client()
campaign = ET_Client.ET_Campaign()
campaign.auth_stub = myClient 
results = campaign.get()
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
GetReturn results = campaign.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```
{{/markdown}}

###Java
{{> javadocs }}

	
##Filtering Get Requests

Optionally, you can set values in the **props** property  to limit the number of results returned and handle paging. 
* **$page** - 1 based ordinal for the page number.
* **$pageSize** - Number of items to return. 50 is the maximum.
* **$orderBy** - Specifies the sort order

1. ModifiedDate DESC
2. ModifiedDate ASC
3. Name DESC
4. Name ASC
5. CampaignCode DESC
6. CampaignCode ASC
7. Id DESC
8. Id ASC		
9. CreatedDate DESC
10. CreatedDate ASC	

###Ruby
{{#markdown}}
```ruby  
campaign.props = {'$page' => '2', '$pageSize' => '10', '$orderBy' => 'ModifiedDate DESC'}
```
{{/markdown}}

###PHP
{{#markdown}}
```php  
$campaign->props = array('$page' => '2', '$pageSize' => '10', '$orderBy' => 'ModifiedDate DESC');
```
{{/markdown}}

###Python
{{#markdown}}
```python  
campaign.props = {"$page" :  "2", "$pageSize" : "10", "$orderBy" : "ModifiedDate DESC"};
```
{{/markdown}}

###CSharp
{{#markdown}}
```csharp  
campaign.Page = 2;
```
{{/markdown}}