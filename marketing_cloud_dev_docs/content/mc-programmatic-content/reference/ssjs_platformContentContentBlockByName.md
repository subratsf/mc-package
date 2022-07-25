---
data: <%= reference.ssjs_platformContent.functions.ContentBlockByName %>
---

##Example
```
<script runat="server">
var content = Platform.Function.ContentBlockByName("Content Builder\\Content One");
Platform.Response.Write(content);
</script>
```
