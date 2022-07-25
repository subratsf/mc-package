---
data: <%= swaggerdoc %>
path: "/sms/v1/messageContact/{id}/send"
method: "post"
---
###Usage

The phone number must use the correct format for the designated country code. For example, a mobile number from the United States must include the numerical country code 1 and the area code displayed in the sample CSV file. The numerical country code mentioned here applies only to the phone number itself, and that any separate field containing country code information must conform to <a href="http://www.iso.org/iso/country_codes/iso-3166-1_decoding_table.htm" title="http://www.iso.org/iso/country_codes/iso-3166-1_decoding_table.htm" class="external">ISO-3306-1 alpha-2 standards</a>.

**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/messageContact/MzA6Nzg6MA/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "mobileNumbers": [
    "13175551212"
    ],
    "Subscribe": true,
    "Resubscribe": true,
    "keyword": "JOINSMS",
    "Override": true,
    "messageText": "Welcome to Code@",
    "ContentURL" : "http://image.exct.net/lib/fe6d15707662057c7411/m/1/dj_CC_AUS.jpg",
    "SendTime": "2012-10-05 20:01"
}
```

To ensure that the mobile number exists for the contact and that the contact subscribed to the specified keyword on your short code, set the <samp class="codeph nolang">Subscribe</samp> and <samp class="codeph nolang">Resubscribe</samp> values to <samp class="codeph nolang">true</samp>.

To provide an alternate unique value for referencing these records, pass another identifier with the mobile number. You cannot pass both the Subscribers parameter and a mobileNumber parameter outside of a Subscribers parameter. Choose the option that best fits your call.

The MobileConnect message with API key MzA6Nzg6MA is saved in Marketing Cloud with only one open personalization string equal to %%FirstName%%. The following call sends two messages: one with "Michael" used for first name, the other with "Kristen".

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/messageContact/MzA6Nzg6MA/send
Content-Type: application/json
{
    "Subscribers": [
		{
		"MobileNumber": "15555554410",
		"SubscriberKey": "ExampleSubKey1",
		"Attributes":{
			"FirstName":"Michael"
			}
		},
		{
		"MobileNumber": "15555552254",
		"SubscriberKey": "ExampleSubKey2",
		"Attributes":{
			"FirstName":"Kristen"
			}
		}
    ],
    "Subscribe": "true",
    "Resubscribe": "true",
    "keyword": "JOINSMS",
    "Override": "false",
    "SendTime": "2012-10-05 20:01"
}
```

**Example Response**

If the request is valid, the API returns a token that can be used to make a follow-up call to check the status of the request.
```js
HTTP/1.1 202 Accepted
{
  "tokenId": "c21NCNSDN2sMMWM2miosdjEHH",
}
```
**Error Response**

If the request was not valid, the API returns a 400 response with details on the error. This example includes the following errors:

+ The keyword does not exist in the account
+ The mobile number includes hyphens
```js
HTTP/1.1 400 Bad Request
{
  "errors" : ["1-317-555-1212 is not a numeric string",
      "Keyword TestKeyword is invalid for the code on the message"]
}
```

<table class="table table-hover">
<tbody>
<tr>
	<th width="50%">Message</th>
	<th>Details</th>
</tr>
<tr>
	<td>Message id {0} is not valid.</td>
	<td>The messageID value provided in the URL was not in a valid format.</td>
</tr>
<tr>
	<td>Message {0} is not valid for the client.</td>
	<td>The messageID value included in the URL does not match a valid value within the account.</td>
</tr>
<tr>
	<td>The count of mobile numbers or subscribers cannot be zero.</td>
	<td>Pass at least one number in the mobileNumbers parameter or in the Subscribers parameter.</td>
</tr>
<tr>
	<td>An array of mobile numbers and an array of subscribers cannot be provided at the same time.</td>
	<td>When passing in the target audience, either the mobileNumbers parameter or the Subscribers parameter must be used, but not both in a single request.</td>
</tr>
<tr>
	<td>A subscriber object must have both a mobile number and subscriber key defined.</td>
	<td>The subscriber details being passed is missing either the MobileNumber or SubscriberKey parameter.</td>
</tr>
<tr>
	<td>Keyword cannot be blank when Subscribe or Resubscribe are true.</td>
	<td>If the Subscribe or Resubscribe options are set to true, specify the keyword parameter.</td>
</tr>
<tr>
	<td>Keyword is not necessary when Subscribe and Resubscribe are false.</td>
	<td>Keyword value is not needed if the Subscribe and Resubscribe options are not being used.</td>
</tr>
<tr>
	<td>Keyword {0} is invalid for the code on the message.</td>
	<td>The keyword provided does not exist for the provided messageId.</td></tr>
<tr>
	<td>Message is blank and no override message was provided.</td>
	<td>The message definition within the MobileConnect interface does not have a message specified so the messageText parameter is required.</td>
</tr>
<tr>
	<td>Cannot override message text with a blank message.</td>
	<td>The parameter for Override was set to true, but the value passed for messageText does not contain a value.</td>
</tr>
<tr>
	<td>MessageText is not applicable when Override is false.</td>
	<td>If Override is set to true, the call does not require passing a value for messageText.</td>
</tr>
<tr>
	<td>An unexpected error occurred, please contact Customer Support with reference id {0}.</td>
	<td>If this unexpected error is presented, take note of the reference id value returned in the error and contact Salesforce Global Support for more information.</td>
</tr>
<tr>
	<td>Invalid phone number</td>
	<td>Enter a valid phone number in the mobileNumber parameter for the subscriber.</td>
</tr>
<tr>
	<td>No valid subscribers were provided</td>
	<td>None of the numbers provided were valid. Check the mobileNumber parameter for all of the subscribers.</td>
</tr>
</tbody>
</table>
