---
data: <%= swaggerdoc %>
path: "/asset/v1/content/deletedAssets/[AssetID]"
method: "patch"
published: true
---
##Usage


###Example Request
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /asset/v1/content/deletedAssets/858391
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "customerKey": "45678"
}
```

###Example Response
```
{
    "asset": {
        "href": "asset/v1//Content/Assets/858391"
    }
}
```
