---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/contactexit"
method: "post"
---
##Usage

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/contactexit
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
###Example Response without Errors
```js
HTTP/1.1 202 Accepted
{
    "errors": []
}
```
###Example Response with Errors
```js
HTTP/1.1 202 Accepted
{
    "errors": [
        {
            "contactKey": "CONTACTKEY 2",
            "definitionKey": "INVALID DEFINITIONKEY",
            "status": [
                {
                    "version": 1,
                    "message": "Exit request Ignored - Invalid Interaction Name."
                }
            ]
        }
    ]
}
```
