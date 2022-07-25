---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/preferences"
method: "post"
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
POST /contacts/v1/contacts/preferences
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{  
   "items":[  
      {  
         "contactID":45678,
         "hasOptedOutTracking":false
      },
      {  
         "contactID":12345,
         "hasOptedOutTracking":false
      }
   ]
}
```

###Example Response
```js
HTTP/1.1 200 OK

{
   "items":[
      {
         "contactID":45678,
         "hasOptedOutTracking":false
      },
      {
         "contactID":12345,
         "hasOptedOutTracking":false
      }
   ],
   "rowsInserted":2,
   "rowsUpdated":0,
   "rowsDeleted":0,
   "requestServiceMessageID":"4d08d1ff-1377-4f7b-9afe-937e3805c67f",
   "responseDateTime":"2019-01-22T16:17:32.0041492-06:00",
   "resultMessages":[

   ],
   "serviceMessageID":"47ec0720-81d1-4fee-8e03-d8a9d42af1c1"
}
```
