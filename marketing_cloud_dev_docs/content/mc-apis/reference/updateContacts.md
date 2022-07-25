---
data: <%= swaggerdoc %>
path: "/contacts/v1/contacts"
method: "patch"
---
###Usage
**Example Request**

The provided HTTP verb for this call applies to all sets in the JSON request body.

Change <samp class="codeph nolang">@example.com</samp> to a valid domain.

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /contacts/v1/contacts
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "contactKey": "acruz@example.com",
    "contactId": 12345678,
    "attributeSets": [{
        "name": "Email Addresses",
            "items": [{
                "values": [{
                    "name": "Email Address",
                    "value": "acruz@example.com"
                },
                {
                    "name": "HTML Enabled",
                    "value": "true"
                }]
            }]
    },
    {
        "name": "Email Demographics",
            "items": [{
                "values": [{
                    "name": "Last Name",
                    "value": "Cruz"
                },
                {
                    "name": "First Name",
                    "value": "Angela"
                },
                {
                    "name": "Text Profile Attribute",
                    "value": "value 1"
                },
                {
                    "name": "Number Profile Attribute",
                    "value": 12345
                }]
            }]
    },
    {
        "name": "MobileConnect Demographics",
            "items": [{
                "values": [{
                        "name": "Mobile Number",
                        "value": "555-555-5555"
                }]
            }]
    },
    {
        "name": "MobilePush Demographics",
            "items": [{
                "values": [{
                        "name": "Device ID",
                        "value": 958405948
                },
                {
                        "name": "Application",
                        "value": 958405948
                }]
            }]
    },
    {
        "name": "GroupConnect LINE Addresses",
        "items": [{
            "values": [{
                "name": "Address ID",
                "value": "addressId_from_api"
            }
           ]
        }]
    },
    {

        "name": "GroupConnect LINE Subscriptions",
        "items": [{
            "values": [{
                "name": "Address ID",
                "value": "addressId_from_api"
             },
             {
                "name": "Channel ID",
                "value": "1234567890"
            }]
        }]
    },
    {
        "name": "GroupConnect LINE Demographics",
        "items": [{
            "values": [{
                "name": "Address ID",
                "value": "addressId_from_api"
            },
            {
                "name": "Display Name",
                "value": "display_name"
            },
            {
                "name": "Picture Url",
                "value": "picture_url"
            },
            {
                "name": "Status Message",
                "value": "status_message"
            }]
        }]
    }]
}
```

**Example Response**

```json
{
    "operationStatus": "OK",
    "rowsAffetcted": 1,
    "contactKey": "acruz@example.com",
    "contactId": 12345678,
    "contactTypeID": 0,
    "isNewContactKey": false,
    "requestServiceMessageID": "8b51b524-28c1-46fc-9a44-02fca5b0a08c",
    "hasErrors": false,
    "resultMessages": [],
    "serviceMessageID": "80676c59-ceb9-48aa-ad35-81e150094a17"
}
```
