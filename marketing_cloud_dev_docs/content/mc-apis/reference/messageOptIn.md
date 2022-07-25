---
data: <%= swaggerdoc %>
path: "/sms/v1/message/optin"
method: "post"
published: false
---
###Usage
**Example Double Opt-In Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/message/optin
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "messageName": "Your Message Name",
  "messageText": "Thanks for reading!",
  "shortCode": "123456",
  "countryCode": "US",
  "keyword": "KEYWORD",
  "messageOptInType": "Double",
  "doubleOptInValidResponses": "y",
  "doubleOptinInitialMessage": "Thanks for your interest! Please respond with Y or YES to confirm your subscription.",
  "doubleOptinConfirmationMessage": "Thanks for subscribing! You will receive approx. 4 messages per month.",
  "duplicateOptInMessage": "You already subscribed to receive our messages",
  "optInErrorMessage": "An error occurred. Please try again.",
  "startDate": "1/1/2015",
  "endDate": "1/1/2017"
}
```
**Example Double Opt-In with Age Confirmation Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/message/optin
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "messageName": "Your Message Name",
  "shortCode": "123456",
  "countryCode": "US",
  "keyword": "KEYWORD",
  "messageOptInType": "Age",
  "doubleOptinInitialMessage": "Thanks for subscribing! Please respond with your age to confirm your subscription.",
  "doubleOptinConfirmationMessage": "Thanks for subscribing! You will receive approx. 4 messages per month.",
  "optInInvalidAgeMessage": "Sorry, but you're not old enough to subscribe to these messages.",
  "MinimumAge": "13",
  "duplicateOptInMessage": "You already subscribed to receive our messages",
  "optInErrorMessage": "An error occurred. Please try again.",
  "startDate": "1/1/2015",
  "endDate": "1/1/2017"
}
```

**Example Single Opt-In Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/message/optin
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"messageName":"TESTMESSAGE1234",
	"shortCode":"12345678",
	"countryCode":"US",
	"keyword":"MYKEYWORD",
	"messageOptInType":"Single",
	"responseMessage":"Hey, thanks for subscribing!",
	"allowSingleOptIn":"true",
	"duplicateOptInMessage":"You already subscribed to receive our messages",
	"optinErrorMessage":"An error occurred. Please try again."
}
```

**Example Response**

If the request includes valid values, the API returns a 201 response.

```json
{
"messageID": "Mjg6NjI1OjA"
}
```

If the request includes invalid values, the API returns a 400 response with details on the error.

MessageOptInType value equals Single and ResponseMessage does not contain a value:

```json
{
	message: "Invalid data",
	errorcode: 11000,
	documentation: "",
	objectErrors: [ ],
	fieldErrors: [
		{
			message: "ResponseMessage is invalid. It must be specified when MessageOptInType is Single.",
			errorcode: 10005,
			documentation: ""
		}
	]
}
```

MessageOptInType value equals Double, and DoubleOptinInitialMessage and DoubleOptinConformationMessage don't contain a value:

```json
{
	message: "Invalid data",
	errorcode: 11000,
	documentation: "",
	objectErrors: [ ],
	fieldErrors: [
		{
			message: "DoubleOptinInitialMessage is invalid. It must be specified when MessageOptInType is Double or Age.",
			errorcode: 10005,
			documentation: ""
		},
		{
			message: "DoubleOptinConfirmationMessage is invalid. It must be specified when MessageOptInType is Double or Age.",
			errorcode: 10005,
			documentation: ""
		}
	]
}
```

**Possible Errors**

<table class="table table-hover">
<thead align="left">
<tr>
<th>Message</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>The MessageName field must be specified.</td>
<td>Provide a valid message name for this field.</td>
</tr>
<tr>
<td>A ShortCode or LongCode must be specified.</td>
<td>Specify either a long code or short code for this message.</td>
</tr>
<tr>
<td>ShortCode and LongCode cannot be specified at the same time.</td>
<td>Specify either a long code or short code, but not both.</td>
</tr>
<tr>
<td>The MessageName field cannot be blank or only contain whitespace.</td>
<td>Provide a value for the message name.</td>
</tr>
<tr>
<td>The MessageName field cannot contain more than {0} characters.</td>
<td>Ensure that your message does not exceed the provided character limit.</td>
</tr>
<tr>
<td>ShortCode cannot only contain whitespace.</td>
<td>Ensure that you include a value for your short code.</td>
</tr>
<tr>
<td>CountryCode must have a length of 2.</td>
<td>Ensure that your country code contains only 2 characters.</td>
</tr>
<tr>
<td>The ShortCode {0} with CountryCode {1} cannot be found on the account. Please ensure that the ShortCode and CountryCode are valid and set up on the account.</td>
<td>Check the short code value and the country code value. You can only use a short code when that short code is valid for the specified country code.</td>
</tr>
<tr>
<td>LongCode cannot only contain whitespace.</td>
<td>Ensure that you include a value for your long code.</td>
</tr>
<tr>
<td>The LongCode {0} does not exist for the account.</td>
<td>Ensure that the specified long code value exists on your account.</td>
</tr>
<tr>
<td>The MessageText field must be specified.</td>
<td>Ensure that you include the MessageText value in your JSON request body.</td>
</tr>
<tr>
<td>The MessageText field cannot be blank or only contain whitespace.</td>
<td>Ensure that you include the MessageText value in your JSON request body.</td>
</tr>
</tbody>
</table>
