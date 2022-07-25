---
title: 12000-12099 Subscriber Object
---
<table class="table table-hover">
<thead align="left">
<tr>
<th>Error</th>
<th>Message</th>
<th>Resolution</th>
</tr>
</thead>
<tbody>
<tr>
<td>12000</td>
<td>InvalidEmailAddress</td>
<td>This error occurs when you import an email address that does not use the correct syntax: <samp class="codeph nolang">username@domain.extension</samp>. Correct or discard the email address before importing the list.</td>
</tr>
<tr>
<td>12001</td>
<td>SubscriberNotFound</td>
<td>This error occurs when the call attempts to act on a subscriber that does not exist in Marketing Cloud. This may occur because the subscriber has not yet been imported or because the call is attempted to act on the wrong subscriber. Import the subscriber if the call is attempting to act on the correct subscriber. Correct the subscriber that the call is attempting to act on if the call is attempting to act on the wrong subscriber.</td>
</tr>
<tr>
<td>12002</td>
<td>TriggeredSpamFilter</td>
<td>This error occurs when you attempt to import an email address that is a known spam trap. Discard the email address before importing the list.</td>
</tr>
<tr>
<td>12003</td>
<td>OnGlobalUnsubList</td>
<td>This error occurs when you attempt to import an email address that appears on the global unsubscribe list. Discard the email address before importing the list.</td>
</tr>
<tr>
<td>12004</td>
<td>InvalidDPV</td>
<td>This error occurs when you attempt to update a subscriber attribute with an invalid value, for example, when attempting to update a subscriber date of birth attribute with their street address. Consult the valid entries for the attribute to determine what values you can enter.</td>
</tr>
<tr>
<td>12005</td>
<td>InvalidChannelMemberID</td>
<td></td>
</tr>
<tr>
<td>12006</td>
<td>MissingRequiredDPV</td>
<td>This error occurs when you attempt to create or import a subscriber without a value for a required attribute. For example, if you require the first name of every subscriber, you receive this error when attempting to create or import a subscriber without providing the first name value. Include the required values in the subscriber record before importing. Alternatively, you can change the attribute on the subscriber to be optional.</td>
</tr>
<tr>
<td>12007</td>
<td>EmailAddressAlreadyExists</td>
<td>This error occurs when you attempt to create or import a subscriber using an email address that already exists. This error occurs only if you don't use Subscriber Key values to identify subscribers. Discard the duplicate address before importing. Alternatively, you can change the call to update existing subscribers with the new information rather than attempting to create new subscribers.</td>
</tr>
<tr>
<td>12008</td>
<td>MasterUnsubFailed</td>
<td></td>
</tr>
<tr>
<td>12009</td>
<td>UnsubscribeError</td>
<td>This error occurs when you attempt to unsubscribe a subscriber from a list that does not contain the subscriber. Check the validity of the email address and ensure that you are attempting to unsubscribe from the correct list.</td>
</tr>
<tr>
<td>12010</td>
<td>SubscribeError</td>
<td></td>
</tr>
<tr>
<td>12011</td>
<td>InvalidDPVs</td>
<td></td>
</tr>
<tr>
<td>12012</td>
<td>The subscriber has already been master unsubscribed from the system</td>
<td></td>
</tr>
<tr>
<td>12013</td>
<td>MissingMasterUnsubInfo</td>
<td></td>
</tr>
<tr>
<td>12014</td>
<td>SubscriberAlreadyExists</td>
<td></td>
</tr>
<tr>
<td>12015</td>
<td>Subscriber Key Not Found</td>
<td></td>
</tr>
<tr>
<td>12016</td>
<td><ul><li>Subscriber.Status: when creating a subscriber the status cannot be "Bounced"</li> <li>Subscriber.Status: when creating a subscriber the status cannot be "Deleted"</li> </ul></td>
<td></td>
</tr>
<tr>
<td>12017</td>
<td>Invalid Subscriber Type</td>
<td></td>
</tr>
<tr>
<td>12018</td>
<td>Resubscribe Failed</td>
<td></td>
</tr>
<tr>
<td>12019</td>
<td>Invalid OYB Account</td>
<td></td>
</tr>
<tr>
<td>12020</td>
<td>OYB Access Error</td>
<td></td>
</tr>
<tr>
<td>12021</td>
<td>Subscriber Key Does Not Match Customer Key</td>
<td></td>
</tr>
<tr>
<td>12022</td>
<td>Subscriber Address Does Not Match Error</td>
<td></td>
</tr>
<tr>
<td>12023</td>
<td>Invalid Phone Number</td>
<td></td>
</tr>
<tr>
<td>12024</td>
<td>Invalid Subscriber Address</td>
<td></td>
</tr>
<tr>
<td>12025</td>
<td>SMS Unsupported</td>
<td></td>
</tr>
</tbody>
</table>