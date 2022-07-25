---
title: BusinessUnit
---
The BusinessUnit object represents a unit within a larger Enterprise or Enterprise 2.0 account.
* To create or update BusinessUnit roles, you need the Administration | Business Units | Manage Roles permission.
* To create or update a BusinessUnit subscriber filter, you need the Administration | Business Units | Define Subscriber Filter permission.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>AccountType</td>
<td>AccountTypeEnum</td>
<td>Type of Marketing Cloud account. Valid values include:
<ul>
<li>None</li>
<li>EXACTTARGET</li>
<li>PRO_CONNECT</li>
<li>CHANNEL_CONNECT</li>
<li>CONNECT</li>
<li>PRO_CONNECT_CLIENT</li>
<li>LP_MEMBER</li>
<li>DOTO_MEMBER</li>
<li>ENTERPRISE_2</li>
<li>BUSINESS_UNIT</li>
</ul></td>
</tr>
<tr>
<td>AccountUsers</td>
<td>AccountUser[]</td>
<td>An array of users associated with a specific account.</td>
</tr>
<tr>
<td>Address</td>
<td>xsd:string</td>
<td>The physical mailing address required at the bottom of all email messages contains the information described by this property (no P.O. Boxes). The address used to communicate with a Person.</td>
</tr>
<tr>
<td>BrandID</td>
<td>xsd:int</td>
<td>Specifies brand tags to use on an account</td>
</tr>
<tr>
<td>BusinessName</td>
<td>xsd:string</td>
<td>Business name of an account's owner</td>
</tr>
<tr>
<td>BusinessRules</td>
<td>BusinessRule[]</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>Children</td>
<td>AccountDataItem[]</td>
<td>An array of AccountDataItem objects that represent child accounts of this account.</td>
</tr>
<tr>
<td>City</td>
<td>xsd:string</td>
<td>City of an account's owner to be displayedin thephysical mailing address required at the bottom of all email messages</td>
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
<td>Country</td>
<td>xsd:string</td>
<td>Country of an account's owner, as displayed in the physical mailing address required at the bottom of all email messages</td>
</tr>
<tr>
<td>CreatedDate</td>
<td>xsd:dateTime</td>
<td>Read-only date and time of the object's creation.</td>
</tr>
<tr>
<td>CustomerID</td>
<td>xsd:long</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>CustomerKey</td>
<td>xsd:string</td>
<td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td>
</tr>
<tr>
<td>DBID</td>
<td>xsd:int</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>DefaultHomePage</td>
<td>LandingPage</td>
<td>Defines default landing page for business unit to use as home page.</td>
</tr>
<tr>
<td>DefaultSendClassification</td>
<td>SendClassification</td>
<td>Defines default send classification for all sends from a specific business unit.</td>
</tr>
<tr>
<td>DeletedDate</td>
<td>xsd:dateTime</td>
<td>Read-only date and time of an account's deletion (the value of this property must be set before the account can be deleted).</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>EditionID</td>
<td>xsd:int</td>
<td>Specifies the product edition of the account. Valid values include:
<ul>
<li>2  Core</li>
<li>3   Advanced</li>
<li>4   Enterprise</li>
<li>5   On Your Behalf</li>
<li>6   Lock & Publish</li>
<li>7   Business Unit</li>
<li>8   Agency</li>
<li>9   Embedded</li>
<li>10  Enterprise 2.0</li>
<li>11  Enterprise 2.0 Business Unit</li>
</ul></td>
</tr>
<tr>
<td>Email</td>
<td>xsd:string</td>
<td>Default email address for object. Indicates if subscriber information can be used for email sends.</td>
</tr>
<tr>
<td>Fax</td>
<td>xsd:string</td>
<td>Fax number of the account's owner</td>
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
<td>InheritAddress</td>
<td>xsd:boolean</td>
<td>Specifies that an Enterprise 2.0 business unit inherits the address from the parent business unit.</td>
</tr>
<tr>
<td>IsActive</td>
<td>xsd:int</td>
<td>Specifies whether the object is active</td>
</tr>
<tr>
<td>IsTestAccount</td>
<td>xsd:boolean</td>
<td>Specifies whether an account is a "Test" account</td>
</tr>
<tr>
<td>IsTrialAccount</td>
<td>xsd:boolean</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>LanguageLocale</td>
<td>Locale</td>
<td>Defines language preferences associated with a account, business unit, or user.</td>
</tr>
<tr>
<td>Locale</td>
<td>Locale</td>
<td>Contains the locale information for an Account. If no location is set, Locale defaults to en-US.</td>
</tr>
<tr>
<td>MasterUnsubscribeBehavior</td>
<td>UnsubscribeBehaviorEnum</td>
<td>Defines how master unsubscription requests are handled for a business unit.Valid values include ENTIRE_ENTERPRISE or BUSINESS_UNIT_ONLY.</td>
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
<td>OrgID</td>
<td>xsd:int</td>
<td>Parent account ID for On-Your-Behalf or Lock-and-Publish accounts</td>
</tr>
<tr>
<td>Owner</td>
<td>Owner</td>
<td>Describes account ownership of subscriber in an on-your-behalf account.</td>
</tr>
<tr>
<td>ParentAccount</td>
<td>Account</td>
<td>Provides more information regarding the parent account.</td>
</tr>
<tr>
<td>ParentID</td>
<td>xsd:int</td>
<td>Specifies thethe ID number of the parent account for Lock and Publish, On Your Behalf, Enterprise, and Enterprise 2.0 account children and business units.</td>
</tr>
<tr>
<td>ParentName</td>
<td>xsd:string</td>
<td>Specifies the name of the Parent account</td>
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
<td>Phone</td>
<td>xsd:string</td>
<td>Specifies a phone number. Specifies the phone number of the account owner. Specifies the Phone data type</td>
</tr>
<tr>
<td>PrivateLabelID</td>
<td>xsd:int</td>
<td>Specifies the private label for an account</td>
</tr>
<tr>
<td>PrivateLabels</td>
<td>PrivateLabel[]</td>
<td>Specifies UI modifications to use on child accounts</td>
</tr>
<tr>
<td>ReportingParentID</td>
<td>xsd:int</td>
<td>Reserved for future use</td>
</tr>
<tr>
<td>Roles</td>
<td>Role[]</td>
<td>Collection of roles defined for an account.</td>
</tr>
<tr>
<td>State</td>
<td>xsd:string</td>
<td>Specifies the geographical state of the account's owner. The physical mailing address required at the bottom of all email messages contains the information described by this property.</td>
</tr>
<tr>
<td>SubscriberFilter</td>
<td>FilterPart</td>
<td>Defines filter used to assign subscribers to a specific business unit within an Enterprise or Enterprise 2.0 structure.</td>
</tr>
<tr>
<td>Subscription</td>
<td>Subscription</td>
<td>Reserved for future use.</td>
</tr>
<tr>
<td>TimeZone</td>
<td>TimeZone</td>
<td>Contains time zone information for an Account. For Create and Update calls, this property defines the time zone for an Account object. On a Retrieve call, TimeZone indicates which time zone is in effect for the Account object in question. Without a specific time zone, the Account defaults to Central Standard Time.</td>
</tr>
<tr>
<td>Zip</td>
<td>xsd:string</td>
<td>Specifies the zip code of the account's owner. The physical mailing address required at the bottom of all email messages contains the information described by this property.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
