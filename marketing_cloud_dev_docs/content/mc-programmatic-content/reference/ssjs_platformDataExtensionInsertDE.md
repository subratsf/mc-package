---
data: <%= reference.ssjs_platformDataExtension.functions.InsertDE %>
---

##Example
```
<script runat="server">
    var rows = Platform.Function.InsertDE("CustomerData",["FirstName","LastName","Email"],["Joe","Smith","jsmith@example.com"]);
</script>
```
