---
data: <%= swaggerdoc %>
path: "/platform/v1/key"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /platform/v1/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
{
    "keyName": "TDE Key 1",
    "keyType": "RSA",
    "mid": 123,
    "eid": 123,
    "keySize": 2048,
    "keyData": {
        "wrappedRsaBytes": "SampleRsaKeyBytes",
        "wrappedAesBytes": "SampleAesKeyBytes"
    }
}
```

**Example Response**
```js
HTTP/1.1 201 (Created)
{
    "keyName": "TDE Key 1",
    "keyId": "a9c8f1be-3ba1-42ef-b4a5-26f4df5cb0c7",
    "keyVersion": 1,
    "keyType": "RSA",
    "mid": 123,
	"eid": 123,
    "keySize": 2048,
    "keyState": "PreActive",
	"exportable": false,
    "createdDate": "2020-06-17T16:18:30.383"
    "employeeid": 123,
    "modifiedDate": "2020-05-20T15:30:10.21",
    "modifiedBy": 123,
    "imported": false
}
```
