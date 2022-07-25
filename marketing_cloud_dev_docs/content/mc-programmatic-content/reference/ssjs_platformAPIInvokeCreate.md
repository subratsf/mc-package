---
data: <%= reference.ssjs_platformAPI.functions.InvokeCreate %>
---

##Example
```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeCreate(CreateRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```
