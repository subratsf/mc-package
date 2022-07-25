---
title: Random Split Format
---

The random split activity allows a marketer to create a multiple outcomes that contacts are randomly siphoned within a journey. This activity type cannot be used in a custom activity.

##Helpful Hints
* The percentages must add up to 100 and are represented as only positive integers greater than zero and less than 100.
* The outcome of this decision affects goal statistics.

{{md 'interaction-spec-jb-dev'}}

## Sample Request
```js
{
    "key":"Random-Split-1",
    "type":"randomSplit",
    "outcomes":[
        {
            "next":"send-sms",
            "arguments":{
                     "percentage":90
            }
        },
        {
            "next":null,
            "arguments":{
                     "percentage":10
            }
        }
    ]
}
```

## Sample Response
```js
{
    "id": "<Marketing Cloud provided GUID>",
    "key":"Random-Split-1",
    "type":"randomSplit",
    "outcomes":[
        {
            "next":"send-sms",
            "arguments":{
                     "percentage":90
            }
        },
        {
            "next":null,
            "arguments":{
                     "percentage":10
            }
        }
    ]
}
```
##Related Items
[Journey Specification](getting-started-spec.htm)
