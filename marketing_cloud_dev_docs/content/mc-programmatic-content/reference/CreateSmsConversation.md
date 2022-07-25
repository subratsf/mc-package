---
data: <%= reference.content.functions.CreateSmsConversation %>
---
###Usage
As a response to the MO user, this example will create the conversation.
```
%%=CreateSmsConversation("12345",MOBILE_NUMBER,"KEYWORD","MOBILECONNECT")=%%
```
Please note that this function always returns true if successful. Failure will return an exception, so this function should not be used for decision making. Please note that this function should not be used in conversation based templates such as Double Opt-In, Vote/Survey or Info-Capture. Please note that this function only accepts "MOBILECONNECT" as Source. If any other value is provided, the user will receive an error message.
