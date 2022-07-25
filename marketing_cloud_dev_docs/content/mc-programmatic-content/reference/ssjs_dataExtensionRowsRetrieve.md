---
data: <%= reference.ssjs_coreDataExtension.functions.RowsRetrieve %>
---

##Example
This sample code retrieves all data from the birthdayDE data extension.
```
var  birthdayDE = DataExtension.Init("birthdayDE");
var data = birthdayDE.Rows.Retrieve();
```
This sample code retrieves all data using a simple filter where the age is greater than 20.
```
var birthdayDE = DataExtension.Init("birthdayDE");
var filter = {Property:"Age",SimpleOperator:"greaterThan",Value:20};
var data = birthdayDE.Rows.Retrieve(filter);
```
This sample code retrieves all data using a complex filter where the age is greater than 20 and the first name is Angel.
```
var birthdayDE = DataExtension.Init("birthdayDE");
var complexfilter = {
                LeftOperand:{
                    Property:"Age",
                    SimpleOperator:"greaterThan",
                    Value:20
                },
                LogicalOperator:"AND",
                RightOperand:{
                    Property:"FirstName",
                    SimpleOperator:"equals",
                    Value:"Angel"
        }};
var moredata = birthdayDE.Rows.Retrieve(complexfilter);
```
This function returns information in an array of objects in JSON format:
```
[
    {
        "FirstName":"Angel",
        "LastName":"Angel",
        "EmailAddress":"aruiz@example.com",
        "Age":"25",
        "Birthday":"11/29/1985 12:00:00 AM"
    }
]
```
The Retrieve function cannot be used in the context of an email message or email preview.
