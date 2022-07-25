---
data: <%= reference.ssjs_coreHTTP.functions.Post %>
---

##Example
This sample code performs an HTTP POST and returns the resulting JSON object:
```
var url = 'http://example.com/forms/myForm.html';
var contentType = 'text/xml';
var payload = '<test>test123</test>';
var headerNames = ["MyTestHeader1", "MyTestHeader2"];
var headerValues = ["MyTestValue1", "MyTestValue2"];
var result = HTTP.Post(url, contentType, payload, headerNames, headerValues);

Write(result.StatusCode + '<br>');
Write(result.Response);
```
