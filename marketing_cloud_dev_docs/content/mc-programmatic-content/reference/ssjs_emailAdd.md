---
data: <%= reference.ssjs_coreEmail.functions.Add %>
---

##Example
This sample code adds an email to your account:
```
var newMail = {
    "CustomerKey" : "test_email_key",
    "Name" : "Test Email",
    "CategoryID" : "123456",
    "HTMLBody" : "<b>This is a test email</b>",
    "TextBody" : "This is a test email",
    "Subject" : "Test Email Subject",
    "IsActive" : "true",
    "IsHTMLPaste" : "true",
    "Status" : "active",    
    "EmailType" : "HTML",
    "CharacterSet" : "US-ASCII",
    "HasDynamicSubjectLine" : "false"
};
var myEmail = Email.Add(newMail);
```
The CategoryID value in the above code sample assigns the new email message to a specific folder. To save the new email message to the default folder in your account, remove the CategoryID value entirely.
