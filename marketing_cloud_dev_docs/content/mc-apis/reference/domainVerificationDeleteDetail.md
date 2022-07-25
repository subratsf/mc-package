---
data: <%= swaggerdoc %>
path: "/messaging/v1/domainverification/delete"
method: "post"
---
##Usage

###Required Marketing Cloud Permissions
* Administration
* ManageDomainRegistration

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/domainverification/delete
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[
	{
		"EmailAddress": "example@example.com",
		"DomainType": "UserDomain"
	}
]
```

###Example Response
```js
HTTP/1.1 200 OK
{
    "x records successfully updated!"
}
```
