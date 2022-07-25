---
title: Engagement Split Format
---

The engagement split activity is used to change the path for a contact based on how they did or did not interact with an email. It allows you to define logical flows for your journey based on clicks and opens. This activity type cannot be used in a custom activity.

##Helpful Hints
* This activity works only with the send email types for splitting the journey path.
* The outcome of this decision affects goal statistics.

{{md 'interaction-spec-jb-dev'}}

## Sample Request
```js
{
    "key": "ENGAGEMENTDECISION-1", // The UI adds an incremented number each time a new activity of this type is brought onto the stage.
    "name": "Engagement Decision", // "Last Modified Today"
    "description": "Description for this Activity",
    "type": "EngagementDecision",
    "outcomes": [
        {
            "next": "WAIT-[#]",
            "arguments": {
                "when": true
            }
        },
        {
            "next": "WAIT-[#]",
            "arguments": {
                "when": false
            }
        }
    ],
    "configurationArguments": {
        "refActivityCustomerKey": "EMAIL-1",
        "statsTypeId": 2, // 2 = Email opened, 3 = Email clicked, 6 = Email bounced
        "statusUrlId": "0"
    },
    "metaData": {
        "refActivityName": "<nameOfEmailForReference",
    }
}
```

## Sample Response
```js
{
    "id": "<guid>",
    "key": "ENGAGEMENTDECISION-1", // The UI adds an incremented number each time a new activity of this type is brought onto the stage.
    "name": "Engagement Decision", // "Last Modified Today"
    "description": "Description for this Activity",
    "type": "EngagementDecision",
    "outcomes": [
        {
            "key": "<guid>",
            "next": "WAIT-[#]",
            "arguments": {
                "when": true
            }
        },
        {
            "key": "<guid>",
            "next": "WAIT-[#]",
            "arguments": {
                "when": false
            }
        }
    ],
    "configurationArguments": {
        "refActivityCustomerKey": "EMAIL-1",
        "statsTypeId": 2,
        "statusUrlId": "0"
    },
    "metaData": {
        "refActivityName": "<nameOfEmailForReference",
    }
}
```
##Related Items
[Journey Specification](getting-started-spec.htm)
