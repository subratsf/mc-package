---
data: <%= swaggerdoc %>
path: "/push/v1/application/{appId}/key"
method: "get"
---
###Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/application/{B2E635FA-4894-4A4F-9125-5A88B27FCD04}/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

If the request passes successfully, the API returns the following response.

```json
200 (OK)
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
]
```
If the request includes invalid information, the API returns a 400 response with details on the error.