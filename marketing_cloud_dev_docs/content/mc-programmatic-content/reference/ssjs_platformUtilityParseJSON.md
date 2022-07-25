---
data: <%= reference.ssjs_platformUtility.functions.ParseJSON %>
---

##Example
This example sets the val variable to propVal.
```
<script runat="server">
     var str = '{ "prop1": "propVal" }';
     var obj = Platform.Function.ParseJSON(str);
     var val = obj.prop1;
</script>
```
