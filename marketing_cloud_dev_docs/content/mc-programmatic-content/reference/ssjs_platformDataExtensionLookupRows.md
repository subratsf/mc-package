---
data: <%= reference.ssjs_platformDataExtension.functions.LookupRows %>
---

##Examples
```
<script runat="server">
     var dataRows = Platform.Function.LookupRows('CustomerData','Company','exampleCompany');
     if(dataRows && dataRows.length > 0) {
          for(var i=0; i<dataRows.length; i++) {
               Platform.Response.Write(dataRows[i]["Email"]);
          }
     }
</script>
```
```
<script runat="server">
     var dataRows = Platform.Function.LookupRows('CustomerData',['FirstName','LastName'],['Angela','Cruz']);
     if(dataRows && dataRows.length > 0) {
          for(var i=0; i<dataRows.length; i++) {
               Platform.Response.Write(dataRows[i]["Email"]);
          }
     }
</script>
```
