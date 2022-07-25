---
data: <%= reference.sites.functions.QueryParameter %>
---
###Usage
```
http://example.com?j=Tim
```

AMPscript 
```
SET@VAR=QUERYPARAMETER('j')
```
System returns:
```
Tim
```