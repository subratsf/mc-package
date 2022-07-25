---
data: <%= reference.ssjs_platformHTTPProperty.functions.GetPostData %>
---

##Encoding
```
jsonPost = Platform.Request.GetPostData();
```
The example above defaults to Windows-1252 encoding.

If the incoming request uses a different encoding format, such as UTF-8, the encoding can be provided using the optional parameter, shown in the example below.

```
jsonPost = Platform.Request.GetPostData('utf-8');
```

##Examples
The examples below assign the JSON data posted to the page to the “json” variable, converting it to a JS object.

Example using Microsoft Windows-1252 encoding (default):
```
<script runat="server" language="JavaScript">
// load data in as a string
   var jsonpost = Platform.Request.GetPostData();
// convert the string to an object
   var json = Platform.Function.ParseJSON(jsonpost);
</script>
```

Example using UTF-8 encoding:
```
<script runat="server" language="JavaScript">
   var jsonpost = Platform.Request.GetPostData('utf-8');
   var json = Platform.Function.ParseJSON(jsonpost);
</script>
```
