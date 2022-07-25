---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions"
method: "post"
---

###Usage
**Example Request**

This request creates a journey. This example represents the minimum required parameters to create a journey, as prescribed by the [Journey Spec](getting-started-spec.htm). These JSON paramters are always provided by Journey Builder and can never be supplied:

* id
* lastPublishedDate
* createdDate
* modifiedDate
* definitionId

To understand how to leverage the full capability of creating journeys via the API, the Journey Spec documentation provides a comprehensive list of all available paramters. This enables you to create multiple combinations of entry events, waits, data-binding, activities and outcomes for a journey.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "key": "ixn-created-via-the-api",
    "name": "API-Created journey",
    "workflowApiVersion": 1.0 ,
    "triggers": [],
    "goals": [],
    "activities": []
}

```

**Example Response**
```js
HTTP/1.1 200
{
    id: "unique-UUID-provided-by-SFMC"
    key: "ixn-created-via-the-api"
    name: "API-Created journey"
    lastPublishedDate: "0001-01-01T00:00:00"
    description: ""
    workflowApiVersion: 1
    createdDate: "2014-08-06T23:27:08.15"
    modifiedDate: "2014-08-06T23:27:08.15"
    triggers:[]
    goals:[]
    activities:[]
    status: "Draft"
    definitionId: "unique-UUID-provided-by-SFMC"
}
```