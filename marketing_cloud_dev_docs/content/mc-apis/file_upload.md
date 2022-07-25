---
title: File Upload
---

Some asset types are files, such as gif, pdf, and png, and can be created using the asset model. Types are named based on the file extension they support.

Add a file to the asset as an encoded base64 string using the <samp class="codeph nolang">file</samp> attribute. The maximum size per file is 5 MB.

## Sample File Upload

```json
{
  "name": "1px transparent gif asset",
  "assetType": {
    "name": "gif",
    "id": 20
   },
  "file": "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "ModelVersion":2,
  "FileProperties":{
   "fileName":"1px transparent gif asset.gif"
 }
}
```

##Related Items
* [Asset Model](asset-model.htm)
* [Asset Model Example](asset_model_examples.htm)
