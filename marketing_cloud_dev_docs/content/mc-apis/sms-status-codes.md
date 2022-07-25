---
title: SMS Status Codes
---

This table includes status codes returned from MobileConnect API calls for all locations. Use these codes to evaluate and troubleshoot your SMS sends.

<table class="table table-hover">
  <tr>
    <th scope="col">Code</th>
    <th scope="col">Status</th>
    <th scope="col">Definition</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>QueuedToSfmcSendService</td>
    <td>Message queued to internal send service.</td>
  </tr>
  <tr>
    <td>1500</td>
    <td>QueueFailureToSfmcSendService</td>
    <td>Message failed to queue to internal send service. Retry your send.</td>
  </tr>
  <tr>
    <td>1501</td>
    <td>ValidationError</td>
    <td>Internal validation error. Retry your send.</td>
  </tr>
  <tr>
    <td>2000</td>
    <td>DeliveredToAggregator</td>
    <td>Message delivered to aggregator. Status will be updated when delivery confirmation comes from carrier or mobile device. For shared codes, this is the final status.</td>
  </tr>
  <tr>
    <td>2500</td>
    <td>FailedToAggregator</td>
    <td>Message not delivered to aggregator. Retry your send.</td>
  </tr>
  <tr>
    <td>2501</td>
    <td>UnknownToAggregator</td>
    <td>Unknown aggregator error.</td>
  </tr>
  <tr>
    <td>2600</td>
    <td>ThrottledToAggregator</td>
    <td>Message not accepted by aggregator due to capacity issues. Salesforce exhausted the retry process.</td>
  </tr>
  <tr>
    <td>3000</td>
    <td>Enroute</td>
    <td>Message is en route to carrier. Waiting on carrier confirmation.</td>
  </tr>
  <tr>
    <td>3001</td>
    <td>SentToCarrier</td>
    <td>Message sent to carrier. Waiting to be accepted by carrier.</td>
  </tr>
  <tr>
    <td>3002</td>
    <td>AcceptedByCarrier</td>
    <td>Message accepted by carrier. Waiting for delivery confirmation.</td>
  </tr>
  <tr>
    <td>3400</td>
    <td>Unknown</td>
    <td>Unknown error</td>
  </tr>
  <tr>
    <td>4000</td>
    <td>Delivered</td>
    <td>Message delivered to mobile device.</td>
  </tr>
  <tr>
    <td>4500</td>
    <td>Undeliverable</td>
    <td>Message not delivered to mobile device.</td>
  </tr>
  <tr>
    <td>4501</td>
    <td>Expired</td>
    <td>Message expired. Message exhausted the carrier retry process. Mobile device may be out of carrier range.</td>
  </tr>
  <tr>
    <td>4502</td>
    <td>Deleted</td>
    <td>Message deleted by the carrier.</td>
  </tr>
  <tr>
    <td>4503</td>
    <td>Rejected</td>
    <td>Message rejected. Carrier may have detected a loop or assumed that message is spam. This status can indicate an administrative or financial problem between the operator and the end users.</td>
  </tr>
</table>
