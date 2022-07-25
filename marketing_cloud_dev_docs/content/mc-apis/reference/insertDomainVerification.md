---
data: <%= swaggerdoc %>
path: "/messaging/v1/domainverification/bulk/insert"
method: "post"
---
##Usage
###Required Marketing Cloud Permissions
* Administration, Access

###Example Request 1 (Address Blob)
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/bulk/insert
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "NotificationEmail": "somebody@salesforce.com",
  "Addresses": [ "somebody@gmail.com", "somebody@yahoo.com" ]
}
```
###Example Request 2 (DE)
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/bulk/insert
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "NotificationEmail": "somebody@salesforce.com",
  "DETable": "NotARealDE",
  "DEColumn": "NotARealColumn"
}
```
###Example Response
```js
HTTP/1.1 201 Created
{
"requestID": "be3c6442-9d8e-45be-a30a-704ad41c2641"
}
```
##Related Items
* [Domain Verification in Salesforce Help](https://help.salesforce.com/articleView?id=mc_es_domain_verification.htm&type=5)
