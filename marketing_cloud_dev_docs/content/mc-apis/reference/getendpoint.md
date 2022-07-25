---
data: <%= swaggerdoc %>
path: "/platform/v1/endpoints/{endpointType}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/endpoints/soap
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

```
**Example Response**
```js
HTTP/1.1 200
{
    "type": "soap",
    "url": "https://webservice.s4.exacttarget.com/Service.asmx"
}
```
**Error Response**
```js
HTTP/1.1 404 Not Found
{
    "documentation": "",
    "errorcode": 30003,
    "message": "No endpoint exists for key 'foobar'."
}
```
