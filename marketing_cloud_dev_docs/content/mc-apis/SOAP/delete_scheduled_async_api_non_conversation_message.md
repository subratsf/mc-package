---
title: Delete Scheduled Async API Non-Conversation Message
---
Use the ScheduledRequest object to delete a scheduled message that isn’t part of a conversation.

> You can make the request synchronously or asynchronously by using Synchronous or Asynchronous as the RequestType. Asynchronous requests are queued and processed in the order they arrive. General delays in Async API processing impact an asynchronous deletion request, just like any other asynchronous request.

##Deletion Eligibility
You can delete any scheduled non-conversation message as long as the queued message’s scheduled time is fewer than 60 minutes from the time that the deletion request is made, if made synchronously, or processed, if made asynchronously.

##Errors
> Retry the deletion request until you receive a success response.

<table class="table table-hover">
<thead align="left">
<tr><th>Error</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>204 AsyncAPI_Error</td>
<td>The non-conversation message can’t be deleted at this time. Try again later. If the error continues to occur, contact Salesforce Customer Support.</td>
</tr>
<tr>
<td>220 AsyncAPI_Item_Not_Found</td>
<td>The non-conversation message can’t be found. Try again later. If the error continues to occur, contact Salesforce Customer Support.</td>
</tr>
</tbody>
</table>

##Sample SOAP Request
```
<DeleteRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
  <Options>
    <RequestType>Synchronous</RequestType>
  </Options>
  <Objects xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ScheduledRequest">
    <RequestID>ExampleRequestID</RequestID>
  </Objects>
</DeleteRequest>
```

##Related Items
* [Callback Handling for Asynchronous Calls](asynchronous_processing_callback.htm)
* [Schedule a User-Initiated Email Send](scheduling_a_user_initiated_email_message_send_via_the_web_service_api.htm)
* [Schedule an Email Send Definition](scheduling_an_email_send_definition.htm)
