---
data: <%= reference.content.functions.BuildRowSetFromXML %>
---
###Usage

Review [this standard](https://www.w3.org/TR/1999/REC-xpath-19991116/) for additional information on XPATH. We recommend also reviewing the [Rowset information](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/languageElements.htm) in the AMPscript Language Elemets document.

####Rowset Content
Value includes the value of any element nodes. This value returns empty for these nodes:

* CDATA
* Comment
* Document
* Document Fragments
* DocumentType
* Entities
* Entity References
* Notation
* ProcessingInformation
* Whitespace
* XmlDeclaration

XML includes any XML contained within the node and will appear empty if the node does not contain XML. The rowset also provides a column for each attribute found in any of the nodes. If a node is missing a value for that attribute, the rowset includes an empty value.

Given the @xml variable contains this text:
```xml
<root>
<Flight origin='IND' dest='NYC'>100.00</Flight>
<Flight origin='IND' dest='LAX' carrier='UAL'>200.00</Flight>
<Flight origin='IND' dest='SEA'>500<PerBagSurcharge>25</PerBagSurcharge></Flight>
</root>
```
Using this function call:
```
BuildRowsetFromXml(@xml, '//Flight', 1)
```
The system returns this rowset:

<table class="table table-hover">
<thead align="left">
<tr>
<th>Value</th>
<th>Xml</th>
<th>Origin_att</th>
<th>Dest_att</th>
<th>Carrier_att</th>
</tr>
</thead>
<tbody>
<tr>
<td>100.00</td>
<td>100.00</td>
<td>IND</td>
<td>NYC</td>
<td>''</td>
</tr>
<tr>
<td>200.00</td>
<td>200.00</td>
<td>IND</td>
<td>LAX</td>
<td>UAL</td>
</tr>
<tr>
<td>500.00</td>
<td><PerBagSurcharge>25</PerBagSurcharge></td>
<td>IND</td>
<td>SEA</td>
<td>''</td>
</tr>
</tbody>
</table>
