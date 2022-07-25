---
title: RequestType
---
The RequestType object specifies type of API request.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Asynchronous</td><td>Enumeration</td><td>Specifies that the API request is processed asynchronously. The request is queued and a response is returned to the caller immediately. Once the request has been processed, if the caller has supplied information in the SendReponseTo array of the Options, the actual results of the request are returned to the caller.</td></tr><tr><td>Synchronous</td><td>Enumeration</td><td>Specifies that the process is processed synchronously.</td></tr></tbody></table>
