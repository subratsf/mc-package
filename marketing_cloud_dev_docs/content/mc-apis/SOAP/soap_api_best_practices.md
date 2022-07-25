---
title: SOAP API Best Practices
---
This page contains a broad conceptual overview of the Marketing Cloud SOAP API you can use to understand how the SOAP API can be used to interact with Marketing Cloud's application and accomplish specific tasks.

##Workflow Best Practices
You can use the SOAP API to interact with Marketing Cloud and accomplish the following tasks:
<table class="table table-hover"><thead align="left"><tr><td>Pre-send</td><td>Send</td><td>Post-send</td></tr></thead><tbody><tr><td><ul><li><a href="creating_a_subscriber.htm" title="Creating_a_Subscriber">Create Subscribers</a></li><li><a href="creating_a_list.htm" title="Creating_a_List">Create Lists</a></li><li><a href="adding_subscribers_to_a_list.htm" title="Adding_Subscribers_to_a_List">Add Subscribers to Lists</a></li><li><a href="adding_an_attribute_via_the_web_service_api.htm" title="Adding_an_Attribute_Via_the_Web_Service_API">Add Attributes to Subscribers</a></li><li><a href="creating_an_email_send_definition_using_the_web_service_api.htm" title="Creating_an_Email_Send_Definition_Using_the_Web_Service_API">Create Email Send Definitions</a></li><li><a href="creating_a_data_extension_using_web_service_api.htm" title="Creating_a_Data_Extension_using_Web_Service_API">Create Data Extensions</a></li><li><a href="adding_data_to_data_extension_object.htm" title="Adding_Data_to_Data_Extension_Object">Add Information to Data Extensions</a></li><li>Importing Data</li></ul></td><td><ul><li><a href="scheduling_an_email_send_definition.htm" title="Scheduling_an_Email_Send_Definition">Schedule an Email Send Definition</a></li><li><a href="starting_an_email_send_definition.htm" title="Starting_an_Email_Send_Definition">Start an Email Send Definition</a></li><li><a href="starting_a_triggered_send_definition_via_the_web_service_api.htm" title="Starting_a_Triggered_Send_Definition_Via_the_Web_Service_API">Starting a Triggered Send Definition</a></li><li><a href="sms_api_scenario_guide.htm" title="SMS_API_Scenario_Guide">Sending an SMS Message</a></li></ul></td><td><ul><li><a href="refreshing_a_group.htm" title="Refreshing_a_Group">Refreshing groups</a></li><li>Retrieve email tracking details</li></ul></td></tr></tbody></table>

This list does not present the complete capabilities of the SOAP API, but it illustrates a common workflow for SOAP API users. You can view more specific examples of workflows:

###Sending an Email to a Subscriber List
<img src="images/list_based_send.jpg" alt="List_Based_Send.jpg" class="img-responsive" style="margin: 25px 0;" />

###Sending an Email to a Data Extension
<img src="images/send_to_date_extension.jpg" alt="Send_to_Date_Extension.jpg" class="img-responsive" style="margin: 25px 0;" />

###Sending a Triggered Send
<img src="images/triggered_send.jpg" alt="Triggered_Send.jpg" class="img-responsive" style="margin: 25px 0;" />

###Importing Data via the SOAP API
<table class="table table-hover"><thead align="left"><tr><td>Prepare Information</td><td>Create Import Definition</td><td>Start Import Definition</td></tr></thead><tbody><tr><td><ul><li>Create Portfolio Objects</li><li>Create CSV Files</li><li>Create Tab-Delimited Files</li><li>Get File Import Locations</li></ul></td><td><ul><li><a href="creating_an_import_definition.htm" title="Creating_an_Import_Definition">Create an Import Definition</a></li></ul></td><td><ul><li><a href="starting_an_import_definition_via_the_web_service_api.htm" title="Starting_an_Import_Definition_Via_the_Web_Service_API">Starting an Import Definition</a></li><li><a href="retrieving_the_results_of_an_import.htm" title="Retrieving_the_Results_of_an_Import">Retrieve the Results of an Import Definition</a></li></ul></td></tr></tbody></table>

When you define an import activity for a data file, you provide the following information about the source file to import and the destination of the data:
<ul><li>The <strong>location </strong>where the import gets the file to import. By default, this is the Import folder of your FTP account.</li><li>The <strong>name of the import file</strong>. You can choose to enter a static name--such as <strong>subscribers.csv</strong>--or you can choose to include placeholder for the date. Including placeholders for the date lets you have a unique filename for each import file without changing the import activity definition before each import. For example, if you create the file naming pattern subscribers%%Month%%%%Day%%.csv, then on November 20 the import looks for a file named subscribers1120.csv.</li><li>The <strong>file type</strong>. You can import comma-delimited or tab-delimited files, or you can define your own delimiter.</li><li>The <strong>destination type</strong>. You can import the data into a subscriber list, or data extension. If your Marketing Cloud account uses the AIM package (which is enabled by default for Enterprise 2.0 accounts) you can also import data into a publication list. Subscriber attributes are not supported for publication list imports. The system only supports the following:
<ul><li><strong>Email Address</strong></li><li><strong>Subscriber Key</strong> (if the Subscriber Key feature is enabled)</li><li><strong>Status </strong>(active or unsub)</li><li><strong>Reason </strong>(The unsub/opt-out reason)</li></ul></li></ul>

When you define an import activity for a Salesforce report or object, you provide the following information:
<ul><li>Whether you are importing an Object or a Report.</li><li>The Object or Report to import.</li><li>Whether to import all data or only new data. If you select new data, you enter the date and time after which the data is imported.</li></ul>

When you save an import definition configured to import a Salesforce object or report, the system auto-creates the data extension according to the schema of the object or report. After the data extension is created, you cannot change the data source.

##Interaction Best Practices
You can access the SOAP API using several different languages:
<ul><li>C#/.NET<ul><li><a href="connecting_to_the_web_service_api_using_wse_30_and_net_20.htm" title="Connecting_to_the_Web_Service_API_Using_WSE_3.0_and_.NET_2.0">WSE 3.0 and .NET 2.0</a></li><li><a href="connecting_to_the_web_service_api_using_wcf.htm" title="Connecting_to_the_Web_Service_API_using_WCF">WCF</a></li></ul></li><li><a href="connecting_to_the_api_using_php.htm" title="Connecting_to_the_API_using_PHP">PHP</a></li><li><a href="connecting_to_the_api_using_java_and_axis2.htm" title="Connecting_to_the_API_using_Java_and_Axis2">Java</a></li><li><a href="connecting_to_the_api_using_ruby_on_rails.htm" title="Connecting_to_the_API_using_Ruby_on_Rails">Ruby on Rails</a></li></ul>

The linked articles include instructions and sample code. See the list of technical articles in this guide for code samples by product area.

###Standard API Users
Standard API users can interact with the API to accomplish all tasks outlined above.

###Enterprise API Users
In addition to the tasks that can be accomplished by standard API users, enterprise API users can use the API to work with different business units and account users. This includes the ability to perform the following actions:
<ul><li>Create, modify, and delete business units</li><li>Create, modify, and delete users</li><li>Set permissions and roles for users</li><li>Associate subscribers and lists with different business units</li></ul>

###Embedded API Users
Embedded API users can interact with the SOAP API in the same manner as standard API users, but they can also utilize more functionality that allows them to control the accounts and sub-accounts of their clients. That functionality includes the following example:
<a href="creating_an_agency_client_object.htm" title="Creating_an_Agency_Client_Object">Create an Agency Client Object</a>.

##Architecture and Coding Best Practices
This section outlines the best practices (both in general and for specific languages) for interacting with the SOAP API.

###General
These best practices apply in all instances, regardless of language.

####Planning
Use the best practices below to plan for the eventualities that could be encountered with your use of the SOAP API.
<ul><li>Use the fewest amount of steps possible when moving or updating data in your SOAP API calls.</li><li>Use asynchronous processing whenever possible to ensure the best response to your calls.</li><li>Plan and map out the data flow of your API calls in order to maximize the effectiveness of your API interactions.</li><li>Make sure to account for future growth when implementing your API solution</li><li>Plan for peaks in traffic to your website or system and know what happens when you reach the upper limits of your system's capabilities.</li><li>Queue API calls and pull off data from those calls at a defined rate.</li><li>Perform any stress tests in the production support environment instead of the production environment.</li><li>Include code in your calls that retrieves the results of your call (such as the information in the CreateResult object) and responds appropriately, such as notifying you when an error occurs or taking a specific action when a successful Create call finishes.</li></ul>

You can use multiple concurrent API sessions to increase overall throughput. However, note that a large number of sessions may result in diminishing returns. Test your API calls thoroughly to ensure that you are using the optimum number of concurrent API sessions.

####Maintaining Service Level Agreements
Marketing Cloud agrees to maintain consistent levels of service through the use of service level agreements (SLA). To ensure the performance outlined in your SLA, observe these best practices.
<ul><li>Avoid sending a completely rendered email in high-volume or triggered sends.</li><li>Use dynamic content instead of starting a send definition, pausing it, changing the message, and restarting the send definition. This practice delivers inconsistent tracking information, no aggregate tracking data, and adds data rows to your tracking information.</li><li>Avoid using high-volume triggered send calls using the synchronous SOAP API. Consider using asynchronous API calls to reduce server strain.</li><li>Store message content in content areas instead of data extensions.</li><li>Use send logging instead of send-time attributes where possible.</li><li>Restrict the number of synchronous threads in your calls to 20 or fewer.</li><li>Restrict your API requests to 50 objects per synchronous call or 100 objects per asynchronous call.</li></ul>

####Monitoring Sends Through the SOAP API
The best way to monitor sends through the API is by polling the Send object on the following properties:
<ol><li>SendID (identifier for the send)</li><li>SentTime (time the send completed)</li><li>NumberSent (number of emails sent)</li></ol>

NumberSent increments as the send is processing. Processing completes once SentTime has a value.

####Triggered Sends
Use the best practices outlined below to improve the performance of your triggered sends via the SOAP API. This logic allows you take advantage of the instant notifications of the synchronous API and the solid reliability of the asynchronous API.
<ul><li>Use data extensions with your triggered sends to store relevant subscriber information instead of subscriber lists.</li><li>Refrain from using unlimited-length text columns in data extension used for triggered sends.</li><li>Keep your triggered send batches of Subscriber objects to numbers smaller than 100 for asynchronous calls and less than 50 for synchronous calls.</li><li>Keep your maximum payload per call at less than 5MB.</li><li>Pass less than 10 attributes to avoid decreased performances.</li><li>Retrieve information for an HTTPGet from your own site before the triggered send in order to prevent connectivity issues and problem-causing surges of traffic.</li><li>Use applicable Owner information and send classifications to set the From name and email address for a triggered send instead of passing those values in at the time of the send.</li><li>You can use the following workflow to take advantage of both the synchronous and asynchronous SOAP API and make sure your calls process effectively:<ul><li>Send your initial API request via the synchronous API, allowing you to receive immediate feedback if either the subscriber or request has issues</li><li>Retry that call up to three (3) times to account for potential timeouts or connectivity issues</li><li>Send failed call via asynchronous AP</li></ul></li></ul>

####Retrieving Data from the Application
Use data extracts to retrieve information from the system whenever possible.

####Connection Failures and Timeouts
Configure your code to handle potential problems with connecting to the SOAP API. Use the best practices outlined below to help your system handle these connectivity issues:
<ul><li>Use the <a href="asynchronous_processing.htm" title="Asynchronous_Processing">CorrelationID</a> property to make sure that the SOAP API can evaluate whether a call is a continuation of a series of API calls or a repeat call made due to connection failures.</li><li>Make sure to set client-side timeouts in your calls. Use the following examples as models:<ul><li>Asynchronous operations - 30 seconds</li><li>Synchronous operations (not including tracking retrieves) - 120 seconds</li><li>Synchronous operations retrieving large sets of data - 300 seconds</li></ul></li><li>Enable client-side logging of errors so you can evaluate the reasons behind the failure of a call, even if connectivity to the SOAP API remains problematic.</li></ul>

####Security
When interacting with the SOAP API, observe these best practices in order to maintain a secure connection between your integration or development environment and Marketing Cloud.

#####Give Each User Separate API Credentials
Make sure that each user interacting with the SOAP API has their own username and password. You can set separate permissions for each user, ensuring that users have access to only those features that they need to complete their tasks using the SOAP API. Do not share credentials between users. Use a shared API user only for system-based processes. Give the shared user only essential permissions.

Always store your API endpoint, username, and password in a configuration file. This allows you to change this information quickly without requiring you to redeploy this code.

#####Restrict Integration Partner Access to Necessary Functions Only
All integration partners to access only those functions that are absolutely necessary to make the integration function. To prevent potential security issues, restrict all other functions.

#####Use Strong Passwords
All users with API access should use strong passwords.
<ul><li>Include special characters</li><li>Include numbers</li><li>Make the string as long as possible</li><li>Avoid predictable strings of characters</li></ul>

No matter how strong your password is, change it regularly.

#####Data Management
Use the best practices outlined below to best maintain your data.
<ul><li>Avoid simultaneously updating a list or data extension using multiple API calls.</li><li>Use the customer key (if available) instead of waiting to obtain an ID from a call.</li><li>Because SubscriberID is not exposed to batch functions, do not use it as a unique identifier.</li><li>Avoid using partner properties if possible due to sunsetting of this functionality.</li><li>Use Key properties instead of ID properties whenever possible, as Key properties support asynchronous processing and high-availability functionality.</li><li>Import information in batches whenever possible.</li><li>If your import definition fails validation during a Delete call, run an Update call on that import definition and use the details from that call to correct the definition.</li><li>If you pass an attribute in a call that doesn't exist on the subscriber list or data extension, the code does not error out. However, the value for that attribute are not passed and a new attribute is not created. You do not receive any indication of the failure to pass the attribute and value.</li><li>While you can create a data extension with an external key larger than 36 characters, doing so may cause problems when using the data extension in conjunction with other processes (especially if working with the UI, which truncates the external key to the first 36 characters). Be sure to limit your data extension external keys to 36 characters to help ensure all further processes function correctly.</li><li>For the best results when dealing with data/time values in your code, use a Coordinated Universal Time (UTC) offset. When retrieving dates, convert the dates to the UTC offset to ensure dates are in the format suitable for your application.</li><li>When retrieving information on a sub-object, be sure to specify the properties on that sub-object you wish to retrieve. For example, you must specify the ID of the Client sub-object of a Send object.</li></ul>

####.NET
All optional, value-type properties of an object (such as the Int, bool, and enum types) have another Boolean property defined with <strong>Specified</strong> appended to the name. This property is used to tell the XML Serializer whether to include the corresponding property when generating the XML that is sent. When deserializing, this property indicates whether the corresponding property was included in the XML. For example, the Subscriber object has an optional property called Status. When the proxy class is generated, a "StatusSpecified" property is also created. When sending an object, if you specified a value for "Status", you must also set "StatusSpecified=true". If you don't, the value of "Status" is not serialized and sent to the server. When receiving an object, check if "StatusSpecified=true". If it is, then you know that a "Status" value was received and the data in the "Status" property is valid. If "StatusSpecified=false", the value in "Status" is the default value for that properties data type.

In the following table, if you use the code in the first column, the second column shows the XML that is generated. If you start with the XML in the second column, the third column shows what the properties are set to.
<table class="table table-hover"><thead align="left"><tr><th>.NET Code Before Serialization</th><th>XML</th><th>.NET Code After Serialization</th></tr></thead><tbody><tr><td><ul><li>Subscriber.Status = SubscriberStatus.Bounced</li><li>Subscriber.StatusSpecified = true</li></ul></td><td>`<Subscriber><Status>Bounced</Status></Subscriber>`</td><td><ul><li>Subscriber.Status = SubscriberStatus.Bounced</li><li>Subscriber.StatusSpecified = true</li></ul></td></tr><tr><td>Subscriber.Status = SubscriberStatus.Bounced</td><td>`<Subscriber></Subscriber>`</td><td><ul><li>Subscriber.Status = SubscriberStatus.Active</li><li>Subscriber.StatusSpecified = false</li></ul></td></tr><tr><td><ul><li>Subscriber.Status = SubscriberStatus.Bounced</li><li>Subscriber.StatusSpecified = false</li></ul></td><td>`<Subscriber></Subscriber>`</td><td><ul><li>Subscriber.Status = SubscriberStatus.Active</li><li>Subscriber.StatusSpecified = false</li></ul></td></tr><tr><td>Subscriber.StatusSpecified = true</td><td>`<Subscriber><Status>Active</Status></Subscriber>`</td><td><ul><li>Subscriber.Status = SubscriberStatus.Active</li><li>Subscriber.StatusSpecified = true</li></ul></td></tr></tbody></table>

To avoid confusion and possible bugs in your code, always be explicit as indicated in the first row. When processing received objects, use the following pattern:

```
if (subscriber.StatusSpecified)
{
    Console.WriteLine(subscriber.Status);
}
else
{
    Console.WriteLine("The subscriber.Status property was not set");
}
```
###Synchronous vs. Asynchronous SOAP API
You can interact with the SOAP API in either a synchronous or asynchronous manner. The SOAP API processes synchronous calls at the time they are received, while it queues asynchronous calls and processes them in a specified order. Marketing Cloud recommends interacting with the SOAP API asynchronously as much as possible in order to ensure that API calls can be processed in the order you desire (supporting conversations) and avoid accidentally reprocessing calls due to connection interruption.

You can find more information about interacting asynchronously with the SOAP API in the <a href="asynchronous_processing.htm" title="Asynchronous_Processing">Asynchronous Processing</a> technical article.

###PartnerKey and PartnerClientKey
Marketing Cloud maintains the PartnerClientKey property for legacy functionality and backwards compatibility. To avoid performance issues, we discourage the use of this property in new code or integrations. Replace this property with ClientID whenever possible.

##Related Items
* [Enterprise 2.0 Accounts](https://help.salesforce.com/articleView?id=mc_es_enterprise_20_overview.htm&type=5)
* [CreateResult Object](createresult.htm)
* [Send Logging](https://help.salesforce.com/articleView?id=mc_es_send_logging.htm&type=5)
* [Automation Studio](https://help.salesforce.com/articleView?id=mc_as_automation_studio.htm&type=5)
* [Perform a Campaign Via the SOAP API](performing_a_campaign_via_the_web_service_api.htm)
* [Extract Method](extract.htm)
