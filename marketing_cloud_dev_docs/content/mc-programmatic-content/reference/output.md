---
data: <%= reference.utilities.functions.Output %>
---
###Usage
```
%%[ var @output
Set @output = 'My output'
OutputLine(Concat(@output,' is a success!')) ]%%
```
System outputs:
```
My output is a success!
```
Note that the system outputs the CRLF after the string of text.