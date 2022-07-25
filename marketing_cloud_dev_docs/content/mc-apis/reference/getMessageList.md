---
data: <%= swaggerdoc %>
path: "/sms/v1/messageList/{id}/deliveries/{tokenId}"
method: "get"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/messageList/MzA6Nzg6MA/deliveries/c21NCNSDN2sMMWM2miosdjEHH
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```js
HTTP/1.1 200
{
    "message": "Test Delivery Receipt",
    "count": 1,
    "createDate": "2013-04-25T15:01:04.147",
    "completeDate": "2013-04-25T15:01:55.197",
    "status": "Finished",
    "tracking": [
        {
            "mobileNumber": "15555555510",
            "statusCode": "20",
            "message": "NA"
        }
    ]
}
```

Status values:

+ message - The message text sent in the SMS message
+ count - The total of mobile numbers included in the send request subtracting the number of unsubscribed recipients
+ createdDate - Date when the MessageContact send was submitted, returned in CST
+ createdDate - Date when the send completed, returned in CST
+ Status
  + Finished
  + Error
  + New
  + Queuing
  + Started

**Error Response**

If the request included an invalid messageId or tokenId, the API returns the appropriate error.
```js
HTTP/1.1 400 Bad Request
{
  "errors" : ["Message id cI217sdksi3 is not valid."]
}
```
<table class="table table-hover">
<tbody>
<tr>
	<th width="50%">Message</th>
	<th>Details</th>
</tr>
<tr>
	<td>Message id {0} is not valid.</td>
	<td>The messageID value provided in the URL was not in a valid format.</td>
</tr>
<tr>
<td>"Token id {0} is not valid."</td>
<td>The tokenId value provided in the URL was not in a valid format.</td>
</tr>
<tr>
<td>Token id {0} is not valid for this client.</td>
<td>The tokenId value provided is valid but was created for another client.</td>
</tr>
<tr>
<td>TokenId {0} is not valid for MessageId {1}.</td>
<td>The tokenId value provided is valid for your account but not for the MessageId provided.</td>
</tr>
<tr>
	<td>An unexpected error occurred, please contact Customer Support with reference id {0}.</td>
	<td>If this unexpected error is presented when making a call, please take note of the reference id value returned in the error and contact ExactTarget Global Support for more information.</td>
</tr>
</tbody>
</table>