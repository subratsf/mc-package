---
data: <%= reference.ssjs_platformAPI.functions.InvokeSchedule %>
---

##Example
```
<script runat="server">     
     var rtn = [0,0,0];
     var newObject = Platform.Function.InvokeSchedule(APIObject,"Validate",scheduleDefinition,StatusAndRequestID,Options);
     var statusMessage = StatusAndRequestID[0];
     var errorCode = StatusAndRequestID[1];
     var scheduleResponse = StatusAndRequestID[2];
</script>
```
