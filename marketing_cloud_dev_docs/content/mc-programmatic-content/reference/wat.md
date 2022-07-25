---
data: <%= reference.content.functions.WAT %>
---
###Usage
```
WAT('Omniture','1234')
```
Returns the value of the Omniture tracking parameter with 1234 substituted for references to WATP(1) within the tracking parameter.
The parameter for the WAT function specifies the ordinal of the parameter inside the tracking parameter set in the Sender Profile Analytics Profile.
```
WAT('Omniture','1234','5678')
```
Returns the value of the Omniture tracking parameter with 1234 substituted for references to WATP(1) within the tracking parameter. This call also substitutes 5678 for references to WATP(2) within the tracking parameter.
