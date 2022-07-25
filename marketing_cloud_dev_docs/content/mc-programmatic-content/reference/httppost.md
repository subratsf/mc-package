---
data: <%= reference.http.functions.HTTPPost %>
---
###Usage
```
%%=HTTPPost("http://example.com","text/html",@exampleContent,@CallStatus)=%%
```
The system returns the HTTP status code to the specified variable.
