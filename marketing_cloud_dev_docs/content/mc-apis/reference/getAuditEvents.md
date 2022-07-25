---
data: <%= swaggerdoc %>
path: "/data/v1/audit/auditEvents"
method: "get"
---
## Usage

### Required Marketing Cloud Permissions
* Permission: Audit Logging | API Access
* Scope: Data | Tracking Event | Read

### Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /data/v1/audit/auditEvents
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
                    "id": 0,
                    "employeeName": "Unavailable",
                    "userName": "Unavailable"
                },
                "objectType": {
                    "id": 73,
                    "name": "DataExtractActivity"
                },
                "operation": {
                    "id": 8,
                    "name": "Start"
                },
                "object": {
                    "id": "717e3e1e-a2ce-488c-99a9-71df64a9981a",
                    "name": "Security Action Audit Log"
                },
                "transactionId": "b01234ab-d2ca-4e17-8d5c-e36320543573"
            }
        ]
    }
]
```

## Related Items
* [Audit Trail Help documentation](https://help.salesforce.com/articleView?id=mc_overview_audit_trail.htm)
