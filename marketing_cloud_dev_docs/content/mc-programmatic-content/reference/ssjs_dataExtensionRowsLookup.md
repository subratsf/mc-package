---
data: <%= reference.ssjs_coreDataExtension.functions.RowsLookup %>
---

##Examples
This sample code returns all rows in birthdayDE with a value of 25 for Age.
```
var testDE = DataExtension.Init("testDE");
var data = testDE.Rows.Lookup(["Age"], [25]);
```
This sample code returns the same rows in birthdayDE, but it limits the results to two rows and sorts the results by last name.
```
var testDE = DataExtension.Init("testDE");
var data = testDE.Rows.Lookup(["Age"], [25], 2, "LastName");
```
When initializing data extensions with Lookup() in an email, you must use the name of the data extension. When using the function in landing pages, you can use either the name or the external key of the data extension. Make the name and the external key the same value when creating the data extension to ensure you use the correct value at all times.
