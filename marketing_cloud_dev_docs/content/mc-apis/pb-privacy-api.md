---
title: Privacy Batch API
---
Change privacy settings for a Einstein Recommendations profile using the privacy batch API. The batch identifies the profiles and specifies which privacy actions to perform on each profile.

The privacy batch API includes these resources:
* [Create a Batch](pb-create-batch.htm). This API resource creates a batch of privacy setting changes. The call returns a batch_id you then use to GET the status of the batch changes.
* [Get Batch Status](pb-get-batch-status.htm). This API resource checks the status of a batch of privacy settings changes. The call returns the status of each change being made to the profiles.
