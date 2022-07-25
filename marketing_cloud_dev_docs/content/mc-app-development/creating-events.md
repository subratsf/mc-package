---
title: Considerations for Building Custom Events
---

Custom events in Journey Builder use the same framework as activities, so they follow the same structure. See Build Custom Activities for detailed steps. Events have a few key differences:

* A `schema` or `dataExtensionId` must be passed on the top level of the request body passed to Journey Builder via `updateEvent`. You may also set these defaults in the event's config.json.
* No height or width can be defined under `userInterfaces.configModal`, as the custom event does not appear in its own modal, but rather as part of a larger workflow that already has a defined size.
* Define a `summary` array under `userInterfaces`. This is a collection of key-value pairs that maps to labels and values on the summary step of the event configuration modal and the event summary on the canvas. These key-value pairs can be used for internationalization.
* If using a transaction key to create a unique identifier in a journey, add the transaction key to the custom event’s config.json under metaData.

##Related Items
* [Build Custom Activities and Events](creating-activities.htm)
