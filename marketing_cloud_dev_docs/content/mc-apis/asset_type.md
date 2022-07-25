---
title: Asset Type
---

Every asset has a type, such as email, template, block, cloud page, jpg image, or pdf document. The asset model parses, stores, and searches all assets in the same way, regardless of type, but the type is important to distinguish assets in queries and in the Content Builder UI.

Add an asset type to the asset as an object, using the <samp class="codeph nolang">assetType</samp> attribute. When creating an asset, only an assetType.id is required. If the assetType.name is omitted or does not match the ID, the API automatically sets the name.

Creating a webpage (AssetTypeID 205) does not create the asset in the CloudPages UI.

## Sample Empty Asset

```json
{
  "name": "NTO Welcome Series Email",
  "assetType": {
    "name": "templatebasedemail",
    "id": 207
   }
}
```
##Related Items
* [Asset Model](asset-model.htm)
* [Asset Model Example](asset_model_examples.htm)
