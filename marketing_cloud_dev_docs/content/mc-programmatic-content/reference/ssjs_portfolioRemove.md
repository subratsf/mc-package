---
data: <%= reference.ssjs_corePortfolio.functions.Remove %>
---

##Example
This sample code deletes the portfolio object with the external key myPortfolioCK:
```
var portObj = Portfolio.Init('myPortfolioCK');
var status = portObj.Remove();
```
