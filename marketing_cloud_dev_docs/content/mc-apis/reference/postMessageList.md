---
data: <%= swaggerdoc %>
path: "/sms/v1/messageList/{id}/send"
method: "post"
---
###Usage
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/messageList/MzA6Nzg6MA/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "TargetListIds": [
        "bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow"
    ],
    "OverrideTemplateTargetLists": "true",
    "OverrideTemplateExclusionLists": "false",
    "IgnoreExclusionLists": "true",
    "OverrideMessageText": "false",
    "ContentURL" : "http://image.exct.net/lib/fe6d15707662057c7411/m/1/dj_CC_AUS.jpg"
    "BlackoutWindow": {
        "UtcOffset": "-0500",
        "WindowStart": "1500",
        "WindowEnd": "2200"
    },
    "AllowDuplication": "false"
}
```
**Example Response**

If all values in the request are valid, the API returns a token that can be used to make a follow-up call to check the status of the request.
```js
HTTP/1.1 202 Accepted
{
  "tokenId": "c21NCNSDNsd222as85dj92j2sMMWM2miosdjEHH",
}
```

**Error Response**

If the request was not valid, the API returns a 400 response with details on the error. This example includes the following errors:

+ The keyword does not exist in the account
+ The mobile number includes hyphens
```js
HTTP/1.1 202 Accepted
{
  "tokenId": "c21NCNSDNsd222as85dj92j2sMMWM2miosdjEHH",
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
	<td>Message {0} is not valid for the client.</td>
	<td>The messageID value included in the URL does not match a valid value within the account.</td>
</tr>
<tr>
	<td>The Message must be in **Active** status in order to send.</td>
	<td>The message does not have a status of **Active/Scheduled**.</td>
</tr>
<tr>
	<td>The count of Target List IDs cannot be zero.</td>
	<td>Indicates that no valid Target List IDs were specified.</td>
</tr>
<tr>
	<td>Target list id [{0}] is invalid.</td>
	<td>Indicates that the Target List ID specified is invalid.</td>
</tr>
<tr>
	<td>TargetListIds is not applicable when OverrideTemplateTargetLists is false.</td>
	<td>Indicates that the OverrideTemplateTargetLists flag was not set to TRUE when specifying Target List IDs.</td>
</tr>
<tr>
	<td>Cannot override template target lists when no target list ids are specified.</td>
	<td>Indicates that no TargetListIDs were specified even though the OverrideTemplateTargetLists flag was set to TRUE.</td>
</tr>
<tr>
	<td>The count of Exclusion List IDs cannot be zero.</td>
	<td>Indicates that no valid Exclusion List IDs were specified.</td></tr>
<tr>
	<td>Exclusion list id [{0}] is invalid.</td>
	<td>Indicates that the Exclusion List ID specified is invalid.</td>
</tr>
<tr>
	<td>ExclusionListIds is not applicable when OverrideTemplateExclusionLists is false.</td>
	<td>Indicates that the OverrideTemplateExclusionLists flag was not set to TRUE when specifying Exclusion List IDs.</td>
</tr>
<tr>
	<td>Cannot override template exclusion lists when no exclusion list ids are specified.</td>
	<td>Indicates that no ExclusionListIDs were specified even though the OverrideTemplateExclusionLists flag was set to TRUE.</td>
</tr>
<tr>
	<td>Exclusion list ids cannot be specified when IgnoreExclusionLists is true.</td>
	<td>Indicates that IgnoreExclusionLists was set to TRUE even though ExclusionLists were specified.</td>
</tr>
<tr>
<td>
OverrideTemplateExclusionLists cannot be true when IgnoreExclusionLists is true.</td>
<td>
Indicates that IgnoreExclusionLists was set to TRUE even though OverrideTemplateExclusionLists was also set to TRUE
.</td>
</tr>
<tr>
<td>
Message is blank and no override message was provided.</td>
<td>
Indicates that the Message’s stored text is blank and no override was provided.</td>
</tr>
<tr>
<td>
Cannot override message text with a blank message.</td>
<td>
Indicates that the override flag is true but a blank or missing MessageText field was submitted.</td>
</tr>
<tr>
<td>
MessageText is not applicable when OverrideMessageText is false.</td>
<td>
Indicates that no MessageText is needed and should not be included in the request.  This is present to eliminate confusion and errant sends with the static message text.</td>
</tr>
<tr>
<td>
A UTC offset must be specified when using a blackout window.</td>
<td>
Indicates that no UTC time zone offset was provided in the BlackoutWindow object.</td>
</tr>
<tr>
<td>
{0} is not a valid UTC offset.</td>
<td>
Indicates that the UTC offset provided is not in the correct format.</td>
</tr>
<tr>
<td>
A window start time must be specified when using a blackout window.</td>
<td>
Indicates that no blackout window start time was provided in the BlackoutWindow object.</td>
</tr>
<tr>
<td>
{0} is not a valid blackout window start time.</td>
<td>
Indicates that the blackout window start time is not in the correct format.</td>
</tr>
<tr>
<td>
A window end time must be specified when using a blackout window.</td>
<td>
Indicates that no blackout window end time was provided in the BlackoutWindow object.</td>
</tr>
<tr>
<td>
{0} is not a valid blackout window end time.</td>
<td>
Indicates that the blackout window end time is not in the correct format.</td>
</tr>
<tr>
<td>
{0} is not a valid send time (yyyy-MM-dd HH:mm).</td>
<td>
Indicates that the send time is not in the proper format.</td>
</tr>
</tbody>
</table>