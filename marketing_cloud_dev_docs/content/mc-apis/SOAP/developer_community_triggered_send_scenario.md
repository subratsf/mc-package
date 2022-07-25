---
title: Developer Community Triggered Send Scenario
---
##Scenario
<p>Jen develops software for Northern Trail Outfitters, and her latest project involves working with her team to develop a new ecommerce site. Her tasks include integrating the ecommerce site with the Northern Trail Outfitters account to send the following types of message:</p>
<ul>
<li>A welcome email when the customer first creates an account</li>
<li>Purchase confirmations and receipts</li>
<li>Opt-in emails for those wishing to receive marketing email</li>
</ul>
<p>All of the above examples represent transactional emails. Northern Trail Outfitters marketers continues to handle all marketing emails, and they also develop all of the necessary content for transactional emails. Jen handles the API code that calls the correct email message and creates and executes the sending of these transactional emails. She works with .NET/C# code and receives the applicable Marketing Cloud credentials from her supervisor.</p>
<img src="images/jen1new.jpg" alt="Jen1" style="margin: 25px 0;" />

##Connecting the Development Environment
<p>Before doing anything else, Jen must successfully connect her development environment to the Marketing Cloud SOAP API. Since she is writing .NET/C# code, Jen connects using Visual Studio and successfully executes a call to retrieve the availability status of the API.</p>

##Understanding the Data Model
<p>Now that Jen has successfully connected her development environment, she needs to understand how Marketing Cloud stores the data necessary execute the email sends previously listed. Because this is a new ecommerce site, Jen has the opportunity to work with others involved in implementing Marketing Cloud and decide how they identify individual users and store the applicable information.</p>
<p>At this point, Jen relies on documentation to understand more about the application. She also learns about triggered sends and realizes that these email messages perform the function she has been assigned to implement. The ecommerce site triggers these sends when certain actions take place. She also learns about both subscriber lists and data extensions, as she must understand exactly how Marketing Cloud stores information in order to better design how Northern Trail Outfitters information is stored and processed when sending triggered emails. Jen won't be the only person using this information, but she does have a stake in making the final decision.</p>

<p>Jen also takes the time to familiarize herself with the available API best practices to understand how to best write her code against Marketing Cloud. Because the new ecommerce site relies on email to communicate with customers, Jen decides to make the email address the primary identifier for all customers. She also decides to store this information in data extensions, per the best practice recommendations. Finally, she decides to write her code to take advantage of both the synchronous and asynchronous API calls as recommended by the best practices.</p>
<img src="images/TriggeredSendProcess.jpg" alt="TriggeredSendProcess.jpg" style="margin: 25px 0;" />

##Creating Content
<p>The marketers for Northern Trail Outfitters handle the actual creation of the email content and messages. However, they must provide Jen with the external keys for these email messages so she can retrieve these items into the email send definitions.</p>

##Creating and Starting the Triggered Send Definition
<p>Jen discovers that triggered send definitions must be created and then started in order to make them functional within Marketing Cloud. Initially, Jen has to create triggered send definitions for two different interactions:</p>
<ol>
<li>A welcome email thanking customers for creating an account with Northern Trail Outfitters</li>
<li>A confirmation email thanking customers for a purchase</li>
</ol>
<p>Once she creates those triggered send definitions, she starts them to ensure they can accept incoming calls.</p>

##Handling Errors and Exceptions
<p>Jen must also learn how to handle error codes associated with triggered send definitions and the triggered send itself.</p>
<p>For synchronous processing, Jen casts the CreateResult to a TriggeredSendCreateResult to gain access to the SubscriberFailures array.</p>
<p>For asynchronous processing, the ResultMessage object represents the focal point for exception handling. Jen retrieves the ResultMessage for each request using the retrieve method, read from an email attachment or available as a HTTP post variables. The ResultDetailXML property contains a serialized TriggeredSendCreateResult that can be interrogated to get the desired.</p>

##Retrieving Triggered Send Definition Information and Tracking
<p>Jen wants to review how her triggered sends are performing, and the marketing department wants to know how customers are interacting with the emails sent as part of the triggered sends. Jen retrieves a tracking send summary to get the information needed and act accordingly.</p>

##Scaling the Implementation
<p>After initial testing and implementation, Jen and the team want to expand their efforts to handle increased load and more features.</p>

###Creating Email Messages
<p>Jen also recommends creating more email messages and personalizing them to the specific customer. Until this point, the email messages used fixed content to welcome the customer and let them know that the transaction had cleared. Jen recommends that marketing include dynamic content in their email messages to include the following attributes:</p>
<ul>
<li>First Name</li>
<li>Last Name</li>
<li>Item(s) Purchased</li>
</ul>
<p>Jen also creates more triggered send definitions to accomodate customers wishing to change their username and password for the ecommerce site. These definitions include HTML email messages that have been created by marketing and sent to Jen for inclusion in the triggered send definition. These HTML email contain references to information in the data extension for use in the email message.</p>

###Using the Asynchronous API
<p>In order to ensure that all API calls are properly handled, Jen decides to use the asynchronous API for further development on the ecommerce site. While this does involves rewriting existing functionality, Jen feels the solution scales better using the asynchronous API and allow for better management of her API calls.</p>

###Integrating AMPscript
<p>Jen also considers building a landing page for the marketers to view the triggered send tracking information she retrieves via the API. She stores this information in a data extension and builds a landing page using AMPscript that returns the tracking information for easy viewing.</p>

##Related Items
* [Connect to the API using WCF](connecting_to_the_web_service_api_using_wcf.htm)
* [Retrieve the Availability Status of a Marketing Cloud Account](retrieving_the_availability_status_of_an_exacttarget_account.htm)
* [Data Extensions](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
* [Subscriber Lists](https://help.salesforce.com/articleView?id=mc_es_lists_classic_subscriber.htm&type=5)
* [SOAP API Best Practices](soap_api_best_practices.htm)
* [Retrieve an Email](retrieving_an_email_via_the_soap_api.htm)
* [Create Triggered Send Definition](creating_a_triggered_send_definition.htm)
* [Start Triggered Send Definition](starting_a_triggered_send_definition_via_the_web_service_api.htm)
* [Error Codes](error_codes.htm)
* [CreateResult Object](createresult.htm)
* [TriggeredSendCreateResult Object](triggeredsendcreateresult.htm)
* [ResultMessage Object](resultmessage.htm)
* [Retrieve a Triggered Send Summary](retrieving_a_triggered_send_summary.htm)
* [Dynamic Content](https://help.salesforce.com/articleView?id=mc_es_dynamic_content.htm&type=5)
* [Asynchronous Processing](asynchronous_processing.htm)
* [Retrieve Rows from a Data Extension Using AMPscript](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/retrieveRows.htm)
