---
data: <%= reference.utilities.functions.OutputLine %>
---
###Usage
```
%%[ var @output
Set @output = "My output"
OutputLine(Concat(@output," is a success!")) ]%%
```
System outputs:
```
My output is a success!

```
> The system appends a CRLF character to the string of text, not an HTML break tag (<br/>). In a text context, this character creates a new line. In an HTML context, this character creates a new line in the original SMTP message but not a rendered new line.
