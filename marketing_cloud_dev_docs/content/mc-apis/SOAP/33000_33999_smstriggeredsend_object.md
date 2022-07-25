---
title: 33000-33999 SMSTriggeredSend Object
---
<table class="table table-hover">
<thead align="left">
<tr>
<th>Error</th>
<th>Type</th>
<th>Message</th>
<th>Resolution</th>
</tr>
</thead>
<tbody>
<tr>
<td>33000</td>
<td>Client Validation Error</td>
<td>You must include a SMS Triggered Send Definition</td>
<td>Include a SMS triggered send definition in your API call.</td>
</tr>
<tr>
<td>33001</td>
<td>Client Validation Error</td>
<td>You must include a valid SMS Triggered Send Definition</td>
<td>Check to make sure the SMS triggered send definition you wish to use exists.</td>
</tr>
<tr>
<td>33002</td>
<td>Client Validation Error</td>
<td>You must include a customer key on the SMS Triggered Send Definition</td>
<td>Include a valid customer key in the SMS triggered send definition.</td>
</tr>
<tr>
<td>33003</td>
<td>Client Validation Error</td>
<td>SMSTrigSend_Client Error_Message Missing</td>
<td>Enter a valid message for the send.</td>
</tr>
<tr>
<td>33004</td>
<td>Client Validation Error</td>
<td>The message is too long.</td>
<td>Shorten message to accepted SMS standards.</td>
</tr>
<tr>
<td>33005</td>
<td>Client Validation Error</td>
<td>Invalid characters in message</td>
<td>Remove invalid characters in message.</td>
</tr>
<tr>
<td>33006</td>
<td>Client Validation Error</td>
<td>From address '{0}' Not Found</td>
<td><ul>
<li>If the From Address used belongs to you, contact Global Supportfor assistance in solving the error.</li>
<li>If the From Address does not belong to you, choose a valid From Address.</li>
</ul></td>
</tr>
<tr>
<td>33100</td>
<td>Client Validation Single Send Error</td>
<td>Single sends must include a subscriber</td>
<td>Add a valid subscriber to the send.</td>
</tr>
<tr>
<td>33101</td>
<td>Client Validation Single Send Error</td>
<td>This subscriber does not currently exist, you must include a mobile number</td>
<td>Include a valid mobile number in your send.</td>
</tr>
<tr>
<td>33102</td>
<td>Client Validation Single Send Error</td>
<td>Mobile number does not comply with NANPA</td>
<td>Resolve any error with the phone numbers associated with the send.</td>
</tr>
<tr>
<td>33300</td>
<td>Subscriber Opt Out Error</td>
<td>This subscriber has opted out of receiving messages</td>
<td>Remove the subscriber from the send.</td>
</tr>
<tr>
<td>33301</td>
<td>Subscriber Opt Out Error</td>
<td>This subscriber has globally opted out of receiving messages</td>
<td>Remove the subscriber from the send.</td>
</tr>
<tr>
<td>33302</td>
<td>Subscriber Opt Out Error</td>
<td>SMSTrigSend_Subscriber_InvalidBlackoutTime</td>
<td></td>
</tr>
<tr>
<td>33303</td>
<td>Subscriber Opt Out Error</td>
<td>SMSTrigSend_Subscriber_InvalidBlackoutTimeZone</td>
<td></td>
</tr>
<tr>
<td>33500</td>
<td>Critical Error</td>
<td>Unknown SMS Triggered Send Type</td>
<td>Correct the configuration of the SMS triggered send definition</td>
</tr>
<tr>
<td>33501</td>
<td>Critical Error</td>
<td>Critical Error contact your support representative</td>
<td>Contact Global Support- the error has been logged.</td>
</tr>
<tr>
<td>33502</td>
<td>Critical Error</td>
<td>Critical Error unable to send message</td>
<td>Contact Global Support- the error has been logged.</td>
</tr>
<tr>
<td>33503</td>
<td>Critical Error</td>
<td>Critical Error contact your support representative</td>
<td>The application cannot create the send job. Contact Global Support- the error has been logged.</td>
</tr>
<tr>
<td>33504</td>
<td>Critical Error</td>
<td>Critical Error contact your support representative</td>
<td>The application cannot create a new subscriber. Contact Global Support- the error has been logged.</td>
</tr>
</tbody>
</table>