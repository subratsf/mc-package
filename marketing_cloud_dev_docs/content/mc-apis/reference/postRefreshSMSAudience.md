---
data: <%= swaggerdoc %>
path: "/sms/v1/contacts/refreshList/{id}"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST //sms/v1/contacts/refreshList/bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ListId": "bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow"
}
```
**Example Response**
If all values in the request are valid, the API returns a token that can be used to make a follow-up call to check the status of the request.
```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NDo8NDow",
    "lastPublishDate": "2012-12-18T15:38:12.030Z"
}
```