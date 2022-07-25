---
data: <%= swaggerdoc %>
path: "/push/v1/application/{appId}"
method: "get"
---
###Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/application/237690ac-41ff-4d3f-82f2-9c7efd89185f
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

If the request passes successfully, the API returns this response.

```json
200 (OK)
[
    {
        "id":"237690ac-41ff-4d3f-82f2-9c7efd89185f",
        "name":"App A Name",
        "description":"App A Description",
        "createdDate":"2013-07-11T09:34:55.54Z",
        "modifiedDate":"2013-07-11T09:34:55.54Z",
        "keys":
        [
            {
                "key": "key1",
                "description": "description1"
            },
            {
                "key": "key2",
                "description": "description2"
            },
            {
                "key": "key3",
                "description": "description3"
            }
        ],
        "apnsEnabled": true,
        "apnsCertificateExpiration": "2014-07-11T09:34:55.54Z",
        "gcmEnabled": true
    }
]
```

If the request includes invalid information, the API returns a 400 response with details on the error.