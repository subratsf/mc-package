---
data: <%= swaggerdoc %>
path: "/hub/v1/nestedtags/{tagId}"
method: "patch"
---
##Usage

###Example Request
This example patches a nested tag to update its description field.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /hub/v1/nestedtags/18
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "id": 18,
    "description": "Platinum Membership Level - the highest level"
}
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "id": 18,
  "name": "Platinum",
  "description": "Platinum Membership Level - the highest level",
  "modifiedDate": "2019-06-14T11:58:00",
  "parentId": 14
}
```

###Example Request
This example changes a nested tag into a root tag with no parent.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /hub/v1/nestedtags/18
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "id": 18,
    "parentId": 0
}
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "id": 18,
  "name": "Platinum",
  "description": "Platinum Membership Level - the highest level",
  "modifiedDate": "2019-06-14T11:58:00",
  "parentId": 0
}
```
