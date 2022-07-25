---
title: EmailType
---
<p>Specifies type of email. Requests cannot update the EmailType. If the EmailType is included in an update request, it is ignored. Valid values are case insensitive.</p>

###Properties
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
<td>Normal (HTML)</td>
<td>xsd:string</td>
<td>Indicates that messages are formatted as HTML.</td>
</tr>
<tr>
<td>Text Only (Text)</td>
<td>xsd:string</td>
<td>Indicates that the data extension field holds text data, so the email message consists of text-only content.</td>
</tr>
</tbody>
</table>
