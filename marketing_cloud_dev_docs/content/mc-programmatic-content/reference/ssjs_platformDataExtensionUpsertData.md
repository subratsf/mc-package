---
data: <%= reference.ssjs_platformDataExtension.functions.UpsertData %>
---

##Examples
```
<script runat="server">
     var rows = Platform.Function.UpsertData("CustomerData",["ID"],["12345"],["Company","Country","Region"],["exampleCompany","USA","West"]);
</script>
```
