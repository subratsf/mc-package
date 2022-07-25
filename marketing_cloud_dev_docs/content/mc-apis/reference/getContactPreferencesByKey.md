---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/key:{contactKey}/Preferences"
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
get /contacts/v1/contacts/key:1ab2/Preferences
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 OK
{  
   "value":{  
      "contactID":123456,
      "hasOptedOutTracking":false
   },
   "rowsAffected":1,
   "requestServiceMessageID":"105d74f2-9eab-450f-b799-6a845ebe4a4b",
   "responseDateTime":"2019-01-24T10:44:12.2334945-06:00",
   "resultMessages":[  

   ],
   "serviceMessageID":"0bfd9831-58cd-4db1-99bc-2f499e43a026"
}
```
