---
data: <%= swaggerdoc %>
path: "/sms/v1/automation/importSend"
method: "post"
---
###Usage
**Example Request for FILE ImportType**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/automation/importSend
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "MessageId": "MessageId",
  "Keyword": "Test_Keyword",
  "NotificationEmail": "myEmail@example.com",
  "IsDuplicationAllowed" : true,
  "ImportDefinition": [{
    "FileName": "MyTestList.csv",
    "ImportType": "FILE",
    "ImportMappingType": "ManualMap",
    "FieldMaps": [{
      "Destination": "_FirstName",
      "Source": "First Name"
    }, {
      "Destination": "_Subscriberkey",
      "Source": "Subscriber Key"
    }, {
      "Destination": "_LastName",
      "Source": "Last Name"
    }, {
      "Destination": "_MobileNumber",
      "Source": "Mobile"
    }, {
      "Destination": "_CountryCode",
      "Source": "Country"
    }]
  }]
}
```
**Example Request for DATA_EXTENSION ImportType**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/automation/importSend
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "MessageId": "MessageId",
  "Keyword": "Test_Keyword",
  "NotificationEmail": "myEmail@example.com",
  "Override": true,
  "OverrideText": "Override Text for Demo!",
  "IsDuplicationAllowed" : true,
  "ImportDefinition": [{
    "ImportType": "DATA_EXTENSION",
    "ImportMappingType": "InferFromColumnHeadings",
    "DataExtensionName": "MyDataExtension",
    "IsFirstRowHeader": true
  }]
}
```
**Example Response**
```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NDo8NDow",
    "lastPublishDate": "2012-12-18T15:38:12.030Z"
}
```
