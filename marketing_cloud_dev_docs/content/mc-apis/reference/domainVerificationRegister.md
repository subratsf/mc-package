---
data: <%= swaggerdoc %>
path: "/messaging/v1/domainverification/register"
method: "post"
---
##Usage

###Required Marketing Cloud Permissions
* Administration, Access

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/register
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "domain": "example.com"
}
```

###Example Response
```js
HTTP/1.1 200 OK
{
    "domain": "example.com",
    "key": "SFMC-T2isWsgr_EPofeVerEFItSRDvoJz-EFq9u5zwer0"
}
```
