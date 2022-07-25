---
title: Create a Subscriber
---
<p>This scenario describes how to create a subscriber in Marketing Cloud via the SOAP API. The Subscriber object contains information about a single instance of a subscriber in an account. Once you create a subscriber, you can populate the attributes of that subscriber with information used in sends and personalization.</p>
<p>You can also use the create call with the save action of UpdateAdd to update a subscriber.</p>

##Diagram
<img src="images/createsubscriber.jpg" alt="Create Subscriber" class="img-responsive" style="margin: 25px 0;" />

##Method Used
<ul>
<li><a href="create.htm" title="Create">Create</a></li>
</ul>

##Objects Referenced
<ul>
<li><a href="subscriber.htm" title="Properties/Subscriber">Subscriber</a></li>
</ul>

##Required Properties
<ul>
<li>EmailAddress or SubscriberKey, depending on account configuration.</li>
</ul>

##Related Items
* [Subscribers](https://help.salesforce.com/articleView?id=mc_es_subscribers_without_enhanced_subscriber_features.htm&type=5)
* [Create a Subscriber](creating_a_subscriber.htm)
