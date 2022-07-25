---
data: <%= reference.ssjs_coreDataExtension.functions.RowsAdd %>
---

##Examples
This sample code adds a row to the birthdayDE data extension.
```
var birthdayDE = DataExtension.Init("birthdayDE");
birthdayDE.Rows.Add({FirstName:"Angel",LastName:"Ruiz",EmailAddress:"aruiz@example.com",Age:24,Birthday:"11/29/1980"});
```
This sample code adds an array of rows to the birthdayDE data extension.
```
var arrContacts =  [
      {Email:"jdoe@example.com",FirstName:"John",LastName:"Doe"},
      {Email:"aruiz@example.com",FirstName:"Angel",LastName:"Ruiz"}
     ];

var birthdayDE = DataExtension.Init("birthdayDE");
birthdayDE.Rows.Add(arrContacts);
```
The function returns the number of rows affected by the call.
