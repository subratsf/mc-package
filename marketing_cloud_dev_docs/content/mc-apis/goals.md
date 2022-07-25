---
title: Goals
---

The goal object is used to measure the effectiveness of an associated journey. Goals are only evaluated via their criteria or filter XML.

## Journey Specification Format
The activity must be formatted as specified below. The following JSON object will be included in the <samp class="codeph nolang">goals</samp> array of a journey, as defined in the Journey Specification.

## Helpful Hints
* When a journey is saved, each goal is saved.
* Goals are evaluated every 24 hours and upon exiting each wait activity.
* The <samp class="codeph nolang">metaData.conversionUnit</samp> property is a string that can be either "percentage" or "wholenumber".
* The <samp class="codeph nolang">metaData.conversionValue</samp> property is a number as a string.
* The <samp class="codeph nolang">configurationArguments.criteria</samp> property is an XML string that defines a filter that is used as a data-gate to determine if a contact qualifies for this goal.


## Sample Request
```js
{
    "goals": [
        {
            "key": "user-defined-key",
            "name": "name of your goal",
            "description": "The description of this goal",
            "type": "Event",
            "outcomes": [],
            "arguments": {},
            "configurationArguments": {
                "criteria": "<FilterDefinition><ConditionSet Operator=\"AND\" ConditionSetName=\"Individual Filter Grouping\"><Condition Key=\"bulkevent_de.Locale\" Operator=\"Equal\"><Value><![CDATA[asdf]]></Value></Condition></ConditionSet></FilterDefinition>",
                "schemaVersionId": 122
            },
            "metaData": {
                "conversionValue": "1",
                "conversionUnit": "wholenumber",
                "conversionTypeId": 1,
                "isExitCriteria": true,
                "eventDefinitionKey": "My-Event-Key",
                "eventDefinitionId": "<guid>"
            }
        }
    ]
}```

## Sample Response
```js
{
    "goals": [
        {
            "id": "SFMC-provided-GUID",
            "key": "user-defined-key",
            "name": "name of your goal",
            "description": "The description of this goal",
            "type": "ContactEvent",
            "outcomes": [],
            "arguments": {},
            "configurationArguments": {
                "criteria": "<FilterDefinition><ConditionSet Operator=\"AND\" ConditionSetName=\"Individual Filter Grouping\"><Condition Key=\"bulkevent_de.Locale\" Operator=\"Equal\"><Value><![CDATA[asdf]]></Value></Condition></ConditionSet></FilterDefinition>",
                "schemaVersionId": 122
            },
            "metaData": {
                "conversionValue": "1",
                "conversionUnit": "wholenumber",
                "conversionTypeId": 1,
                "isExitCriteria": true,
                "eventDefinitionKey": "My-Event-Key",
                "eventDefinitionId": "<guid>"
            }
        }
    ]
}
```

##Related Items
[Journey Specification](getting-started-spec.htm)