---
title: Manage Subscriber Status for One or All Lists
---
<p>This page contains information about managing the status of a single subscribers on either a specified list or all lists on which the subscriber resides.</p>

##Why Manage Subscriber Status for One or All Lists
<p>Using a subscriber's status, you can determine whether a subscriber receives or is prevented from receiving email messages sent to that list.</p>

##How to Manage Subscriber Status for One or All Lists
<p>Use the sample code below as a model for your own calls.</p>

###Sample PHP Code - Unsubscribe Subscriber from All Lists in an Account
```
$subscriber = new Marketing Cloud_Subscriber();    //If you create the new subscriber object . . .
$subscriber->EmailAddress = $email;            //. . . and specify the email address belonging to the subscriber . . .
$subscriber->SubscriberKey = $subscriberkey;   //. . . as well as the subscriber key of the subscriber . . .
$subscriber->Status = "Unsubscribed";          //. . . then you can specify a status of Unsubscribed (that subscriber won't receive messages sent to all lists in your account.
```
###Sample PHP Code - Unsubscribe Subscriber from a Specified List in an Account
<p>You can unsubscribe a subscriber from a specified list by creating a SubscriberList object, then setting the ID, Action, and Status properties of that object:</p>
```
$list = new Marketing Cloud_SubscriberList();
$list->ID = $id;
$list->Action = "Update";
$list->Status = "Unsubscribed";
```
<p>Once this object has been created, set the Subscriber object's Lists property with that object, like this:</p>
```
$subscriber->Lists[] = $list;
```
<p>You can perform the following actions:</p>
<ul> <li>Create</li> <li>Update</li> <li>Delete</li>
</ul>
<p>You can set the following statuses:</p>
<ul> <li>Active</li> <li>Deleted</li> <li>Unsubscribed</li>
</ul>
<p>Deleting a subscriber from a list may allow an unsubscribed subscriber to receive further emails if that subscriber is added back to the list. Instead, leave the subscriber on the list in an unsubscribed status to prevent them from receiving unwanted emails.</p>
