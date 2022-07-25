---
data: <%= reference.ssjs_coreContentArea.functions.Add %>
---

##Example
This sample code adds a content area to your account:

```
var exampleArea = {
    "CustomerKey" : "exampleArea",
    "Name" : "SSJS Content Area Example",
    "CategoryID" : 123456                            //Use only if you wish to assign the content area to a specific folder
    "Layout" : "RawText",                            //Use only if you wish to create a specific layout format for a content area
    "LayoutSpecified" : true,                        //Use only if you specify a layout type
    "Content" : "<b>This is example content</b>"
};

var addedCA = ContentAreaObj.Add(exampleArea);
```
