---
data: <%= swaggerdoc %>
path: "/hub/v1/nestedtags"
method: "get"
---
##Usage

###Example Request
This example gets a collection of all root tags but none of their nested tags.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/nestedtags
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 OK
[
  {
    "id": 14,
    "name": "Membership Level",
    "description": "",
    "modifiedDate": "2019-06-14T11:07:00",
    "parentId": 0,
    "tags": []
  },
  {
    "id": 19,
    "name": "Colors",
    "description": "",
    "modifiedDate": "2019-06-14T13:10:00",
    "parentId": 0,
    "tags": []
  }
]
```

###Example Request
This example gets a collection of all tags and includes their nested tags one level deep.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/nestedtags?depth=1
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

###Example Response
```js
HTTP/1.1 200 OK
[
  {
    "id": 14,
    "name": "Membership Level",
    "description": "",
    "modifiedDate": "2019-06-14T11:07:00",
    "parentId": 0,
    "tags": [
      {
        "id": 15,
        "name": "Bronze",
        "description": "Bronze Membership Level",
        "modifiedDate": "2019-06-14T11:07:00",
        "parentId": 14,
        "tags": []
      },
      {
        "id": 16,
        "name": "Gold",
        "description": "Gold Membership Level",
        "modifiedDate": "2019-06-14T11:07:00",
        "parentId": 14,
        "tags": []
      },
      {
        "id": 17,
        "name": "Silver",
        "description": "Silver Membership Level",
        "modifiedDate": "2019-06-14T11:07:00",
        "parentId": 14,
        "tags": []
      },
      {
        "id": 18,
        "name": "Platinum",
        "description": "Platinum Membership Level",
        "modifiedDate": "2019-06-14T11:58:00",
        "parentId": 14,
        "tags": []
      }
    ]
  },
  {
    "id": 19,
    "name": "Colors",
    "description": "",
    "modifiedDate": "2019-06-14T13:10:00",
    "parentId": 0,
    "tags": [
      {
        "id": 20,
        "name": "Bronze",
        "description": "",
        "modifiedDate": "2019-06-14T13:10:00",
        "parentId": 19,
        "tags": []
      },
      {
        "id": 21,
        "name": "Gold",
        "description": "",
        "modifiedDate": "2019-06-14T13:10:00",
        "parentId": 19,
        "tags": []
      },
      {
        "id": 22,
        "name": "Silver",
        "description": "",
        "modifiedDate": "2019-06-14T13:10:00",
        "parentId": 19,
        "tags": []
      }
    ]
  }
]
```
