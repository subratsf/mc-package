---
data: <%= reference.ssjs_corePortfolio.functions.Retrieve %>
---

##Example
This sample code retrieves an array of portfolio object information based on the specified criteria:
```
var results = Portfolio.Retrieve({ Property : "CustomerKey", SimpleOperator : "equals", Value : "PortfolioObjectKey" })
```
