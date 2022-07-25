---
title: Behavioral Data Integration Best Practices
---
<p>This page contains information  regarding implementing best practices for the integration of behavioral data from Marketing Cloud into your external system. You can get data out of Marketing Cloud via data extract or a SOAP API tracking data retrieve call.</p>

##Prerequisites
<p>You need an account enabled to use the SOAP API.</p>

##Scenario
<p>Jen uses a tracking send summary to retrieve information regarding her triggered send results. While this solution worked for a smaller implementation, Jen has expanded the integration between her internal system and Marketing Cloud, and she is noticing a longer period of time for her API calls to retrieve the desired results. She also notices that the retrieval process requires more calls beyond the initial request. After consulting the Marketing Cloud documentation, she decides to implement a data extract procedure on a set schedule.</p>

##What are Behavioral Data Integration Best Practices
<p>The information below outlines the attributes of both data extracts and SOAP API retrieve calls and demonstrates the situations in which either solution would be most appropriate. Use this information as a guide to determine which solution best applies to your Marketing Cloud account and make use of it to retrieve the necessary data.</p>

##How to Implement Behavioral Data Integration Best Practices
<p>Review the attributes listed below and take the appropriate steps to ensure the most timely and effecient delivery of behavioral tracking data to the system of your choice.</p>

###Data Extracts
<p>Data extracts permit you to retrieve selected tracking information from Marketing Cloud via a compressed data file on placed on either a Marketing Cloud FTP site or an external location. You can choose which events are contained within the data extract. That compressed file contains delimited files (such as comma- or tab-delimited) and can be encrypted. You can automate data extracts from Marketing Cloud or create and trigger the process via the SOAP API. Common data extract recurrence options include daily or hourly, depending on the volume of data being extracted and the need for timely data. The Marketing Cloud system can perform incremental data extracts, allowing you to retrieve only that data that has been created since the previous data extract.</p>

###SOAP Retrieve Calls
<p>Use SOAP Retrieve calls to retrieve data directly to an application without using data extract files and FTP sites. Retrieves can only be performed as a synchronous operation, as no asynchronous retrieve option is available. Retrieve calls can also use incremental settings, meaning that the call returns only data created after the previous call. Depending on your language and development environment, you can use SOAP response compression for these calls. However, you must create a call for each event type, and each call returns a maximum of 2500 results per call. You must make multiple retrieve requests until all data has been retrieved. Each call generally averages a response time of 1 second.</p>

###Choosing Between Data Extracts and SOAP Retrieve Calls
<p>Use the bullet points below as an aid to determine the best data integration method for your needs:</p>

####Data Extract
<ul>
<li>Use when sending more than 1,000,000 emails per hour</li>
<li>Data can be extracted on regular intervals, such as hourly or daily</li>
<li>You need encrypted data files</li>
</ul>

####SOAP Retrieve Call
<ul>
<li>Use when sending lessthan 1,000,000 emails per hour.</li>
<li>You need the most recent data.</li>
<li>You don't require encrypted data files.</li>
</ul>

##Related Items
* [Retrieve a Triggered Send Summary](retrieving_a_triggered_send_summary.htm)
* [Data Extracts](https://help.salesforce.com/articleView?id=mc_es_data_extract_activity.htm&type=5)
* [Create a Data Extract Activity](creating_a_data_extract_activity_with_the_soap_web_service_api.htm)
* [Retrieve SentEvent Details for a Job](retrieve_sentevent_details_for_job.htm)
