---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/resume/key:{definitionKey}?versionNumber={versionNumber}"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST  /interaction/v1/interactions/resume/key:exampleDefinitionKey?versionNumber=2&allVersions=false
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
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
    "message": "An interaction must be in paused status to be resumed.",
    "errorcode": 10000,
    "documentation": ""
}
```
