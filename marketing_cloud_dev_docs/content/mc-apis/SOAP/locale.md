---
title: Locale
---
The Locale object represents a specific locale in the application and gives the location of a subscriber. If both a locale ID and a locale name are given, the ID takes precedence.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Client</td><td>ClientID</td><td>Specifies the account ownership and context of an object.</td></tr>
<tr><td>CorrelationID</td><td>xsd:string</td><td>Identifies correlation of objects across several requests.</td></tr>
<tr><td>CreatedDate</td><td>xsd:dateTime</td><td>Read-only date and time of the object's creation.</td></tr>
<tr><td>CustomerKey</td><td>xsd:string</td><td>User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud.</td></tr>
<tr><td>ID</td><td>xsd:int</td><td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td></tr>
<tr><td>LocaleCode</td><td>xsd:string</td><td>The name of the locale. This property accepts either a two-character locale code or a five-character locale code, with two sets of letters separated by a dash. In the latter case, the first two letters represent the language to be used, and the last two letters represent the country where the subscriber is located. For example, en-US represents English and United States, while es-ES represents Spanish and Spain.</td></tr>
<tr><td>ModifiedDate</td><td>Nullable&#96;1</td><td>Indicates the last time object information was modified.</td></tr>
<tr><td>ObjectID</td><td>xsd:string</td><td>System-controlled, read-only text string identifier for object.</td></tr>
<tr><td>ObjectState</td><td>xsd:string</td><td>Reserved for future use.</td></tr>
<tr><td>Owner</td><td>Owner</td><td>Describes account ownership of subscriber in an on-your-behalf account.</td></tr>
<tr><td>PartnerKey</td><td>xsd:string</td><td>Unique identifier provided by partner for an object. This property is accessible only via API.</td></tr>
<tr><td>PartnerProperties</td><td>APIProperty[]</td><td>A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.</td></tr>
</tbody></table>

##Related Items
* [English Country Names and Code Elements](http://www.iso.org/iso/english_country_names_and_code_elements)
* <a href="http://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo(VS.80).aspx">Five-Character Locale Code</a>
