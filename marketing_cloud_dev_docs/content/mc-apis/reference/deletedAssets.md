---
data: <%= swaggerdoc %>
path: "/asset/v1/content/deletedAssets"
method: "get"
published: true
---
##Usage
The deletedAssets collection stores all assets deleted from your MID in the last 30 days.  The deletedAssets collection does not include assets that fall under base asset types 3 (block) or 5 (message).

###Example Request
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /asset/v1/content/deletedAssets
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```
{
    "count": 1,
    "page": 1,
    "pageSize": 50,
    "links": {},
    "items": [
        {
            "id": 858391,
            "eID": 512000918,
            "mID": 512000918,
            "customerKey": "12345",
            "assetTypeID": 28,
            "name": "Hero Image 1",
            "modifiedDate": "2020-10-20T10:37:59.827",
            "modifiedBy": 712096998,
            "categoryID": 1130953
        }
    ]
}
```
