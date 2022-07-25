---
data: <%= reference.api.functions.SetObjectProperty %>
---
###Usage
The following example creates an API object named 'Subscriber' and gives it the 'EmailAddress' property with the value of an email address.

```
SET @subscriber=CreateObject('Subscriber')
SetObjectProperty(@subscriber,'EmailAddress','user@example.com')
```

The following example creates an API object named 'Attribute', gives it a name of 'First Name', and sets the value to John.

```
SET @attribute=CreateObject(Attribute)
SetObjectProperty(@attribute,'Name','First Name')
SetObjectProperty(@attribute,'Value','John')
```