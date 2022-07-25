---
title: Retrieve a Subscriber
---
<p>This scenario describes how to retrieve subscriber information. You can retrieve a subscriber from your account based on the primary key for that subscriber, whether it be an email address or a subscriber key.</p>

##Diagram
<img src="images/retrievesubscriber.jpg" alt="Retrieve Subscribers" style="margin: 25px 0;" />

##Method Used
<ul>
<li><a title="Retrieve" href="retrieve.htm">Retrieve</a></li>
</ul>

##Objects Referenced
<ul>
<li><a title="Subscriber" href="subscriber.htm">Subscriber</a></li>
<li><a title="List"  href="list.htm">List</a></li>
</ul>

##Code Sample Links
<ul>
<li><a title="Retrieve_a_Subscriber_Via_the_Web_Service_API"  href="retrieve_a_subscriber_via_the_web_service_api.htm">Retrieve a Subscriber</a></li>
<li><a title="Retrieving_Subscribers_By_Subscriber_Key"  href="retrieving_subscribers_by_subscriber_key.htm">Retrieve Subscribers by Subscriber Key</a></li>
<li><a title="Retrieving_Subscribers_Using_ListID"  href="retrieving_subscribers_using_listid.htm">Retrieve Subscribers By ListID</a></li>
</ul>

##Use Case - Subscriber Center
<p>One of the more common reasons to retrieve subscriber information involves the creation of a subscriber center. This page allows subscribers to update or change their subscription information. One basic model follows the steps below:</p>
<ul>
<li>Subscriber center retrieves subscriber info based on a supplied primary key</li>
<li>Subscriber center allows change of information</li>
<li>Subscriber center executes a Create call on the subscriber with save action of UpdateAdd</li>
<li>Subscriber center executes a confirmation triggered send email</li>
</ul>

##Related Items
[Subscriber Information](https://help.salesforce.com/articleView?id=mc_es_subscribers.htm&type=5)
