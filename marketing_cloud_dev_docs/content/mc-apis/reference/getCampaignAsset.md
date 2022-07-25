---
data: <%= swaggerdoc %>
path: "/hub/v1/campaigns/{id}/assets/{assetId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/campaigns/301/assets/20
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "id": "20",
    "campaignId": 330,
    "type": "triggered",
    "objectID": "1bef7d61-cb0b-e111-bb7b-1c659d025f52",
    "createdDate": "2012-12-19T14:49:23"
}
```