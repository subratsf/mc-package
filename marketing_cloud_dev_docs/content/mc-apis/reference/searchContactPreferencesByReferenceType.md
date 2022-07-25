---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/preferences/search?ReferenceType={ReferenceType}"
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
POST /contacts/v1/contacts/preferences/search?ReferenceType=2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "items": [
    12345
  ]
}
```
###Example Response
```js
HTTP/1.1 200 OK
{  
   "items":[  
      {  
         "contactID":12345,
         "hasOptedOutTracking":false
      }
   ],
   "rowsAffected":1,
   "requestServiceMessageID":"d613f535-eea8-435e-a59c-59ec6ab4bebd",
   "responseDateTime":"2019-01-23T15:04:14.7305707-06:00",
   "resultMessages":[  

   ],
   "serviceMessageID":"29029de0-abe4-4216-985d-4a8d78883dfa"
}
```
