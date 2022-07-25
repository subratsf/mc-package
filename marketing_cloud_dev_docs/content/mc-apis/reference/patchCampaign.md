---
data: <%= swaggerdoc %>
path: "/hub/v1/campaigns"
method: "patch"
published: false
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /hub/v1/campaigns/505
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Annual Sale 2013",
    "description": "Yearly sale",
    "campaignCode": "annual2013",
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
    "name": "Annual Sale 2013",
    "description": "Yearly sale",
    "campaignCode": "annual2013",
    "color": "0000ff",
    "favorite": false
}
```