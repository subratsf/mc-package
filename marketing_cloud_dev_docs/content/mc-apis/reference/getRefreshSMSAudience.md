---
data: <%= swaggerdoc %>
path: "/sms/v1/contacts/refreshList/{id}/status/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/contacts/refreshList/ENGam1FZUtNX0p/status/NDo8NDow
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
If the request was not valid, the API returns a 400 response with details on the error.