---
data: <%= reference.ssjs_coreUtilities.functions.Base64Decode %>
---

##Example
This sample code takes a Base64 encoded string passed to the function and returns a plain text string.
```
var encoded = 'VGhpcyB3YXMgYSBCYXNlNjQgZW5jb2RlZCBzdHJpbmcu';
var decoded = Base64Decode(encoded); // "This was a Base64 encoded string."
```
