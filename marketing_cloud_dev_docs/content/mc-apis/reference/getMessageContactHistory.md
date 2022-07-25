---
data: <%= swaggerdoc %>
path: "/sms/v1/messageContact/{messageId}/history/{tokenId}/mobileNumber/{mobileNumber}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/messageContact/MTA3ODo3ODow/history/MENqMHZHV2x3a0M1dG1iOHVnam9LZzo3OTow/mobileNumber/1120816001
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
{
  "count": 1,
  "createDate": "2017-12-19T14:35:35.51",
  "status": "Active",
  "history": [
    {
      "type": "MT",
      "message": "Send your first name!",
      "date": "2013-12-19T14:35:35.51"
    }
  ]
}
```
