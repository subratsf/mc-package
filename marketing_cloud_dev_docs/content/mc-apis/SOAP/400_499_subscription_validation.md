---
title: 400-499 Subscription Validation
---
<table class="table table-hover">
<thead align="left">
<tr>
<th>Error</th>
<th>Message</th>
</tr>
</thead>
<tbody>
<tr>
<td>400</td>
<td>The subscriber could not be found on the specified JobID</td>
</tr>
<tr>
<td>401</td>
<td>The subscriber is already unsubscribed from the specified list</td>
</tr>
<tr>
<td>402</td>
<td>The Parameters array did not contain any values or did not contain any of the Parameters we were looking for</td>
</tr>
<tr>
<td>403</td>
<td>The EmailAddress, SubscriberKey and SubscriberID parameters were not specified or they were empty</td>
</tr>
<tr>
<td>404</td>
<td>The SubscriberKey permission is turned on but only EmailAddress was provided. You MUST supply SubscriberKey and/or SubscriberID</td>
</tr>
<tr>
<td>405</td>
<td>You supplied SubscriberID along with SubscriberKey and/or EmailAddress. These values refer to different subscribers</td>
</tr>
<tr>
<td>406</td>
<td>You supplied SubscriberKey along with SubscriberID and/or EmailAddress. These values refer to different subscribers</td>
</tr>
<tr>
<td>407</td>
<td>You supplied EmailAddress along with SubscriberID and/or SubscriberKey. These values refer to different subscribers</td>
</tr>
<tr>
<td>408</td>
<td>SubscriberNullOrEmpty</td>
</tr>
<tr>
<td>409</td>
<td>SubscriberListNullOrEmpty</td>
</tr>
</tbody>
</table>