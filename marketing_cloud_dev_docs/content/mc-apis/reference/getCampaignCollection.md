---
data: <%= swaggerdoc %>
path: "/hub/v1/campaigns"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/campaigns?$page=1&$pageSize=2&$orderBy=Name ASC
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "page": 1,
    "pageSize": 2,
    "count": 2,
    "links": {
        "self": {
            "href": "/v1/campaigns?$page=1&$pagesize=2&$orderby=Name ASC&$orderBy=Name+Asc"
        },
        "next": {
            "href": "/v1/campaigns?$page=2&$pagesize=2&$orderby=Name ASC&$orderBy=Name+Asc"
        }
    },
    "items": [
        {
            "id": "301",
            "createdDate": "2012-11-29T16:18:31",
            "modifiedDate": "2012-11-29T16:18:30",
            "name": "2012 Master Campaign",
            "description": "This is the Primary Campaign",
            "campaignCode": "master2012",
            "color": "d2e7b8",
            "favorite": false
        },
        {
            "id": "310",
            "createdDate": "2012-11-29T16:18:31",
            "modifiedDate": "2012-11-29T16:18:30",
            "name": "East Coast",
            "description": "East Coast Only",
            "campaignCode": "EASTCOAST",
            "color": "d2e7b8",
            "favorite": false
        }
    ]
}
```