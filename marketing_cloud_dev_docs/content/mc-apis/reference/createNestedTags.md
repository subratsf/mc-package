---
data: <%= swaggerdoc %>
path: "/hub/v1/nestedtags"
method: "post"
---
##Usage

###Example Request
This example creates a tag using only a name.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com

POST /hub/v1/nestedtags
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Membership Level"
}
```
###Example Response
```js
HTTP/1.1 202 Accepted
{
  "id": 14,
  "name": "Membership Level",
  "description": "",
  "modifiedDate": "2019-06-14T11:07:00",
  "parentId": 0,
  "tags": []
}
```

###Example Request
This example creates a parent tag with nested tags.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/nestedTags
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Membership Level",
    "tags": [
    	{
    		"name": "Gold",
    		"description": "Gold Membership Level"
    	},
    	{
    		"name": "Silver",
    		"description": "Silver Membership Level"
    	},
    	{
    		"name": "Bronze",
    		"description": "Bronze Membership Level"
    	}
    ]
}
```

###Example Response
```js
HTTP/1.1 202 Accepted
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
    }
  ]
}
```

###Example Request
This example adds a new nested tag under an existing tag.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/nestedtags
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Platinum",
    "description": "Platinum Membership Level",
    “parentId”: 14
}
```

###Example Response
```js
HTTP/1.1 200 Accepted
{
  "id": 18,
  "name": "Platinum",
  "description": "Platinum Membership Level",
  "modifiedDate": "2019-06-14T11:58:00",
  "parentId": 14
}
```
