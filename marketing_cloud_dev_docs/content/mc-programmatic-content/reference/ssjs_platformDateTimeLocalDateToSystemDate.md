---
data: <%= reference.ssjs_platformDateTime.functions.LocalDateToSystemDate %>
---

##Example
```
<script runat="server">
     var time = Now();
     var systemTime = Platform.Function.LocalDateToSystemDate(time);
</script>
```
