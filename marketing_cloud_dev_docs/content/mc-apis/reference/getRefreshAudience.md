---
data: <%= swaggerdoc %>
path: "/push/v1/contacts/refreshList/{id}/status/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/contacts/refreshList/ENGam1FZUtNX0p/status/NDo8NDow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
 
    "tokenId": "NDo8NDow",
    "publishDate": "2012-12-18T15:42:15.080Z"
}
```
