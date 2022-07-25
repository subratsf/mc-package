---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/actions/delete?type=ids"
method: "post"
---
###Usage

This request deletes contacts specified by the contact ID values passed in the <samp class="codeph nolang">values</samp> array.

This asynchronous process places the deletion call in a queue for processing. The queue processes only one deletion call at a time, and each process can take several hours to complete.

When deleting from a sendable data extension, the call limits each process to one million rows.

This route deletes contact information from the account, including the Email, MobileConnect, and MobilePush apps. This deletion occurs at the enterprise level.

A successful call suppresses any sends or other activities to the specified contacts for a specified number of days. Users may still see the contact record in Marketing Cloud, but you cannot include these suppressed contacts in any activities. After the specified number of days days, Marketing Cloud deletes the contact from all lists and sendable data extensions. You cannot restore any contact information associated with this delete process. Any subscriberID number assigned to the contact can be recycled in the future. For Enterprise accounts, this process deletes all information at the Enterprise level.

>To configure suppression number values, use the [Configure Settings for Deleting Contacts](ContactsDeleteConfigStatus.htm) resource.

**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts/actions/delete?type=ids
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "values": [12345678, 12345679],
  "DeleteOperationType": "ContactAndAttributes"
}
```
**Example Response**
```js
{
  "operationInitiated": true,
  "operationID": 2,
  "requestServiceMessageID": "21d0d10d-a15a-413c-bc3e-8b43b185e551",
  "resultMessages": [],
  "serviceMessageID": "acb87f67-ec49-42af-a0bb-987ac6451560"
}
```
