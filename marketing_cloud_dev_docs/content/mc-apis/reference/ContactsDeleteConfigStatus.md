---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/actions/delete/configSettings"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts/actions/delete/configSettings
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"items" : [{
			"settingKey" : "SuppressionRestoreUntilDays",
			"value" : "-1"
		}
	]
}
```
###Example Response
```js
HTTP/1.1 200 Ok
{
"rowsEffected": 1,
"requestServiceMessageID": "c23e6308-1115-4655-aa83-da59712e40eb",
"responseDateTime": "2018-03-15T12:08:36.9709486-04:00",
"resultMessages": [],
"serviceMessageID": "57813e4a-3fa7-4058-9118-4c85752bbaf1"
}
```
