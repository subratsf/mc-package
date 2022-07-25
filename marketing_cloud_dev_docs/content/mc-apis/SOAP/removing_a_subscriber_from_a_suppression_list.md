---
title: Remove a Subscriber from a Suppression List
---
By removing a subscriber from a suppression list, you enable that subscriber to again receive sends that the application previously did not send.

<div class="alert"> This information does not remove a subscriber's record from your account, and Marketing Cloud recommends avoiding deletion of the actual subscriber information.</div>

Use the sample code below as a model for your own API call:

###Sample SOAP Envelope
```
<soap:Body>
   <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
      <Objects xsi:type="Subscriber">
         <EmailAddress>example@example.com</EmailAddress>
         <SubscriberKey>example@example.com</SubscriberKey>
         <Lists>
            <PartnerKey xsi:nil="true"/>
            <ID>123456</ID>
            <Action>delete</Action>
         </Lists>
      </Objects>
   </UpdateRequest>
</soap:Body>
```
