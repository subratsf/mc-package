---
data: <%= swaggerdoc %>
path: "/contacts/v1/schema"
method: "get"
---
###Usage
**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schema
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
200 (OK)
Content-Type: application/json
{
    "links": {
        "self": { "href": "/v1/schema" }
    },
    "page": 0,
    "pageSize": 0,
    "count": 0,
    "items": [
        {
            "id": "71c1f974-9812-e411-9ef0-08edb9ddebf0",
            "enterpriseID": 10650001,
            "availableBusinessUnits": [ 10650001 ],
            "version": 16,
            "schemaType": "Contacts",
            "links": {
                "self": { "href": "/v1/schemas/71c1f974-9812-e411-9ef0-08edb9ddebf0" },
                "attributeGroups": { "href": "/v1/schemas/71c1f974-9812-e411-9ef0-08edb9ddebf0/attributeGroups" },
                "attributeSetDefinitions": { "href": "/v1/schemas/71c1f974-9812-e411-9ef0-08edb9ddebf0/attributeSetDefinitions" }
            }
        }
    ],
    "requestServiceMessageID": "ec7c40b0-22f7-11e4-bf2e-ffbc219b0f06",
    "resultMessages": [],
    "serviceMessageID": "1fa77ba6-0fb1-4ae1-914a-ef0166318f03"
}
```