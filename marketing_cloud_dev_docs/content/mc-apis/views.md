---
title: Views
---

For multi-channel assets, use a channel view to hold the different content for the different channels. This allows the asset to parse and render its content differently based on the channel in which it is used. Use a generic <samp class="codeph nolang">html</samp> view as a fallback in case the channel view used to render the asset is not found in the views.

Add views to the asset as an object under the <samp class="codeph nolang">views</samp> attribute. Each key under views represents a channel view and contains an asset for this channel.

## Sample Asset with Views

```json
{
  "name": "NTO Welcome Series Email",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {},
    "text": {},
    "subjectline": {},
    "preheader": {},
    "viewAsAWebPage": {),
    "subscriptioncenter": {},
    "forwardHTML": {},
    "forwardText": {}   
  },
  "assetType": {
    "name": "templatebasedemail",
    "id": 207
   }
}
```
##Related Items
* [Asset Model](asset-model.htm)
* [Asset Model Example](asset_model_examples.htm)