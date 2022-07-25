---
data: <%= reference.ssjs_corePortfolio.functions.Add %>
---

##Example
This sample code adds a new portfolio object to the Portfolio folder specified by CategoryID.
```
var newPortfolio = {
    DisplayName : "SSJS Portfolio Object",
    CustomerKey : "myPortfolioCK",
    CategoryID: 12345,
    FileName : "logo.png",
    FileLocation : "http://www.example.com/Portals/0/images/global/logo_main.png"
};

var status = Portfolio.Add(newPortfolio);
```
