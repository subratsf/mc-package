---
data: <%= reference.ssjs_platformUtility.functions.Base64Encode %>
---

##Example
```
<script runat="server">
     var normalStr = Platform.Function.Lookup("ForBase64Info","ReceiptData","ReceiptKey","stringValue");
     var encodedStr = Platform.Function.Base64Encode(normalStr);
</script>
```
