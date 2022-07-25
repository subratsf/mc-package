---
data: <%= reference.ssjs_corePortfolio.functions.Update %>
---

##Example
This sample code updates the name attribute of the portfolio object to the specified value:
```
var portObj = Portfolio.Init('myPortfolioCK');
var status = portObj.Update({ DisplayName : "Updated SSJS Image"});
```
