---
title: Update a Subscriber
---
<p>This scenario describes how to update pre-existing information for a subscriber. In this case, the Subscriber object already exists and your call modifies attributes on that object. You can either use the Update call on the existing subscriber the Create call with an UpdateAdd save action. In the latter case, the call updates any existing subscriber information and adds that information if it is not present. The save action helps reduce the amount of errors you may deal with if you inadvertently try to update a subscriber that does not exist.</p>

##Diagram
<img src="images/updatesubscriber.jpg" alt="Update Subscribers" style="margin: 25px 0;" />

##Methods Used
<ul>
<li><a href="update.htm" title="Update">Update</a></li>
<li><a href="create.htm" title="Create">Create</a> with a Save Action of UpdateAdd</li>
</ul>

##Objects Referenced
<ul>
<li><a href="subscriber.htm" title="Subscriber">Subscriber</a></li>
</ul>

##Related Items
* [Subscribers](https://help.salesforce.com/articleView?id=mc_es_subscribers_without_enhanced_subscriber_features.htm&type=5)
* [Update Subscriber Attributes Using the Update Method](updating_subscriber_attributes_using_the_update_method.htm)
* [Update a Subscriber Using the Create Method with UpdateAdd](updating_an_existing_subscriber_using_the_create_method_with_updateadd.htm)
