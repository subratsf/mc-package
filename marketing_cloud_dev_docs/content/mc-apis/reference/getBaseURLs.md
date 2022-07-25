---
data: <%= swaggerdoc %>
path: "YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/discovery"
method: "get"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com
GET /v2/discovery?client_id=123456&resource=acct:username
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "subject": "acct:username",
  "links": [{
    "rel": "auth_instance_url",
    "href": "https://mc563885gzs27c5t9-63k636ttgm.auth.marketingcloudapis.com"
    },
    {
    "rel": "rest_instance_url",
    "href": "https://mc563885gzs27c5t9-63k636ttgm.rest.marketingcloudapis.com"
    }]
}
```
