---
title: Data
---

Data lets you store additional information for a channel in the asset, to be used by the channel's parser, or some UI that manipulates the asset for the channel. If using data, store properly namespaced custom fields under the channel name. If data is returned, be sure to pass it through the API.

Add data to the asset as an object, under the <samp class="codeph nolang">data</samp> attribute. Store channel-specific attributes under their channel name inside of <samp class="codeph nolang">data</samp>. For example, the <samp class="codeph nolang">email</samp> channel needs additional information.

## Sample Asset with Data

```json
{
	"name": "NTO Welcome Series Email",
	"channels": {
		"email": true,
		"web": false
	},
	"assetType": {
		"name": "templatebasedemail",
		"id": 207
	},
	"data": {
		"email": {
			"attributes": [{
					"DisplayName": "sample_attribute",
					"Name": "__AdditionalEmailAttribute1",
					"Value": "your_tracking",
					"Order": 1,
					"Channel": "email",
					"AttributeType": "AdditionalEmailAttribute"
				},
				{
					"DisplayName": "utm_medium",
					"Name": "__AdditionalEmailAttribute2",
					"Value": "salesforce",
					"Order": 2,
					"Channel": "email",
					"AttributeType": "AdditionalEmailAttribute"
				}
			]
		}
	}
}
```
##Related Items
* [Asset Model](asset-model.htm)
* [Asset Model Example](asset_model_examples.htm)