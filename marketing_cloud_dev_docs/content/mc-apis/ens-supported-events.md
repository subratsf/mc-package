---
title: Supported Notification Events
---

The Event Notification Service supports these event notification types and their corresponding payloads.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Notification Event Category</th>
<th>Notification Event Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>TransactionalSendEvents</td>
<td>EmailSent</td>
<td>Indicates that the email was sent to the email provider.</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>EmailNotSent</td>
<td>Indicates that the email was not sent and includes the reason.</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>EmailBounced</td>
<td>Indicates that the email bounced and includes the reason.</td>
</tr>
<tr>
<td>EngagementEvents</td>
<td>EmailOpen</td>
<td>Indicates that the email was opened.</td>
</tr>
<tr>
<td>EngagementEvents</td>
<td>EmailClick</td>
<td>Indicates that the recipient clicked a link in the email.</td>
</tr>
<tr>
<td>EngagementEvents</td>
<td>EmailUnsubscribe</td>
<td>Indicates that the recipient clicked the unsubscribe link in the email.</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>SmsSent</td>
<td>Indicates that the SMS message was sent to the aggregator.</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>SmsNotSent</td>
<td>Indicates that the SMS message was not sent and includes the reason.</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>SmsTransient</td>
<td>Indicates the most recent transmission status between Salesforce and the mobile device. Not the final disposition. This information is provided by our delivery partners and mobile carriers but is not available in all locales. No actions to take.</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>SmsBounced</td>
<td>Indicates that the SMS message bounced and includes the reason.</td>
</tr>
<tr>
<td>TransactionalSendEvents</td>
<td>SmsDelivered</td>
<td>Indicates that the SMS message was delivered.</td>
</tr>
</tbody>
</table>

## Common Event Attributes

All or some of these attributes are shared for all event data payloads.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventCategoryType</td>
<td>string</td>
<td>The taxonomy of the event</td>
</tr>
<tr>
<td>timestampUTC</td>
<td>number</td>
<td>UTC Epoch time</td>
</tr>
<tr>
<td>compositeId</td>
<td>string</td>
<td>Internal tracking ID (deprecated)</td>
</tr>
<tr>
<td>composite</td>
<td>object</td>
<td>Object containing broken down composite ID</td>
</tr>
<tr>
<td>composite.jobId</td>
<td>string</td>
<td>Marketing Cloud Job ID</td>
</tr>
<tr>
<td>composite.batchId</td>
<td>string</td>
<td>Marketing Cloud Batch ID</td>
</tr>
<tr>
<td>composite.listId</td>
<td>string</td>
<td>Marketing Cloud List ID</td>
</tr>
<tr>
<td>definitionKey</td>
<td>string</td>
<td>Send Definition Customer Key (Transactional Sent Events Only)</td>
</tr>
<tr>
<td>definitionId</td>
<td>string</td>
<td>Send Definition Id (Transactional Sent Events Only)</td>
</tr>
<tr>
<td>mid</td>
<td>number</td>
<td>Tenant Business Unit Id event was produced from</td>
</tr>
<tr>
<td>eid</td>
<td>number</td>
<td>Tenant Enterprise Id event was produced from</td>
</tr>
<tr>
<td>info</td>
<td>object</td>
<td>Object containing event-specific details</td>
</tr>
</tbody>
</table>


## Transactional Email Sent Event
This event notification payload is an example of what your callback receives for a TransactionalSendEvents.EmailSent event.

### Email Sent Info Attributes
<table class="table table-hover">
<thead align="left">
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>to</td>
<td>string</td>
<td>Tenant Business Id event was produced from</td>
</tr>
<tr>
<td>subscriberKey</td>
<td>string</td>
<td>Tenant Enterprise Id event was produced from</td>
</tr>
<tr>
<td>messageKey</td>
<td>string</td>
<td>Object containing event-specific details</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td>Result of the Sent Event</td>
</tr>
<tr>
<td>renderedSubject</td>
<td>string</td>
<td>The subject line after personalization</td>
</tr>
</tbody>
</table>

## Transactional Email Sent Payload Example

```
{
    "eventCategoryType": "TransactionalSendEvents.EmailSent",
    "timestampUTC": 1600698608530,
    "compositeId": "466651f2-9c28-e911-a261-78e3b50b4f00.2001070.44609.4153.1251508322",
    "composite": {
        "jobId": "2001070",
        "batchId": "4153",
        "listId": "44609",
        "subscriberId": "1251508322",
        "emailId": "182583"
    },
    "definitionKey": "makana-appt",
    "mid": 1447640,
    "eid": 1447640,
    "sendClassificationType": "Operational",
    "info": {
        "to": "mduarte.10166.0749@salesforce.exacttargettest.com",
        "subscriberKey": "mduarte.10166.0749@sf.exacttargettest.com",
        "messageKey": "f2b21aa0-fc16-11ea-9bc1-fbf804a5a66e",
        "status": "Sent",
        "renderedSubject": "Don't Forget Your Appointment"
    },
    "definitionId": "466651f2-9c28-e911-a261-78e3b50b4f00"
}
```
## Transactional Email Not Sent Event
This event notification payload is an example of what your callback receives for a TransactionalSendEvents.EmailNotSent event.

### Email Not Sent Info Attributes

<table class="table table-hover">
<thead align="left">
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>to</td>
<td>string</td>
<td>Tenant Business Id event was produced from</td>
</tr>
<tr>
<td>subscriberKey</td>
<td>string</td>
<td>Tenant Enterprise Id event was produced from</td>
</tr>
<tr>
<td>messageKey</td>
<td>string</td>
<td>Object containing event-specific details</td>
</tr>
<tr>
<td>reason</td>
<td>string</td>
<td>The descriptive reason</td>
</tr>
<tr>
<td>statusCode</td>
<td>string</td>
<td>The subscriber error code</td>
</tr>
<tr>
<td>statusMessage</td>
<td>string</td>
<td>The subscriber error message</td>
</tr>
</tbody>
</table>

### TransactionalSendEvents.EmailNotSent Payload Example

```
[
  {
    "eventCategoryType": "TransactionalSendEvents.EmailNotSent",
    "timestampUTC": 1600630238373,
    "compositeId": "3d9ee7e3-57f1-e911-a2d6-1402ec8faa09.1722202.69399.0.0",
    "definitionKey": "makana-appt",
    "mid": 1476456,
    "eid": 1476266,
    "info": {
      "to": "mduarte.10166.0749@sf.exacttargettest.com",
      "subscriberKey": "101660749",
      "messageKey": "c3896725-6847-40bd-9217-dda17ee6cba2",
      "reason": "The subscriber ExactTarget system status is unsubscribed",
      "statusCode": "1",
      "statusMessage": "Unsubscribed"
    },
    "definitionId": "3d9ee7e3-57f1-e911-a2d6-1402ec8faa09",
    "composite": {
        "jobId": "2001070",
        "batchId": "4153",
        "listId": "44609",
        "subscriberId": "1251508322",
        "emailId": "182583"
    }
  }
```
## Transactional Email Bounced Event
This event notification payload is an example of what your callback receives for a TransactionalSendEvents.EmailBounced event.

### Email Bounce Info Attributes
<table class="table table-hover">
<thead align="left">
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>to</td>
<td>string</td>
<td>Tenant Business Id event was produced from</td>
</tr>
<tr>
<td>subscriberKey</td>
<td>string</td>
<td>Tenant Enterprise Id event was produced from</td>
</tr>
<tr>
<td>messageKey</td>
<td>string</td>
<td>Object containing event-specific details</td>
</tr>
<tr>
<td>bounceCode</td>
<td>string</td>
<td>The type of bounce - "HARD" or "SOFT"</td>
</tr>
<tr>
<td>bounceMessage</td>
<td>string</td>
<td>The string from the recipient email send the provider</td>
</tr>
<tr>
<td>smtpReason</td>
<td>string</td>
<td>The error value of the SMTP reason</td>
</tr>
</tbody>
</table>

### TransactionalSendEvents.EmailBounced Payload Example

```
[
   {
       "eventCategoryType": "TransactionalSendEvents.EmailBounced",
       "timestampUTC": 1583849944000,
       "compositeId": "9bcfe8e8-5a3b-e911-a2c7-1402ec83d7c0.1888699.69238.29.207500672",
       "definitionKey": "makana-appt",
       "mid": 1476456,
       "eid": 1476266,
       "info": {
           "to": "mduarte.10166.0749@sf.exacttargettest.com",
           "subscriberKey": "5bed12d54c74fd93ee1de599",
           "messageKey": "hJlMt8-fckKT4silLiVusA",
           "bounceCode": "HARD",
           "bounceMessage": "5.1.1 (bad destination mailbox address) User Unknown",
           "smtpReason": "5.1.1"
       },
       "definitionId": "9bcfe8e8-5a3b-e911-a2c7-1402ec83d7c0",
       "composite": {
           "jobId": "2001070",
           "batchId": "4153",
           "listId": "44609",
           "subscriberId": "1251508322",
           "emailId": "297967"
       }
   }
]
```

## Engagement Event Email Open
This event notification payload is an example of what your callback receives for an EngagementEvents.EmailOpen event.

### Email Open Info Attributes
<table class="table table-hover">
<thead align="left">
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>ipAddress</td>
<td>string</td>
<td>IP address detected from click source</td>
</tr>
<tr>
<td>userAgent</td>
<td>string</td>
<td>User agent from click source</td>
</tr>
<tr>
<td>location</td>
<td>object</td>
<td>Contains information about location based on IP address. If the location was unable to be detected, this object will be empty</td>
</tr>
</tbody>
</table>


### EngagementEvents.EmailOpen Payload Example

```
{
    "eventCategoryType": "EngagementEvents.EmailOpen",
    "timestampUTC": 1600722902000,
    "compositeId": "2001071.44609.4119.135804581",
    "definitionKey": "NA",
    "definitionId": "NA",
    "channel": "email",
    "mid": 1447640,
    "eid": 1447640,
    "composite": {
        "jobId": "2001071",
        "batchId": "4119",
        "listId": "44609",
        "subscriberId": "135804581"
    },
    "info": {
        "ipAddress": "52.5.174.125",
        "userAgent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1",
        "location": {

        }
    }
}
```
## Engagement Event Email Click
This event notification payload is an example of what your callback receives for an EngagementEvents.EmailClick event.

### Email Click Info Attributes
<table class="table table-hover">
<thead align="left">
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>ipAddress</td>
<td>string</td>
<td>IP address detected from click source</td>
</tr>
<tr>
<td>jobUrlId</td>
<td>string</td>
<td>Marketing Cloud internal job location</td>
</tr>
<tr>
<td>contentLink</td>
<td>string</td>
<td>Object containing event-specific details</td>
</tr>
<tr>
<td>impressionRegion</td>
<td>string</td>
<td>Result of the Sent Event</td>
</tr>
<tr>
<td>userAgent</td>
<td>string</td>
<td>User agent from click source</td>
</tr>
<tr>
<td>location</td>
<td>object</td>
<td>Contains information about location based on IP address. If location was unable to be detected, this object will be empty</td>
</tr>
<tr>
<td>location.country</td>
<td>string</td>
<td>Country for the Location object.</td>
</tr>
<tr>
<td>location.region</td>
<td>string</td>
<td>Region for the Location object.</td>
</tr>
<tr>
<td>location.city</td>
<td>string</td>
<td>City for the Location object.</td>
</tr>
<tr>
<td>location.postalCode</td>
<td>string</td>
<td>Postal code for the Location object.</td>
</tr>
<tr>
<td>location.latitude</td>
<td>string</td>
<td>Latitude coordinates for the Location object.</td>
</tr>
<tr>
<td>location.longitude</td>
<td>string</td>
<td>Longitude coordinates for the Location object.</td>
</tr>
</tbody>
</table>

### EngagementEvents.EmailClick Payload Example

```
{
        "eventCategoryType": "EngagementEvents.EmailClick",
        "timestampUTC": 1591407815000,
        "compositeId": "1722201.69238.15596.177361590",
        "definitionKey": "NA",
        "definitionId": "NA",
        "channel": "email",
        "mid": 1476456,
        "eid": 1476266,
        "composite": {
            "jobId": "1722201",
            "batchId": "15596",
            "listId": "69238",
            "subscriberId": "177361590"
        },
        "info": {
            "ipAddress": "52.5.174.125",
            "jobUrlId": "74165311",
            "contentLink": "https://portal.makanahealth.com/memberID\u003d?18937918018\u0026cm_ven\u003dExactTarget\u0026cm_cat\u003dMakana+Member+Notifications\u0026cm_pla\u003dAll+Subscribers\u0026cm_ite\u003dhttps%3a%2f%2fportal.makanahealth.com%2fmemberID%3d%3f18937918018\u0026cm_lm\u003ddfallon.10064.0401@gmail.exacttargettest.com\u0026cm_ainfo\u003d\u0026att1\u003d\u0026att2\u003d%%__AdditionalEmailAttribute2%%\u0026att3\u003d%%__AdditionalEmailAttribute3%%\u0026att4\u003d%%__AdditionalEmailAttribute4%%\u0026att5\u003d%%__AdditionalEmailAttribute5%%",
            "impressionRegion": "0",
            "userAgent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; AskTB5.5; MSOffice 12)",
            "location": {
                "country": "US",
                "region": "VA",
                "city": "ASHBURN",
                "postalCode": "20146-20149",
                "latitude": "39.0438",
                "longitude": "-77.4879"
            }
        }
    }
```

## Engagement Event Email Unsubscribe
This event notification payload is an example of what your callback receives for an EngagementEvents.EmailUnsubscribe event.

### Email Unsubscribe Info Attributes
<table class="table table-hover">
<thead align="left">
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>to</td>
<td>string</td>
<td>Tenant Business Id event was produced from</td>
</tr>
<tr>
<td>domain</td>
<td>string</td>
<td>email domain of event</td>
</tr>
<tr>
<td>unsubscribeDate</td>
<td>number</td>
<td>The date the subscriber unsubscribed</td>
</tr>
<tr>
<td>unsubscribeMethod</td>
<td>string</td>
<td>How the unsubscribe occurred; click,reply</td>
</tr>
<tr>
<td>renderedSubject</td>
<td>string</td>
<td>The subject line after personalization</td>
</tr>
</tbody>
</table>

### EngagementEvents.EmailUnsubscribe Payload Example

```
{
        "eventCategoryType": "EngagementEvents.EmailUnsubscribe",
        "timestampUTC": 1591407815000,
        "compositeId": "1722201.69238.15607.178363503",
        "definitionKey": "NA",
        "definitionId": "NA",
        "mid": 1476456,
        "eid": 1476266,
        "composite": {
            "jobId": "1722201",
            "batchId": "15607",
            "listId": "69238",
            "subscriberId": "178363503"
        },
        "info": {
            "to": "pventura.10047.0953@gmail.exacttargettest.com",
            "domain": "gmail.exacttargettest.com",
            "unsubscribeDate": 1591386215000,
            "unsubscribeMethod": "Click"
        }
}
```

## Transactional SMS Sent Event Payload Example
This event notification payload is an example of what your callback receives for a TransactionalSendEvents.SmsSent event.

```
[
  {
    "eventCategoryType": "TransactionalSendEvents.SmsSent",
    "timestampUTC": <timestamp>,
    "compositeId": "<compositeIDString>",
    "definitionKey": "<definitionKeyString>",
    "mid": <midNumber>,
    "eid": <eidNumber>,
    "info": {
      "to": "<mobileNumberString>",
      "subscriberKey": "<subscriberKeyString>",
      "messageKey": "<messageKeyString>"
    }
  }
]
```

## Transactional SMS Not Sent Event Payload Example
This event notification payload is an example of what your callback receives for a TransactionalSendEvents.SmsNotSent event.

```
[
  {
    "eventCategoryType": "TransactionalSendEvents.SmsNotSent",
    "timestampUTC": <timestamp>,
    "compositeId": "<compositeIDString>",
    "definitionKey": "<definitionKeyString>",
    "mid": <midNumber>,
    "eid": <eidNumber>,
    "info": {
      "to": "<mobileNumberString>",
      "subscriberKey": "<subscriberKeyString>",
      "messageKey": "<messageKeyString>",
      "reason": "Mobile Address not found",
      "statusCode": "47"
    }
  }
]
```
## Transactional SMS Transient Event Payload Example
This event notification payload is an example of what your callback receives for a TransactionalSendEvents.SmsTransient event.

```
[
  {
    "eventCategoryType":"TransactionalSendEvents.SmsTransient",
    "timestampUTC":1612564224759,
    "compositeId":"api.8345b8f9-8122-4fda-b03f-1b4da9ba7a50.21602c12-ad90-e911-a2cc-1402ec936a31.888.14408292926.0",
    "composite": {
      "Tsid": “api.d7f4cbbf-03cd-47f8-b391-4602b0931071”,
      "jobId": “0d64fa93-d636-e911-80f3-1402ec6b9425”,
      "batchId": "7021",
      "mobileNumber": “13175554040”,
      "subscriberId" “0”:},
    "definitionKey":"makana-appt"
    "mid":<midNumber>, 1476456,
    "eid":<eidNumber>, 1476266,
    "Info":{
      "to":"14405552926”,
      "subscriberKey":"14405552926”,
      "messageKey":"bc196910-6801-11eb-ac0c-ab0c84c819e8,
      "ordinal":"<segmentOrdinal>",”0”,
      "statusCode":"<SmsStandardStatus>",”3000”,
      "statusMessage":"Enroute",
      "fromAddress": “12345”,
      "countryCode": "US",
    }
  }
]
```
## Transactional SMS Delivered Event Payload Example
This event notification payload is an example of what your callback receives for a TransactionalSendEvents.SmsDelivered event.

```
[
  {
    "eventCategoryType":"TransactionalSendEvents.SmsTransient",
    "timestampUTC":1612564224759,
    "compositeId":"api.8345b8f9-8122-4fda-b03f-1b4da9ba7a50.21602c12-ad90-e911-a2cc-1402ec936a31.888.14408292926.0",
    "composite": {
      "Tsid": “api.d7f4cbbf-03cd-47f8-b391-4602b0931071”,
      "jobId": “0d64fa93-d636-e911-80f3-1402ec6b9425”,
      "batchId": "7021",
      "mobileNumber": “13175554040”,
      "subscriberId" “0”:},
    "definitionKey":"makana-appt"
    "mid":<midNumber>, 1476456,
    "eid":<eidNumber>, 1476266,
    "Info":{
      "to":"14405552926”,
      "subscriberKey":"14405552926”,
      "messageKey":"bc196910-6801-11eb-ac0c-ab0c84c819e8,
      "ordinal":"<segmentOrdinal>",”0”,
      "statusCode":"<SmsStandardStatus>",”4000”,
      "statusMessage":"Delivered",
      "fromAddress": “12345”,
      "countryCode": "US",
    }
  }
]
```
## Transactional SMS Bounced Event Payload Example
This event notification payload is an example of what your callback receives for a TransactionalSendEvents.SmsBounced event.

```
[
  {
    "eventCategoryType":"TransactionalSendEvents.SmsTransient",
    "timestampUTC":1612564224759,
    "compositeId":"api.8345b8f9-8122-4fda-b03f-1b4da9ba7a50.21602c12-ad90-e911-a2cc-1402ec936a31.888.14408292926.0",
    "composite": {
          "Tsid": “api.d7f4cbbf-03cd-47f8-b391-4602b0931071”,
          "jobId": “0d64fa93-d636-e911-80f3-1402ec6b9425”,
          "batchId": "7021",
          "mobileNumber": “13175554040”,
          "subscriberId" “0”:},
    "definitionKey":"makana-appt"
    "mid":<midNumber>, 1476456,
    "eid":<eidNumber>, 1476266,
    "Info":{
      "to":"14405552926”,
      "subscriberKey":"14405552926”,
      "messageKey":"bc196910-6801-11eb-ac0c-ab0c84c819e8,
      "ordinal":"<segmentOrdinal>",”0”,
      "statusCode":"<SmsStandardStatus>",”4501”,
      "statusMessage":"Expired",
      "fromAddress": “12345”,
      "countryCode": "US",
    }
  }
]
```
