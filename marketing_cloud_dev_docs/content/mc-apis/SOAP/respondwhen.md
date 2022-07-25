---
title: RespondWhen
---
The RespondWhen object sends a response via email or HTTP post for an asynchronous call. You can send to separate URLs for different actions as necessary.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Always</td><td>Enumeration</td><td>Always send the response. The response sends whether the processing completes successfully or with an error status.</td></tr><tr><td>Never</td><td>Enumeration</td><td>Specifies that a response is never sent for an asynchronous process.</td></tr><tr><td>OnCallComplete</td><td>Enumeration</td><td>Specifies that a response is sent when an asynchronous call is complete.</td></tr><tr><td>OnConversationComplete</td><td>Enumeration</td><td>Specifies that a response is sent when an asynchronous conversation is complete.</td></tr><tr><td>OnConversationError</td><td>Enumeration</td><td>Specifies that a response is sent when an asynchronous conversation returns an error.</td></tr><tr><td>OnError</td><td>Enumeration</td><td>Specifies that a response is sent when an asynchronous process returns an error.</td></tr></tbody></table>
