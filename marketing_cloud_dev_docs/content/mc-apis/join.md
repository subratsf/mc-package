---
title: Join Activity Format
---

Join is not actually an activity. Joins are a convention of outcomes, but are represented in the journey as activities to make them easier to edit. Multiple outcomes with the same <samp class="codeph nolang">next</samp> value, pointing to the same activity, constitutes a join. Joins are used by marketers to to easily join branches back together. This activity type cannot be used in a custom activity.

{{md 'interaction-spec-jb-dev'}}

## Sample Request
```js
{
    "key": "Wait4",
    "type": "Wait",
    "configurationArguments": {
        "waitDuration": 2,
        "waitUnit": "DAYS"
    },
    "outcomes": [
        {
            "next": "Email6"
        }
    ]
},
{
    "key": "Email5",
    "type": "EMAILV2",
    "outcomes": [
        {
            "next": "Email6"
        }
    ]
}
```

## Sample Response
```js
{
    "key": "Wait4",
    "type": "Wait",
    "configurationArguments": {
        "waitDuration": 2,
        "waitUnit": "DAYS"
    },
    "outcomes": [
        {
            "next": "Email6"
        }
    ]
},
{
    "key": "Email5",
    "type": "EMAILV2",
    "outcomes": [
        {
            "next": "Email6"
        }
    ]
}
```
##Related Items
[Journey Specification](getting-started-spec.htm)
