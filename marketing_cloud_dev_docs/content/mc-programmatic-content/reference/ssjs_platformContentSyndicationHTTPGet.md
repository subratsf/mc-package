---
data: <%= reference.ssjs_platformContentSyndication.functions.HTTPGet %>
---

## Example
This function returns one of these status values:
* 0 indicates status is OK
* -1 indicates a missing URL
* -2 indicates an HTTP request error
* -3 indicates the function completed successfully but did not return any content

```
<script runat="server">
     var status = [0];
     var content = Platform.Function.HTTPGet('http://www.example.com',false,0,['x-request-id'],['sampleValue'],status);
     if(status[0] == 0) {
          Platform.Response.Write(content);
     }
</script>
```
