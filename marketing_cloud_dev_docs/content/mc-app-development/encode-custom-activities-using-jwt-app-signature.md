---
title: Encode with JWT Signing Secret
---
## How to Get a JWT

Journey Builder uses the JWT Signing Secret from the package containing the activity as the default signing key for the JWT.

## How to Add a JWT to an Activity

Set <samp class="codeph nolang">"useJwt": true</samp> in the activity's arguments for each call (save, validate, publish, execute) for which you wish to receive a JWT. If you don't include a <samp class="codeph nolang">customerKey</samp>, Journey Builder uses the JWT Signing Secret to verify the JWT.

If you are using the External Key as the signing key, then <samp class="codeph nolang">customerKey</samp> is required.

## Sample Journey

```
var ixn = {
    "id": "...",
    "key": "...",
    "name": "My journey",
    "version": 1,
    "workflowApiVersion": 1,
    "activities": [
        {
            "key": "REST-1",
            "name": "Custom REST Activity",
            "type": "REST",
            "outcomes": [
                {
                    "next": null
                }
            ],
            "arguments": {
                "execute": {
                    "inArguments": [
                        {
                            "message": "someMessage"
                        }
                    ],
                    "outArguments": [],
                    "url": "https://example.com/post.php?dir=et_rest_activity_execute",
                    "body": "{email-body}",
                    "header": "",
                    "useJwt": true,
                    "timeout": 10000
                }
            },
            "configurationArguments": {
                "save": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_save",
                    "body": "",
                    "header": "",
                    "useJwt": true,
                },
                "validate": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_validate",
                    "body": "",
                    "header": "",
                    "useJwt": true,
                },
                "publish": {
                    "url": "https://example.com/post.php?dir=et_rest_activity_publish",
                    "body": "",
                    "header": "",
                    "useJwt": true,
                }
            },
            "metaData": {
                "isConfigured": true
            }
        }
    ],
    "triggers": [],
    "goals": [],
    "entryMode": "SingleEntryAcrossAllVersions",
    "executionMode": "Production",
    "status": "Draft"
};
```
##Related Items
[Encode with Customer Key](encode-custom-activities-using-jwt-customer-key.htm)
