---
data: <%= reference.ssjs_platformHTTPProperty.functions.GetUserLanguages %>
---

##Example
```
<script runat="server">
     var langs = Platform.Request.GetUserLanguages();
     var defaultLangs = langs[0];
</script>
```
