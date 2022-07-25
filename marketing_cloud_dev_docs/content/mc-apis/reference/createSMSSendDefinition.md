---
data: <%= swaggerdoc %>
path: "/messaging/v1/sms/definitions"
method: "post"
---
##Usage

###Example Request with Short Code
To associate a short code to a send definition, use the alphabetic <samp class="codeph nolang">countryCode</samp> and numeric <samp class="codeph nolang">shortCode</samp> attributes.
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/sms/definitions/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "account-reset",
  "name": "account-reset",
  "description": "Using new SMS Transactional API",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "8201221",
    "countryCode": "US",
    "keyword": "PASSWORD"
  }
}
```

###Example Response with Short Code
```js
HTTP/1.1 201 Created
{
  "requestId": "582bec09-6d04-4222-bbba-cea616495596",
  "name": "account-reset",
  "definitionKey": "account-reset",
  "description": "Using new SMS Transactional API",
  "status": "Active",
  "createdDate": "2019-05-14T21:05:00",
  "modifiedDate": "2019-05-14T21:05:00",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "8201221",
    "autoAddSubscriber": true,
    "keyword": "PASSWORD"
  }
}
```

###Example Request with Long Code

To associate a long code or international phone number to a send definition, add the numeric country code at the beginning of the phone number. Then, use this number as the <samp class="codeph nolang">shortCode</samp> attribute. Don't use the alphabetic <samp class="codeph nolang">countryCode</samp> attribute unless your account configuration requires it.
```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/sms/definitions/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "account-reset",
  "name": "account-reset",
  "description": "Using new SMS Transactional API",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "971234567890",
    "keyword": "PASSWORD"
  }
}
```

###Example Response with Long Code
```js
HTTP/1.1 201 Created
{
  "requestId": "582bec09-6d04-4222-bbba-cea616495596",
  "name": "account-reset",
  "definitionKey": "account-reset",
  "description": "Using new SMS Transactional API",
  "status": "Active",
  "createdDate": "2019-05-14T21:05:00",
  "modifiedDate": "2019-05-14T21:05:00",
  "content": {
    "message": "%%FirstName%%, your 2FA token is %%password%%"
  },
  "subscriptions": {
    "shortCode": "971234567890",
    "autoAddSubscriber": true,
    "keyword": "PASSWORD"
  }
}
```

###HTTP Responses
<table class="table table-hover">
<thead align="left">
<tr>
<th>Response</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td>201 Created</td>
<td>Send definition is created. Review example response.</td>
</tr>
<tr>
<td>409 Conflict</td>
<td>Send definition already exists on the server</td>
</tr>
<tr>
<td>400 Bad Request</td>
<td>Invalid request</td>
</tr>
<tr>
<td>403 Forbidden</td>
<td>Failed to pass authorization.</td>
</tr>
<tr>
<td>500 Server Error</td>
<td>Internal error</td>
</tr>
</tbody>
</table>
