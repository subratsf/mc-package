---
data: <%= reference.ssjs_platformDataExtension.functions.InsertData %>
---

##Example
```
<script runat="server">
    var rows = Platform.Function.InsertData("CustomerData",["FirstName","LastName","Email"],["Joe","Smith","jsmith@example.com"]);
</script>
```
