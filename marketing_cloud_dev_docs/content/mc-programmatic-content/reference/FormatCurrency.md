---
data: <%= reference.math.functions.FormatCurrency %>
---
###Usage
This function rounds the numbers up if the specified format uses fewer decimal points than the value itself and the remaining numbers are 5 or greater. The function rounds the numbers down if the specified format uses fewer decimal points than the value itself and the remaining numbers total less than 5.

Example 1
```
%%=FormatCurrency(1234.567,"en-US")=%%
```

System returns:
```
$1234.57
```

Example 2
```
%%=FormatCurrency(-12300099.45678,"fr_FR",3,"*$*")=%%
```

System returns:
```
-12 300 099,457 *$*
```
