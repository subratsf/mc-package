---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions"
method: "put"
---

###Usage

**Example Request**

This request updates the journey version specified by the <samp class="codeph nolang">versionNumber</samp> Query Parameter.

This example represents the minimum required parameters to update the journey version, as prescribed by the [Journey Spec](getting-started-spec.htm). To understand how to leverage the full capability of updating journeys via the API, the Journey Spec documentation provides a comprehensive list of all available parameters.

These JSON parameters are always provided by Journey Builder and can never be updated:

-   id
-   lastPublishedDate
-   createdDate
-   modifiedDate, used in the request body, but only for mapping
-   definitionId
-   status

>Although the modifiedDate may not be updated, you are required to pass current value that matches the database record. This prevents simultaneous writes that would overwrite other users' changes.

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /interaction/v1/interactions/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "key": "ixn-created-via-the-api",
    "modifiedDate": "2014-08-06T08:11:12",
    "name": "API-Created journey updated",
    "version": 2,
    "description": "This is a journey created via the API created in this account",
    "workflowApiVersion": 1.0
}
```

**Example Successfully Update Journey Response**

```
HTTP/1.1 200
{
    id: "unique-UUID-provided-by-SFMC"
    key: "ixn-created-via-the-api"
    name: "API-Created journey updated"
    lastPublishedDate: "0001-01-01T00:00:00"
    description: "This is a journey created via the API created in this account"
    version: 2
    workflowApiVersion: 1
    createdDate: "2014-08-06T23:27:08.15"
    modifiedDate: "2014-08-06T23:27:08.15"
    triggers: []
    goals: []
    status: "Draft"
    definitionId: "unique-UUID-provided-by-SFMC"
}
```

**Example Error Messages**

```
HTTP/1.1 304 NO CHANGE // when the supplied parameters don't differ from the existing version implementation
{
    message: "No change has been processed, supplied data matches that on the server."
    errorcode: 304
    documentation: ""
}
```
```
HTTP/1.1 404 NOT FOUND // when the journey is not found based on the key provided
{
    message: "Interaction not found."
    errorcode: 30003
    documentation: ""
}
```
```
HTTP/1.1 400 BAD REQUEST // when the request is formed in an anti-pattern to what has been prescribed above
{
    message: "Please validate that your request is properly formed."
    errorcode: 400
    documentation: ""
}
```
```
HTTP/1.1 409 CONFLICT // when the change requested is valid, but the journey is a: running, save, publish, validate or error state
{
    message: "Conflict, this change would cause a current operation on the specified interaction or a running interaction to be changed, which is not permitted"
    errorcode: 409
    documentation: ""
}
```
```
HTTP/1.1 500 SERVER ERROR // when the change was unable to be processed based on a server side error in Journey Builder
{
    message: "There was a problem processing your request, please try again or contact support"
    errorcode: 500
    documentation: ""
}
```
