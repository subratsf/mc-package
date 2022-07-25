---
data: <%= swaggerdoc %>
path: "/hub/v1/campaigns/{id}/assets"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/campaigns/301/assets
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ids": [
        "7897",
        "7888"
    ],
    "type": "EMAIL"
}
```
**Example Response**
```js
HTTP/1.1 202 Accepted
[
  {
    "id": "16",
    "campaignId": 330,
    "type": "EMAIL",
    "itemID": 7897,
    "createdDate": "2013-01-07T10:49:45"
  },
  {
    "id": "17",
    "campaignId": 330,
    "type": "EMAIL",
    "itemID": 7888,
    "createdDate": "2013-01-07T10:49:45"
  }
]
```
