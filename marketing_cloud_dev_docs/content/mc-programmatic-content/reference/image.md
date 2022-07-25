---
data: <%= reference.content.functions.Image %>
---
###Usage
```
%%=Image('CorpLogo','DefaultImage')=%%
```
System returns:
```
<img title="Logo" alt="Logo" src="http://images.example.com/logo.gif" border="0" thid="exampleValue">
```
If system cannot return the CorpLogo image, system returns:
```
<img title="Default" alt="Default" src="http://images.example.com/default.gif" thid="anotherExampleValue">
```