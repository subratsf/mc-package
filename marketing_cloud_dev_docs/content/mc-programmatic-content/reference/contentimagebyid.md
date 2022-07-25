---
data: <%= reference.content.functions.ContentImagebyID %>
---
###Usage

```
%%=ContentImagebyID("180342","DefaultImage")=%%
```

System returns:

```
<img title="Logo" alt="Logo" src="http://images.example.com/logo.gif" border="0" thid="exampleValue">
```

If, for some reason, the CorpLogo image could not be retrieved, system returns:

```
<img title="Default" alt="Default" src="http://images.example.com/default.gif" thid="anotherExampleValue">
```