---
data: <%= reference.http.functions.HTTPGet %>
---
###Usage
```
HTTPGet('http://www.example.com')
```

System returns the content of `http://www.example.com`.
```
HTTPGet('http://www.example.com',false,0,@CallStatus)
```

System returns the content of `http://www.example.com`. The function stops if it encounters an error, and it allows empty content. The status of the function is returned to the declared variable @CallStatus.

Your send will fail if you use the HTTPGet() function with the view_email_url personalization string without the proper message context. If you do need to to use this function with the view_email_url personalization string for View as a Web Page functionality, you must specify the _messagecontext option:

```
%%[IF _messagecontext == "SEND" AND jobid > 0 THEN
set @HTMLContent = HTTPGet(view_email_url)
ENDIF]%%
```