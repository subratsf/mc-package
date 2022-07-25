---
data: <%= reference.ssjs_coreTemplate.functions.Add %>
---

##Example
This sample code adds a template to your account:
```
var myTemp = {    
    "CustomerKey":"test_template",
    "TemplateName":"SSJS Test Template",
    "LayoutHTML":"this is some HTML"
};

var status = Template.Add(myTemp);
```
