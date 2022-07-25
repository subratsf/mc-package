---
data: <%= reference.string.functions.Format %>
---
###Usage
There are multiple possibilities for displaying the date using this function.

For more information on formatting numeric strings, see the Microsoft help regarding the NumberFormatInfoClass.

Example 1
```
%%=Format(Now(),"MM/dd/yyyy")=%%
```

System returns today's date in MM/dd/yyyy format.

Example 2
```
%%=Format(@currency_variable,"$#,#.00;-$#,#.00")=%%
```

Example 3
```
%%=Format('2009-06-15T13:45:30', 'dddd dd MMMM h:mm', 'Date', 'fr-FR')=%%
```

System returns the formatted date localized for fr-FR.
```
lundi 15 juin 1:45
```

##Related Items
<a href="http://msdn.microsoft.com/en-us/library/system.globalization.datetimeformatinfo.aspx">Microsoft Help Regarding the DateTimeFormatInfo Class</a>

<a href="https://msdn.microsoft.com/en-us/library/system.globalization.numberformatinfo.aspx">Microsoft Help Regarding the NumberFormatInfoClass Class</a>
