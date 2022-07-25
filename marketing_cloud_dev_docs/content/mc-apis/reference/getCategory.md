---
data: <%= swaggerdoc %>
path: "/asset/v1/content/categories/{id}"
method: "get"
published: true
---
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /asset/v1/content/categories/3916
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```
{
    "Id" : 3916,
    "Name" : "Shared Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset-shared",
    "MemberId" : 20720,
    "EnterpriseId" : 20720,
	"SharingProperties" : {
        "SharingType" : "edit",
        "SharedWith" : [ 0 ]
    }
}
```