---
data: <%= reference.ssjs_platformDataExtension.functions.UpsertDE %>
---

##Examples
```
<script runat="server">
     var rows = Platform.Function.UpsertDE("CustomerData",["ID"],["12345"],["Company","Country","Region"],["exampleCompany","USA","West"]);
</script>
```
