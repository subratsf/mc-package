---
data: <%= swaggerdoc %>
path: "/ott/v1/registration/{platform}"
method: "get"
---
##Usage

###Example Request: Retrieve Messenger Resource Collection
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /ott/v1/registration/messenger
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
###Example Response: Retrieve Messenger Resource Collection
```
HTTP/1.1 200 OK

{
    "count": 2,
    "page": 1,
    "pageSize": 50,
    "links": {
        "self": {
            "href": "/v1/registration/messenger?%24page=1&%24pagesize=50"
        },
        "next": {
            "href": "/v1/registration/messenger?%24page=2&%24pagesize=50"
        }
    },
    "items": [
        {
            "ottPlatformName" : "messenger",
            "ottPlatformAttributes" : {
                "applicationId" : "34234534532453",
                "pageId" : "2343543434231436453",
                "pageName" : "SFMC Engineers",
                "endpointUrl" : "https://example.com/23534564423435",
                "isTransactional" : true,
                "isTestChannel": false,
                "isActive": true,
                "apiVersion" : "v2.0"
            }
        },
        {
            "ottPlatformName" : "messenger",
            "ottPlatformAttributes" : {
                "applicationId" : "1232134234",
                "pageId" : "21342354235",
                "pageName" : "Some Awesome Page",
                "endpointUrl" : "https://example.com/3124234234",
                "isTransactional" : true,
                "isTestChannel": false,
                "isActive": true,
                "apiVersion" : "v2.0"
            }
        }
    ]
}
```
###Example Request: Retrieve LINE Resource Collection
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /ott/v1/registration/line?$page=1&$pagesize=50
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```
###Example Response: Retrieve LINE Resource Collection
```
HTTP/1.1 200 OK

{
    "count": 2,
    "page": 1,
    "pageSize": 50,
    "links": {
        "self": {
            "href": "/v1/registration/line?%24page=1&%24pagesize=50"
        },
        "next": {
            "href": "/v1/registration/line?%24page=2&%24pagesize=50"
        }
    },
    "items": [
        {
            "ottPlatformName" : "line",
            "ottPlatformAttributes" : {
                "channelId" : "342135435345",
                "channelName" : "SFMC Engineers",                
                "endpointUrl" : "https://example.com/213234231213",
                "isTransactional" : true,
                "isTestChannel": false,
                "isActive": true,
                "apiVersion" : "v2.0"
            }
        },
        {
            "ottPlatformName" : "line",
            "ottPlatformAttributes" : {
                "channelId" : "324345436452342345",
                "channelName" : "Some Awesome Channel",
                "endpointUrl" : "https://example.com/3124325345234234",
                "isTransactional" : true,
                "isTestChannel": false,
                "isActive": true,
                "apiVersion" : "v2.0"
            }
        }
    ]
}
```
