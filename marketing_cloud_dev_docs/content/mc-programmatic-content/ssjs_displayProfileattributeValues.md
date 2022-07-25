---
title: Display Profile Attribute Values in an Email
---

This sample server-side JavaScript demonstrates how to display subscriber profile attributes inside an email message.

##Sample Code
The sample code describes how to build a server-side JavaScript variable with values from two profile attributes and display it in the email:
```
<script runat=server>
    var subFullName = Platform.Recipient.GetAttributeValue("First Name") + " " + Platform.Recipient.GetAttributeValue("Last Name");
</script>
<br />
<br />
Hello <ctrl:var name="subFullName" />,
The subFullName variable contains the information taken from the First Name and Last Name profile attributes.

This sample code demonstrates how to display the value of the profile attributes directly in the email:

Dear <ctrl:field name="First Name" />,
<br />
Your email address is <ctrl:field name="emailaddr" />.
```
