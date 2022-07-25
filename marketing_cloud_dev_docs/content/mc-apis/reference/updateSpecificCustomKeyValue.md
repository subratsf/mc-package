---
data: <%= swaggerdoc %>
path: "/push/v1/application/{appId}/key/{key}"
method: "put"
---
###Usage

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /push/v1/application/B2E635FA-4894-4A4F-9125-5A88B27FCD04/key
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "description": "Text that describes the key"
}
```

**Example Response**

If the request passes successfully, the API returns this response.

```json
200 (OK)
Content-Type: application/json
{
    "description": "Text that describes the key"
}
```
If the request includes invalid information, the API returns a 400 response with details on the error.