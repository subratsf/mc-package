---
data: <%= swaggerdoc %>
path: "/ott/v1/send"
method: "post"
---
##Usage

###Example Request: Messenger Message Send
* For the `to` object, either `ottId` or `userReference` is required. If both `ottId` and `userReference` are provided, `userReference` is used for send request.
* The `message.contents` array cannot contain more than 1 object.
* For the `message.customKeys` array, `messagingType` is required. If the `messagingType` is `MESSAGE_TAG`, then `message.customKeys.tag` is required. `notificationType` is an optional custom key.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
                "type": "text",
                "text": "thanks for purchase"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```
###Example Request: LINE Message Send
* For the `to` object, `ottId` is required. If both `ottId` and `userReference` are provided, `userReference` is used for send request. If `userReference` is invalid, a retry is attempted with `ottId` as `senderId`.
* The `message.contents` array can contain up to 5 content objects.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "CanBeAGUIDorAny100UnicodeCharString",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "2145435435632435"
    },
    "to": {
        "ottId": "U42348yafsd8y3248yfsq8cy9088934d",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
                "type": "text",
                "text": "Thanks for purchase"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```
###Example Success Response
```js
HTTP/1.1 201 Created

{
    "ottRequestId": "w5f397e-3464-53h6-4535-5345359f567h546"    
}
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
            "message": "Message contents must be provided",
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
<td>From object must be provided</td>
<td>The send message request payload is missing a `from` object.</td>
</tr>
<tr>
<td>Sender Id must be provided</td>
<td>`senderId` is empty or missing in the `from` object in the send message request payload.</td>
</tr>
<tr>
<td>Sender Type must be provided</td>
<td>`senderType` is empty or missing in the `from` object in the send message request payload.</td>
</tr>
<tr>
<td>Sender Id provided is either unregistered or inactive	Unknown</td>
<td>`senderId` provided in the send message request payload is unregistered or inactive Unknown.</td>
</tr>
<tr>
<td>To object must be provided</td>
<td>The send message request payload is missing a `to` object.</td>
</tr>
<tr>
<td>Message object must be provided</td>
<td>The send message request payload is missing a `message` object.</td>
</tr>
<tr>
<td>Message contents must be provided</td>
<td>The send message request payload is missing a `contents` property within `message` object or `contents` array is empty.</td>
</tr>
<tr>
<td>Content Type for all message contents must be provided</td>
<td>`type` is empty or missing in at least one of the content objects in `contents` property within `message` object.</td>
</tr>
<tr>
<td>Text attribute must be provided for Text type Message Content</td>
<td>`text` is empty or missing for a content object with type `text` in `contents` property within `message` object.</td>
</tr>
<tr>
<td>Url attribute must be provided for Image, File, Audio and Video type Message Content</td>
<td>`url` is empty or missing for a content object with type `image`, `audio`, `video`, `file` in `contents` property within `message` object.</td>
</tr>
<tr>
<td>Validity Period must be provided</td>
<td>`validityPeriod` is empty or missing in the `from` object in the send message request payload.</td>
</tr>
<tr>
<td>Message object cannot contain more than {0} message objects</td>
<td>`contents` array in `message` contains more objects that supported for a specific OTT network. For Messenger, `contents` array cannot contain more than 1 object. For LINE, `contents` array cannot contain more than 5 objects.</td>
</tr>
<tr>
<td>MessagingType must be provided as a Custom Key</td>
<td>MESSENGER only: `messagingType` property is empty or missing in customKeys.</td>
</tr>
<tr>
<td>Tag must be provided as a Custom Key when MessagingType is provided as MESSAGE_TAG</td>
<td>MESSENGER only: `tag` property is empty or missing in customKeys, if the messagingType is set to `MESSAGE_TAG`.</td>
</tr>
<tr>
<td>Either OttId or UserReference must be provided in the `To` object</td>
<td>MESSENGER only: Both `ottId` and `userReference` are empty or missing in the `to` object in the send message request payload. At least one of the fields should be provided.</td>
</tr>
<tr>
<td>OttId must be provided in the `To` object</td>
<td>LINE only: `ottId` is empty or missing in the `to` object in the send message request payload.</td>
</tr>
</tbody>
</table>

###Samples for Different Messenger Content Types

####Text Message
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
                "type": "text",
                "text": "thanks for purchase"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```
####Image Message
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "image",
            "url": "https://example.com/original.jpg",
            "alturl": "https://example.com/preview.jpg",
            "isreusable": true,
            "attachmentid": 12345
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```
####Video Message
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "video",
            "url": "https://example.com/original.mp4"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```

####Audio Message
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "audio",
            "url": "https://example.com/original.m4a"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```
####Native Message

Use a native message content type to send an OTT network-specific content other than Text, Image, Audio, or Video. For Messenger, the native content type can be used to send File, Templates including Generic template, button template, receipt template, and list template. To send a native message, use a content type of `native` and provide the OTT network-specific message object into `payload` property.

For more information about Messenger sends, see the [Facebook Messenger Send API Reference](https://developers.facebook.com/docs/messenger-platform/reference/send-api/).

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "MessageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
   "From": {
      "SenderType": "messenger",
      "SenderId": "503868699681937"
   },
   "To": {
      "OttId": "FBfacdb735074f7c492c0bf190fa99020"
   },
   "Message": {
      "Subject": "Message Name",
      "Contents": [
         {
            "type": "native",
            "nativePayload": {
               "attachment": {
                  "type": "template",
                  "payload": {
                     "template_type": "generic",
                     "elements": [
                        {
                           "title": "Welcome!",
                           "image_url": "https://example.com/company_image.png",
                           "subtitle": "We have the right hat for everyone.",
                           "default_action": {
                              "type": "web_url",
                              "url": "https://example.com/view?item=103",
                              "messenger_extensions": false,
                              "webview_height_ratio": "tall",
                              "fallback_url": "https://example.com/"
                           },
                           "buttons": [
                              {
                                 "type": "web_url",
                                 "url": "https://example.com",
                                 "title": "View Website"
                              },
                              {
                                 "type": "postback",
                                 "title": "Start Chatting",
                                 "payload": "DEVELOPER_DEFINED_PAYLOAD"
                              }
                           ]
                        }
                     ]
                  }
               }
            }
         }
      ],
      "CustomKeys": [
         {
            "messagingType": "RESPONSE"
         }
      ]
   },
   "ValidityPeriod": 30
}
```

###Samples for Different LINE Content Types

####Text Message
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
                "type": "text",
                "text": "thanks for purchase"
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```
####Image Message
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "image",
            "url": "https://example.com/original.jpg",
            "alturl": "https://example.com/preview.jpg"
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```
####Video Message
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "video",
            "url": "https://example.com/original.mp4",
            "alturl": "https://example.com/preview.jpg"
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```
####Audio Message
```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "audio",
            "url": "https://example.com/original.m4a",
            "duration": 13141
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```
####Native Message

Use a native message content type to send an OTT network-specific content other than Text, Image, Audio, or Video. For LINE, the native content type can be used to send Sticker, Location, ImageMap, Button Template, Confirm Template, Carousal Template and Image Carousal Template. To send a native message, use a content type of `native` and provide the OTT network-specific message object into `payload` property.

For more information about LINE sends, see the [LINE API Reference](https://developers.line.me/en/docs/messaging-api/reference/#message-objects).

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "native",
            "payload": {
                   "type": "template",
                   "altText": "this is a buttons template",
                   "template": {
                       "type": "buttons",
                       "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
                       "title": "Menu",
                       "text": "Please select",
                       "actions": [{
                               "type": "postback",
                               "label": "Buy",
                               "data": "action=buy&itemid=123"
                           },
                           {
                               "type": "postback",
                               "label": "Add to cart",
                               "data": "action=add&itemid=123"
                           },
                           {
                               "type": "uri",
                               "label": "View detail",
                               "uri": "http://example.com/page/123"
                           }
                       ]
                   }
               }
           }],
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```
