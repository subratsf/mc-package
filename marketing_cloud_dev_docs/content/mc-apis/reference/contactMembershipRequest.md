---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/contactMembership"
method: "post"
---
##Usage

###Required Marketing Cloud Permissions
* Journey Builder, General and Automation
* Interaction Studio, Access

###Example Request
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions/contactMembership
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "ContactKeyList":["ContactKey_1", "ContactKey_2", "ContactKey_3"]
}
```
###Example Response
```js
HTTP/1.1 200 Ok
{
"results" : {
"contactMemberships" : [
    {
        "contactKey" : "ContactKey_1",
        "definitionKey" : "Uniqueue_Key",
        "version" : 1
    }
],
"contactsNotFound" : ["ContactKey_2", "ContactKey_3"]
}
}
```
