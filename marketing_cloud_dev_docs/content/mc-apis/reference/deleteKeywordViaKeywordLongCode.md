---
data: <%= swaggerdoc %>
path: "/sms/v1/keyword/{keyword}/{longCode}"
method: "delete"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /sms/v1/keyword
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "LongCode": "5550003232",
    "Keyword": "TEST"
}
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "Status": "SUCCESS Keyword with id alm5LXNSSktGMGluRznRb1Rb1R5MDZFQTo4Njow was successfully delete."
}
```
