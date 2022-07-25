---
title: Contact Event
---

The event is used as the default entry event to provide a boolean check against a contact's attributes, that determines if a contact should be injected into a journey. This is the same check used in the decision split activity.

## Journey Specification Format
The activity must be formatted as specified below. The following JSON object will be included in the <samp class="codeph nolang">triggers</samp> array of a journey, as defined in the Journey Specification.

## Helpful Hints
The <samp class="codeph nolang">schemaVersionId</samp> comes from the GET /schema resource.

## Sample Request
```js
{
    "arguments": {},
    "configurationArguments": {
        "criteria": "<filterXML>",
        "schemaVersionId": 125
    },
    "description": "The description for the entry event",
    "key": "<user-defined-key-for-this-entry-event-OR-app-extension-key>",
    "metaData": {
        "configurationDescription": "",
        "eventDefinitionId": "<GUID>",
        "eventDefinitionKey": "<event-key-from-entry-event-admin>"
    },
    "name": "The name of this entry event",
    "outcomes": [],
    "type": "Event"
}
```

## Sample Response
```js
{
    "arguments": {},
    "configurationArguments": {
        "criteria": "<filterXML>",
        "schemaVersionId": 125
    },s
    "description": "The description for the entry event",
    "id": "<unique-GUID-provided-by-SFMC>",
    "key": "<user-defined-key-for-this-entry-event>",
    "metaData": {
        "configurationDescription": "",
        "eventDefinitionId": "<GUID>",
        "eventDefinitionKey": "<event-key-from-entry-event-admin>"
    },
    "eventDefinitionId": "<GUID>",
    "eventDefinitionKey": "<event-key-from-entry-event-admin>",
    "name": "The name of this entry event",
    "outcomes": [],
    "type": "Event"
}
```

##Related Items
* [Journey Specification](getting-started-spec.htm)
* [GET /schema Resource](schemasCollection.htm)