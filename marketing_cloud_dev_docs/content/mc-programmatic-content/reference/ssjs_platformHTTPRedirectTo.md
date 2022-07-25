---
data: <%= reference.ssjs_platformHTTP.functions.RedirectTo %>
---

##Example
```
<script runat="server">
     var email = "aruiz@example.com";
     var firstName = "Angela";
     var baseUrl = "https://example.com?email=";
     var nameJoin = "&name=";
     Platform.Function.RedirectTo(baseUrl.contact(email,nameJoin,firstName);
</script>
```
The system returns this URL:
```
https://www.example.com?email=aruiz@example.com&name=Angela
```
