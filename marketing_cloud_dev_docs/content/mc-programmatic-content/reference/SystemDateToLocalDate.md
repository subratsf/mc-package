---
data: <%= reference.datetime.functions.SystemDateToLocalDate %>
---
###Usage
```
%%[
VAR @currentSystemTime
SET @currentSystemTime = NOW()
]%%
Local Time For User:  %%=SystemDateToLocalDate(@currentSystemTime)=%%
```

The system returns the local time based off of the value contained in the @currentSystemTime variable.