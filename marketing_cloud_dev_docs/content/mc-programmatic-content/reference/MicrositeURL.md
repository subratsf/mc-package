---
data: <%= reference.sites.functions.MicrositeURL %>
---
You can include multiple name and value pairs for parameters in this function. You cannot use these system-reserved query string names:
*  l
*  v
*  s
*  d
*  m
*  n

###Usage
```html
<p>
<a title="MyPage" href="%%=MicrositeURL(77777)=%%" alias="ThisAlias" conversion="false">Click to unsubscribe</a>
</p>
```
The example below uses additional parameters:

```html
<p>
<a title="MyPage" href="%%=MicrositeURL(77777, "Extra1", "ABC", "Extra2", "123")=%%" alias="ThisAlias" conversion="false">Click to unsubscribe</a>
</p>
```
If you plan to add query strings to the URL, use Concat() to place an ampersand after the URL.

```html
<p>
<a title="MyPage" href="%%=Concat(MicrositeURL(77777),'&')=%%" alias="ThisAlias" conversion="false">Click to unsubscribe</a>
</p>
```
Note that non-Enterprise 2.0 accounts should use the microsite_base_url instead:
```
<a href="%%microsite_base_url[default]151515151[/default]%%">Click to unsubscribe</a>
```