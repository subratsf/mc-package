---
data: <%= reference.ssjs_coreDataExtension.functions.RowsRemove %>
---

##Example
This sample code removes a row from the birthdayDE data extension when that row contains the first name of Angel and an age of 24.

```
var birthdayDE= DataExtension.Init("birthdayDE");
birthdayDE.Rows.Remove(["FirstName", "Age"], ["Angel", 24]);
```
