---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/actions/delete/options"
method: "post"
---
###Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts/actions/delete/options
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "context": {
    "listType": “audience”,
    "deleteOperationType": "ContactAndAttributes",
    "applicationContext": {
      "applicationID": "e25893f9-08f3-480f-8def-7f8ab0583611"
    }
}
```

**Example Response**
The response contains all the registered options from each adapter.
```js
{
    "items": [
        {
            "adapterID": 1010,
            "adapterKey": "ContactDeleteProcessor.ContactBuilder.Roots",
            "applicationID": "e3640f97-1328-48ed-b3d5-03ca7c0d2e12",
            "options": {
                "5523009a-4174-4dd8-8ba6-c6df7c28a39b": {
                    "iD": "5523009a-4174-4dd8-8ba6-c6df7c28a39b",
                    "key": "Contacts",
                    "name": {
                        "value": "Contacts"
                    },
                    "description": {
                        "value": "Contacts options for Contacts Delete"
                    },
                    "optionType": "CheckBox",
                    "optionDataType": "Boolean",
                    "defaultValue": false
                }
            }
        },
        {
            "adapterID": 1013,
            "adapterKey": "ContactDeleteProcessor.MobileConnect",
            "applicationID": "e25893f9-08f3-480f-8def-7f8ab0583611",
            "options": {
                "2f2e5b49-b2d3-4dad-8781-876bc9cd1525": {
                    "iD": "2f2e5b49-b2d3-4dad-8781-876bc9cd1525",
                    "key": "MobileConnectAddresses",
                    "name": {
                        "value": "Addresses"
                    },
                    "description": {
                        "value": "MobileAddress option for Contacts Delete"
                    },
                    "optionType": "CheckBox",
                    "optionDataType": "Boolean",
                    "defaultValue": false
                },
                "b0580712-a1fe-4bc0-9857-6dcfcd110439": {
                    "iD": "b0580712-a1fe-4bc0-9857-6dcfcd110439",
                    "key": "MobileConnectSubscriptions",
                    "name": {
                        "value": "Subscriptions"
                    },
                    "description": {
                        "value": "MobileSubscription option for Contacts Delete"
                    },
                    "optionType": "CheckBox",
                    "optionDataType": "Boolean",
                    "defaultValue": false
                }
            }
        }
    ],
    "requestServiceMessageID": "20c895b0-d7e0-4fb2-8d46-f0cebfe02196",
    "resultMessages": [],
    "serviceMessageID": "2e848b53-8d73-416c-96c3-a278b5f42680"
}
```