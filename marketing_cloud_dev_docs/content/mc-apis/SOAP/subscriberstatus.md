---
title: SubscriberStatus
---
The SubscriberStatus object specifies the status of a subscriber.

You can continue to send emails to a subscriber with a Bounced status until the subscriber changes to a Held status.

If a subscriber is being retrieved from a list, a Deleted status indicates that they have been deleted from the list. If a subscriber is being retrieved from the system and not a particular list, a Deleted status indicates that they have been deleted from the system.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Active</td><td>Enumeration</td><td>Indicates a subscriber can be sent emails. Allow a TriggeredSendDefinition to receive and send TriggeredSends.</td></tr><tr><td>Bounced</td><td>Enumeration</td><td>Specifies if email to a subscriber has returned with a bounce notification.</td></tr><tr><td>Deleted</td><td>Enumeration</td><td>SubscriberStatus: The subscriber has been deleted. TriggeredSendStatusEnum: SendDefinitionStatusEnum:</td></tr><tr><td>Held</td><td>Enumeration</td><td>Specifies if a subscriber has a status of held. The triggered send is held if three or more sequential message attempts bounced and the first and last sequential bounces were more than 14 days apart.</td></tr><tr><td>Unsubscribed</td><td>Enumeration</td><td>Indicates a subscriber has unsubscribed from a list.</td></tr></tbody></table>
