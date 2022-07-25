---
data: <%= reference.http.functions.HTTPPost2 %>
---
###Usage

This example posts a blank payload to www.example.com, as well as information for the Authorization and User-Agent headings.
```
%%[var @output,@respheader]%%
%%=HTTPPost2('http://www.example.com/','text/html', '', true, @output,@respheader, 'Authorization', 'Example', 'User-Agent', 'Example')=%%
Output: %%=v(@output)=%%
Header: %%=v(@respheader)=%%
```
The system returns the HTTP status code to the specified variable.
