---
data: <%= swaggerdoc %>
path: "/messaging/v1/domainverification/update"
method: "post"
---
##Usage

###Required Marketing Cloud Permissions
* Administration, Access

###Required Scope
* Account Settings, Read and Write
* From Address Management, Read and Write

###Example Request 1 (Update Email Address)
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/update
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[  
   {  
      "EmailAddress":"test@test.com",
      "IsSendable":"false"
   },
   {  
      "EmailAddress":"noreply.salesforce.com",
      "IsSendable":"false"
   }
]
```
###Example Response
```js
HTTP/1.1 200 OK
{
	"2 records successfully updated!"
}
```
##Related Items
* [Domain Verification in Salesforce Help](https://help.salesforce.com/articleView?id=mc_es_domain_verification.htm&type=5)
