---
data: <%= reference.ssjs_platformDataExtension.functions.DeleteDE %>
---

##Example
This example deletes the rows from the data extension with the LastName value of Smith.
```
<script runat="server">
     var rows = Platform.Function.DeleteDE('CustomerData',['LastName'],['Smith']);
</script>
```
