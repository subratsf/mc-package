---
title: Subscription Filters
---

Your Event Notification Service subscription can filter the notifications that are sent to the associated callback. Filters are expressed as a list of one or more name=value pairs on the subscription.

> To deliver the notification event to the callback, the name=value pairs must all be true.

##Subscription Filtering Data Items
The following data items are available for subscription filtering for each transactional send event type.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Notification Event Category</th>
<th>Notification Event Type</th>
<th>Data Items Available for Filtering</th>
</tr>
</thead>
<tbody>
<tr>
<td>TransactionalSendEvents</td>
<td>EmailSent</td>
<td>definitionKey</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>EmailNotSent</td>
<td>definitionKey, statusCode</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>EmailBounced</td>
<td>definitionKey, bounceCode, smtpReason</td>
</tr>
</tbody>
</table>

###Example
To filter TransactionalSendEvents.EmailSent events for a specific transactional send definition, include the following subscription filter when you create a subscription.

```
definitionKey=12345
```

If you apply this filter to a subscription for TransactionalSendEvents.EmailSent events, the callback receives TransactionalSendEvents.EmailSent notification events only for the transactional send definition of 12345. All other TransactionalSendEvents.EmailSent notification events are filtered out and not delivered to the callback.
