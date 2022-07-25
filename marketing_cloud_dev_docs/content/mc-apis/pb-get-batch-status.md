---
title: Get Batch Status
---
##Overview
This API resource checks the status of a batch of privacy settings changes. The call returns the status of each change made to the profiles.

##Method and Endpoint
`GET https://app.igodigital.com/api/v2/organization/{customer_mid}/privacy/{batch_id}`

##URL Parameters
<table class="table table-hover">
<thead align="left">
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>customer_mid</td>
<td>string</td>
<td>ID for the account.</td>
</tr>
<tr>
<td>batch_id</td>
<td>string</td>
<td>ID generated when creating a batch of privacy setting changes.</td>
</tr>
</tbody>
</table>

##Example Request
```
Host:  https://app.igodigital.com
GET	/api/v2/organization/12345678/privacy/af417962-c188-4110-adc2-7ea67590e254
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY
```
##Example Response
Status values for a change can be `initiated`, `success`, `failed` or `cancelled`.
```
[
    {
        "date_initiated": "2018-03-12 18:45:17 UTC",
        "profile_id": "hashed-id-01",
        "action": "add_do_not_track",
        "source": "api",
        "status": "success",
        "batch_id": "af417962-c188-4110-adc2-7ea67590e254",
        "date_completed": "2018-03-12 18:45:17 UTC"
    },
    {
        "date_initiated": "2018-03-12 18:45:17 UTC",
        "profile_id": "hashed-id-08",
        "action": "remove_do_not_profile",
        "source": "api",
        "status": "initiated",
        "batch_id": "af417962-c188-4110-adc2-7ea67590e254",
        "date_completed": "2018-03-12 18:45:17 UTC"
    }
]
```
