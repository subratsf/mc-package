---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/pause/key:{definitionKey}?versionNumber={versionNumber}"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST  /interaction/v1/interactions/pause/key:exampleDefinitionKey?versionNumber=1&allVersions=false
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"ExtendWaitEndDates":false,
	"PausedDays":14,
	"ProcessWaitUntilEvents":true,
	"GuardrailAction":"Resume",
	"RetainContactInjectionWhileJourneyPaused":true,
	"version":1
}

```

###Example Response without Errors
```js
HTTP/1.1 202 Accepted
{
    "status": "Accepted"
}
```
###Example Response with Errors
```js
HTTP/1.1 202 Accepted
{
    "message": "AllVersions=true or VersionNumber required.",
    "errorcode": 10005,
    "documentation": ""
}
```
