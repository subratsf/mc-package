---
title: Perform
---
Use the Perform method to manage asynchronous processes, like sending email, importing subscribers, or starting an import definition.
>When using the Perform method as part of an email send definition, you can override certain aspects of the SenderProfile object.

##C# Syntax
```
PerformResult[] perform = Perform(Options, Action, Definitions, OverallStatus, OverallStatusMessage, RequestID)
```

##Parameters
<table class="table table-hover"><thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead><tbody>
<tr><td>Action</td><td>String</td><td>Specifies an action to perform on one or many objects. See the table below for supported perform actions.</td></tr>
<tr><td>Definitions</td><td>APIObject[]</td><td>Specifies a collection of interactions to act upon.</td></tr>
<tr><td>Options</td><td>PerformOptions</td><td>Optionally specifies more processing options.</td></tr>
<tr><td>OverallStatus</td><td>String</td><td>Specifies the overall status of the request.</td></tr>
<tr><td>OverallStatusMessage</td><td>String</td><td>Specifies the overall status message of the request.</td></tr>
<tr><td>RequestID</td><td>String</td><td>Marketing Cloud's unique identifier for every request.</td></tr>
</tbody></table>

###Supported Perform Actions
<ul>
<li>AudienceDefinition
<ul>
<li>build</li>
<li>clone</li>
<li>totalcount</li>
<li>count</li>
</ul>
</li>
<li>AudienceSegmentDefinition
<ul>
<li>Count</li>
</ul>
</li>
<li>Campaign
<ul>
<li>start</li>
<li>stop</li>
<li>cancel (reserved for future use)</li>
<li>pause (reserved for future use)</li>
</ul>
</li>
<li>ContentValidation
<ul>
<li>validate</li>
</ul>
</li>
<li>DataExtractActivity
<ul>
<li>start</li>
</ul>
</li>
<li>EmailSendDefinition
<ul>
<li>start</li>
<li>test</li>
<li>GetMaxCount</li>
<li>stop (reserved for future use)</li>
<li>pause (reserved for future use)</li>
<li>restart (reserved for future use)</li>
</ul>
</li>
<li>ExtractDefinition
<ul>
<li>start</li>
</ul>
</li>
<li>FileTransferActivity
<ul>
<li>start</li>
</ul>
</li>
<li>FileTrigger
<ul>
<li>start</li>
</ul>
</li>
<li>FilterActivity
<ul>
<li>start</li>
</ul>
</li>
<li>GroupDefinition
<ul>
<li>start</li>
</ul>
</li>
<li>ImportDefinition
<ul>
<li>start</li>
</ul>
</li>
<li>MessageSendActivity
<ul>
<li>start</li>
</ul>
</li>
<li>PlatformApplication
<ul>
<li>publish</li>
<li>deploy</li>
</ul>
</li>
<li>ProgramManifestTemplate
<ul>
<li>start</li>
</ul>
</li>
<li>Send
<ul>
<li>If ID property is specified
<ul>
<li>pause</li>
<li>resume</li>
<li>cancel</li>
</ul>
</li>
<li>If no ID property is specified, the API ignores the Action parameter.</li>
</ul>
</li>
<li>SMSSendActivity
<ul>
<li>start</li>
</ul>
</li>
<li>SystemEntityOperation
<ul>
<li>start</li>
</ul>
</li>
</ul>

##Related Items
[SenderProfile Object](senderprofile.htm)
