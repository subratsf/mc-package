---
data: <%= reference.ssjs_platformFieldAttribute.functions.GetAttributeValue %>
---

##Example
This example retrieves the email address for the contact and writes it into the HTTP Response header:
```
<script runat=server>
     var contactEmail = Platform.Variable.GetAttributeValue('EmailAddr');
     Platform.Response.Write(contactEmail);
</script>
```
