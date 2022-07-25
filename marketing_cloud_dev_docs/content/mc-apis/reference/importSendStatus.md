---
data: <%= swaggerdoc %>
path: "/sms/v1/automation/importSend/{tokenid}/status"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/automation/importSend/bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow/status
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
{
"status": "Complete",
"lastUpdate": "2013-08-22T00:20:27.117Z",
"createdTime": "2013-08-22T00:12:38.317Z",
"startTime": "2013-08-22T00:12:38.31Z",
"completedTime": "2013-08-22T00:20:27.113Z",
"lastRunTime": "2013-08-22T00:12:38.31Z",
"source": "PracticeReminder.csv", // New in January 2014 Release
"inserted": 15, //number of new records in _MobileSubscription, new in January 2014 release
"updated": 0, // number of updated records, new in January 2014 release
"invalid": 0 // number of invalid rows in the import file, new in January 2014 release
}
```
