---
title: Event Definition Schema
---

When creating an event definition, the API uses the information contained in the <samp class="codeph nolang">schema</samp> object to create a data extension associated with the event definition. The schema defines the name, nullability, and default values of the fields to be included in the data extension.

##Example JSON Schema Definition
```json
{
"schema": {
      "sendableCustomObjectField" : "contactKey",
      "SendableSubscriberField" : "contactKey",
        "fields": [
            {
                "name": "firstName",
                "dataType": "text",
                "maxLength": "100",
                "isNullable": false,
                "defaultValue": ""
            },
            {
                "name": "contactKey",
                "dataType": "text",
                "maxLength": "100",
                "isNullable": false,
                "defaultValue": ""
            }
        ]
    }
}
```

##Schema Fields

The event definition schema must specify a subscriber key field. This can be a subscriber key or email address, depending on the account type. The field specified will be used as the contact key when invoking journeys.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>SendableCustomObjectField</td>
<td>This field maps to the subscriber key (or subscriber id/email address). This field should hold, in most cases, the contact key. Journey Builder uses this field to populate the contact key when invoking journeys. Journeys require a contact key.</td>
</tr>
<tr>
<td>SendableSubscriberField</td>
<td>Valid options are SubscriberKey, SubscriberId or EmailAddress. Most API implementations use the SubscriberKey value.</td>
</tr>
</tbody>
</table>

##Related Items
[Supported Schema Field Types](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_types.htm&type=5)
