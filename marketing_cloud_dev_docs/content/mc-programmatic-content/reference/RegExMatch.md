---
data: <%= reference.string.functions.RegExMatch %>
---
###Usage
The sample AMPscript below shows how to assign regular expressions and use the RegExMatch function to search a string for results.
```
%%[
VAR @sourceStr, @regEx1, @regEx2
SET @sourceStr = 'ABC_123_DEF_456';
/* RegEx without group names */
SET @regEx1 = '.*_([0-9]+)_.*_([0-9]+)'
/* RegEx with group names */
SET @regEx2 = '.*_(?<FirstNumber>[0-9]+)_.*_(?<SecondNumber>[0-9]+)'
]%%
By Group ID:
Group 1:  %%=RegExMatch(@sourceStr, @regEx1, 1)=%%
Group 2:  %%=RegExMatch(@sourceStr, @regEx1, '2')=%%
By Group Name:
First Number:   %%=RegExMatch(@sourceStr, @regEx2, 'FirstNumber')=%%
Second Number:  %%=RegExMatch(@sourceStr, @regEx2, 'SecondNumber')=%%
%%[
/* Check for possible match. */
VAR @result
SET @result = RegExMatch('ABC_dEF_GHI', '.*_(D..)_.*', 0, 'IgnoreCase', 'Multiline')
IF Length(@result) > 0 THEN]%%
Matched!
%%[ ELSE ]%%
No match...
%%[ ENDIF ]%%
```