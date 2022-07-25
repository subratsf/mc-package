---
data: <%= swaggerdoc %>
path: "/asset/v1/content/categories"
method: "post"
---
###Usage
**Example Non-Shared Category Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /asset/v1/content/categories
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "Name" : "My Pictures",
    "ParentId" : 99,
}
```
**Example Non-Shared Category Response**
```js
{
    "Id" : 27,
    "Name" : "My Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset",
    "MemberId" : 1500,
    "EnterpriseId" : 1575
}
```
**Example Shared Category Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /asset/v1/content/categories
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "Name" : "Shared Pictures",
    "ParentId" : 99,
    "SharingProperties" : {
        "SharedWith" : [ 1575 ],
        "SharingType" : "edit"
    }
}
```
**Example Shared Category Response**
```js
{
    "Id" : 27,
    "Name" : "Shared Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset-shared",
    "MemberId" : 1500,
    "EnterpriseId" : 1575,
    "SharingProperties" : {
        "SharedWith" : [ 1575 ],
        "SharingType" : "edit"
    }
}
```
