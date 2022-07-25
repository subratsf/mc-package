---
title: Create an Email
---
<p>This scenario describes how to create an email message using the SOAP API. The Email object represents an instance of an email message, including either the HTML or text-only email content. This content can be provided:</p>
<ul>
<li>during the creation of the Email object</li>
<li>provided to the Email object at the time of the send</li>
<li>pulled from the Portfolio or other content folder.</li>
</ul>
<p>After writing the code to create the Email object, run a create call on the code to create the instance of the Email object in your account. The results of running this code produce an email message that can be sent from a Marketing Cloud account.</p>

##Diagram
<img src="images/createemail.jpg" alt="Create Email" style="margin: 25px 0;" />

##Objects Referenced
<ul>
<li><a title="Email" href="email.htm">Email</a></li>
</ul>

##Required Properties
<ul>
<li>Name</li>
<li>Subject</li>
</ul>

##Related Items
* [Create an Email](creating_an_email_via_the_web_service_api.htm)
* [Create a Text-Only Email](creating_a_text_only_email_via_the_web_service_api.htm)
* [Create Method](create.htm)
