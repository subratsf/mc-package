---
title: Send an Email to a Data Extension Using an Email Send Definition
---
<p>This scenario describes how to send an email message using information in a data extension. You can use information within a sendable data extension as the basis for a send. To perform this send, you must use the following elements:</p>
<ul>
<li>Email Message</li>
<li>Email Send Definition</li>
<li>Publication List</li>
<li>Data Extension</li>
</ul>
<p>The sendable data extension contains the information used to conduct the send, and the information on the publication list manages opt-in information for subscribers. A subscriber must be on both the data extension and the publication list to receive an email message as part of the send.</p>

##Diagram
<img src="images/sendtriggeredsend.jpg" alt="Triggered Email Send" style="margin: 25px 0;" />

##Methods Used
<ul>
<li><a href="create.htm" title="Create">Create</a></li>
<li><a href="perform.htm" title="/020_Web_Service_Guide/Methods/Perform">Perform</a></li>
</ul>

##Objects Referenced
<ul>
<li>CustomObject</li>
<li><a href="emailsenddefinition.htm" title="/020_Web_Service_Guide/Objects/EmailSendDefinition">EmailSendDefinition</a></li>
<li><a href="email.htm" title="Email">Email</a></li>
<li><a href="sendclassification.htm" title="SendClassification">SendClassification</a></li>
<li><a href="list.htm" title="List">List</a></li>
</ul>

##Require Properties
<ul>
<li>CustomerKey</li>
<li>Name</li>
<li>SendClassification.CustomerKey</li>
<li>SendDefinitionList.CustomObjectID</li>
<li>SendDefinitionList.DataSourceTypeID</li>
<li>Email.ID</li>
</ul>

##Code Sample Links
<ul>
<li><a href="managing_sends_to_subscribed_and_unsubscribed_recipients_on_publication_lists_via_email_send_definitions.htm" title="Managing_Sends_to_Subscribed_and_Unsubscribed_Recipients_on_Publication_Lists_Via_Email_Send_Definitions">Manage Sends to Publication Lists using Email Send Definitions</a></li>
<li><a href="starting_an_email_send_definition.htm" title="Starting_an_Email_Send_Definition">Start an Email Send Definition</a></li>
</ul>

##Related Items
[Data Extensions and Data Relationship Procedures](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
