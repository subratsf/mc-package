---
title: How Journeys Start
---

## Understanding Entry Events

Events initiate journeys in Journey Builder. Events are typically, but not exclusively, fired by:
*   Contact actions in response to marketing messages
*   Data-modifications to a contact's profile information
*   Changes to a contact's attributes
*   Administrator or Marketer actions
*   Service-provider broadcasts of contact event data

Events and journeys have a close relationship. When a contact takes action with a marketing message or system, Marketing Cloud creates an event instance with associated properties. When a marketer defines an entry event for a new journey, he or she is defining the relationship between the journey and the event.

## API Workflow

To illustrate why an event instance and its properties are so important, let's describe what happens when the event instance and its associated properties are sent to the Journey Builder API:
1. Journey Builder looks up the contact's ID in the contact application to verify that the contact ID supplied in the event properties exists in your account.
2. The appropriate entry event is filtered for use based on the event ID, which the event and its properties supplied. 
3. The event instance and its properties are then passed to the contact filter criteria to verify that the event instance meets the entry conditions for the journey.
4. If the event instance and its properties satisfy the contact filter criteria, Journey Builder executes a particular journey's activities for this contact.
