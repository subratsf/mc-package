---
title: Asset Model Examples
---
Use these examples to created basic HTML paste and template-based emails.

>When pasting HTML into the content attribute, HTML contains certain reserved chars that need to be escaped in JSON. Run the HTML through a JSON escape tool first to ensure that the HTML is valid in the JSON payload.

* [HTML Paste Email Example](#html-paste-email-example)
* [Simple Template Based Email Example](#simple-template-based-email-example)
* [Complex Template Based Email Example](#complex-template-based-email-example)

##HTML Paste Email Example
```json
{
  "name": "my first message",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {
      "content": "<!DOCTYPE html><body>This is a simple html paste email.</body></html>"
    },
    "text": {},
    "subjectline": {},
    "preheader": {}
  },
  "assetType": {
    "name": "htmlemail",
    "id": 208
   }
}
```
##Simple Template Based Email Example
<gist data-gist="https://gist.github.com/mc-doc/8c16a87399d0d975ea3e13b4de644c47.js"></gist>

##Complex Template Based Email Example
<gist data-gist="https://gist.github.com/mc-doc/9f21e11ebdb1172dd4739dcd070b7f77.js"></gist>

Character encoding in `data.email.options.characterEncoding` can be one of the following:
* utf-8
* us-ascii
* shift_jis
* EUC-KR
* iso-8859-1
* iso-8859-2
* iso-8859-6
* iso-8859-11
* big5
* koi8-r
* iso-2022-jp
* GB2312

##Related Items
[List of Asset Types](base-asset-types.htm)
