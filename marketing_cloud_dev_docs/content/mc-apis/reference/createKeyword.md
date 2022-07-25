---
data: <%= swaggerdoc %>
path: "/sms/v1/keyword"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/keyword
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ShortCode": "88976",
    "CountryCode": "US",
    "Keyword": "EXAMPLEONE"
}
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "KeywordId": "alm5LXNSSktGMGluRznRb1Rb1R5MDZFQTo4Njow"
}
```
