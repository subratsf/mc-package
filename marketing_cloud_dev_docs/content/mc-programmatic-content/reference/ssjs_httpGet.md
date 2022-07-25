---
data: <%= reference.ssjs_coreHTTP.functions.Get %>
---

Marketing Cloud recognizes any character set returned in the HTTP headers via Content-Type. For example, you can use a UTF-8 encoded HTML file with Content-Type: text/html; charset=utf-8 included in the header. If the encoding is not specified in the header, the application assumes all returned data will be in the character set WindowsCodePage 1252. You can change this default by contacting Global Support.

##Example
This sample code performs a HTTP GET and returns the response:
```
var responseContent = HTTP.Get('http://www.example.com');
```
This sample code performs a HTTP GET and returns the response object:
```
var url = 'http://www.example.com';
var headerNames = ["MyTestHeader1", "MyTestHeader2"];
var headerValues = ["MyTestValue1", "MyTestValue2"];
var response = HTTP.Get(url, headerNames, headerValues);

Write(response.Status + '<br />');
Write(response.Content);
```
