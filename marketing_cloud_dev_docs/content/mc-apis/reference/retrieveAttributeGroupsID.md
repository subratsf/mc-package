---
data: <%= swaggerdoc %>
path: "/contacts/v1/schemas/{schemaId}/attributeGroups/{id}"
method: "get"
---
###Usage
**Example Request by ID**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeGroups/36E001F0-6B8F-E311-A274-08EDB9DDEBF0
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{

    "attributeGroup": {
        "links": {
            "self": {"href": "/schemas/{parentReferenceId}/attributeGroups/{id}" },
            "schema": {"href": "/schemas/{parentReferenceId}" },
            "attributeSetDefinitions": {"href": "/schemas/{parentReferenceId}/attributeGroups/{id}/attributeSetDefinitions" 
        },
        "id": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "schemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
        "isSystemDefined": true,
        "applicationID": "131975ED-E859-4CC9-B479-62A615BC6C8A",
        "applicationKey": "com.exacttarget.mobilepush",
        "templateID": 100,
        "fullyQualifiedName": "com.exacttarget.mobilepush.ETMobilePush",
        "attributeGroupType": "standard",

    },
    }
}
```
**Example Request by Key**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeGroups/key:com.exacttarget.mobilepush.ETMobilePush
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{
    "attributeGroup": {
        "links": {
            "self": {"href": "/schemas/{schemaId}/attributeGroups/{id}" },
            "schema": {"href": "/schemas/{schemaId}" },
            "attributeSetDefinitions": {"href": "/schemas/{schemaId}/attributeGroups/{id}/attributeSetDefinitions" }
        },
        "id": "4de15aca-2c17-e311-bb14-00237d5401ce",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "schemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
        "isSystemDefined": true,
        "applicationID": "131975ED-E859-4CC9-B479-62A615BC6C8A",
        "applicationKey": "com.exacttarget.mobilepush",
        "templateID": 100,
        "fullyQualifiedName": "com.exacttarget.mobilepush.ETMobilePush",
        "attributeGroupType": "standard"
    }
}
```
**Example Request by Name**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeGroups/name:ExactTarget%20MobilePush
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
{
    "attributeGroup": {
        "links": {
            "self": {"href": "/schemas/{schemaId}/attributeGroups/{id}" },
            "schema": {"href": "/schemas/{schemaId}" },
            "attributeSetDefinitions": {"href": "/schemas/{schemaId}/attributeGroups/{id}/attributeSetDefinitions" }
        },
        "id": "4de15aca-2c17-e311-bb14-00237d5401ce",
        "key": "com.exacttarget.mobilepush.ETMobilePush",
        "name": "ExactTarget MobilePush",
        "schemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
        "isSystemDefined": true,
        "applicationID": "131975ED-E859-4CC9-B479-62A615BC6C8A",
        "applicationKey": "com.exacttarget.mobilepush",
        "templateID": 100,
        "fullyQualifiedName": "com.exacttarget.mobilepush.ETMobilePush",
        "attributeGroupType": "standard"
    }
}
```