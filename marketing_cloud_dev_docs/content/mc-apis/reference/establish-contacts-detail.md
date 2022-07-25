---
data: <%= swaggerdoc %>
path: "/contacts/v1/establish"
method: "post"
---
##Usage

###Required Marketing Cloud Permissions
* Contact Builder, Administer Contact Data Model
* Contact Builder, Access

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/establish
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"ContactKeys": ["Key1", "Key2"],
}
```
###Example Response
```js
HTTP/1.1 200 Success
[
  	{
	    "items": [
	        {
	            "value": {
	                "requestedContactKey": "key1",
	                "isNewContact": false,
	                "contactReference": {
	                    "contactID": 295863490,
	                    "contactType": "Default",
	                    "contactKey": "key1",
	                    "contactStatus": "Active"
	                }
	            },
	            "requestItemIndex": 0,
	            "resultMessages": []
	        },
	        {
	            "value": {
	                "requestedContactKey": "key2",
	                "isNewContact": false,
	                "contactReference": {
	                    "contactID": 304574890,
	                    "contactType": "Default",
	                    "contactKey": "key2",
	                    "contactStatus": "Active"
	                }
	            },
	            "requestItemIndex": 1,
	            "resultMessages": []
	        }
	    ],
	    "requestServiceMessageID": "53e4cbf8-b9b4-43d4-ba17-eedbfb0ffd90",
	    "responseDateTime": "2018-02-26T15:06:45.4009365-06:00",
	    "resultMessages": [],
	    "serviceMessageID": "70082431-9a48-4e3e-8dc5-f318ec5c3665"
	}
]
```


###Example Fast Fire and Forget Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/establish
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
	"ContactKeys": ["Key1", "Key2"],
	"ReturnResults": "false",
	"CorrelateResponseItem": "false",
	"IncludeNewContactAwareness": "false"
}
```

###Example Fast Fire and Forget Response
```js
HTTP/1.1 200 Success
[
  	{
    "items": [],
    "requestServiceMessageID": "3e3e76bc-e824-44ff-8e16-463cb446c837",
    "responseDateTime": "2018-02-27T09:03:37.9793969-06:00",
    "resultMessages": [
        {
            "resultType": "Operational",
            "resultClass": "Information",
            "resultCode": "ResponseReturnsNotRequested",
            "message": "ServiceCommand.ResultsProcessing.Information",
            "data": "The data operation returned successfully but no results were requested to be returned. "
        }
    ],
    "serviceMessageID": "c76a245d-73b4-4150-9782-fd1d6769495d"
}
]
```
