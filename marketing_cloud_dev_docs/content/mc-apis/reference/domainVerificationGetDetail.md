---
data: <%= swaggerdoc %>
path: "/messaging/v1/domainverification"
method: "get"
---
##Usage

###Required Marketing Cloud Permissions
* Administration, Access

###Required Scope
* Account Settings, Read and Write
* From Address Management, Read and Write

###Example Request (Get Collection)
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/domainverification/?$page=1&$pagesize=25&$orderBy=domainType%20ASC%20&$filter=Status in ('Verify')
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"page": "1",
	"pageSize": "25",
	"count": "2",
	"items": [
		{
		"enterpriseId": 10650010,
		"domain": "noreply.salesforce.com",
		"status": "Verified",
		"domainType": "SAP",
		"isSendable": true,
		"memberId": 10650010,
		"emailSendTime": "2017-08-24T11:39:29.61"
		},
		{
		"enterpriseId": 10650010,
		"domain": "test@test.com",
		"status": "Verified",
		"domainType": "UserDomain",
		"isSendable": true,
		"memberId": 10650010,
		"emailSendTime": "2017-08-29T15:30:52.657"
		}
	]
}
```

###Example Response
```js
HTTP/1.1 200 OK
{
	"page": "1",
	"pageSize": "25",
	"count": "2",
	"items": [
		{
		"enterpriseId": 10650010,
		"domain": "noreply.salesforce.com",
		"status": "Verified",
		"domainType": "SAP",
		"isSendable": true,
		"memberId": 10650010,
		"emailSendTime": "2017-08-24T11:39:29.61"
		},
		{
		"enterpriseId": 10650010,
		"domain": "test@test.com",
		"status": "Verified",
		"domainType": "UserDomain",
		"isSendable": true,
		"memberId": 10650010,
		"emailSendTime": "2017-08-29T15:30:52.657"
		}
	]
}
```
##Related Items
* [Domain Verification in Salesforce Help](https://help.salesforce.com/articleView?id=mc_es_domain_verification.htm&type=5)
