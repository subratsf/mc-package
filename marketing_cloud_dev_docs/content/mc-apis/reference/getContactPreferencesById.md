---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/id:{contactId}/Preferences"
method: "get"
---
##Usage

###Required Marketing Cloud Permissions
* Assets, Upload
* Assets, Publish

###Required Scope
* Documents and Images, Read and Write
* Saved Content, Read and Write

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /contacts/v1/contacts/id:1234/Preferences
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

```
###Example Response
```js
HTTP/1.1 200 OK

{  
   "value":{  
      "contactID":1234,
      "hasOptedOutTracking":false
   },
   "rowsAffected":1,
   "requestServiceMessageID":"315871d9-7ac3-4452-85ea-1b82e7912ec9",
   "responseDateTime":"2019-01-22T16:16:14.6290807-06:00",
   "resultMessages":[  

   ],
   "serviceMessageID":"31be4073-0d58-467e-8c2e-9e5d0851c5fd"
}
```
