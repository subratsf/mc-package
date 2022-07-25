---
title: Retrieve the Tracking Information from a Send
---
<p>This scenario describes how to retrieve an email send's tracking information. This information includes:</p>
<ul>
<li>
Duplicates
</li>
<li>
InvalidAddresses
</li>
<li>
HardBounces
</li>
<li>
SoftBounces
</li>
<li>
OtherBounces
</li>
<li>
ForwardedEmails
</li>
<li>
UniqueClicks
</li>
<li>
UniqueOpens
</li>
<li>
NumberSent
</li>
<li>
NumberDelivered
</li>
<li>
Unsubscribes
</li>
<li>
MissingAddresses
</li>
<li>
Subject
</li>
<li>
PreviewURL
</li>
<li>
Links
</li>
<li>
Events
</li>
<li>
SentDate
</li>
</ul>
<p>You can also use filters to pull out specific types of events (such as Opens and Bounces) and information (such as links and lists involved in a send) for tracking information.</p>
<p>These tracking statistics present vital information regarding the sends and help you determine how effective an email send was and what actions you need to take after the send takes place.</p>

##Diagram
<img src="images/sendtracking.jpg" alt="Send Tracking" style="margin: 25px 0;" />

##Method Used
<ul>
<li><a href="retrieve.htm" title="Retrieve">Retrieve</a></li>
</ul>

##Objects Referenced
<ul>
<li><a href="send.htm" title="Send">Send</a></li>
<li><a href="simplefilterpart.htm" title="SimpleFilterPart">SimpleFilterPart</a></li>
<li><a href="retrieverequest.htm" title="RetrieveRequest">RetrieveRequest</a></li>
</ul>

##Code Sample Links
<ul>
<li><a href="retrieving_all_links_for_a_send.htm" title="Retrieving_All_Links_for_a_Send">Retrieve All Links for a Send</a></li>
<li><a href="retrieving_all_lists_for_a_send.htm" title="Retrieving_All_Lists_for_a_Send">Retrieve All Lists for a Send</a></li>
<li><a href="summary_of_send_using_jobid.htm" title="Summary_of_Send_Using_JobId">Retrieve a Tracking Summary of an Email Send Using JobID</a></li>
<li><a href="retrieve_sentevent_details_for_job.htm" title="Retrieve_SentEvent_Details_for_Job">Retrieve Sent Event Details</a></li>
<li><a href="retrieving_open_events_details.htm" title="Retrieving_Open_Events_Details">Retrieve Open Events Details</a></li>
<li><a href="unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.htm" title="Unsubscribe_and_Log_an_UnsubEvent_with_a_LogUnsubEvent_Execute_Call">Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call</a></li>
<li><a href="retrieving_bounce_event_details.htm" title="Retrieving_Bounce_Event_Details">Retrieve Bounce Events Details</a></li>
</ul>

##Related Items
[Tracking](https://help.salesforce.com/articleView?id=mc_es_tracking_overview.htm&type=5)
