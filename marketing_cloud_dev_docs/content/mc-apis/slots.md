---
title: Slots
---

Slots allow you to control, manipulate, and restrict content blocks. You can create slots, move slots to different blocks, and enforce block number and type restrictions within slots. Blocks within slots are limited to 2x recursion, with a maximum depth of 4 objects.

Add slots to the asset as an object under <samp class="codeph nolang">slots</samp> and to the <samp class="codeph nolang">content</samp> as a placeholder, where the object keys match the placeholder's data-key attribute. In this example, the partner uses slots with one initial block per slot and no number or type restrictions.

##Sample Asset with Slots

```json
{
  "name": "NTO Welcome Series Email",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {
      "content": "<!DOCTYPE html><body><div><div>Some header content</div><div data-type=\"slot\" data-key=\"firstslot\"></div><br /><div data-type=\"slot\" data-key=\"secondslot\"></div></div></body></html>",
      "slots": {
        "firstslot": {},
        "secondslot": {}
      }
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