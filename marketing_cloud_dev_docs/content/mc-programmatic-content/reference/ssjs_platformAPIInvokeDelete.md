---
data: <%= reference.ssjs_platformAPI.functions.InvokeDelete %>
---

##Example
```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeDelete(DeleteRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```
