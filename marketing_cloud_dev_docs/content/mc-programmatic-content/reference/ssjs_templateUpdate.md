---
data: <%= reference.ssjs_coreTemplate.functions.Update %>
---

##Examples
This sample code updates the Name attribute of the template to the specified value:
```
var myTemplate = Template.Init('myTemplateCK');
var status = temp.Update({ "TemplateName" : "Edited Template" });
```
