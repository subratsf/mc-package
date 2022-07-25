---
data: <%= reference.ssjs_coreHTTP.functions.IsCHTMLBrowser %>
---

##Example
This sample code evaluates the provided user-agent value and returns the appropriate value depending on the browser:
```
Platform.Response.Write(Platform.Request.UserAgent);
Platform.Response.Write("
Is CHTML: ");
Platform.Response.Write(Platform.Function.IsCHTMLBrowser(Platform.Request.UserAgent));
```
