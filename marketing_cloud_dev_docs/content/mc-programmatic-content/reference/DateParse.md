---
data: <%= reference.datetime.functions.DateParse %>
---
###Usage
```
DateParse('2009/10/17 02:30PM')
```
System returns a local time of 2:30pm.
```
DateParse('2009/10/17 2:30PM-4:00',1)
```
System returns 6:30pm as the UTC time based off of the local time value.