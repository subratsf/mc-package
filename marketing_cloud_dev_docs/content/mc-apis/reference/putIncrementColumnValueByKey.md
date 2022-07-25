---
data: <%= swaggerdoc %>
path: "/hub/v1/dataevents/key:{key}/rows/{primaryKeys}/column/{column}/increment"
method: "put"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataevents/key:mydataextension/rows/Email:someone@exacttarget.com/column/FollowerCount/increment?step=10
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
or
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataevents/11954DDF-28A3-4FE8-BF77-646C37506621/rows/Email:someone@exacttarget.com/column/FollowerCount/increment?step=10
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200 OK
```

If the request was not valid, the API returns a 400 response with details on the error.

