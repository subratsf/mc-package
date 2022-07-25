---
data: <%= reference.content.functions.SetSmsConversationNextKeyword %>
---
###Usage
During a conversation between the MT user and the MO user, this example will change to the conversation path indicated by the EXAMPLE keyword.
```
%%=SetSmsConversationNextKeyword('12345',MOBILE_NUMBER,'EXAMPLE')=%%
```
The conversation is moved to the new path indicated and proceeds from there.  Please note that this example does not execute the set keyword immediately; it sets the keyword to handle the next message from the MO user.