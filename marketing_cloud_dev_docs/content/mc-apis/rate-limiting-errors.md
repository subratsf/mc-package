---
title: Rate Limiting Errors
---
Marketing Cloud reserves the right to throttle REST API requests from a specific customer when those API requests cause slowed system performance. The throttling rate depends on the rate necessary to stabilize operations. If this throttling occurs, the business unit or user causing this issue receives HTTP 429 error messages communicating the limited rate until the requests causing the issue cease. Your Marketing Cloud account representative can help resolve the situation as necessary.

##Error Code: 50100
###Header
```
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
Retry-After: 5
```
###Body
```
{
  "message": "Rate limit exceeded",
  "errorcode": 50100,
  "retryAfter": 5,
  "documentation": "https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/error-handling.htm"
}
```
##Error Code: 50200
###Header
```
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
```
###Body
```
{
  "message": "Your requests are temporarily blocked.",
  "errorcode": 50200,
  "documentation": "https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/error-handling.htm"
}
```
