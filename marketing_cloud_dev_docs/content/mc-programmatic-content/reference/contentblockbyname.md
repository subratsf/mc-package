---
data: <%= reference.content.functions.ContentBlockbyName %>
---
###Usage
This example returns the Weekly Portfolio content block from Content Builder.

```
%%=ContentBlockByName("Content Builder\Weekly Portfolio")=%%
```

This example returns the Opt Out Form 2 content block from Content Builder. The function will not return an error if one occurs, and it returns the Opt Out Form Default content block if it cannot find the specified content.

```
%%=ContentBlockByName("Content Builder\Opt Out Form 2","",0,ContentBlockByName("Content Builder\Opt Out Form Default"))=%%
```

This example concatenates the Opt Out Form content block from Content Builder with an uppercase version of the culture code value returned from the IIF function. The function will not return an error if one occurs, and it returns the Opt Out Form EN-US content block if it cannot find the specified content.

```
%%=ContentBlockByName(Concat("Content Builder\Opt Out Form ",Uppercase(IIF(Empty(QueryParameter("lang")),"en-us",QueryParameter("lang")))),"",0,ContentBlockByName("Content Builder\Opt Out Form EN-US"))=%%
```