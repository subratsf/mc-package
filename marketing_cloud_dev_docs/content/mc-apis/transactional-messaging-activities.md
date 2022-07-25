---
title: Transactional Messaging API Activities
---

When you send a message via the Transactional Messaging API, it goes through these steps.
1. Your system, outside of Marketing Cloud, sends a transactional message using the Marketing Cloud Transactional Messaging API.
1. Information from the API request is applied to the transactional message definition. This step personalizes the message per recipient, assigns recipients to a contact list, and saves request parameters to a data extension, if used.
1. The Event Notification Service sends the status of the message via a webhook to another system outside of Marketing Cloud.

<img src="images/transactional-messaging-activities.png" class="img-responsive" style="margin: 25px 0;" />
