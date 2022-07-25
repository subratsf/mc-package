---
title: REST (Custom) Activity Format
---

The REST activity can be used to extend Journey Builder functionality. It works by posting request bodies to external endpoints.

{{md 'interaction-spec-jb-dev'}}

## Helpful Hints
* The outcome of this decision affects goal statistics.
* If the <samp class="codeph nolang">useJwt</samp> property is set to true for any of the REST activity's methods, then a JWT for the account is generated, encoded, and sent as the POST body.
* If the <samp class="codeph nolang">execute</samp> method timeout is greater than the maximum allowed for the account, then use the maximum timeout value as configured in the account settings.
* The maximum timeout for the custom activity is 100,000 milliseconds. See [Custom Activity Configuration](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-config.htm) for more details.

## Compatibility Information

This information is provided for developers upgrading their activities from the legacy format to the Journey Specification.

<table class="table table-hover">
<thead align="left">
<tr>
<th>0.5 SerializedObject</th>
<th>1.0 Serialized Object</th>
</tr>
</thead>
<tbody>
<tr>
<td>execute.uri</td>
<td>configurationArguments.url</td>
</tr>
<tr>
<td>execute.verb</td>
<td>configurationArguments.method</td>
</tr>
<tr>
<td>execute.body</td>
<td>arguments.execute-body</td>
</tr>
<tr>
<td>execute.format</td>
<td>not supported (default is JSON)</td>
</tr>
<tr>
<td>execute.useJwt</td>
<td>configurationArguments.useJwt</td>
</tr>
<tr>
<td>execute.timeout</td>
<td>configurationArguments.timeout</td>
</tr>
<tr>
<td>execute.inArguments</td>
<td>arguments.executeInArguments</td>
</tr>
<tr>
<td>execute.headers</td>
<td>arguments.header</td>
</tr>
</tbody>
</table>

## Sample Activity
```js
{
    "key": "rest-1",
    "name": "My Rest Activity",
    "type": "Rest",
    "metaData": {
        "flowDisplayName":"myFlow" // Displayed in the UI
    },
    "outcomes": [
        {
            "key": "rest-1-outcome-1",
            "next": "<key of next activity>"
        }
    ],
    "configurationArguments": {
        "save": {
            "url": "https://www.example.com/endpoint",
            "useJwt": false,
            "timeout": 3000,
            "headers": "https://www.example.com/endpoint",
            "body":"Hello"
        },
        "validate": {
            "url": "https://www.example.com/endpoint",
            "useJwt": false,
            "timeout": 3000,
            "headers": "https://www.example.com/endpoint",
            "body":"Hello"
        },
        "publish": {
            "url": "https://www.example.com/endpoint",
            "useJwt": false,
            "timeout": 3000,
            "headers": "https://www.example.com/endpoint",
            "body":"Hello"  
        }
    },
    "arguments": {      
        "execute": {
            "url": "https://www.example.com/endpoint",
            "headers": "",
            "inArguments": [{
                 "myArgument":"{{ Contact.FirstName }}"
             }],
            "body":"Hello {{ Contact.FirstName }}. This field kept for backward compatibility.", // notice the Data Binding
            "method": "POST",
            "useJwt": true,
            "timeout": 3000
        }
    }
}
```

##Related Items
* [Custom Activities](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/creating-activities.htm)
* [Encode Custom Activities Using a JWT](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt.htm)
* [Journey Specification](getting-started-spec.htm)
