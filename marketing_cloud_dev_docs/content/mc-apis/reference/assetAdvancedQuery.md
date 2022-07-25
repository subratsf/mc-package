---
data: <%= swaggerdoc %>
path: "/asset/v1/content/assets/query"
method: "post"
published: true
---

###Sort Syntax
The sort syntax is the asset property name followed by the order direction, either <samp class="codeph nolang">asc</samp> or <samp class="codeph nolang">desc</samp>. This example sorts by both ID and version, in ascending and descending order, respectively.
```
"sort":
[
    { "property":"id", "direction":"ASC" },
    { "property":"version", "direction":"DESC" }
]
```
<!-- a normal html comment -->
###Query Syntax
A complex query is comprised of two or more simple queries joined with an <samp class="codeph nolang">AND</samp> or <samp class="codeph nolang">OR</samp> logical comparison operator. The simple queries are contained in a <samp class="codeph nolang">leftOperand</samp> JSON field and <samp class="codeph nolang">rightOperand</samp> JSON field. A third field, the <samp class="codeph nolang">logicalOperator</samp>, is used to compare the two operands. You can also embed queries inside other queries.

###Filter simpleOperators

<table class="table table-hover">
<thead align="left">
<tr>
<th>Operator</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>equal</td>
<td>Compares numbers and strings. Specifies that search results must contain an exact match of the words included in the search terms.</td>
</tr>
<tr>
<td>notEqual</td>
<td>Compares numbers and strings.</td>
</tr>
<tr>
<td>lessThan</td>
<td>Compares numbers only.</td>
</tr>
<tr>
<td>lessThanOrEqual</td>
<td>Compares numbers only.</td>
</tr>
<tr>
<td>greaterThan</td>
<td>Compares numbers only.</td>
</tr>
<tr>
<td>greaterThanOrEqual</td>
<td>Compares numbers only.</td>
</tr>
<tr>
<td>like</td>
<td>Is similar to. Compares strings only.</td>
</tr>
<tr>
<td>isNull</td>
<td></td>
</tr>
<tr>
<td>isNotNull</td>
<td></td>
</tr>
<tr>
<td>contains</td>
<td>Compares strings only. Specifies that search results must contain at least one of the words included in the search terms.</td>
</tr>
<tr>
<td>mustcontain</td>
<td>Specifies that search results must contain all words included in the search terms.</td>
</tr>
<tr>
<td>startsWith</td>
<td>Compares strings only.</td>
</tr>
<tr>
<td>in</td>
<td>Value is among the list of values. Use this operator to retrieve a list of assets by their IDs, or a list of assets by nearly any enumerable value.</td>
</tr>
<tr>
<td>where</td>
<td>Value is an exact match of the property's value. Compares only strings within  enumerables, such as tags and attributes). Use this operator to query the tags and attributes list properties for assets where at least one item in the list matches your query.</td>
</tr>
</tbody>
</table>

###Usage

**Example Request**

This example returns all assets whose version is 1 and assetType name is "Template"; returning the first 50 results, sorted by asset ID, ascending.
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST //asset/v1/content/assets/query
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "page":
    {
        "page":1,
        "pageSize":50
    },

    "query":
    {
        "leftOperand":
        {
            "property":"version",
            "simpleOperator":"equal",
            "value":1
        },
        "logicalOperator":"AND",
        "rightOperand":
        {
            "property":"assetType.name",
            "simpleOperator":"equal",
            "value":"Template"
        }
    },

    "sort":
    [
        { "property":"id", "direction":"ASC" }
    ],

    "fields":
    [
        "enterpriseId",
        "memberId",
        "thumbnail",
        "category",
        "content",
        "data"
    ]
}
```

**Example Response**
In addition to standard fields always returned on the asset object, the response contains any optional asset fields specified in the request.

```
{
  "count": 2,
  "page": 1,
  "pageSize": 50,
  "links": {},
  "items": [
    {
      "id": 12610,
      "customerKey": "a7b2c298-7701-43e0-bfab-86110065d81f",
      "objectID": "c9bbebfd-c360-4cf9-a7a7-9f662d491c58",
      "assetType": {
        "id": 4,
        "name": "hello there",
        "displayName": "Template"
      },
      "name": "new-template",
      "description": "new-template",
      "createdDate": "2016-09-15T15:28:42.143-06:00",
      "createdBy": {
        "id": 6247779,
        "email": "email@example.com",
        "name": "Sean Smith",
        "userId": "6247779"
      },
      "modifiedDate": "2016-09-15T15:28:42.143-06:00",
      "modifiedBy": {
        "id": 6247779,
        "email": "email@example.com",
        "name": "Sean Smith",
        "userId": "6247779"
      },
      "enterpriseId": 6264462,
      "memberId": 6264462,
      "status": {
        "id": 1,
        "name": "Draft"
      },
      "thumbnail": {
        "thumbnailUrl": "/v1/assets/12610/thumbnail"
      },
      "category": {
        "id": 284889,
        "parentId": 0,
        "name": "Content Builder"
      },
      "content": "<div>hello world</div>",
      "data": {
        "email": {
          "options": {
            "generateFrom": null
          }
        }
      }
    },
    ...
  ]
}
```
For more use cases related to this reference material, see [Use Case Examples for Enhanced Content Search](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/use-case-enhanced-content-search.htm).

The Enhanced Content Search use cases show how the fictitious Northern Trail Outfitters company might use the Marketing Cloud Enhanced Content Search feature.
