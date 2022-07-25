---
title: Callback Handling for Asynchronous Calls
---
Marketing Cloud recommends using an HTTPPost callback to return the results of asynchronous API requests, rather than receiving the results in an email.

To secure your public callback URL:
1. Submit the HTTPPost using HTTPS.
2. Allowlist Marketing Cloud IP addresses.

Retrieve the call's status using one of these actions:
* Set the asynchronous calls to return an HTTP POST or email message after processing.
* Perform a retrieve on the ResultMessage object and filter by the ResultID of the original request.

To use an HTTPPost callback to return the results of asynchronous API requests, set <samp class="codeph nolang">SendResponseTo.ResponseType</samp> to <samp class="codeph nolang">HTTPPost</samp> and specify a publicly accessible URL for <samp class="codeph nolang">SendResponseTo.ResponseAddress</samp>. The callback URL receives a standard HTTPPost request with the <samp class="codeph nolang">application/x-www-form-urlencoded</samp> content type and these fields:
<ul><li>RequestID</li><li>ConversationID</li><li>OverallStatusCode</li><li>StatusCode</li><li>StatusMessage</li><li>ErrorCode</li><li>RequestType</li><li>ResultType</li><li>ResultDetailXML</li><li>SequenceCode</li></ul>

Unlike synchronous API calls, all successful asynchronous calls return a status of OK. This status indicates that the API received the call and it was queued. The callback does not indicate whether the call executed or failed or include unnecessary fields. For example, StatusMessage or ErrorCode values aren’t included for successful calls.
>If an HTTPPost throws an exception, the system logs an error and stops the process. The system does not retry the call.

##Reduce the Number of Callbacks
The callbacks you receive correspond to the number of calls you make. If you send 500 async SOAP calls, the callback URL is called 500 times. To receive fewer callbacks, you have a few options:
* Send multiple objects in a single call.
* To get a callback only if an error occurs, modify the RespondWhen setting to be RespondWhen.OnError.
* To capture only successful callbacks, perform a retrieve on the ResultItem and ResultMessage objects, and return only the RequestID and OverallStatusCode.

##Sample SOAP Envelope - Retrieve ResultMessage Object
<gist data-gist="https://gist.github.com/mc-doc/795d125a0a3ee8f9e00baf4ed035ed30.js"></gist>

##Sample SOAP Envelope - Return HTTP POST
<gist data-gist="https://gist.github.com/mc-doc/e3c786b4758e200751154e238bf0a977.js"></gist>

##Related Items
* [Allowlist Marketing Cloud IP](https://help.salesforce.com/articleView?id=mc_es_ip_addresses_for_inclusion_on_whitelists.htm&type=5)
