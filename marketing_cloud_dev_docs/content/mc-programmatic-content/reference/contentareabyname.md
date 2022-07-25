---
data: <%= reference.content.functions.ContentAreaByName %>
---
###Usage
```
%%=ContentAreaByName('my contents\Stocks\Weekly Portfolio')=%%
```
The system returns the content of stored content area named Weekly Portfolio in the Stocks folder.
In this example:
```
%%=ContentAreaByName('my contents\OptOut_Page\Form\Opt Out Form 2','',0,ContentAreaByName('my contents\OptOut_Page\Form\Opt Out Form Default'))=%%
```

The function displays the Opt Out Form Default page if no other content is found.
This example concatenates the base content area name with a Locale ID to provide an opt-out form in the appropriate language. If no Locale ID is specified, the function defaults to EN-US.
```
%%=ContentAreaByName(Concat('my contents\OptOut_Page\Form\Opt Out Form ',Uppercase(IIF(Empty(QueryParameter('lang')),'en-us',QueryParameter('lang')))),'',0,ContentAreaByName('my contents\OptOut_Page\Form\Opt Out Form EN-US'))=%%
```