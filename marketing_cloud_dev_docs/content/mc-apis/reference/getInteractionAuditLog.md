---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/{id}/audit/{action}"
method: "get"
---

###Usage
**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions/unique-UUID-provided-by-SFMC/audit/all?versionNumber=2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
The response includes a log containing these elements:
* Page count
* Page size
* Count of all actions passed in
* An item object
The item object includes specific information depending on the action passed in. All item objects include these elements for all actions:
* Customer key
* Journey ID (or key), name, and description
* Original definition ID
* Date and time of the action
* Name and id of user who performed the action

```js
HTTP/1.1 200
{
	 "Page": 1,
	 "PageSize": 50,
	 "Count": 5,
	 "Items": [
		{
			//This log shows the creation date and time for the journey. The log also includes sourceInteraction if a user created the journey as a copy of an existing journey.
			"action": "Create",
			"key": "some-journey-key",
			"versionNumber": 2,
			"id": "####-####-####-####-####",
			"originalDefinitionId": "####-####-####-####-####",
			"name": "Complete journey",
			"description": "This journey contains a trigger, goal and activities",
			"timeStamp": "2015-10-30T11:49:55.99",
			"user": {
				"name": "Test User 1",
				"UserId": 1234
				},
			"executionMode": "Production",
			"sourceInteraction": {
				"id":"####-####-####-####-####",
				"version": 3,
				"key": "My journey"
				}
		}, 
		{
			//This log shows a record for each modification of the journey.
			"action": "Modify",
			"key": "some-journey-key",
			"versionNumber": 2,	
			"id": "####-####-####-####-####",
			"originalDefinitionId": "####-####-####-####-####",
			"name": "Complete journey",
			"description": "This journey contains a trigger, goal and activities",
			"timeStamp": "2015-10-30T11:49:55.99",
			"user": {
				"name": "Test User 1",
				"UserId": 1234
				},
			"executionMode": "Production"
		},
		{
			//This log shows the publish status for the journey, in this case an error.
			"action": "Publish",
			"key": "some-journey-key",
			"versionNumber": 2,
			"id": "####-####-####-####-####",
			"originalDefinitionId": "####-####-####-####-####",
			"name": "Complete journey",
			"description": "This journey contains a trigger, goal and activities",
			"timeStamp": "2015-10-30T11:49:55.99",
			"user": {
				"name": "Test User 2",
				"userId": 5678
				},
			"executionMode": "Production",
			"publishStatus": "Error",
			"PublishRequestId": "####-####-####-####-####",
			"errors": [
				{
					"ErrorDetail": "An activity must be created and configured before activation can be successful",
					"ErrorCode": "VALIDATE_GENERAL_EXCEPTION"
				}, 
				{
					"ErrorDetail": "An entry event must be configured before activation can be successful",
					"ErrorCode": "VALIDATE_GENERAL_EXCEPTION"
				}
			]
		},
		{
			//This log shows the publish status for the journey (in this case, a success).
			"action": "Publish",
			"key": "some-journey-key",
			"versionNumber": 2,
			"id": "####-####-####-####-####",
			"originalDefinitionId": "####-####-####-####-####",
			"name": "Complete journey",
			"description": "This journey contains a trigger, goal and activities",
			"timeStamp": "2015-10-30T11:49:55.99",
			"user": {
				"name": "Test User 2",
				"userId": 5678
				},
			"executionMode": "Production",
			"publishStatus": "PublishCompleted",
			"publishRequestId": "####-####-####-####-####"
		},
		{
			//This log shows the journey ejected 20 contacts when stopped.
			"action": "Stop",
			"key": "some-journey-key",
			"versionNumber": 2,
			"id": "####-####-####-####-####",
			"originalDefinitionId": "####-####-####-####-####",
			"name": "Complete journey",
			"description": "This journey contains a trigger, goal and activities",
			"timeStamp": "2015-10-30T11:49:55.99",
			"user": {
				"name": "Test User 1",
				"userId": 1234
				},
			"ContactsEjected": 20
		}
	]
}
```
