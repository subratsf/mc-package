---
data: <%= reference.ssjs_platformUtility.functions.RaiseError %>
---

##Example
```
<script runat="server">     
     var StatusAndRequestID = [0,0];
     var newObject = Platform.Function.InvokeCreate(CreateRequest,StatusAndRequestID,Options);
     var status = StatusAndRequestID[0];
     var requestID = StatusAndRequestID[1];     if(Result != "OK") {
         Platform.Function.RaiseError("Create failed. Ensure your call successfully invoked the Create method.",false,"statusCode","3");
     }
</script>
```
