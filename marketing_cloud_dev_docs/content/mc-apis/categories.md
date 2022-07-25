---
title: Categories (Folders)
---

You can create assets in any folder known by your users, or move an existing asset into a folder. The asset stores the folder information in an attribute called category. 

To create or move an asset into a folder, add a category to the asset as an object, using the <samp class="codeph nolang">category</samp> attribute. Add the ID of the category.

## Sample Asset with Category
```json
{
    "name": "NTO Welcome Series Email",
    "assetType": {
        "id": 207,
        "name": "templatebasedemail"
    },
    "category": { "id": 1234567 }
}
```
##Related Items
* [Asset Model](asset-model.htm)
* [Asset Model Example](asset_model_examples.htm)