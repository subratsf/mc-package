---
data: <%= reference.dataextension.functions.ClaimRowValue %>
---
###Usage
The data extensions used with this function must possess the following characteristics:

* A Boolean column that indicates a claimed row or not (a true value indicates the row as claimed)
* An index on the Boolean and &#95;CustomObjectKey columns to allow for an efficient lookup of claimed rows
* One or more key columns used to identify the object or recipient claiming the row value, which requires a nullable column
* An index on the key column or columns to allow an efficient lookup of claimed rows
* The application automatically sets indexes on sendable data extensions, and you should contact your Marketing Cloud account executive to set indexes for non-sendable data extensions.

You can also include an optional column to receive a timestamp at the time the application executes the ClaimedRow() function. You must name this column ClaimedDate and assign it the Date data type. When this column exists, the ClaimedDate value in that row receives the timestamp for when that row was claimed.

You cannot overwrite or delete the data extension with a claimed status.
The sample below retrieves the same information from the same row any time a specific job sends to a specific recipient.

```
<table class="table table-hover">
<tr>
<td>Coupon Code (ClaimRowValue no default)</td>
<td>%%= ClaimRowValue('Coupon', 'CouponCode', 'IsClaimed', , 'JobID', JobID, 'ListID', ListID, 'SubscriberID', SubscriberID) =%%</td>
</tr>
</table>
The sample below retrieves a distinct row each time a specific job sends to a specific recipient. If the function does not find an appropriate value, it uses the provided default information.
<table class="table table-hover">
<tr>
<td>Coupon Code (ClaimRowValue with default)</td>
<td>%%= ClaimRowValue('Coupon', 'CouponCode', 'IsClaimed', 'None Available', 'JobID', JobID, 'ListID', ListID, 'BatchID', _JobSubscriberBatchID, 'SubscriberID', SubscriberID) =%%</td>
</tr>
</table>
```

Use the example data extension below as a model for the data extension you use to store and claim rows:

<table class="table table-hover">
<thead align="left">
<tr>
<th>Column Name</th>
<th>Type</th>
<th>Null</th>
<th>Default Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>_CustomObjectKey</td>
<td>Number</td>
<td>No</td>
<td>Identity</td>
</tr>
<tr>
<td>CouponCode</td>
<td>Text(30 character limit)</td>
<td>No</td>
<td></td>
</tr>
<tr>
<td>IsClaimed</td>
<td>Boolean</td>
<td>No</td>
<td>0</td>
</tr>
<tr>
<td>JobID</td>
<td>Number</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>ListID</td>
<td>Number</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>BatchID</td>
<td>Number</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>SubscriberID</td>
<td>Number</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>EmailAddress</td>
<td>Text(100 character limit)</td>
<td>Yes</td>
<td></td>
</tr>
<tr>
<td>ClaimedDate</td>
<td>Date</td>
<td>Yes</td>
<td></td>
</tr>
</tbody>
</table>
