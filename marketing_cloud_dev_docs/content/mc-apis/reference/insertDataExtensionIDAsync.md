---
data: <%= swaggerdoc %>
path: "/data/v1/async/dataextensions/{id}/rows"
method: "post"
---
##Usage

###Example Request

The request body consists of **items**, which is an array of json objects. Each object is expected to be a name-value pair that corresponds to the columns of the destination data extension. In this example, this data extension must have the fields FirstName, LastName and ZipCode. Partial payloads are valid if they include all required fields.
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /data/v1/async/dataextensions/key:ExternalKey12345/rows
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "items": [{
      "FirstName":"Bobby",
      "LastName" : "Jones",
      "ZipCode": "23456"
   },
   {
      "FirstName":"Sam",
      "LastName" : "Sneed",
      "ZipCode": "23456"
   }]
}
```
###Example Success Response (202 Accepted)

A successfully queued request returns the RequestId. Use this RequestId in subsequent operations to determine the status of the asynchronous call and overall results of the persist operation.
```
HTTP/1.1 202 OK
{
   "requestId": "ed0ec06e-dd78-4f30-80b6-07bfc77db289"
}
```
###Example Error Response

This error response shows when the custom object cannot be found before the request gets queued. Any errors that occur during the processing of the request by the business service are recorded with the results and are retrievable using the /data/v1/async/{requestId}/results?includeDetail=true resource.

```
HTTP/1.1 200 OK
{
    "requestId": "524059b7-bf60-4fa6-9271-32aaf3479091",
    "resultMessages": [
        {
            "resultType": "Operational",
            "resultClass": "Error",
            "resultCode": "CustomObjectNotFound",
            "message": "Failed to resolve the Custom Object from the provided ObjectReferenceIdentifier [Id: ed9b5f8e-ebb7-e711-8103-005056b37304, Key: ]."
        }
    ]
}
```
