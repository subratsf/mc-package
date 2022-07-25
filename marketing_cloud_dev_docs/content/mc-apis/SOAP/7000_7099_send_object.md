---
title: 7000-7099 Send Object
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
<td>7000</td>
<td>Validation</td>
<td>Email failed validation: [validation error]</td>
<td>This error occurs when the email does not contain one of the required elements: An unsubscribe link, A physical mailing address, or Correct syntax for attributes. To correct this error, add the missing required element.</td>
</tr>
<tr>
<td>7001</td>
<td>Validation</td>
<td>An email ID, Partner Key, or body must be specified</td>
<td>Specify an identifier for an existing email (ID or PartnerKey) or specify a body for a new email.</td>
</tr>
<tr>
<td>7002</td>
<td>Validation</td>
<td>A list must be specified</td>
<td>Specify an identifier for an existing list (ID or PartnerKey) or specify subscribers for a new list.</td>
</tr>
<tr>
<td>7003</td>
<td>System</td>
<td>No lists were created to send to</td>
<td>Log the error and contact Marketing Cloud.</td>
</tr>
<tr>
<td>7004</td>
<td>System or Validation</td>
<td>Error creating/updating lists. List creations failed: [error message]</td>
<td><ul><li>Log the error and contact Marketing Cloud</li><li>This message is generic, therefore it is recommended to create List objects prior to creating the Send object.</li></ul></td>
</tr>
<tr>
<td>7005</td>
<td>Validation</td>
<td>Invalid E-mail partner key: [PartnerKey]</td>
<td>Log the error and ensure the correct PartnerKey is set on the Email object.</td>
</tr>
<tr>
<td>7006</td>
<td>System or Validation</td>
<td><ul><li>Email Creation Failed</li><li>Email Creation Failed: [Email Error Message]</li></ul></td>
<td><ul><li>Check the properties of the email</li><li>This message is generic, therefore it is recommended to create the Email object prior to creating the Send object.</li></ul></td>
</tr>
<tr>
<td>7007</td>
<td>System</td>
<td>Unable to load email</td>
<td>Log the error and contact Marketing Cloud.</td>
</tr>
<tr>
<td>7008</td>
<td>System</td>
<td>Job Creation Failed</td>
<td>Log the error and contact Marketing Cloud.</td>
</tr>
<tr>
<td>7009</td>
<td></td>
<td>Send Job Creation Failure</td>
<td></td>
</tr>
<tr>
<td>7010</td>
<td></td>
<td>Send Account Status Failure</td>
<td></td>
</tr>
</tbody>
</table>