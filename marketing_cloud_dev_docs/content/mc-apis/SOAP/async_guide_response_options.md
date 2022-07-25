---
title: Response Options
---
All response options allow you to get your response’s raw XML. To process the XML in an object-oriented environment, deserialize it. Your web server must have the capacity to handle the expected call volume. We make only one attempt at sending the notification to each URL.
* [HTTP Post](#http-post)
* [Retrieve](#retrieve)
* [Email](#email)

##HTTP Post
HTTP Post requires a public URL.

###HTTP Request Parameters
These parameters are sent as part of the HTTP Post.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>RequestID</td>
<td>The unique identifier of the request. This value is returned the first time the call is made.</td>
</tr>
<tr>
<td>ConversationID</td>
<td>The ConversationID the request is part of. If no conversation is used, this value is blank.</td>
</tr>
<tr>
<td>OverallStatusCode</td>
<td>The value that is returned in a synchronous call.</td>
</tr>
<tr>
<td>StatusCode</td>
<td>Identical to OverallStatusCode.</td>
</tr>
<tr>
<td>StatusMessage</td>
<td>The value that is returned in the Status property in a synchronous call.</td>
</tr>
<tr>
<td>ErrorCode</td>
<td>The first ErrorCode in the result. If no errors were found, this value is blank.</td>
</tr>
<tr>
<td>RequestType</td>
<td>The type of request. Always returns Asynchronous.</td>
</tr>
<tr>
<td>ResultType</td>
<td>Same as RequestType.</td>
</tr>
<tr>
<td>ResultDetailXML</td>
<td>The XML serialized results if requested.</td>
</tr>
<tr>
<td>SequenceCode</td>
<td>The SequenceCode specified. If no conversation was used, this value is blank.</td>
</tr>
<tr>
<td>SendResponseTo.RespondWhen</td>
<td>The event to subscribe the response to:<ul><li>OnCallComplete (request-level) and OnConversationComplete handle both success and error conditions</li><li>OnError (request-level) and OnConversationError handle only error conditions</li><li>Always is deprecated in favor in OnCallComplete (request-level)</li><li>Never is the default condition</li></ul></td>
</tr>
<tr>
<td>SendResponseTo.ResponseAddress</td>
<td>The public callback URL to POST to.</td>
</tr>
<tr>
<td>SendResponseTo.IncludeResults</td>
<td>Specify true or false to control whether the XML serialized Result objects are returned. If not specified or set to false, the HTTP post is just a notification.</td>
</tr>
<tr>
<td>SendResponseTo.IncludeObjects</td>
<td>Specify true or false to control whether the Object property is populated in the result XML. If IncludeResults is false, this property is ignored, which decreases the size of the ResultDetailXML HTTP parameter.</td>
</tr>
<tr>
<td>SendResponseTo.OnlyIncludeBase</td>
<td>Specify true or false to control whether the Object property is populated with the entire object that was received, including the APIObject properties. If IncludeObjects is false, this property is ignored, which decreases the size of the ResultDetailXML HTTP parameter.</td>
</tr>
</tbody>
</table>

###Request Example
This example performs an HTTP Post action to this URL:

```
https://dev.example.com/partneremail
```

The results include the entire Object property.

###Sample C# Request
<gist data-gist="https://gist.github.com/mc-doc/6e8384366fa0c707634a42b627ecdd15.js"></gist>

###Sample PHP Request
<gist data-gist="https://gist.github.com/mc-doc/91b4c19cd17da92410a27ba7a21c34d6.js"></gist>

###Sample C# Result
<gist data-gist="https://gist.github.com/mc-doc/32bd1a4effbfe68401e88f2ce260ef81.js"></gist>

###Sample PHP Result
<gist data-gist="https://gist.github.com/mc-doc/75945977d27d564fe3c612f78a59ce9d.js"></gist>

##Retrieve

###ResultMessage
One ResultMessage object is available per request. To retrieve the full XML result, add the ResultDetailXML to the Properties collection.

###Sample C# Request
<gist data-gist="https://gist.github.com/mc-doc/ca32fcf1dfafdaf9bd26a4072b9d589b.js"></gist>

###Sample PHP Request
<gist data-gist="https://gist.github.com/mc-doc/77aefaa98235caacca95a9f12165781d.js"></gist>

###Sample PHP Response
<gist data-gist="https://gist.github.com/mc-doc/d7e9b53dd39efa234d84c07fb58de686.js"></gist>

###ResultItem
One ResultItem is available for every top-level object in the request. If a request creates 3 Subscriber objects, 3 ResultItem objects are available for the request.

###Sample C# Request
<gist data-gist="https://gist.github.com/mc-doc/9782899b23b3cc755c2148e325b79e11.js"></gist>

###Sample PHP Request
<gist data-gist="https://gist.github.com/mc-doc/8ff9db5452b8bda6c19bc8e3e91cd5c0.js"></gist>

###Sample PHP Response
<gist data-gist="https://gist.github.com/mc-doc/d66912952b06dd1b485a3f1f413992c6.js"></gist>

##Email
This call returns an email with an optional ZIP file attachment named "results.zip." The file contains an XML file named "results.xml" after processing of the request or conversation is complete.

###Properties
<strong>RespondWhen</strong>: Which "event" to subscribe the response to:
<ul><li>OnCallComplete (request-level) and OnConversationComplete handle both success and error conditions</li><li>OnError (request-level) and OnConversationError handle only error conditions</li><li>Always is deprecated in favor in OnCallComplete (request-level)</li><li>Never is the default condition</li></ul><strong>ResponseAddress:</strong> The email address that receives the results<strong>IncludeResults</strong>:<ul><li>Determines whether the attachment is included</li><li>If not specified or set to false, the email is a notification only</li></ul><strong>IncludeObjects</strong>:<ul><li>Determines whether the Object is populated on each of the Result objects</li><li>Prerequisite: IncludeResults property set to true</li><li>When set to false, decreases the size of the attachment</li><li>When set to true, increases the size of the attachment</li></ul><strong>OnlyIncludeBase</strong>:<ul><li>Determines whether to reduce the Object property to a base APIObject</li><li>Prerequisite: IncludeObjects property set to true</li><li>When set to true, decreases the size of the attachments</li><li>When set to false, increases the size of the attachment</li></ul>

###Request
This example sends an email to <samp class="codeph nolang">responses@example.com</samp> with an attachment containing results with the APIObject properties on the Object property.

###Sample C# Request
<gist data-gist="https://gist.github.com/mc-doc/0cf82a8474f684471cabb357cf4ed7ae.js"></gist>

###Sample PHP Request
<gist data-gist="https://gist.github.com/mc-doc/610a8d0b44c6a7a20ee674a3710cff32.js"></gist>

###Sample SOAP Results
The name of the zip file is always "Results.zip," and the XML file is always "Results.xml." This output occurs when IncludeResults = true.
<gist data-gist="https://gist.github.com/mc-doc/54c2b9f222a56ded364961bcc78d2581.js"></gist>

This output occurs when IncludeResults = true and IncludeObjects = true
<gist data-gist="https://gist.github.com/mc-doc/844a86fbaa9ffe76282ae8badcc0f703.js"></gist>

This output occurs when IncludeResults = true and IncludeObjects = true and OnlyIncludeBase = true.
<gist data-gist="https://gist.github.com/mc-doc/bdb78bd7548b2f03ec171e93981c55fb.js"></gist>
