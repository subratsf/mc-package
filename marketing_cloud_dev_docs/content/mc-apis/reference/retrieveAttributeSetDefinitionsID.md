---
data: <%= swaggerdoc %>
path: "/contacts/v1/schemas/{schemaId}/attributeSetDefinitions/{id}"
method: "get"
published: false
---
###Usage
**Example Request by ID**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeSetDefinitions/abe05aca-2c17-e311-bb14-00237d5401ce
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Request by Key**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeSetDefinitions/MobileDemographics
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Request by Name**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/schemas/36E001F0-6B8F-E311-A274-08EDB9DDEBF0/attributeSetDefinitions/MobileConnect%20Demographics
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
200 (OK)
Content-Type: application/json
{
  "attributeSetDefinition": {
    "id": "122438a3-221d-e411-8026-08edb9ddebf0",
    "key": "EmailDemographics",
    "name": "Email Demographics",
    "schemaId": "71c1f974-9812-e411-9ef0-08edb9ddebf0",
    "storageName": "_EnterpriseAttribute",
    "isSystemDefined": true,
    "storageReferenceID": {
      "type": "guid",
      "value": "ea82304e-1c29-40e2-a0ed-b9aa00c60333"
    },
    "storageLogicalType": "EnterpriseAttributes",
    "isRoot": false,
    "isSendable": false,
    "isReadOnly": false,
    "applicationID": "b2ca1f50-3cc4-4fd7-a3a3-88bf09fb59fa",
    "applicationKey": "com.exacttarget.Email",
    "categoryID": 152525,
    "fullyQualifiedName": "Email Demographics",
    "relationships": [
      {
        "relationshipID": "1c2438a3-221d-e411-8026-08edb9ddebf0",
        "leftItem": {
          "relationshipType": "AttributeGroup",
          "identifier": "192438a3-221d-e411-8026-08edb9ddebf0",
          "cardinality": "One",
          "connectingID": {
            "identifierType": "FullyQualifiedName"
          },
          "objectState": "Created"
        },
        "rightItem": {
          "relationshipType": "AttributeSet",
          "identifier": "122438a3-221d-e411-8026-08edb9ddebf0",
          "cardinality": "One",
          "connectingID": {
            "identifierType": "FullyQualifiedName"
          },
          "objectState": "Created"
        },
        "relationshipAttributes": [
          {
            "leftAttributeID": "76c1f974-9812-e411-9ef0-08edb9ddebf0",
            "rightAttributeID": "142438a3-221d-e411-8026-08edb9ddebf0",
            "leftConnectingID": {
              "identifierType": "FullyQualifiedName"
            },
            "rightConnectingID": {
              "identifierType": "FullyQualifiedName"
            },
            "objectState": "Created"
          }
        ]
      }
    ],
    "attributes": [
      {
        "id": "182438a3-221d-e411-8026-08edb9ddebf0",
        "key": "TestPreference",
        "name": "TestPreference",
        "attributeSetDefinitionId": "122438a3-221d-e411-8026-08edb9ddebf0",
        "dataType": "Boolean",
        "isPrimaryKey": false,
        "isNullable": true,
        "isReadOnly": false,
        "storageName": "TestPreference",
        "storageFieldReferenceID": {
          "type": "guid",
          "value": "14713aa7-fe76-4c4b-b21b-8c3604d2c9e0"
        },
        "storageFieldValueID": {
          "type": "int32",
          "value": "12604"
        },
        "isSystemDefined": false,
        "isIdentityValue": false,
        "displayOrder": 0,
        "dataSourceID": 2,
        "dataSourceName": "ExactTarget Email"
      },
      {
        "id": "142438a3-221d-e411-8026-08edb9ddebf0",
        "key": "ContactsID",
        "name": "Contacts ID",
        "attributeSetDefinitionId": "122438a3-221d-e411-8026-08edb9ddebf0",
        "dataType": "LongNumber",
        "isPrimaryKey": true,
        "isNullable": false,
        "isReadOnly": false,
        "storageName": "_SubscriberID",
        "isSystemDefined": true,
        "isIdentityValue": false,
        "displayOrder": 0,
        "dataSourceID": 2,
        "dataSourceName": "ExactTarget Email"
      },
      {
        "id": "162438a3-221d-e411-8026-08edb9ddebf0",
        "key": "NewProfileAttribute",
        "name": "NewProfileAttribute",
        "attributeSetDefinitionId": "122438a3-221d-e411-8026-08edb9ddebf0",
        "dataType": "Text",
        "isPrimaryKey": false,
        "isNullable": false,
        "isReadOnly": false,
        "storageName": "NewProfileAttribute",
        "storageFieldReferenceID": {
          "type": "guid",
          "value": "46b96d22-0b0a-4d91-b59c-c7ac36386381"
        },
        "storageFieldValueID": {
          "type": "int32",
          "value": "12605"
        },
        "isSystemDefined": false,
        "isIdentityValue": false,
        "length": 50,
        "displayOrder": 1,
        "dataSourceID": 2,
        "dataSourceName": "ExactTarget Email"
      }
    ]
  },
  "requestServiceMessageID": "925a55d0-2861-11e4-8865-f16b70858257",
  "resultMessages": [],
  "serviceMessageID": "7cc9fe35-4ee8-4532-a891-b450f32f7454"
}
```
