---
data: <%= swaggerdoc %>
path: "/interaction/v1/interactions/publishStatus/{statusId}"
method: "get"
---

###Usage
**Example Request**

This request retrieves the publishing status for the specified statusId provided while making a <samp class="codeph nolang">publishAsync</samp> request.

####Possible Statuses returned by Journey Builder

* PublishInProcess
* PublishCompleted
* Error

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions/publishStatus/{statusId}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

If any errors are encountered during the publishing process, they will be listed as elements within the <samp class="codeph nolang">errors</samp> property of the response.

```js
HTTP/1.1 200
{
    "statusId": "bd93502a-773c-4588-81d9-d3c7ca0cc10a",
    "status": "PublishInProcess",
    "errors": []
}
```
