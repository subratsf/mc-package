---
title: Template
---

Template designates another asset as a starting point for the current asset. The template acts as a fallback if blocks or slots in the asset are not found in their corresponding attribute. For example, if the asset contains a slots placeholder but no slots attribute, and that asset has a template, the given slot in template.slots will be used, if found.
Templates can also provide locking mechanism to prevent assets from using them as templates to modify specific sections of content.

You can only use a template within the <samp class="codeph nolang">html</samp> view inside a top level attribute views <samp class="codeph nolang">object.views.html.template</samp>.

Add a template to the asset as an object, under the <samp class="codeph nolang">template</samp> attribute. For example, this asset uses a template for the <samp class="codeph nolang">html</samp> view, with some changes to the content slots.

The template is pulled from an existing template asset and therefore has an ID attribute. When blocks are imported as existing blocks or when they are saved separately, they will also have an ID attribute, like <samp class="codeph nolang">block1</samp> in this example.

## Sample Asset with Template

```json
{
  "name": "NTO Welcome Series Email",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {
      "template": {
        "id": 108494,
        "content": "<!DOCTYPE html><body><div><div>Some header content</div><div data-type=\"slot\" data-key=\"firstslot\"></div><br /><div data-type=\"slot\" data-key=\"secondslot\"></div></div></body></html>",
        "slots": {
          "firstslot": {
            "content": "<div data-type=\"block\" data-key=\"block1\"></div><div data-type=\"block\" data-key=\"block2\"></div>",
            "design": "<div>Drag blocks here to start editing them!</div>",
            "blocks": {
              "block1": {
                "content": "123",
                "design": "click here to start editing this block",
                "assetType": {
                  "name": "freeformblock",
                  "id": 195
                }
              },
              "block2": {
                "content": "234",
                "design": "click here to start editing this block",
                "assetType": {
                  "name": "htmlblock",
                  "id": 197
                }
              }
            }
          },
          "secondslot": {
            "content": "<div data-type=\"block\" data-key=\"block3\"></div><div data-type=\"block\" data-key=\"block4\"></div>",
            "design": "<div>Drag blocks here to start editing them!</div>",
            "minBlocks": 1,
            "maxBlocks": 1,
            "allowedBlocks": [
              "textblock"
            ],
            "blocks": {
              "block3": {
                "superContent": "Some ampscript or custom markup or http://www.valid.url/likeThis",
                "content": "Some %%ampscript%% or !!!customMarkup or http://www.invalid.url/%%likeThis%%",
                "design": "click here to start editing this block",
                "assetType": {
                  "name": "textblock",
                  "id": 196
                }
              }
            }
          }
        },
        "assetType": {
          "name": "template",
          "id": 4
        }
      },
      "content": "<!DOCTYPE html><body><div><div>Some CHANGED header content</div><div data-type=\"slot\" data-key=\"firstslot\"></div><br /><div data-type=\"slot\" data-key=\"secondslot\"></div></div></body></html>",
      "slots": {
        "firstslot": {
          "content": "<div data-type=\"block\" data-key=\"block1\"></div><div data-type=\"block\" data-key=\"block2\"></div>",
          "design": "<div>Drag blocks here to start editing them!</div>",
          "blocks": {
            "block1": {
              "id": 456,
              "content": "CHANGED",
              "design": "click here to start editing this block",
              "assetType": {
                "name": "freeformblock",
                "id": 195
              }
            },
            "block2": {
              "content": "CHANGED",
              "design": "click here to start editing this block",
              "assetType": {
                "name": "htmlblock",
                "id": 197
              }
            }
          }
        },
        "secondslot": {
          "content": "<div data-type=\"block\" data-key=\"block3\"></div><div data-type=\"block\" data-key=\"block4\"></div>",
          "design": "<div>Drag blocks here to start editing them!</div>",
          "minBlocks": 1,
          "maxBlocks": 1,
          "allowedBlocks": [
            "textblock"
          ],
          "blocks": {
            "block3": {
              "superContent": "Some CHANGED ampscript or custom markup or http://www.valid.url/likeThis",
              "content": "Some CHANGED %%ampscript%% or !!!customMarkup or http://www.invalid.url/%%likeThis%%",
              "design": "click here to start editing this block",
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
  },
  "data": {
    "email": {
      "someEmailSpecificAttribute": 5
    }
  }
}
```
##Related Items
* [Asset Model](asset-model.htm)
* [Asset Model Example](asset_model_examples.htm)