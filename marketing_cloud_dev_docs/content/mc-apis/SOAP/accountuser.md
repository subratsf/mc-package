---
title: AccountUser
---
The AccountUser object is an individual user within an account.
* To create or update AccountUser roles, you need the Salesforce Marketing Cloud | General | Assign Marketing Cloud Roles or the Administration | Users | Manage Roles permissions.
* To associate business units to the AccountUser, you need the Administration | Users | Manage Business Units and either Administration | Users | Create or Update permissions.

##Properties
<table class="table table-hover">
	<thead align="left">
		<tr>
			<td>Name</td>
			<td>Data Type</td>
			<td>Description</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>AccountUserID</td>
			<td>Nullable&#96;1</td>
			<td>Specifies the Marketing Cloud identifier of an account user</td>
		</tr>
		<tr>
			<td>ActiveFlag</td>
			<td>xsd:boolean</td>
			<td>Specifies the status of an account user</td>
		</tr>
		<tr>
			<td>AssociatedBusinessUnits</td>
			<td>BusinessUnit[]</td>
			<td>Indicates the business units the account user is associated with and can access. This property is non-retrievable.</td>
		</tr>
		<tr>
			<td>BusinessUnit</td>
			<td>xsd:int</td>
			<td>Specifies the account identifier of the business unit</td>
		</tr>
		<tr>
			<td>ChallengeAnswer</td>
			<td>xsd:string</td>
			<td>Specifies the challenge answer for login assistance</td>
		</tr>
		<tr>
			<td>ChallengePhrase</td>
			<td>xsd:string</td>
			<td>Specifies the challenge answer for login assistance</td>
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
			<td>DefautApplication</td>
			<td>xsd:string</td>
			<td>Specifies app the account user initially accesses</td>
		</tr>
		<tr>
			<td>DefaultBusinessUnit</td>
			<td>xsd:int</td>
			<td>Indicates that business unit account user initially accesses</td>
		</tr>
		<tr>
			<td>DefaultBusinessUnitObject</td>
			<td>BusinessUnit</td>
			<td>Specifies the default business unit for a user.</td>
		</tr>
		<tr>
			<td>Delete</td>
			<td>xsd:int</td>
			<td>Indicates whether an object gets deleted.</td>
		</tr>
		<tr>
			<td>Email</td>
			<td>xsd:string</td>
			<td>Default email address for object. Indicates if subscriber information can be used for email sends.</td>
		</tr>
		<tr>
			<td>ID</td>
			<td>xsd:int</td>
			<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
		</tr>
		<tr>
			<td>IsAPIUser</td>
			<td>xsd:boolean</td>
			<td>Indicates if a user can use the API. A value of true indicates that the user's password remains the same until actively changed.</td>
		</tr>
		<tr>
			<td>IsLocked</td>
			<td>xsd:boolean</td>
			<td>Indicates if account user can or cannot log into their account</td>
		</tr>
		<tr>
			<td>LanguageLocale</td>
			<td>Locale</td>
			<td>Defines language preferences associated with a account, business unit, or user.</td>
		</tr>
		<tr>
			<td>LastSuccessfulLogin</td>
			<td>xsd:dateTime</td>
			<td>Indicates data and time user last successfully logged in (read-only).</td>
		</tr>
		<tr>
			<td>Locale</td>
			<td>Locale</td>
			<td>Contains the locale information for an Account. If no location is set, Locale defaults to en-US.</td>
		</tr>
		<tr>
			<td>ModifiedDate</td>
			<td>Nullable&#96;1</td>
			<td>Indicates the last time object information was modified.</td>
		</tr>
		<tr>
			<td>MustChangePassword</td>
			<td>xsd:boolean</td>
			<td>Indicates whether user must change password on next login</td>
		</tr>
		<tr>
			<td>Name</td>
			<td>xsd:string</td>
			<td>Name of the object or property.</td>
		</tr>
		<tr>
			<td>NotificationEmailAddress</td>
			<td>xsd:string</td>
			<td>Indicates email address to which to send notifications</td>
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
			<td>Password</td>
			<td>xsd:string</td>
			<td>Property definition.</td>
		</tr>
		<tr>
			<td>Roles</td>
			<td>Role[]</td>
			<td>Collection of roles defined for an account.</td>
		</tr>
		<tr>
			<td>SsoIdentities</td>
			<td>SsoIdentity[]</td>
			<td>Identifies single sign-on identities associated with the account user.</td>
		</tr>
		<tr>
			<td>TimeZone</td>
			<td>TimeZone</td>
			<td>Contains time zone information for an Account. For Create and Update calls, this property defines the time zone for an Account object. On a Retrieve call, TimeZone indicates which time zone is in effect for the Account object in question. Without a specific time zone, the Account defaults to Central Standard Time.</td>
		</tr>
		<tr>
			<td>Unlock</td>
			<td>xsd:boolean</td>
			<td>Indicates whether user gets unlocked</td>
		</tr>
		<tr>
			<td>UserID</td>
			<td>xsd:string</td>
			<td>Indicates username for an account.</td>
		</tr>
		<tr>
			<td>UserPermissions</td>
			<td>UserAccess[]</td>
			<td>For internal use only</td>
		</tr>
	</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
* [Manage Enterprise 2.0 Accounts](managing_enterprise_20_accounts_with_the_web_services_api.htm)
