---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts/actions/delete?type=listReference"
method: "post"
---

###Usage

This request deletes contacts contained within the contact data model or the specified list or data extension. You must identify both the external key and the type of list or data extension. At the Enterprise account level, this call deletes either the contact record and all attributes using the ContactAndAttributes property. When the call occurs in a channel-specific context, the AttributesOnly property specifies deletion of only channel-related information, such as mobile numbers for MobileConnect.

This asynchronous process places the deletion call in a queue for processing. The queue processes only one deletion call at a time, and each process can take several hours to complete.

When deleting from a sendable data extension, the call limits each process to one million rows.

This route deletes contact information from the account, including the Email, MobileConnect, and MobilePush apps. This deletion occurs at the enterprise level.

A successful call suppresses any sends or other activities to the specified contacts for a specified number of days. Users may still see the contact record in Marketing Cloud, but you cannot include these suppressed contacts in any activities. After the specified number of days days, Marketing Cloud deletes the contact from all lists and sendable data extensions. You cannot restore any contact information associated with this delete process. Any subscriberID number assigned to the contact can be recycled in the future. For Enterprise accounts, this process deletes all information at the Enterprise level.

>To configure suppression number values, use the [Configure Settings for Deleting Contacts](ContactsDeleteConfigStatus.htm) resource.

**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/contacts/actions/delete?type=listReference
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
 "deleteOperationType": "ContactAndAttributes",
 "targetList": {
   "listType": {
     "listTypeID": 3
   },
   "listKey": "ContactListDeleteSource_as_DataExtension"
 },
 "deleteListWhenCompleted": false,
 "deleteListContentsWhenCompleted": false
}
```

**Example Response**
```js
{
  "targetListInformation": {
    "listName": {
      "value": "ContactListDeleteSource_as_DataExtension"
    },
    "listItemType": "ContactReference",
    "operationSupport": {
      "canDeleteList": true,
      "canDeleteListContents": true
    },
    "listType": {
      "listTypeID": 3,
      "listTypeKey": "DataExtension"
    },
    "listIdentifier": "eeced50e-4f87-4e89-badf-dc3a2768ca32",
    "listKey": "ContactListDeleteSource_as_DataExtension"
  },
  "operationInitiated": true,
  "operationID": 35,
  "requestServiceMessageID": "ea2dc464-04da-4d5c-8dcf-2be4c84178fd",
  "responseDateTime": "2017-08-21T14:39:32.0375725-04:00",
  "resultMessages": [],
  "serviceMessageID": "328386d3-151c-4bb9-b4d1-394cd3042fb0"
}
```

##Related Items
* [GET /contacts/v1/contacts/deleteOperations](getDeleteOptions.htm)
