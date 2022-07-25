---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/id:{contactId}/Preferences"
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
POST /contacts/v1/contacts/id:1234/Preferences
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{  
   "value":{  
      "contactID":1234,
      "hasOptedOutTracking":false
   }
}


```
###Example Response
```js
HTTP/1.1 200 OK
{  
   "value":{  
      "contactID":1234,
      "hasOptedOutTracking":false
   },
   "rowsInserted":1,
   "rowsUpdated":0,
   "rowsDeleted":0,
   "requestServiceMessageID":"1e17845f-d020-48a8-8621-c318c964b5a6",
   "responseDateTime":"2019-01-24T11:37:13.1845624-06:00",
   "resultMessages":[  

   ],
   "serviceMessageID":"a5866bea-02a0-4989-bd1d-7edd4dd95519"
}
```
