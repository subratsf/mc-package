---
data: <%= swaggerdoc %>
path: "/contacts/v1/customObject/{id}/isUsedInContacts"
method: "get"
published: true
---

###Usage

**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/customObject/unique-UUID-from-SFMC/isUsedInContacts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
{
	"isUsedByContacts": true
	"requestServiceMessageID": "unique-GUID-from-SFMC"
	"resultMessages": [0]
	"serviceMessageID": "unique-GUID-from-SFMC"
}
```