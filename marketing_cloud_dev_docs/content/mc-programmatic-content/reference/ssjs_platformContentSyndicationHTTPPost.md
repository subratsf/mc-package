---
data: <%= reference.ssjs_platformContentSyndication.functions.HTTPPost %>
---

## Example
```
<script runat="server">
     var content = [0];
     var statusCode = Platform.Function.HTTPPost('http://www.example.com','application/javascript','{data:"someValue"}',['x-request-id'],['headerValue'],content);
     if (statusCode == 200)  {
          Platform.Response.Write(content[0]);
     }
</script>
```
