---
data: <%= reference.ssjs_platformAPI.functions.InvokePerform %>
---

##Example
```
<script runat="server">     
     var rtn = [0,0,0];
     var newObject = Platform.Function.InvokePerform(APIObject,"Validate",StatusAndRequestID,Options);
     var statusMessage = StatusAndRequestID[0];
     var errorCode = StatusAndRequestID[1];
     var performResponse = StatusAndRequestID[2];
</script>
```
