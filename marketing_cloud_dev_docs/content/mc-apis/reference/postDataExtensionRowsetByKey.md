---
data: <%= swaggerdoc %>
path: "/hub/v1/dataevents/key:{key}/rowset"
method: "post"
---

**Example Request**
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/dataevents/key:SomeKey/rowset
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
or
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/dataevents/11954DDF-28A3-4FE8-BF77-646C37506621/rowset
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[
    {
        "keys":{
                "Email": "someone@example.com"
                },
        "values":{
                "LastLogin": "2013-05-23T14:32:00Z",
                "IsActive": true,
                "FirstName": "John",
                "FollowerCount": 2,
                "LastName": "Smith"
                }
    },
    {
        "keys": {
                "Email": "someone2@example.com"
                },
        "values":{
                "LastLogin": "2013-05-23T14:32:00Z",
                "IsActive": true,
                "FirstName": "Jane",
                "FollowerCount": 2,
                "LastName": "Smith"
                }
    }
]
```
**Example Response**
```
HTTP/1.1 200 OK
[
    {
        "keys": {
                "Email": "someone@example.com"
                },
        "values": {
                "LastLogin": "2013-05-23T14:32:00Z",
                "IsActive": true,
                "FirstName": "John",
                "FollowerCount": 2,
                "LastName": "Smith"
                }
    },
    {
        "keys": {
                "Email": "someone2@example.com"
                },
        "values": {
                "LastLogin": "2013-05-23T14:32:00Z",
                "IsActive": true,
                "FirstName": "Jane",
                "FollowerCount": 2,
                "LastName": "Smith"
                }
    }
]
```

An invalid request returns the API returns a 400 response with details on the error.
