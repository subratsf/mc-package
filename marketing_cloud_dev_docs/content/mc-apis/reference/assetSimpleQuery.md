---
data: <%= swaggerdoc %>
path: "/asset/v1/content/assets"
method: "get"
published: true
---

###Sort Syntax
The sort syntax is the asset property name followed by the order direction, either <samp class="codeph nolang">asc</samp> or <samp class="codeph nolang">desc</samp>, with a space in between. Sort by multiple property names by separating each sequence with a comma. This example sorts by name in descending order: <samp class="codeph nolang">{{hostname}}/asset/v1/content/assets?$orderBy=name asc</samp>.

###Filter Syntax
Each filter is separated by %20. To use AND and OR operators or to filter by sub-properties, use the [POST /asset/v1/content/assets/query](assetAdvancedQuery.htm) resource. The following example filters all assets whose name is similar to the value <samp class="codeph nolang">hello world</samp>: <samp class="codeph nolang">{{hostname}}/asset/v1/content/assets?$filter=Name%20like%20'hello%20world'</samp>

###Filter Operators

<table class="table table-hover">
<thead align="left">
<tr>
<th>Operator</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>eq</td>
<td>Equals. Compares numbers and strings.</td>
</tr>
<tr>
<td>neq</td>
<td>Is not equal to. Compares numbers and strings.</td>
</tr>
<tr>
<td>lt</td>
<td>Is less than. Compares numbers only.</td>
</tr>
<tr>
<td>lte</td>
<td>Is less than or equal to. Compares numbers only.</td>
</tr>
<tr>
<td>gt</td>
<td>Is greater than. Compares numbers only.</td>
</tr>
<tr>
<td>gte</td>
<td>Is greater than or equal to. Compares numbers only.</td>
</tr>
<tr>
<td>like</td>
<td>Is similar to. Compares strings only.</td>
</tr>
</tbody>
</table>
