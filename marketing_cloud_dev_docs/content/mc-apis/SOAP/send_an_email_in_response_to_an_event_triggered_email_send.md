---
title: Send an Email in Response to an Event (Triggered Email Send)
---
<p>This scenario describes how to send a triggered email message using an existing triggered send definition. Note that you must first create your triggered send definition and ensure that the triggered send definition is running before you can use it to send a triggered email message. Once the triggered send definition is running, you can submit a recipient's information to that triggered send definition in order to conduct the send. For example, you could include code in your application that gathers the email address of a recipient, submits that information to the triggered send definition, and send an email to that recipient.</p>

##Diagram
<img src="images/sendtriggeredsend.jpg" alt="SendTriggeredSend.jpg" width="938" height="123">

##Methods Used
<ul>
<li><a href="create.htm" title="Create">Create</a></li>
</ul>

##Objects Referenced
<ul>
<li><a href="triggeredsenddefinition.htm" title="TriggeredSendDefinition">TriggeredSendDefinition</a></li>
<li><a href="triggeredsend.htm" title="TriggeredSend">TriggeredSend</a></li>
<li><a href="email.htm" title="Email">Email</a></li>
</ul>

##Required Properties
<ul>
<li>TriggeredSendDefinition.CustomerKey</li>
<li>Subscriber.EmailAddress or Subscriber.SubscriberKey, depending on account configuration</li>
</ul>

##Related Items
[Triggered Emails](https://help.salesforce.com/articleView?id=mc_es_triggered_emails.htm&type=5)
