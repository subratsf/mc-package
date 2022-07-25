---
data: <%= swaggerdoc %>
path: "/sms/v1/contacts/queueImport/{id}/status/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/contacts/queueImport/UEhwdktFWXpFZUs3Z3hRUW45R2dBQTo2Mzow/status/NzY2MTU6NDI6MA
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NzY2MTU6NDI6MA",
    "status": "Completed",
    "createdDate": "2012-12-19T14:16:16.270Z",
    "type": "Import"
}
```
