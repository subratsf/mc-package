---
data: <%= swaggerdoc %>
path: "/sms/v1/contacts/queueImport/{id}"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/contacts/queueImport/UEhwdktFWXpFZUs3Z3hRUW45R2dBQTo2Mzow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
 
{
    "ListId": "UEhwdktFWXpFZUs3Z3hRUW45R2dBQTo2Mzow",
    "ShortCode": "90913",
    "Keyword": "WELCOME",
    "SendEmailNotification": "true",
    "EmailAddress": "example@example.com",
    "ImportMappingType": "MapByOrdinal",
    "FileName": "testdata.csv",
    "FileType": "csv",
    "IsFirstRowHeader": "true",
    "FieldMaps": [
        {
            "destination": "_MobileNumber",
            "ordinal": 2,
            "source": "mobile number"
        },
        {
            "destination": "_CountryCode",
            "ordinal": 3,
            "source": "locale"
        },
        {
            "destination": "_SubscriberKey",
            "ordinal": 1,
            "source": "subscriber key"
        }
    ]
}
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NzY2MTU6NDI6MA"
}
```
