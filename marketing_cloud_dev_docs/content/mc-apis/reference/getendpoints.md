---
data: <%= swaggerdoc %>
path: "/platform/v1/endpoints"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/endpoints/?IsTSE=true
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200
{
    "page": 1,
    "pageSize": 3,
    "count": 3,
    "items": [
        {
            "type": "ftp",
            "url": "ftp://YOUR_SUBDOMAIN.ftp.marketingcloudops.com"
        },
        {
            "type": "rest",
            "url": "https://restapi.s4.exacttarget.com"
        },
        {
            "type": "soap",
            "url": "https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx"
        }
    ]
}
```
