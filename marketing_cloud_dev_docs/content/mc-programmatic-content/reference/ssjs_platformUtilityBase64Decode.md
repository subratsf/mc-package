---
data: <%= reference.ssjs_platformUtility.functions.Base64Decode %>
---

##Example
```
<script runat="server">
     var encodedStr = Platform.Function.Lookup("forBase64Info","ReceiptData","ReceiptKey","stringValue");
     var decodedStr = Platform.Function.Base64Decode(encodedID);
</script>
```
