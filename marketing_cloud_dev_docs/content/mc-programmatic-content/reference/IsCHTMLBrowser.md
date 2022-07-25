---
data: <%= reference.http.functions.IsCHTMLBrowser %>
---
###Usage
```
IsCHTMLBrowser("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36")
```
System returns `false` because the provided user-agent value represents a Chrome browser on Windows.

```
IsCHTMLBrowser("DoCoMo/2.0 MST_v_SH2101V(c100)")
```
System returns `true` because the provided user-agent value represents a known CHTML browser on a feature phone.

```
IsCHTMLBrowser(HTTPRequestHeader("user-agent"))
```
This example uses the `HTTPRequestHeader` AMPscript funciton to return the browser user-agent value from the current browser. System returns the appropriate value for the provided user-agent value.