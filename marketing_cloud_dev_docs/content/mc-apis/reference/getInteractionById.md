---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/{id}"
method: "get"
---

###Usage
**Example Request**

This request retrieves a single journey object for version 2 of the journey specified by the ID.
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions/{id}?versionNumber=2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

```

**Example Response**
```
HTTP/1.1 200
{
    "id": "00a0a000-9988-e111-9ef0-88aaa9dddaa0",
    "key": "journey_key",
    "name": "Welcome email series",
    "description": "This welcome email journey contains an entry event, goal, activities, and tags",
    "version": 2,
    "workflowApiVersion": 1,
    "createdDate": "2014-06-17T10:29:43.673",
    "modifiedDate": "2014-06-17T11:53:22.477",
    "triggers": [
        {
            "key": "first-activity",
            "name": "First activity. The starting point.",
            "type": "ContactDecision",
            "eventDefinitionKey": "my-entry-event-key",
            "arguments": {
                "criteria": "<filterXML"
            }
        }
    ],
    "goals": [
        {
            "name": "My Goal",
            "key": "goal-1",
            "type": "ContactDecision",
            "description": "This is my goal description.",
            "arguments": {
                "criteria": "<filterXML>"
            }
        }
    ],
    "activities": [
        {
            "id": "11b1b111-9988-e111-9ef0-88aaa9dddbb1",
            "key": "send-welcome-email",
            "name": "Welcome email",
            "type": "Email",
            "outcomes": [
                {
                    "key": "sent-welcome-email-then-random-split",
                    "next": "random-split"
                }
            ],
            "arguments": {
                "emailToSend": "394911",
                "emailAddress": ""
            }
        },
        {
            "id": "22c2c222-9988-e111-9ef0-88aaa9dddcc2",
            "key": "random-split",
            "name": "Random split",
            "type": "RandomSplit",
            "outcomes": [
                {
                    "key": "random-split-then-send-sms",
                    "next": "send-sms",
                    "arguments": {
                        "percentage": 90
                    }
                },
                {
                    "key": "random-split-then-10-percent-end",
                    "next": "send-sms2",
                    "arguments": {
                        "percentage": 10
                    }
                }
            ]
        }
    ],
    "tags": [
        {"name": "Fun Run"},
        {"name": "5K"}
    ],
    "status": "Draft",
    "definitionId": "33d3d333-9988-e111-9ef0-88aaa9eeedd3"
}
```
