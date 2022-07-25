---
data: <%= swaggerdoc %>
path: "/address/v1/validateEmail"
method: "post"
---
###Usage

**Example Request**
```javascript
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /address/v1/validateEmail
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "email": "help@example.com",
  "validators": [ "SyntaxValidator", "MXValidator", "ListDetectiveValidator" ]
}
```

**Example Response**

If the email address is valid, the API returnes this response.

```javascript
{
  "email": "help@example.com",
  "valid": true
}
```

If the email address is not valid, the API returns this response, indicating which validator failed.

```javascript
{
  "email": "this@is@not@a@valid@email@address",
  "valid": false,
  "failedValidation": "SyntaxValidator"
}
```