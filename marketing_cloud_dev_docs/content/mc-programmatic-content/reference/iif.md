---
data: <%= reference.utilities.functions.IIf %>
---
###Usage
```
%%=IIF(EMPTY(@VAR),'123',@VAR)=%%
```

The system returns the value 123 if the @VAR variable is empty and returns the value of @VAR if it exists.