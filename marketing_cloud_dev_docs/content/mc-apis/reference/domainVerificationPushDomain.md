---
data: <%= swaggerdoc %>
path: "/messaging/v1/domainverification/push"
method: "post"
---
##Usage

###Required Marketing Cloud Permissions
* Administration, Access

###Required Scope
* Account Settings, Read and Write
* From Address Management, Read and Write

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/push
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "domainlist":["exampledomain1.com", "exampledomain2.com"]
}
```

###Example Response
```js
HTTP/1.1 200 OK
[
  {
    "domain": "exampledomain1.com",
    "message": "Success"
  },
  {
    "domain": "exampledomain2.com",
    "message": "Not an Enterprise Account"
  }
]
```
