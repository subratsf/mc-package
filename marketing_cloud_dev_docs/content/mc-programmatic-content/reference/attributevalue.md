---
data: <%= reference.utilities.functions.AttributeValue %>
---
###Usage
Combined with a Lookup call to get the name of an attribute, you can retrieve an attribute's value and pass it into a variable. For example, this code retrieves the value of zipcode.
```
VAR @AttributeName, @AttributeValue
SET @AttributeName = Lookup('PostalCode','zipcode','PostalCode',Indianapolis)
SET @AttributeValue = AttributeValue(@AttributeName)
```