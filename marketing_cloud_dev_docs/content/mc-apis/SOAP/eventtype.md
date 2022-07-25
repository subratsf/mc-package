---
title: EventType
---
The EventType object specifies the type of event that is recorded. Use this object to distinguish between hard, soft, and other bounce types when retrieving a BounceEvent.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>Click</td>
<td>Enumeration</td>
<td>The event associated with a subscriber clicking on a link.</td>
</tr>
<tr>
<td>DeliveredEvent</td>
<td>Enumeration</td>
<td>Indicates a message was delivered successfully.</td>
</tr>
<tr>
<td>ForwardedEmail</td>
<td>Enumeration</td>
<td>Indicates that a subscriber forwarded the message using the Forward To A Friend feature.</td>
</tr>
<tr>
<td>ForwardedEmailOptIn</td>
<td>Enumeration</td>
<td>Tracking event signifying an opt-in from a subscriber-forwarded email via the Forward To A Friend feature.</td>
</tr>
<tr>
<td>HardBounce</td>
<td>Enumeration</td>
<td>Indicates the message sent to a subscriber encountered a hard bounce.</td>
</tr>
<tr>
<td>NotSent</td>
<td>Enumeration</td>
<td>Indicates a message was not sent to a subscriber.</td>
</tr>
<tr>
<td>Open</td>
<td>Enumeration</td>
<td>Indicates a message was opened by a subscriber.</td>
</tr>
<tr>
<td>OtherBounce</td>
<td>Enumeration</td>
<td>Indicates a message sent to a subscriber encountered an Other-type bounce.</td>
</tr>
<tr>
<td>Sent</td>
<td>Enumeration</td>
<td>Indicates number of messages sent. Indicates the message was sent to a subscriber.</td>
</tr>
<tr>
<td>SoftBounce</td>
<td>Enumeration</td>
<td>Indicates the message sent to a subscriber encountered a soft bounce.</td>
</tr>
<tr>
<td>Survey</td>
<td>Enumeration</td>
<td>Indicates a subscriber answered a survey question included in a message.</td>
</tr>
<tr>
<td>Unsubscribe</td>
<td>Enumeration</td>
<td>Indicates a subscriber unsubscribed from further communication via a link in a message.</td>
</tr>
</tbody>
</table>
