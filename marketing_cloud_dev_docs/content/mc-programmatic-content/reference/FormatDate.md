---
data: <%= reference.datetime.functions.FormatDate %>
---
###Usage
Review [AMPscript Date and Time Formatting](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/dateTimeFormatting.htm) for available values.

```
%%=FormatDate("2012-10-05 03:21:34.567890", "MMM DD, YYYY", "HH:MM:SS.MMM", "en-US")=%%
```

System returns:
```
Oct 05, 2012 03:21:34.567
```
