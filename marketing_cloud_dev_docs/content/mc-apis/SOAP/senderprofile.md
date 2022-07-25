---
title: SenderProfile
---
The SenderProfile object is the send profile used in conjunction with an email send definition. You can override the following elements of the SenderProfile object as part of a Schedule or Perform call for an EmailSendDefinition:
<ul>
<li>SenderProfile.FromName - Maximum length 130 characters.</li>
<li>SenderProfile.FromAddress - Maximum length 100 characters, unless it contains AMPscript.</li>
<li>SenderProfile.AutoForwardToName - Maximum length 100 characters.</li>
<li>SenderProfile.AutoForwardToEmailAddress - Maximum length 100 characters, unless it contains AMPscript.</li>
</ul>

To set the AutoForwardToName and AutoForwardToEmailAddress, make the following changes:
<ul>
<li>The SenderProfile.UseDefaultRMMRulesSpecified must be set to TRUE.</li>
<li>The SenderProfile.UseDefaultRMMRules must be set to FALSE.</li>
<li>The Reply Mail Management feature must be enabled for your account. Contact your Marketing Cloud representative for more information on this feature.</li>
</ul>

All exceptions related to these fields that are thrown are the same as those thrown on a SenderProfile create call.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AutoForwardToEmailAddress</td>
<td>xsd:string</td>
<td>Indicates the email address to use with automatically forwarded email messages.</td>
</tr>
<tr>
<td>AutoForwardToName</td>
<td>xsd:string</td>
<td>Indicates the To name to use on automatically forwarded email messages.</td>
</tr>
<tr>
<td>AutoForwardTriggeredSend</td>
<td>TriggeredSendDefinition</td>
<td>Indicates the triggered send associated with an automatically forwarded email address.</td>
</tr>
<tr>
<td>AutoReply</td>
<td>xsd:boolean</td>
<td>Indicates the reply associated with an automatically forwarded email message.</td>
</tr>
<tr>
<td>AutoReplyTriggeredSend</td>
<td>TriggeredSendDefinition</td>
<td>Indicates the triggered send associated with an automatic reply.</td>
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
<td>DataRetentionPeriodLength</td>
<td>xsd:short</td>
<td>Specifies the number of time units for which data is retained. Use this property with DataRetentionPeriodUnitOfMeasureto specify the full data retention time.</td>
</tr>
<tr>
<td>DataRetentionPeriodUnitOfMeasure</td>
<td>RecurrenceTypeEnum</td>
<td>Specifies the units of time for which data is retained. Deprecated. Use DataRetentionPeriodLength and DataRetentionPeriod instead.</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>DirectForward</td>
<td>xsd:boolean</td>
<td>Indicates whether the direct forward feature has been enabled for a sender profile.</td>
</tr>
<tr>
<td>FromAddress</td>
<td>xsd:string</td>
<td>Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions.</td>
</tr>
<tr>
<td>FromName</td>
<td>xsd:string</td>
<td>Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified.</td>
</tr>
<tr>
<td>Name</td>
<td>xsd:string</td>
<td>Name of the object or property.</td>
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
<td>ReplyManagementRuleSet</td>
<td>APIObject</td>
<td>Indicates the reply mail management (RMM) rule set associated with the sender profile.</td>
</tr>
<tr>
<td>ReplyToAddress</td>
<td>xsd:string</td>
<td>Specifies the reply address used for any messages sent using this sender profile.</td>
</tr>
<tr>
<td>ReplyToDisplayName</td>
<td>xsd:string</td>
<td>Optional value that specifies the display name for the email address contained in the ReplyToAddress property.</td>
</tr>
<tr>
<td>SenderHeaderEmailAddress</td>
<td>xsd:string</td>
<td>Specifies the email address to include in the sender header of a sender profile.</td>
</tr>
<tr>
<td>SenderHeaderName</td>
<td>xsd:string</td>
<td>Specifies name to include in the sender header of a sender profile.</td>
</tr>
<tr>
<td>UseDefaultRMMRules</td>
<td>xsd:boolean</td>
<td>Indicates whether a sender profile uses the default RMM rules for that account.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* <a href="creating_a_sender_profile.htm" title="Creating_a_Sender_Profile">Create a Sender Profile</a>
