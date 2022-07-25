---
data: <%= swaggerdoc %>
path: "/push/v1/location"
method: "get"
published: true
---
###Sort Syntax
The sort syntax is the location property name followed by the order direction, either <samp class="codeph nolang">asc</samp> or <samp class="codeph nolang">desc</samp>, with a space in between. Sort by multiple property names by separating each sequence with a comma. Valid sort properties are:
- locationType
- name
- geofenceId
- createdDate
- modifiedDate

This example sorts by name in descending order: <samp class="codeph nolang">{{hostname}}/push/v1/message?$orderBy=name asc</samp>.

###Filter Syntax
Each filter is separated by %20. Any other special characters need to be url encoded.

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

### Usage

**Example Request**
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/location/?$pageSize=25&$page=1&$filter=name%20like%20%27%25test%25%27%20and%20locationType%20eq%20%271%27
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**
```
HTTP/1.1 200 OK
{
"count": 2,
"page": 1,
"pageSize": 25,
"links": {},
"items": [
  {
    "id": "5555555555A",
    "name": "testA",
    "location": "Main Location on Elm Street",
    "description": "Location at 123 Elm St, Nowhere, CA 00000",
    "center": {
      "latitude": 30.750362,
      "longitude": -95.374712
    },
    "radius": 50,
    "locationType": 1
  },
  {
    "id": "5555555555B",
    "name": "testB",
    "location": "Secondary Location on Maple Street",
    "description": "Location at 456 Maple St, Nowhere, CA 00000",
    "center": {
      "latitude": 30.751362,
      "longitude": -95.374712
    },
    "radius": 50,
    "locationType": 1
  }
]}
```
