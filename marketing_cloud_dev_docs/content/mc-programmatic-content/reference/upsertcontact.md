---
data: <%= reference.contacts.functions.UpsertContact %>
---
###Usage
The sample code below updates a Contact from a landing page.
```
%%[
Set @result = UpsertContact('mobile','phone',MOBILE_NUMBER,'_ZipCode','12342')
]%%
```
The function indicates success by returning a value of 0.
The sample code below demonstrates how to take information from an SMS message. In this case, the Contact sent their ZIP code via SMS message and the [MSG(0).NOUN(0)] string captures that value:
```
%%[
Set @result = UpsertContact('mobile','phone',MOBILE_NUMBER,'_ZipCode',[MSG(0).NOUN(0)])
]%%
```
Again, the function indicates success by returning a value of 0.