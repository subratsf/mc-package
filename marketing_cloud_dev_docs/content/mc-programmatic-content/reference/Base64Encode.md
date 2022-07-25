---
data: <%= reference.encryption.functions.Base64Encode %>
---
###Usage
```
%%[
VAR @normalStr, @encodedStr
SET @normalStr = Lookup('ForBase64Info', 'ReceiptData', 'ReceiptKey', 1)
SET @encodedStr = Base64Encode(@normalStr)
]%%
```
The Lookup() function retrieves the text information from the data extension, and the Base64Encode() encodes the text into Base64 information and assigns that value to the @encodedStr variable.