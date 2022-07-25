---
data: <%= swaggerdoc %>
path: "/contacts/v1/schemas/{schemaId}/attributeGroups"
method: "get"
---
###Usage
**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeGroups
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{
    "count": 2,
    "page": 1,
    "pageSize": 25,
    "links": {
        "self": {"href": "/schemas/{schemaId}/attributeGroups" },
        "schema": {"href": "/schemas/{schemaId}" },
    },
    "items": [{
        "links": {
            "self": {"href": "/attributeGroups/{id}" }
        },
        "id": "4de15aca-2c17-e311-bb14-00237d5401ce",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "parentId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0"
    },
    {
        "links": {
            "self": {"href": "/attributeGroups/{id}" }
        },
        "id": "4de15aca-2c17-e311-bb14-00237d5401ce",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "parentId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0"
    }]
}
```