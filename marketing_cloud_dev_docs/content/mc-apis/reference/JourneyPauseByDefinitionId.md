---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/pause/{definitionID}?versionNumber={versionNumber}"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST  /interaction/v1/interactions/pause/unique-UUID-provided-by-SFMC?versionNumber=4&allVersions=false
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"ExtendWaitEndDates":false,
	"PausedDays":14,
	"ProcessWaitUntilEvents":true,
	"GuardrailAction":"Resume",
	"RetainContactInjectionWhileJourneyPaused":true,
	"id":"unique-UUID-provided-by-SFMC",
	"version":4
}

```
###Example Response Without Errors
```js
HTTP/1.1 202 Accepted
{
    "status": "Accepted"
}
```

###Example Response With Errors
```js
HTTP/1.1 202 Accepted
{
    "message": "AllVersions=true or VersionNumber required.",
    "errorcode": 10005,
    "documentation": ""
}
```
