---
title: How the Send API Works
---

The Marketing Cloud Integrated Send API allows customers with an established Marking Cloud integration to perform an integration-type send via an API call. Customers that normally perform email sends from within the Marketing Cloud Connect in their Salesforce Org can now develop custom processes that issue the same send outside of the Connector using the Send API. The Send API allows you to define your integration type (currently supporting only Salesforce integrations) as well as your channel (currently supporting only the Email channel).

This diagram shows the integration of a Marketing Cloud account and Sales and Service Org where the integration uses the Send API. Calls to the Send API define and schedule email sends using Salesforce audiences via reports or campaigns.
    <img src="images/SFSendAPI.jpg" class="img-responsive" style="margin: 25px 0;" />

##How the Sending Engines Work

The sending engines require three types of information to perform email sends: 
1. Email content
2. Send classification
3. Audience
The send definition contains all of this information. You can reuse a send definition to perform multiple sends. 

In order to process a send, submit a send definition to the sending engine using an **Email Send Instance**. The Email Send Instance applies a schedule to the send definition, either for an immediate send or for scheduling at a future date and time.
    <img src="images/SFSendAPIDefinitionAndInstance.jpg" class="img-responsive" style="margin: 25px 0;" />

