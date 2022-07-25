---
data: <%= reference.ssjs_platformAPI.functions.InvokeConfigure %>
---

##Example
```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeConfigure(ConfigureObject,"create",StatusAndRequestID,Options);
</script>
```
