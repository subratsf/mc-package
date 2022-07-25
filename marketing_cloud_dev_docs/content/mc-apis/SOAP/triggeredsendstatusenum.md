---
title: TriggeredSendStatusEnum
---
The TriggeredSendStatusEnum object defines the status of a triggered send.

##Properties
<table class="table table-hover"><thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead><tbody>
<tr><td>Active</td><td>Enumeration</td><td>Represents a triggered send that is currently sending messages. Allow a TriggeredSendDefinition to receive and send TriggeredSends.</td></tr>
<tr><td>Canceled</td><td>Enumeration</td><td>Indicates the triggered send exists within the system but does not accept any new triggered send calls. This status represents a triggered send with sends that were canceled by the account owner. This property relates to the archive status of a triggered send in Marketing Cloud. Once a triggered send has this status, it cannot revert to active or inactive status.</td></tr>
<tr><td>Deleted</td><td>Enumeration</td><td>SubscriberStatus: The subscriber has been deleted from Marketing Cloud. TriggeredSendStatusEnum: SendDefinitionStatusEnum:</td></tr>
<tr><td>Inactive</td><td>Enumeration</td><td>Indicates a subscriber address is not currently being used.</td></tr>
<tr><td>Moved</td><td>Enumeration</td><td>Indicates the triggered send moved to a new location in Marketing Cloud.</td></tr>
<tr><td>New</td><td>Enumeration</td><td>Indicates the triggered send status of new.</td></tr></tbody></table>
