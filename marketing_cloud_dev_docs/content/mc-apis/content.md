---
title: Content
---

The content attribute contains the asset's actual content that will be sent to customers. The content attribute is used at all levels of the asset model to hold each asset's content and identify where to sub-content should go.

>When pasting HTML into the content attribute, HTML contains certain reserved chars that need to be escaped in JSON. Run the HTML through a JSON escape tool first to ensure that the HTML is valid in the JSON payload.

Add content to the asset as a string, using the <samp class="codeph nolang">content</samp> attribute.

## Sample Asset with Content

```json
{
  "name": "NTO Welcome Series Email",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {
      "content": "<!DOCTYPE html><body>This is a simple message.</body></html>"
    },
    "text": {},
    "subjectline": {},
    "preheader": {}
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
