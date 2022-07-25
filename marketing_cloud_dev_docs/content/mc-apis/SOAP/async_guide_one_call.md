---
title: Identify One Call Using CreateOptions and ConversationID
---
A request can have an external unique identifier, typically the ConversationID. If you don't specify a ConversationID, include the RequestID. Using this approach provides these added benefits:
* Results are available for calls using external identifiers
* Data is protected from replayed API calls

## C# Example
<gist data-gist="https://gist.github.com/mc-doc/8f7a43897caedc4c41a77f78d75e1951.js"></gist>

##PHP Example
<gist data-gist="https://gist.github.com/mc-doc/91da1234784eca3dda1ccb4ca57fa0d0.js"></gist>

##SOAP Envelope
<gist data-gist="https://gist.github.com/mc-doc/79db4fdb97e998942801915ea3a8e739.js"></gist>
