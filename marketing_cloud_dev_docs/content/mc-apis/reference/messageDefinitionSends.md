---
data: <%= swaggerdoc %>
path: "/messaging/v1/messageDefinitionSends/{triggeredSendDefinitionId}/send"
method: "post"
---
###Usage
**Example Asynchronous Request Using Send ID**
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/messageDefinitionSends/dfa5ab87-1b0f-e211-b71b-9c8e9920e9fc/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "From": {
        "Address": "code@exacttarget.com",
        "Name": "Code@"
    },
    "To": {
        "Address": "example@example.com",
        "SubscriberKey": "example@example.com",
        "ContactAttributes": {
            "SubscriberAttributes": {
                "Region": "West",
                "City": "Indianapolis",
                "State": "IN"
            }
        }
    },
    "Options": {
        "RequestType": "ASYNC"
    }
}
```

**Example Asynchronous Request Using Customer Key**
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/messageDefinitionSends/key:external_key/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "From": {
        "Address": "code@exacttarget.com",
        "Name": "Code@"
    },
    "To": {
        "Address": "example@example.com",
        "SubscriberKey": "example@example.com",
        "ContactAttributes": {
            "SubscriberAttributes": {
                "Region": "West",
                "City": "Indianapolis",
                "State": "IN"
            }
        }
    },
    "Options": {
        "RequestType": "ASYNC"
    }
}
```
**Example Synchronous Request Using Send ID**
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/messageDefinitionSends/dfa5ab87-1b0f-e211-b71b-9c8e9920e9fc/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "From": {
        "Address": "code@exacttarget.com",
        "Name": "Code@"
    },
    "To": {
        "Address": "example@example.com",
        "SubscriberKey": "example@example.com",
        "ContactAttributes": {
            "SubscriberAttributes": {
                "Region": "West",
                "City": "Indianapolis",
                "State": "IN"
            }
        }
    },
    "Options": {
        "RequestType": "SYNC"
    }
}
```
**Example Synchronous Request Using Customer Key**
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/messageDefinitionSends/key:cust_key/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "From": {
        "Address": "code@exacttarget.com",
        "Name": "Code@"
    },
    "To": {
        "Address": "example@example.com",
        "SubscriberKey": "example@example.com",
        "ContactAttributes": {
            "SubscriberAttributes": {
                "Region": "West",
                "City": "Indianapolis",
                "State": "IN"
            }
        }
    },
    "Options": {
        "RequestType": "SYNC"
    }
}
```

**Example Response (Asynchronous)**

Queued status for an asynchronous request means that the request is accepted for processing. Refer to [Get Email Delivery Details](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/messageDefinitionSendsDeliveryRecords.htm) for the final message request status.
```
HTTP/1.1 202 Accepted
{
   "requestId": "e2ddb203-ea53-4843-b2d4-9f8c0c862913",
   "responses": [   {
      "recipientSendId": "e2ddb203-ea53-4843-b2d4-9f8c0c862913",
      "hasErrors": false,
      "messages": ["Queued"]
   }]
}
```

**Error Response (Synchronous)**
```
HTTP/1.1 202 Accepted
{
   "requestId": "21977680-17e1-469d-9162-bd3f20149cbb",
   "responses": [   {
   "recipientSendId": "21977680-17e1-469d-9162-bd3f20149cbb",
  	"hasErrors": true,
  	"messageErrors": [  	{
     	"messageErrorCode": 180008,
     	"messageErrorStatus": "Unable to queue Triggered Send request. There are no valid subscribers."
  	}]
   }]
}
```

**Error Response**
```
HTTP/1.1 202 Accepted
{
    "recipientSendId": "",
    "hasErrors": true,
    "messages": ["InvalidOrMissingToAddress"]
}
```
