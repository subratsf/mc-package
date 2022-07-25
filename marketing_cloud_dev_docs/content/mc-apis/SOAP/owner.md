---
title: Owner
---
The Owner object specifies the owner of a subscriber for triggered sends. Use the Client property to specify the On-Your-Behalf AccountID as the owner of the triggered send. Otherwise, use the FromAddress and FromName to specify the owner.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Client</td><td>ClientID</td><td>Specifies the account ownership and context of an object.</td></tr><tr><td>FromAddress</td><td>xsd:string</td><td>Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions.</td></tr><tr><td>FromName</td><td>xsd:string</td><td>Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions.</td></tr><tr><td>User</td><td>AccountUser</td><td>Specifies the account user listed as owner.</td></tr></tbody></table>

###Sample SOAP Envelope
```
<soapenv:Body>
      <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <Options/>
         <Objects xsi:type="ns1:TriggeredSend" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
            <TriggeredSendDefinition>
               <CustomerKey>TE_Test_Key</CustomerKey>
            </TriggeredSendDefinition>
            <Subscribers>
               <Attributes>
                  <Name>Message</Name>
                  <Value>Subject GBK</Value>
               </Attributes>
               <Owner>
                  <FromName>From_Name</FromName>
                  <FromAddress>johndoe@example.com</FromAddress>
                  <Client>
                     <ID>10008968</ID>
                  </Client>
               </Owner>
              <SubscriberKey>Subscriber</SubscriberKey>
               <EmailAddress>example@example.com</EmailAddress>
            </Subscribers>
         </Objects>
      </CreateRequest>
   </soapenv:Body>
```
