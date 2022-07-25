---
title: Send an Email to a Subscriber List
---
<p>This scenario describes how to send an email to subscribers on a list. This procedure requires three elements:</p>
<ul>
<li>Email Message</li>
<li>Subscriber List</li>
<li>Email Send Definition</li>
</ul>
<p>After creating the email message and subscriber list, you can specify those elements in the email send definition. Perform a send on the email send definition to actually execute the send to the subscribers on your list.</p>

##Diagram
<img src="images/emailsenddefinition1.jpg" alt="Email Send Definition" style="margin: 25px 0;" />

##Methods Used
<ul>
<li><a href="create.htm" title="Create">Create</a></li>
<li><a href="perform.htm" title="Perform">Perform</a></li>
</ul>

##Objects Referenced
<ul>
<li><a href="email.htm" title="Email">Email</a></li>
<li><a href="emailsenddefinition.htm" title="EmailSendDefinition">EmailSendDefinition</a></li>
<li><a href="list.htm" title="List">List</a></li>
</ul>

##Required Properties
<ul>
<li>CustomerKey</li>
<li>Name</li>
<li>SendClassification.CustomerKey</li>
<li>SendDefinitionList.List.ID</li>
<li>SendDefinitionList.DataSourceTypeID</li>
<li>SendDefinitionList.SendDefinitionListType</li>
<li>Email.ID</li>
</ul>

##Code Sample Links
<ul>
<li><a href="creating_email_send_definition.htm" title="Creating_Email_Send_Definition">Create a List-Based Email Send Definition</a></li>
<li><a href="creating_performing_and_deleting_email_send_definitions.htm" title="Email_Send_Definitions">Create, Perform, and Delete Email Send Definitions</a></li>
<li><a href="creating_an_email_send_definition_using_the_web_service_api.htm" title="Creating_an_Email_Send_Definition_Using_the_Web_Service_API">Create an Email Send Definition</a></li>
<li><a href="creating_an_email_send_definition_with_dynamic_content_using_the_web_service_api.htm" title="Creating_an_Email_Send_Definition_with_Dynamic_Content_Using_the_Web_Service_API">Create an Email Send Definition with Dynamic Content</a></li>
<li><a href="scheduling_an_email_send_definition.htm" title="Scheduling_an_Email_Send_Definition">Schedule an Email Send Definition</a></li>
<li><a href="starting_an_email_send_definition.htm" title="Starting_an_Email_Send_Definition">Start an Email Send Definition</a></li>
</ul>

##Related Items
[Send Messages](https://help.salesforce.com/articleView?id=mc_es_messages.htm&type=5)
