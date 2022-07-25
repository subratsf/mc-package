---
title: CreateOptions
---
The CreateOptions object uses the SaveOptions parameter to control the upsert functionality for Send, List, and Subscriber objects. This parameter accepts a NULL value

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>CallsInConversation</td><td>xsd:int</td><td>Represents the number of calls that must be received before the conversation support in the asynchronous API begins processing.</td></tr><tr><td>Client</td><td>ClientID</td><td>Specifies the account ownership and context of an object.</td></tr><tr><td>Container</td><td>ContainerID</td><td>Reserved for future use.</td></tr><tr><td>ConversationID</td><td>xsd:string</td><td>Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID.</td></tr><tr><td>Priority</td><td>xsd:byte</td><td>Defines the priority for a triggered send. Valid values include Low, Medium, and High.</td></tr><tr><td>QueuePriority</td><td>Priority</td><td>Reserved for future use.</td></tr><tr><td>RequestType</td><td>RequestType</td><td>Defines request as synchronous or asynchronous API.</td></tr><tr><td>SaveOptions</td><td>SaveOption[]</td><td>Allows upsert on selected objects.</td></tr><tr><td>ScheduledTime</td><td>xsd:dateTime</td><td>Keeps requests in asynchronous queue until time specified in the call.</td></tr><tr><td>SendResponseTo</td><td>AsyncResponse[]</td><td>Defines how responses are returned and under what conditions. Optional.</td></tr><tr><td>SequenceCode</td><td>xsd:int</td><td>Specifies the processing sequence of a multi-step conversation. This optional property requires the use of ConversationID.</td></tr></tbody></table>

##Related Items
* [Asynchronous Processing](asynchronous_processing.htm)
* [Create a Triggered Send Using the Async API](creating_a_triggered_send_using_the_async_api.htm)
