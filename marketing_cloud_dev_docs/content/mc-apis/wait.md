---
title: Wait Format
---

The wait activity is used to indicate a period of time that a journey should pause before continuing on to process the subsequent outcome activity. This activity type cannot be used in a custom activity.

{{md 'interaction-spec-jb-dev'}}

## Helpful Hints
* Valid values for the <samp class="codeph nolang">configurationArguments.waitUnit</code> property are minutes, days, hours, weeks, or months.

## Sample Request
```js
{
    "key": "wait-1",
    "name": "My Wait Activity",
    "type": "Wait",
    "outcomes": [{
            "key":"wait-1-outcome-1",
            "next":"<key of next activity>"
    }],
    "configurationArguments": {
         "waitDuration": "1",
         "waitUnit":"weeks",
         "specifiedTime": "00:00",
         "timeZoneId": "<one of the valid timezones listed below>"
    }
}
```

## Sample Response
```js
{
    "id": "<Marketing Cloud provided GUID>",
    "key": "wait-1",
    "name": "My Wait Activity",
    "type": "Wait",
    "outcomes": [{
            "key":"wait-1-outcome-1",
            "next":"<key of next activity>"
    }],
    "configurationArguments": {
         "waitDuration": "1",
         "waitUnit":"weeks",
    }
}
```

## Compatibility Information

This information is provided for developers upgrading their activities from the legacy format to the Journey Spec.

<table class="table table-hover">
<thead align="left">
<tr>
<th>0.5 Value</th>
<th>1.0 Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>duration</td>
<td>waitDuration</td>
</tr>
<tr>
<td>durationUnits</td>
<td>waitUnit</td>
</tr>
<tr>
<td>specifiedTime</td>
<td>specificTime</td>
</tr>
<tr>
<td>timeZone</td>
<td>timeZoneId</td>
</tr>
</tbody>
</table>

## Valid Timezones for Use with Wait Activities
* Afghanistan Standard Time
* Alaskan Standard Time
* Arab Standard Time
* Arabian Standard Time
* Arabic Standard Time
* Argentina Standard Time
* Atlantic Standard Time
* AUS Central Standard Time
* AUS Eastern Standard Time
* Azerbaijan Standard Time
* Azores Standard Time
* Canada Central Standard Time
* Cape Verde Standard Time
* Caucasus Standard Time
* Cen. Australia Standard Time
* Central America Standard Time
* Central Asia Standard Time
* Central Brazilian Standard Time
* Central Europe Standard Time
* Central European Standard Time
* Central Pacific Standard Time
* Central Standard Time
* Central Standard Time (Mexico)
* China Standard Time
* Dateline Standard Time
* E. Africa Standard Time
* E. Australia Standard Time
* E. Europe Standard Time
* E. South America Standard Time
* Eastern Standard Time
* Egypt Standard Time
* Ekaterinburg Standard Time
* Fiji Standard Time
* FLE Standard Time
* Georgian Standard Time
* GMT Standard Time
* Greenland Standard Time
* Greenwich Standard Time
* GTB Standard Time
* Hawaiian Standard Time
* India Standard Time
* Iran Standard Time
* Israel Standard Time
* Jordan Standard Time
* Korea Standard Time
* Mauritius Standard Time
* Mid-Atlantic Standard Time
* Middle East Standard Time
* Montevideo Standard Time
* Morocco Standard Time
* Mountain Standard Time
* Mountain Standard Time (Mexico)
* Myanmar Standard Time
* N. Central Asia Standard Time
* Namibia Standard Time
* Nepal Standard Time
* New Zealand Standard Time
* Newfoundland Standard Time
* North Asia East Standard Time
* North Asia Standard Time
* Pacific SA Standard Time
* Pacific Standard Time
* Pacific Standard Time (Mexico)
* Pakistan Standard Time
* Romance Standard Time
* Russian Standard Time
* SA Pacific Standard Time
* SA Western Standard Time
* Samoa Standard Time
* SE Asia Standard Time
* Singapore Standard Time
* South Africa Standard Time
* Sri Lanka Standard Time
* Taipei Standard Time
* Tasmania Standard Time
* Tokyo Standard Time
* Tonga Standard Time
* US Eastern Standard Time
* US Mountain Standard Time
* Venezuela Standard Time
* Vladivostok Standard Time
* W. Australia Standard Time
* W. Central Africa Standard Time
* W. Europe Standard Time
* West Asia Standard Time
* West Pacific Standard Time
* Yakutsk Standard Time

##Related Items
[Journey Specification](getting-started-spec.htm)
