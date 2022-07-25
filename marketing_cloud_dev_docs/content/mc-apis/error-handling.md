---
title: Handle Errors in REST API
---
##Validation
<table class="table table-hover">
<thead align="left">
<tr>
<th>Description</th>
<th>Resolution</th>
<th>HTTP Error</th>
<th>Custom</th>
</tr>
</thead>
<tbody>
<tr>
<td>Generic Exception</td>
<td>Ensure you included the proper endpoint and resource.</td>
<td>400</td>
<td>10000</td>
</tr>
<tr>
<td>Invalid Data Type</td>
<td>Ensure the parameters of your request include the required data types.</td>
<td>400</td>
<td>10001</td>
</tr>
<tr>
<td>Missing Required Field</td>
<td>Ensure you include all required fields in the body of the request.</td>
<td>400</td>
<td>10002</td>
</tr>
<tr>
<td>Incorrect Format</td>
<td>Ensure you properly format your request.</td>
<td>400</td>
<td>10003</td>
</tr>
<tr>
<td>Invalid Message Format </td>
<td>Serialization error, please ensure the body has balanced braces and brackets.</td>
<td>400</td>
<td>10004</td>
</tr>
<tr>
<td>Invalid Value</td>
<td>Ensure you provide valid values in your request.</td>
<td>400</td>
<td>10005</td>
</tr>
<tr>
<td>Aggregate Error</td>
<td>Check <samp class="codeph nolang">additionalErrors</samp> for detailed error messages.</td>
<td>400</td>
<td>10006</td>
</tr>
<tr>
<td>Unsupported Media Type</td>
<td>Ensure you send a valid and accepted media format.</td>
<td>415</td>
<td></td>
</tr>
</tbody>
</table>

##Authorization
<table class="table table-hover">
<thead align="left">
<tr>
<th>Description</th>
<th>Resolution</th>
<th>HTTP Error</th>
<th>Custom</th>
</tr>
</thead>
<tbody>
<tr>
<td>General Exception</td>
<td>Ensure you provide the correct resource.</td>
<td>403</td>
<td>20000</td>
</tr>
<tr>
<td>Business Rule Not Set</td>
<td>Review the associated permissions and ensure you provide the proper configuration.</td>
<td>403</td>
<td>20001</td>
</tr>
<tr>
<td>Insufficient Privileges</td>
<td>Your account lacks the privileges necessary to perform the request.</td>
<td>403</td>
<td>20002</td>
</tr>
</tbody>
</table>

##Authentication
<table class="table table-hover">
<thead align="left">
<tr>
<th>Description</th>
<th>Resolution</th>
<th>HTTP Error</th>
<th>Custom</th>
</tr>
</thead>
<tbody>
<tr>
<td>Not Authorized</td>
<td>The token was not found in the request, or it is invalid or expired.</td>
<td>401</td>
<td>0</td>
</tr>
<tr>
<td>Authorization token invalid on URL or request body</td>
<td>Ensure that access token is passed in the request header.</td>
<td>401</td>
<td>40004</td>
</tr>
<tr>
<td>General</td>
<td>Ensure you provide the correct resource.</td>
<td>403</td>
<td>40000</td>
</tr>
<tr>
<td>Not Authenticated</td>
<td>Ensure you provide a valid token.</td>
<td>403</td>
<td>40001</td>
</tr>
<tr>
<td>Authorization token invalid on this endpoint</td>
<td>Use the stack-level endpoint that matches your token.</td>
<td>403</td>
<td>40002</td>
</tr>
<tr>
<td>Authorization token invalid on URL</td>
<td>Ensure that access token is passed in the request header.</td>
<td>403</td>
<td>40003</td>
</tr>
<tr>
<td>Internal Server Error</td>
<td>See the response returned by the HTTP routing assertion.</td>
<td>500</td>
<td></td>
</tr>
<tr>
<td>Service Not Found</td>
<td>The resource you are trying to access does not exist. Ensure you provide the correct resource.</td>
<td>596</td>
<td></td>
</tr>
</tbody>
</table>

##Runtime
<table class="table table-hover">
<thead align="left">
<tr>
<th>Description</th>
<th>Resolution</th>
<th>HTTP Error</th>
<th>Custom</th>
</tr>
</thead>
<tbody>
<tr>
<td>Generic</td>
<td>Ensure you provide the correct resource.</td>
<td>400</td>
<td>30000</td>
</tr>
<tr>
<td>Invalid Operation</td>
<td>Your request uses an invalid HTTP operation for the resource. Modify the request to use a valid operation.</td>
<td>400</td>
<td>30001</td>
</tr>
<tr>
<td>Invalid State Transition</td>
<td>This operation requests an invalid state transition for the resource. Ensure you request a valid state transition.</td>
<td>409</td>
<td>30002</td>
</tr>
<tr>
<td>Object Not Found</td>
<td>Your request cannot find any available data. Ensure you properly created your request. </td>
<td>404</td>
<td>30003</td>
</tr>
<tr>
<td>Object Already Exists</td>
<td>Another object with the same credentials already exists.</td>
<td>409</td>
<td>30004</td>
</tr>
<tr>
<td>Too many requests</td>
<td>Retry the API call after number of seconds specified in “Retry-After” header field.</td>
<td>429</td>
<td>[50100](rate-limiting-errors.htm)</td>
</tr>
<tr>
<td>Too many requests</td>
<td>Your API requests are temporarily blocked due to too many concurrent requests. Contact Salesforce Marketing Cloud technical support to resolve the failure.</td>
<td>429</td>
<td>[50200](rate-limiting-errors.htm)</td>
</tr>
<tr>
<td>Service Unavailable</td>
<td>Retry the API call after number of seconds specified in “Retry-After” header field.</td>
<td>503</td>
<td>50300</td>
</tr>
</tbody>
</table>
