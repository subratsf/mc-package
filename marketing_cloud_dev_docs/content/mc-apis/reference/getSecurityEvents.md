---
data: <%= swaggerdoc %>
path: "/data/v1/audit/securityEvents"
method: "get"
---
## Usage

### Required Marketing Cloud Permissions
* Permission: Audit Logging | API Access
* Scope: Data | Tracking Event | Read

### Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/audit/securityEvents
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
### Example Response
```js
HTTP/1.1 200 OK
[
  {
    "page": 1,
    "pageSize": 50,
    "count": 15,
    "items": [
      {
        "id": 00000000,
        "createdDate": "2019-01-01T12:00:00.00",
        "memberId": 00000000,
        "enterpriseId": 00000000,
        "employee": {
          "employeeName": "Test User",
          "userName": "monitoring"
        },
        "ipAddress": "255.255.255.255",
        "sessionId": "fa7cbbf2899f5b8a4257ab5a834389a7f3471478f5d0ead6e468f4c0128f538e",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
        "eventType": {
          "id": 1,
          "name": "Login Attempted"
        },
        "loginStatus": {
          "id": 4,
          "name": "Successful"
        },
        "eventSource": {
          "id": 11,
          "name": "Hub CAS"
        }
      }
    ]
  }
]
```

## Related Items
* [Audit Trail Help documentation](https://help.salesforce.com/articleView?id=mc_overview_audit_trail.htm)
