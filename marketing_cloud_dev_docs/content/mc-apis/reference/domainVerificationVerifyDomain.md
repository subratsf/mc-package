---
data: <%= swaggerdoc %>
path: "/messaging/v1/domainverification/verify"
method: "post"
---
##Usage

###Required Marketing Cloud Permissions
* Administration, Access

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/verify
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"Domain" : "example.com",
	"Key" : ""
}
```

###Example Response
```js
HTTP/1.1 200 OK
{
	"Domain" : "example.com",
	"Key" : "SFMC-T2isWsgr_EPofeVerEFItSRDvoJz-EFq9u5zwer0"
}
```
