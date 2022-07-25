---
data: <%= reference.ssjs_coreSendFunctions.functions.Add %>
---

##Examples

This sample code adds a send to your account, which sends the specified email message to the provided lists:
```
var status = Send.Add("test_email", [ 12345, 12346 ]);
```
This sample code adds a send to your account, which sends the specified email message to the provided lists using the additional From name, From email address, and subject specified in the options variable:
```
var options = {
    FromName : "JSON Specified Name",
    FromAddress : "aruiz@example.com",
    Subject : "JSON Test Mail"
};

var status = Send.Add('test_email', [ 12345, 12346 ], options);
```
