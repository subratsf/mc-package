---
data: <%= swaggerdoc %>
path: "/asset/v1/content/deletedAssets/[AssetID]"
method: "put"
published: true
---
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /asset/v1/content/categories/3916
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "Id" : 3916,
    "Name" : "Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset",
    "MemberId" : 20720,
    "EnterpriseId" : 20720
}
```
**Example Response**
```
{
    "Id" : 3916,
    "Name" : "Pictures",
    "ParentId" : 99,
    "CategoryType" : "asset",
    "MemberId" : 20720,
    "EnterpriseId" : 20720,
}
```
