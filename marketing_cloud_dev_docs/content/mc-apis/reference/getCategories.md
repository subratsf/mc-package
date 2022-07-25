---
data: <%= swaggerdoc %>
path: "/asset/v1/content/categories"
method: "get"
published: true
---
**Example Request**
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /asset/v1/content/categories?$pagesize=20&$filter=parentId eq 3916
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
**Example Response**
```
{
    "Id" : 27,
    "Name" : "Test Category",
    "ParentId" : 3916,
    "CategoryType" : "asset",
    "MemberId" : 20720,
    "EnterpriseId" : 20720
},
{
    "Id" : 27,
    "Name" : "Test Category",
    "ParentId" : 3916,
    "CategoryType" : "asset-shared",
    "MemberId" : 20720,
    "EnterpriseId" : 20720,
    "SharingProperties" : {
        "SharingType" : "edit",
        "SharedWith" : [ 0 ]
    }
}
```

###Sort Syntax
The sort syntax is the category property name followed by the order direction, either <samp class="codeph nolang">asc</samp> or <samp class="codeph nolang">desc</samp>, with a space in between. The following example sorts by name in descending order: <samp class="codeph nolang">{{hostname}}/asset/v1/content/categories?$orderBy=name asc</samp>.

###Filter Syntax
Each filter is separated by &. The following example filters all categories whose parent id is similar to the value <samp class="codeph nolang">3916</samp>: <samp class="codeph nolang">{{hostname}}/asset/v1/content/categories?$filter=parentId eq 3916</samp>

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
