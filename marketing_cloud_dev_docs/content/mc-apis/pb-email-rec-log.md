---
title: Download Email Recommendation Log
---
Marketers can retrieve a report listing the count of email recommendations by product code. For a given date range, this report lists each product code and the number of the times that product was recommended for each email recommendation configuration, and, optionally, job id. To know which job id a recommendation is associated with, the email recommendation image must have a URL parameter named `sfmc_j`. The email job id is the parameter's value.

>Before attempting to run or download the report, turn it on in Personalization Builder.

##Parameters
To download an email recommendation log, you need these values.
<table class="table table-hover">
<thead align="left">
<tr>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>MID</td>
<td>The account MID that contains the data.</td>
</tr>
<tr>
<td>api_key</td>
<td>A valid API Key for that MID.</td>
</tr>
<tr>
<td>start_date</td>
<td>Start date for the report.</td>
</tr>
<tr>
<td>end_date</td>
<td>End date for the report.</td>
</tr>
<tr>
<td>aggregation_method</td>
<td>The only option available for this report is `day`. Personalization Builder rolls up counts per day.</td>
</tr>
</tbody>
</table>

##Example
```
curl --header 'Content-Type: application/json' -XPOST https://
app.igodigital.com/api/v2/reporting/report/displays_by_item.csv -d '{
"mid": "1314420",
"api_key": "<redacted>",
"aggregation_method": "day",
"start_date": "2017-10-29",
"end_date": "2017-11-29"
}' > report.csv
```

##Related Items
[Enable Tracking for Personalization Builder Report](https://help.salesforce.com/articleView?id=mc_pb_displays_by_item.htm&type=5)
