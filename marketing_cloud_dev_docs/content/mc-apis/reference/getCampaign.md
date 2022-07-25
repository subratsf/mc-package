---
data: <%= swaggerdoc %>
path: "/hub/v1/campaigns/{id}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/campaigns/301
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "id": "301",
    "createdDate": "2012-11-29T16:18:31",
    "modifiedDate": "2012-11-29T16:18:30",
    "name": "2012 Master Campaign",
    "description": "This is the Primary Campaign",
    "campaignCode": "master2012",
    "color": "d2e7b8",
    "favorite": false
}
```