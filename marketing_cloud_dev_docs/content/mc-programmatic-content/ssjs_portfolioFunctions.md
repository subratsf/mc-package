---
title: Portfolio Functions
---

Portfolio functions allow access via server-side JavaScript to the Portfolio contained in your Marketing Cloud account.

##Load
Use the Portfolio Server-Side JavaScript Functions
In your server-side JavaScript code, first load the core library using this syntax:
```
Platform.Load("core","1");
```
##Initialization
To interact with a portfolio object via server-side JavaScript, you must first initialize the object. The code below initializes an email with the external key of myPortfolioCK:
```
var portObj = Portfolio.Init('myPortfolioCK');
```
Once you initialize the portfolio object, you can use the applicable functions.
