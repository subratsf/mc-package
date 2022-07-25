---
title: Data Extension Update Activity Format
---

The data extension update activity is used to modify the contact model attribute and data extension values at runtime. This activity type cannot be used in a custom activity.

{{md 'interaction-spec-jb-dev'}}

## Sample Request
```js
{
    "key": "data-extension-update-1",
    "name": "My Data Extension Update 1",
    "type": "DataExtensionUpdate",
    "outcomes": [
        {
            "key": "dataUpdate-outcome-1",
            "next": "<key of next activity>"
        }
    ],
    "arguments": {
        "value": "some value"
    },
    "configurationArguments": {
        "dataExtensionId": "<data extension id>",
        "field": "<field id>"
    }
}
```

## Sample Response
```js
{
    "id": "<Marketing Cloud provided GUID>",
    "key": "data-extension-update-1",
    "name": "My Data Extension Update 1",
    "type": "DataExtensionUpdate",
    "outcomes": [
        {
            "key": "dataUpdate-outcome-1",
            "next": "<key of next activity>"
        }
    ],
    "arguments": {
        "value": "some value"
    },
    "configurationArguments": {
        "dataExtensionId": "<data extension id>",
        "field": "<field id>"
    }
}
```
##Related Items
[Journey Specification](getting-started-spec.htm)
