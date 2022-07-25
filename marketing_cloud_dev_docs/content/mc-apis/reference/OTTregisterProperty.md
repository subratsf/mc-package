---
data: <%= swaggerdoc %>
path: "/ott/v1/registration"
method: "post"
---
##Usage

###Example Request: Register a Messenger Resource
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/registration
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ottPlatformName" : "messenger",
    "ottPlatformAttributes" : {
        "applicationId" : "1093076390764037",
        "applicationSecret" : "03d537gg656gvkbe9b430f002e9c4517",
        "pageId" : "1732555047025799",
        "pageName" : "SFMC Engineers",
        "pageAccessToken" : "someaccesstoken4fasdcruib213123knubkdnfisdubnu12312ub3pijnb",
        "endpointUrl" : "https://graph.facebook.com/v2.6/me/messages",
        "callbackVerifyToken" : "this_is_the_verify_token",
        "isActive": true
    }
}
```
###Example Request: Register a LINE Resource
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/registration
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ottPlatformName" : "line",
    "ottPlatformAttributes" : {
        "channelId" : "23493453984234345",
        "channelName" : "SFMC Engineers",
        "channelSecret" : "03d537gg656gvkbe9b430f002e9c4517",
        "customerConnectSecret" : "31234arajcauoherbasuhb213ijqjohbjhb123",
        "endpointUrl" : "https://example.com/1732555047025799",
        "isTransactional" : true,
        "isTestChannel": false,
        "isActive": true
    }
}
```
###Example Success Response
```
HTTP/1.1 201 Created
```
###Example Error Response
```
HTTP/1.1 400 Bad Request

{
    "message": "Please fix the following errors",
    "errorcode": 10006,
    "documentation": "",
    "validationErrors": [
        {
            "message": "EndpointUrl must be provided",
            "errorcode": 10002,
            "documentation": ""
        },
        {
            "message": "OttPlatformName must be provided",
            "errorcode": 10002,
            "documentation": ""
        }
    ]
}
```
####Possible Errors
<table class="table table-hover">
<thead align="left">
<tr>
<th>Message</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>OttPlatformName is invalid</td>
<td>The `ottPlatformName` is invalid in the request payload. The only supported values are `line` and `messenger`.</td>
</tr>
<tr>
<td>OttPlatformAttributes is invalid</td>
<td>The `ottPlatformAttribute` object is empty or missing in the request payload.</td>
</tr>
<tr>
<td>EndpointUrl must be provided</td>
<td>`endpointUrl` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>IsActive must be provided</td>
<td>`isActive` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>ApplicationId must be provided</td>
<td>MESSENGER only: `applicationId` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>ApplicationSecret must be provided</td>
<td>MESSENGER only: `applicationSecret` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>PageId must be provided</td>
<td>MESSENGER only: `pageId` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>PageName must be provided</td>
<td>MESSENGER only: `pageName` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>PageAccessToken must be provided</td>
<td>MESSENGER only: `pageAccessToken` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>CallbackVerifyToken must be provided</td>
<td>MESSENGER only: `callbackVerifyToken` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>ChannelId must be provided</td>
<td>LINE only: `channelId` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>ChannelName must be provided</td>
<td>LINE only: `channelName` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>ChannelSecret must be provided</td>
<td>LINE only: `channelSecret` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>isTransactional must be provided</td>
<td>LINE only: `isTransactional` is empty or missing in the registration request payload.</td>
</tr>
<tr>
<td>isTestChannel must be provided</td>
<td>LINE only: `isTestChannel` is empty or missing in the registration request payload.</td>
</tr>
</tbody>
</table>
