---
data: <%= swaggerdoc %>
path: "/sms/v1/queueMO/history/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/queueMO/history/OXFoN2ZtT2xWazJLSFZkOVY3MGNZQTo3Njow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
{
  "count": 5,
  "createDate": "2013-12-19T14:35:35.51",
  "status": "Active",
  "history": [
    {
      "type": "MT",
      "message": "Send your first name!",
      "date": "2013-12-19T14:35:35.51"
    },
    {
      "type": "MO",
      "message": "Anna",
      "date": "2013-12-19T14:36:36.04"
    },
    {
      "type": "MT",
      "message": "Text your ZIP code!",
      "date": "2013-12-19T14:36:36.6"
    },
    {
      "type": "MO",
      "message": "46202",
      "date": "2013-12-19T14:37:03.8"
    },
    {
      "type": "MT",
      "message": "Thanks!",
      "date": "2013-12-19T14:37:03.88"
    }
  ]
}
```
