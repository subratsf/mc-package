---
data: <%= reference.ssjs_coreDataExtension.functions.RowsUpdate %>
---

##Example
This sample code finds the assigned field in the specified row in birthdayDE and updates it with the new age information.

```
var birthdayDE = DataExtension.Init("birthdayDE");
birthdayDE.Rows.Update({Age:"25"}, ["FirstName"], ["Angel"]);
```
