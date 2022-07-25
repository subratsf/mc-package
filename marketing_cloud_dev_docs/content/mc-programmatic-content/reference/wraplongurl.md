---
data: <%= reference.http.functions.WrapLongURL %>
---
###Usage
In the case where an image source URL exceeds 975 characters, use the function as shown below:
```
%%=WrapLongURL("http://example.com/exceedinglylongimageurl.jpg")=%%
```
This function returns a wrapped URL that can be used in your send to ensure compatibility with Outlook 2007. If this function is used on a URL with less than 975 characters, the URL will pass unchanged and the call will not break the send. Links wrapped with WrapLongURL remain incompatible with Always On Clicks. If your Member DB is down, a WrapLongURL will not work.