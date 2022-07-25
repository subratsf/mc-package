---
data: <%= swaggerdoc %>
path: "/platform/v1/key"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /platform/v1/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```js
HTTP/1.1 200 (OK)
Content-Type: application/json
{
    "keyName": "TDE Key 1",
    "keyId": "a9c8f1be-3ba1-42ef-b4a5-26f4df5cb0c7",
    "keyVersion": 1,
    "keyType": "RSA",
    "mid": 123,
    "keySize": 2048,
    "keyState": "PreActive",
    "createdDate": "2020-06-17T16:18:30.383"
    "createdBy": 123,
    "modifiedDate": "2020-05-20T15:30:10.21",
    "modifiedBy": 123,
    "exportable": false,
    "useCase": "Tde",
    "securityHash": "YnR2OGRjWWFeKjUiNGM5NDhlZTA=",
    "publicKey": "",
    "imported": false
}
```
