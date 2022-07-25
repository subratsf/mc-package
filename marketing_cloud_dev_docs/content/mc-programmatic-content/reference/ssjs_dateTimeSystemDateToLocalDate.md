---
data: <%= reference.ssjs_coreDateTime.functions.SystemDateToLocalDate %>
---

##Example
This sample code retrieves an array of time zones based on the specified filter criteria. If you include no filter, the function will return an array of all time zones.
```
var timezones = DateTime.TimeZone.Retrieve({Property:"ID", SimpleOperator:"equals", Value:1});
```
