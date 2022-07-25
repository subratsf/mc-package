---
data: <%= swaggerdoc %>
path: "/contacts/v1/addresses/email/search"
method: "post"
published: true
---
###Usage
**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/addresses/email/search 
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{ 
	"ChannelAddressList":["email@example.com"],
	"MaximumCount":1
}
```

**Example Response**
```
{
  "channelAddressResponseEntities": [
	{
	  "contactKeyDetails": [
		{
		  "contactKey": "12345@example.com",
		  "createDate": "2014-11-15T11:51:00"
		}
	  ],
	  "channelAddress": "email@example.com"
	}
  ],
  "requestServiceMessageID": "unique-UUID-provided-by-SFMC",
  "resultMessages": [],
  "serviceMessageID": "unique-UUID-provided-by-SFMC"
}
```