---
data: <%= swaggerdoc %>
path: "/interaction/v1/events"
method: "post"
---

###Usage


**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/events
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ContactKey": "ID601",
	"EventDefinitionKey":"AcmeBank-AccountAccessed",
	"Data": {
	    "accountNumber":"123456",
	    "patronName":"John Smith" }
}
```

**Example Response**
```js
HTTP/1.1 201
{
     "eventInstanceId": "########-####-####-####-############"
}
```
