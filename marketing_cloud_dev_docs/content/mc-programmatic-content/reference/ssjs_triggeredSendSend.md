---
data: <%= reference.ssjs_coreTriggeredSend.functions.Send %>
---

##Example
This sample code initializes the triggeredSend object and sends the email to the specified email address:
```
var triggeredSend = TriggeredSend.Init("triggeredSend");
var status = triggeredSend.Send("aruiz@example.com");
```
This sample code initializes the triggeredSend object and sends the email to the specified email address, which includes the send time attributes of a first name and a coupon code. You can pass in any attribute previously defined as part of the send time attributes.
```
var triggeredSend = TriggeredSend.Init("triggeredSend");
var status = triggeredSend.Send("aruiz@example.com", {FirstName:"Angel", CouponCode:"AA1AF"});
```
The send returns a status of either OK or Error. You can review the LastMessage for more detailed error information. For example, This sample code demonstrates this using the triggeredSend from the previous example.
```
var status = triggeredSend.Send("aruiz@example.com");
if(status != "OK")
{
   var message = TriggeredSend.LastMessage;
}
```
