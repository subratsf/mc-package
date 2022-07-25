---
data: <%= reference.string.functions.Char %>
---
###Usage
Given the function below:
```
Char(65)
```
The system returns:
```
A
```
Given the function below:
```
Char(65,3)
```
The system returns:
```
AAA
```
Given the function below:
```
%%=CHAR(65)=%%%%=CHAR(66)=%%%%=CHAR(67)=%%
```
The system returns:
```
ABC
```
The code sample below pulls content from a data extension and replaces and carriage return-line feed combinations with an HTML <br> tag.
```
%%[
VAR @content, @replacedContent
/* This will pull the content out of the DE and replace any CR-LF's with HTML BR tags. */
SET @content = Lookup('ReplaceTest', 'Value', 'Key', '1')
SET @replacedContent = Replace(@content, Concat(CHAR(13), CHAR(10)), '<BR>')
]%%
%%=V(@content)=%%
%%=V(@replacedContent)=%%
```