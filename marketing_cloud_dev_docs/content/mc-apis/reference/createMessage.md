---
data: <%= swaggerdoc %>
path: "/sms/v1/message/outbound"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/message/outbound
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"MessageName":"Your Message Name",
	"MessageText":"Thanks for reading!",
	"ShortCode":"123456",
	"CountryCode":"US"
}
```
**Example Response**
```js
{
"messageID": "MDmyMTYyNTE6NjI10jA"
}
```

If the request includes invalid values, the API returns a 400 response with details on the error.

```js
{
	"errors":[
		"The ShortCode 123456 with CountryCode US cannot be found on the account. Please ensure that the ShortCode and CountryCode are valid and set up on the account."
	]
}
```