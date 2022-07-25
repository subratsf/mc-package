---
title: Blocks
---

Blocks are the simplest form of sub-content in an asset. Blocks have their own asset type, can be nested inside an asset, and have their own content and design. They can also be saved or loaded independently in Content Builder. Each block's assetType matches the individual block editing experience.

Add blocks to the asset as an object under <samp class="codeph nolang">blocks</samp> and to the <samp class="codeph nolang">content</samp> as a placeholder, where the object keys match the placeholder's <samp class="codeph nolang">data-key</samp> attribute. All blocks must be loaded inside of slots. 

## Min, max, allowed blocks

An asset can specify the minimum and maximum number of blocks, as well as the type of blocks allowed to live under it.

Add block attributes to the asset under as number, number, and array of strings under the <samp class="codeph nolang">minBlocks</samp>, <samp class="codeph nolang">maxBlocks</samp>, and <samp class="codeph nolang">allowedBlocks</samp> attributes, respectively. The array holds assetType names for the allowed blocks. This example requires exactly one follow-up link of the <samp class="codeph nolang">textblock</samp> type and at least one author.

## Sample Asset with Blocks

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
        "firstslot": {
          "content": "<div data-type=\"block\" data-key=\"block1\"></div><div data-type=\"block\" data-key=\"block2\"></div>",
          "blocks": {
            "block1": {
              "content": "123",
              "assetType": {
                "name": "freeformblock",
                "id": 195
              }
            },
            "block2": {
              "content": "234",
              "assetType": {
                "name": "htmlblock",
                "id": 197
              }
            }
          }
        },
        "secondslot": {
          "content": "<div data-type=\"block\" data-key=\"block3\"></div><div data-type=\"block\" data-key=\"block4\"></div>",
          "minBlocks": 1,
          "maxBlocks": 1,
          "allowedBlocks": [
            "textblock"
          ],
          "blocks": {
            "block3": {
              "content": "345",
              "assetType": {
                "name": "textblock",
                "id": 196
              }
            }
          }
        }
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