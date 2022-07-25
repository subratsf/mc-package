---
data: <%= swaggerdoc %>
path: "/hub/v1/dataevents/key:{key}/rows/{primaryKeys}"
method: "put"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataevents/key:{key}/rows/Email:example@example.com
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
or
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataevents/key:11954DDF-28A3-4FE8-BF77-646C37506621/rows/Email:example@example.com
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
HTTP/1.1 200 OK
{
    "keys":{
            "Email":"someone@exacttarget.com"
            },
    "values":{
            "LastLogin":"2013-05-23T14:32:00Z",
            "LastName":"John",
            "IsActive":true,
            "FollowerCount":2,
            "FirstName":"Smith"
            }
}
```

If the request was not valid, the API returns a 400 response with details on the error.
