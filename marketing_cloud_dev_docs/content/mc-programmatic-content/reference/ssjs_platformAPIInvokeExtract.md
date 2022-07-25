---
data: <%= reference.ssjs_platformAPI.functions.InvokeExtract %>
---

##Example
```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeExtract(ExtractRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];
</script>
```
