---
data: <%= swaggerdoc %>
path: "/hub/v1/nestedtags/{tagId}"
method: "put"
---
##Usage

###Example Request
This example renames descriptions of all tags nested under a parent tag ID.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/nestedtags/14
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "id": 14,
  "name": "Membership Level",
  "description": "Corporate Membership Levels"
  "tags": [
    {
      "id": 15,
      "name": "Bronze",
      "description": "Bronze Membership Level - the lowest level",
      "parentId": 14
    },
    {
      "id": 16,
      "name": "Gold",
      "description": "Gold Membership Level - the second-highest level",
      "parentId": 14
    },
    {
      "id": 17,
      "name": "Silver",
      "description": "Silver Membership Level - the third-highest level",
      "parentId": 14
    },
    {
      "id": 18,
      "name": "Platinum",
      "description": "Platinum Membership Level - the highest level",
      "parentId": 14
    }
  ]
}
```

###Example Response
```js
HTTP/1.1 200 OK
{
  "id": 14,
  "name": "Membership Level",
  "description": "Corporate Membership Levels",
  "modifiedDate": "2019-06-14T11:07:00",
  "parentId": 0,
  "tags": [
    {
      "id": 15,
      "name": "Bronze",
      "description": "Bronze Membership Level - the lowest level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    },
    {
      "id": 16,
      "name": "Gold",
      "description": "Gold Membership Level - the second-highest level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    },
    {
      "id": 17,
      "name": "Silver",
      "description": "Silver Membership Level - the third-highest level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    },
    {
      "id": 18,
      "name": "Platinum",
      "description": "Platinum Membership Level - the highest level",
      "modifiedDate": "2019-06-14T11:58:00",
      "parentId": 14,
      "tags": []
    }
  ]
}
```
