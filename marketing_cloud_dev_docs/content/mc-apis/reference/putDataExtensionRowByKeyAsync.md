---
data: <%= swaggerdoc %>
path: "/hub/v1/dataeventsasync/key:{key}/rows/{primaryKeys}"
method: "put"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataeventsasync/key:SomeKey/rows/Email:someone@exacttarget.com
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
or
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataeventsasync/11954DDF-28A3-4FE8-BF77-646C37506621/rows/Email:someone@exacttarget.com
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "values":{
            "LastLogin":"2013-05-23T14:32:00Z",
            "IsActive":true,
            "FirstName":"John",
            "FollowerCount":2,
            "LastName":"Smith"
             }
}
```
**Example Response**
```js
HTTP/1.1 202 Accepted
 
""
```