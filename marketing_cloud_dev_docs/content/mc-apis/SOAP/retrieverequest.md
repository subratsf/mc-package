---
title: RetrieveRequest
---
The RetrieveRequest object retrieves data from the system.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>ClientIDs</td>
<td>ClientID[]</td>
<td>Specifies accounts and sub-accounts, including Enterprise 2.0, On-Your-Behalf, and Lock & Publish accounts, from which to retrieve data.</td>
</tr>
<tr>
<td>ContinueRequest</td>
<td>xsd:string</td>
<td>Represents the RequestID that identifies a previous Retrieve requestto continue processing (returns the next available batch of data for that request).</td>
</tr>
<tr>
<td>Filter</td>
<td>FilterPart</td>
<td>Specifies filter to apply to retrieve.</td>
</tr>
<tr>
<td>ObjectType</td>
<td>xsd:string</td>
<td>Specifies whether the object is a List, Subscriber, Email, or other type of object.</td>
</tr>
<tr>
<td>Options</td>
<td>RetrieveOptions</td>
<td>Options associated with a request. For a Configure call, options include CREATE or DELETE.</td>
</tr>
<tr>
<td>PartnerProperties</td>
<td>APIProperty[]</td>
<td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td>
</tr>
<tr>
<td>Properties</td>
<td>xsd:ArrayOfString</td>
<td>Specifies an array of property definitions available for an object type. You can retrieve allowed properties using the Describe method.</td>
</tr>
<tr>
<td>QueryAllAccounts</td>
<td>xsd:boolean</td>
<td>Queries all accounts, including parent and all children, regarding an event (ignores specified ClientIDs).</td>
</tr>
<tr>
<td>RepeatLastResult</td>
<td>xsd:boolean</td>
<td>Used with RetrieveAllSinceLastBatch option to repeat returning a date-based request.</td>
</tr>
<tr>
<td>RespondTo</td>
<td>AsyncResponse[]</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>RetrieveAllSinceLastBatch</td>
<td>xsd:boolean</td>
<td>Retrieve all data since last retrieve context. Works with added and modified data. You must include the same properties and filters as the previous request.</td>
</tr>
<tr>
<td>Retrieves</td>
<td>Request[]</td>
<td>Reserved for future use.</td>
</tr>
</tbody>
</table>

##Related Items
* <a href="retrieve_a_subscriber_via_the_web_service_api.htm" title="Retrieve_a_Subscriber_Via_the_Web_Service_API">Retrieve a Subscriber</a>
* <a href="retrieve_sentevent_details_for_job.htm" title="Retrieve_SentEvent_Details_for_Job">Retrieve Sent Event Details</a>
* <a href="retrieving_a_triggered_send_summary.htm" title="Retrieving_a_Triggered_Send_Summary">Retrieve a Triggered Send Summary</a>
* <a href="retrieving_additional_email_attributes.htm" title="Retrieving_Additional_Email_Attributes">Retrieve Additional Email Attributes</a>
* <a href="retrieving_all_lists_a_subscriber_is_on.htm" title="Retrieving_All_Lists_a_Subscriber_is_On">Retrieve All Lists a Subscriber is On</a>
* <a href="retrieving_all_lists_for_a_send.htm" title="Retrieving_All_Lists_for_a_Send">Retrieve All Lists for a Send</a>
* <a href="retrieving_all_subscribers_on_a_list.htm" title="Retrieving_All_Subscribers_on_a_List">Retrieve All Subscribers on a List</a>
* <a href="retrieving_audience_of_send_definition.htm" title="Retrieving_Audience_of_Send_Definition">Retrieve the Audience of an Email Send Definition</a>
* <a href="retrieving_data_from_a_data_extension.htm" title="Retrieving_Data_from_a_Data_Extension">Retrieve Data from a Data Extension</a>
* <a href="retrieving_the_results_of_an_import.htm" title="Retrieving_the_Results_of_an_Import">Retrieve the Results of an Import</a>
