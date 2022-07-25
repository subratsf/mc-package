---
data: <%= reference.datetime.functions.LocalDateToSystemDate %>
---
###Usage
```
%%[
VAR @currentSystemTime
SET @currentSystemTime = NOW()
]%%
Local Time For User:  %%=SystemDateToLocalDate(@currentSystemTime)=%% 
Converted Back to System Time %%=LocalDateToSystemDate(@currentSystemTime)=%%
```

The system returns the local time based off of the value contained in the `@currentSystemTime` variable, then converts it back to system time.