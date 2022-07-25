---
data: <%= reference.microsoftdynamics.functions.UpsertMscrmRecord %>
---
###Usage
```
UpsertMscrmRecord("account","createdon","DESC",1,"name","MarketingCloud",1,"address1_city","Indianapolis")
```
This example first checks to see if an account exists where the name equals “MarketingCloud”. If there is, it finds the one created most recently and sets the address1_city of that record to “Indianapolis.” If there isn’t, it creates a record where the name is “MarketingCloud” and the address1_city is “Indianapolis.”
