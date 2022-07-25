---
data: <%= reference.ssjs_platformDataExtension.functions.DeleteData %>
---

##Example
This example deletes the rows from the data extension with the LastName value of Smith.
```
<script runat="server">
     var rows = Platform.Function.DeleteData('CustomerData',['LastName'],['Smith']);
</script>
```
