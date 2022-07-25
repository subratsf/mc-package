---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/contactexit/status"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/contactexit/status
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[
	{
		"ContactKey": "CONTACTKEY 1",
		"DefinitionKey": "DEFINITIONKEY"
	},
	{
		"ContactKey": "CONTACTKEY 2",
		"DefinitionKey": "INVALID DEFINITIONKEY",
		"Versions" :[1,2]
	}
]
```
###Example Response
```js
HTTP/1.1 200 Accepted
[
    {
        "contactKey": "CONTACTKEY 1",
        "definitionKey": "DEFINITIONKEY",
        "status": [
            {
                "version": 1,
                "message": "Exit process Completed.",
                "definitionInstanceId": "423698a6-a517-4bf9-8ecc-3517905aa489"
            },
            {
                "version": 2,
                "message": "Exit request received for processing"
            }
        ]
    },
    {
        "contactKey": "CONTACTKEY 2",
        "definitionKey": "DEFINITIONKEY",
        "status": [
            {
                "version": 1,
                "message": "Exit Request is being Processed.",
                "definitionInstanceId": "68e1544e-9bdc-4e3f-9cb0-e6d0bfceefc0"
            },
            {
                "version": 2,
                "message": "Exit request received for processing"
            }
        ]
    }
]
```
