---
data: <%= reference.ssjs_platformHTTP.functions.UrlEncode %>
---

##Example
```
<script runat="server">
     Platform.Function.UrlEncode("http://www.example.com?value=123 123");
</script>

<script>
     Platform.Function.UrlEncode("http://www.example.com?value=123 123",true);
</script>
```
The system returns these values:
```
http://www.example.com?value=123%20123
```
```
http://www.example.com?value=123+123
```
