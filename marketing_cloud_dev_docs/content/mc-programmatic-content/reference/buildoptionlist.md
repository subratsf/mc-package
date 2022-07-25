---
data: <%= reference.content.functions.BuildOptionList %>
---
###Usage
```
SET @AttribA=2
%%=BuildOptionList(AttribA, '1', 'One', '2', 'Two', '3', 'Three')=%%
```

The system returns:
```html
<option value='1'>One</option>
<option value='2' selected='selected'>Two</option>
<option value='3'>Three</option>
```