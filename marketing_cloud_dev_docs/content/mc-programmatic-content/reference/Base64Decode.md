---
data: <%= reference.encryption.functions.Base64Decode %>
---
###Usage
```
%%[
VAR @encodedStr, @decodedStr
SET @encodedStr = Lookup('Base64Info', 'ReceiptData', 'ReceiptKey', 1)
SET @decodedStr = Base64Decode(@encodedStr,'UTF-8')
]%%
The Lookup() function retrieves the Base64 information from the data extension, and the Base64Decode() decodes the Base64 information and assigns that value to the @decodedStr variable in UTF-8 format. If for some reason the value of @encodedStr is incorrect, the 1 at the end of the Base64Decode() function causes the send to fail due to the error.
%%[
VAR @encodedStr, @decodedStr
SET @encodedStr = Lookup('Base64Info', 'ReceiptData', 'ReceiptKey', 0)
SET @decodedStr = Base64Decode(@encodedStr,'UTF-8', 1)
]%%
```
If the value was 0, the send would continue and the email would contain an empty string instead of the decoded data.