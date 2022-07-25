---
title: Einstein Recommendations API
---
The Einstein Recommendations engine empowers marketers to deliver millions of messages across key digital channels that are personalized for each individual’s needs, interests, and preferences.

Developers use the Einstein Recommendations API to update the data used to provide recommendations, manage consumer privacy requests, and to easily download large reports.

##Set Up Your Development Environment
1. Log in to Marketing Cloud.
2. Go to **Predictive Intelligence | Reporting | Admin Tools | Manage API Keys**.
3. Copy the **Crimson Kraken** API key value. This key is created when your account is provisioned.
4. To authenticate your calls, pass the API key in the header like this:
```
Host: https://app.igodigital.com
POST /api/v2/organization/{customer_mid}/...
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY
```

##Related Items
* [Privacy Batch API](pb-privacy-api.htm)
* [Download Email Recommendation Log](pb-email-rec-log.htm)
* [Customize the Calls](https://help.salesforce.com/articleView?id=mc_pb_customize_the_calls.htm&type=5)

> Rights of ALBERT EINSTEIN are used with permission of The Hebrew University of Jerusalem. Represented exclusively by Greenlight.
