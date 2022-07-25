---
data: <%= reference.ssjs_coreUtilities.functions.Format %>
---

##Example
In this sample code, the first function takes the string and applies the MM/dd/yyyyformat to it. The second function applies two decimal places to the string.
```
Format(Now(),"MM/dd/yyyy");
Format(55, "C2"); // Returns "55.00"
```
