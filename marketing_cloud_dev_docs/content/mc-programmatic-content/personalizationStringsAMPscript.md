---
title: Personalization Strings and AMPscript
---

Use system personalization strings when building AMPscript expressions. For example, you might want to display a different message or text based on the day of the week or the month. Use these personalization strings to add that information:

```
xtdayofweek
```

```
xtmonth
```

Other common uses for system personalization strings include passing identifiers, such as the unique email, job, or subscriber ID or key to a web page or web analytics solution for the purposes of tracking subscriber behavior.

Personalization strings that appear in AMPscript function calls cannot include the surrounding percent symbols. For example, this example shows invalid AMPscript:

```
%%=UPPERCASE(%%emailaddr%%)=%%
```

This format displays valid AMPscript:

```
%%=UPPERCASE(emailaddr)=%%
```

This section lists the system personalization strings to insert into a message. Type these fields directly into the HTML of your email body if you create an HTML paste email, or you type them directly into the text editor when you create or modify the text of a content box.

* The system treats all personalization strings as case-insensitive.
* When working with personalization strings outside of an AMPscript block, you must include the two sets of double percent symbols (two percent symbols on either side of the personalization string). A personalization string used in email might look like this example:

```
%%fullname%%
```

* When working with personalization strings inside an AMPscript block, don't use the two sets of double percent symbols. A personalization string within AMPscript might look like this example:

```
fullname
```

##Marketing Cloud Personalization Strings
Review [Personalization Strings](https://help.salesforce.com/articleView?id=mc_es_available_personalization_strings.htm&type=5) for the full list of personalization strings available to use within your AMPscript.

Use these personalization strings in conjunction with the MobileConnect and Contact Builder applications inside Marketing Cloud:

<table class="table table-hover">
<thead align="left">
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Personalization String</td>
<td>Description</td>
</tr>
<tr>
<td>_CarrierID</td>
<td>Carrier ID associated with the contact, contained in the contact CarrierID field.</td>
</tr>
<tr>
<td>_Channel</td>
<td>Channel associated with the contact, contained in the contact Channel field.</td>
</tr>
<tr>
<td>_City</td>
<td>City associated with the contact, contained in the contact City field.</td>
</tr>
<tr>
<td>_ContactID</td>
<td>Contact ID associated with the contact, contained in the contact ContactID field.</td>
</tr>
<tr>
<td>_ContactKey</td>
<td>Contact key associated with the contact, contained in the contact ContactKey field. Used to send SMS messages in MobileConnect.</td>
</tr>
<tr>
<td>_CountryCode</td>
<td>Country code associated with the contact, contained in the contact CountryCode field.</td>
</tr>
<tr>
<td>_CreatedBy</td>
<td>The entity that created the contact, contained in the contact CreatedBy field.</td>
</tr>
<tr>
<td>_CreatedDate</td>
<td>The date on which the contact was created, contained in the contact CreatedDate field.</td>
</tr>
<tr>
<td>_FirstName</td>
<td>The contact first name, contained in the FirstName field.</td>
</tr>
<tr>
<td>_IsHonorDST</td>
<td>Indicates whether the contact's time zone honors Daylight Savings Time, contained in the contact IsHonorDST field.</td>
</tr>
<tr>
<td>_LastName</td>
<td>The contact last name, contained in the contact LastName field.</td>
</tr>
<tr>
<td>_MobileNumber</td>
<td>The contact mobile number, contained in the contact MobileNumber field.</td>
</tr>
<tr>
<td>_ModifiedBy</td>
<td>The last user to modify contact information, contained in the contact ModifiedBy field.</td>
</tr>
<tr>
<td>_ModifiedDate</td>
<td>The last time a process modified contact information, contained in the contact ModifiedDate field.</td>
</tr>
<tr>
<td>_Priority</td>
<td>The priority to use when sending a message to a contact, contained in the contact Priority field.</td>
</tr>
<tr>
<td>_Source</td>
<td>The source of contact information, contained in the contact Source field.</td>
</tr>
<tr>
<td>_SourceObjectID</td>
<td>The object ID of the source of contact information, contained in the contact SourceObjectID field.</td>
</tr>
<tr>
<td>_State</td>
<td>The state associated with a contact, contained in the contact State field.</td>
</tr>
<tr>
<td>_Status</td>
<td>The send status associated with a contact, contained in the contact Status field.</td>
</tr>
<tr>
<td>_UTCOffset</td>
<td>The time offset from UTC associated with a contact, contained in the contact UTCOffset field.</td>
</tr>
<tr>
<td>_ZipCode</td>
<td>The ZIP code associated with a contact, contained in the contact ZipCode field.</td>
</tr>
</tbody>
</table>
