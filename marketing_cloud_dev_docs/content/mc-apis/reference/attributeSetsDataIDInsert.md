---
data: <%= swaggerdoc %>
path: "/contacts/v1/attributeSets/{id}"
method: "post"
---
###Usage

The call requires at least the ID, Key, or Name value in the request. If you provide more than one of these values, the call processes the first matching value in the following order:

1. ID
2. Key
3. Name

**Example Request by ID**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/attributeSets/abe05aca-2c17-e311-bb14-00237d5401ce
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{

        "items": [{
            "values": [{
                "name": "Customer Key",
                "value": "sgest@example.com",
            },
            {
                "name": "Order Number",
                "value": "123456"
            },
            {
                "name": "Order Total",
                "value": "177.99"
            }]
        }]
    }
```

**Example Request by Name**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/attributeSets/name:Retail%20Orders
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
        "items": [{
            "values": [{
                "name": "Customer Key",
                "value": "sgest@example.com",
            },
            {
                "name": "Order Number",
                "value": "123456"
            },
            {
                "name": "Order Total",
                "value": "177.99"
            }]
        }]
}
```
**Example Response**

```js
200 (OK)
Content-Type: application/json
{
    "operationStatus": "OK",
    "rowsAffetcted": 1,
    "rowResults": [
        {
        "dataOperationResult": "inserted",
        "itemIndex": 0,
        "values": [{
            "id": "abe05acb-2c17-e311-bb14-00237d5401ce",
            "key": "Customer Key",
            "name": "Customer Key",
            "value": "sgest@example.com",
            
        },
        {
            "id": "abe05acd-2c17-e311-bb14-00237d5401ce",
            "key": "Order Number",
            "name": "Order Number",
            "value": "123456"
        },
        {
            "id": "abe05ace-2c17-e311-bb14-00237d5401ce",
            "key": "Order Total",
            "name": "Order Total",
            "value": "177.99"
        }],
        "resultMessages": []
        }],
    "Id": "abe05aca-2c17-e311-bb14-00237d5401ce",
    "Key": "Retail Orders",
    "Name:""Retail Orders",
    "SchemaId": "36E001F0-6B8F-E311-A274-08EDB9DDEBF0",
    "links": {"attributeSet": {"href": "/attributeSets/{id}"}},
    "resultMessages": [],
    "requestServiceMessageID": "8b51b524-28c1-46fc-9a44-02fca5b0a08c",
    "serviceMessageID": "80676c59-ceb9-48aa-ad35-81e150094a17"
}
```