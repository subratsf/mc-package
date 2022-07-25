---
data: <%= reference.string.functions.IndexOf %>
---
###Usage
Given @abc=You will love our product.
```
%%=IndexOf(@abc,'love')=%%
```
System returns:
```
10
```

For the code below, the system returns 1:
```
%%[
var @abc
Set @abc = 'ab'
var @index
Set @index = IndexOf(@abc,'a')
Output(v(@index))
]%%
```