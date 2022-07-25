---
data: <%= swaggerdoc %>
path: "/hub/v1/campaigns"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/campaigns
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Annual Sale 2012",
    "description": "Yearly sale",
    "campaignCode": "annual2012",
    "color": "0000ff",
    "favorite": false
}
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "id": "505",
    "createdDate": "2012-12-12T09:59:42",
    "modifiedDate": "2012-12-12T09:59:42",
    "name": "Annual Sale 2012",
    "description": "Yearly sale",
    "campaignCode": "annual2012",
    "color": "0000ff",
    "favorite": false
}
```