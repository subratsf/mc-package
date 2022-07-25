---
data: <%= reference.ssjs_platformDataExtension.functions.Lookup %>
---

##Example
The example returns the value in the Phone field from the CustomerData data extension for the row with the SubscriberKey value of acruz@example.com.
```
<script runat="server">
     var phoneNumber = Platform.Function.Lookup('CustomerData','Phone','SubscriberKey','acruz@example.com');
</script>
```
The example returns the value in the Phone field from the CustomerData data extension for the row with the FirstName value of Angela and the last name value of Cruz.
```
<script runat="server">
     var phoneNumber = Platform.Function.Lookup('CustomerData','Phone',['FirstName','LastName'],['Angela','Ruiz'];
</script>
```
