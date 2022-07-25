---
title: ListAttribute
---

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>BaseAttribute</td>
<td>ListAttribute</td>
<td>Specifies the base attribute of a list attribute in the person model.</td>
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
<td>DefaultValue</td>
<td>xsd:string</td>
<td>The default value for a data extension field if no value is supplied (Include Now() as the default value if you wish to have a field default to today's date). Used by ExtractParameterDescription as the default value for the parameter if not suppliedwhen a data extract is executed. Used by PropertyDefinition if the default value for the attribute if not suppliedfor a data profile attribute.</td>
</tr>
<tr>
<td>Description</td>
<td>xsd:string</td>
<td>Describes and provides information regarding the object.</td>
</tr>
<tr>
<td>FieldLength</td>
<td>xsd:int</td>
<td>Defines number of characters available within a field for a list attribute.</td>
</tr>
<tr>
<td>FieldType</td>
<td>ListAttributeFieldType</td>
<td>Designates data type for a data extension field.</td>
</tr>
<tr>
<td>ID</td>
<td>xsd:int</td>
<td>Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID.</td>
</tr>
<tr>
<td>Inheritable</td>
<td>xsd:boolean</td>
<td>Indicates whether a list attribute can be inherited. A value of true indicates an inheritable list attribute.</td>
</tr>
<tr>
<td>IsHidden</td>
<td>xsd:boolean</td>
<td>Specifies whether a list attribute is hidden. A value of true indicates that the list attribute is hidden.</td>
</tr>
<tr>
<td>IsNullable</td>
<td>xsd:boolean</td>
<td>Specifies whether a list attribute can contain a null value. A value of true indicates a list attributes can contain a null value.</td>
</tr>
<tr>
<td>IsReadOnly</td>
<td>xsd:boolean</td>
<td>Indicates whether a list attribute is read-only. A value of true indicates that the list attribute is read-only.</td>
</tr>
<tr>
<td>List</td>
<td>List</td>
<td>List associated with an object.</td>
</tr>
<tr>
<td>MaxValue</td>
<td>xsd:string</td>
<td>Indicates the maximum value that this property can be set to.</td>
</tr>
<tr>
<td>MinValue</td>
<td>xsd:string</td>
<td>Specifies the minimum value that this property can be set to.</td>
</tr>
<tr>
<td>ModifiedDate</td>
<td>Nullable&#96;1</td>
<td>Indicates the last time object information was modified.</td>
</tr>
<tr>
<td>MustOverride</td>
<td>xsd:boolean</td>
<td>Indicates whether a list attribute must override all other values. A value of true indicates that this list attribute overrides other list attributes.</td>
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
<td>Ordinal</td>
<td>xsd:int</td>
<td>Indicates position of object within an array</td>
</tr>
<tr>
<td>Overridable</td>
<td>xsd:boolean</td>
<td>Indicates a list attribute can be overridden. A value of true indicates that a list attribute can be overridden.</td>
</tr>
<tr>
<td>OverrideType</td>
<td>OverrideType</td>
<td>Indicates how a list attribute can be overridden. Valid values include: <ul>
<li>DoNotOverride</li>
<li>Override</li>
<li>OverrideExceptWhenNull</li>
</ul></td>
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
<td>RestrictedValues</td>
<td>ListAttributeRestrictedValue[]</td>
<td>Specifies a collection for restricted values.</td>
</tr>
<tr>
<td>Scale</td>
<td>xsd:int</td>
<td>Indicates numeric precision for decimal properties.</td>
</tr>
</tbody>
</table>

##Related Items
* [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
