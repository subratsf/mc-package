---
data: <%= swaggerdoc %>
path: "/messaging/v1/domainverification"
method: "post"
---
##Usage

###Required Marketing Cloud Permissions
* Administration, Access

###Required Scope
* Account Settings, Read and Write
* From Address Management, Read and Write

###Example Request 1 (Create Email Address)
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"domain":"test@test.com"
}
```
###Example Response
```js
HTTP/1.1 201 Created
{
	"test@test.com successfully added."
}
```
##Related Items
* [Domain Verification in Salesforce Help](https://help.salesforce.com/articleView?id=mc_es_domain_verification.htm&type=5)
