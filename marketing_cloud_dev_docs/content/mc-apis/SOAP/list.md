---
title: List
---
The List object is a marketing list of subscribers. To create or update a List where AutomatedEmail contains a customer key and has an ID greater than 0, you need the Email | Subscribers | List | Manage Welcome Email permission.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AutomatedEmail</td>
<td>Email</td>
<td>Specifies email to send upon a subscriber joining a list. This property corresponds to the Welcome Email functionality in Marketing Cloud.</td>
</tr>
<tr>
<td>Category</td>
<td>xsd:int</td>
<td>ID of the folder that an item is located in.</td>
</tr>
<tr>
<td>Client</td>
<td>ClientID</td>
<td>Specifies the account ownership and context of an object.</td>
</tr>
<tr>
<td>CorrelationID</td>
<td>xsd:string</td>
<td>Identifies correlation of objects across several requests.</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>xsd:dateTime</td>
<td>Read-only date and time of the object's creation.</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>xsd:string</td>
<td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>ListClassification</td>
<td>ListClassificationEnum</td>
<td>Specifies the classification for a list. Valid values include:<ul>
<li>ExactTargetList</li>
<li>PublicationList</li>
<li>SuppressionList</li>
</ul></td>
</tr>
<tr>
<td>ListName</td>
<td>xsd:string</td>
<td>Name of a specific list.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified.</td>
</tr>
<tr>
<td>ObjectID</td>
<td>xsd:string</td>
<td>System-controlled, read-only text string identifier for object.</td>
</tr>
<tr>
<td>ObjectState</td>
<td>xsd:string</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>Owner</td>
<td>Owner</td>
<td>Describes account ownership of subscriber in an on-your-behalf account.</td>
</tr>
<tr>
<td>PartnerKey</td>
<td>xsd:string</td>
<td>Unique identifier provided by partner for an object. This property is accessible only via API.</td>
</tr>
<tr>
<td>PartnerProperties</td>
<td>APIProperty[]</td>
<td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td>
</tr>
<tr>
<td>SendClassification</td>
<td>SendClassification</td>
<td>Indicates the send classification to use as part of a send definition.</td>
</tr>
<tr>
<td>Subscribers</td>
<td>Subscriber[]</td>
<td>Indicates subscribers associated with an object.</td>
</tr>
<tr>
<td>Type</td>
<td>ListTypeEnum</td>
<td>Indicates type of specific list. Valid values include Public, Private, Salesforce, GlobalUnsubscribe, and Master. Indicates the type of email to send to the address. Valid values include Text and HTML.</td>
</tr>
</tbody>
</table>

##Use Cases
* [Welcome Email](http://https://help.salesforce.com/articleView?id=mc_es_welcome_email.htm&type=5/en/documentation/exacttarget/content/welcome_email/)
* <a title="Creating_a_List" href="creating_a_list.htm" >Create a List</a>
* <a title="Creating_a_List-Based_Email_Send_Workflow" href="creating_a_list_based_email_send_workflow.htm" >Create a List-Based Email Send Workflow</a>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
