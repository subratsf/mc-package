---
title: Single-Send Journeys
---

There are two types of Journey Builder sends:
* Multi-step journeys
* Single-send journeys

Most use cases for interacting with journeys via API involve multi-step journeys. Multi-step journeys enable you to create and manage customer journeys through a series of interactions with your brand. These journeys can include multiple channels and customized journey paths based on customer interactions or attributes. Multi-step journeys can also have different activities and versions. The Journey Builder developer documentation is based on multi-step journeys.

You can employ single-send journeys for simple, single-use journeys that marketers create in Journey Builder. However, you can interact with single-send journeys via API, if required, by modifying the journey specification. Goals, versions, and recurring scheduling are not supported for single-send journeys. Email, SMS, and push notifications are the only activities available for single-send journeys.

##Specification for Single-Send Journeys

To set up a single-send journey via API, follow the [journey specification](getting-started-spec.htm), with these key modifications:
* In the journey object, use <samp class="codeph nolang">Quicksend</samp> for the definitionType parameter.
* In the journey object, for the channel parameter, use one of the following values: <samp class="codeph nolang">email</samp> for email, <samp class="codeph nolang">push</samp> for push notifications, or <samp class="codeph nolang">sms</samp> for SMS messages.
* In the activity object, for the type parameter in the activities list, use one of the following values: <samp class="codeph nolang">emailv2</samp> for email, <samp class="codeph nolang">pushnotificationactivity</samp> for push notifications, or <samp class="codeph nolang">smssync</samp> for SMS messages. You can define only one activity.
* In the trigger portion of the event object, use <samp class="codeph nolang">EmailAudience</samp> as the type parameter for email messages and SMS messages, and use <samp class="codeph nolang">ContactAudience</samp> as the type parameter for push notifications. <samp class="codeph nolang">EmailAudience</samp> is the same as the data extension entry source in Journey Builder.
* Don’t include goals, versioning, or a recurrent schedule.
