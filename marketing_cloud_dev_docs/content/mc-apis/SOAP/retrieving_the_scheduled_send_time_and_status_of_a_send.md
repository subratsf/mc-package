---
title: Retrieve the Scheduled Send Time and Status of a Send
---
<p>This page contains information  about retrieving the scheduled send time and status of a scheduled send.</p>

##Why Retrieve the Scheduled Send Time and Status of a Send
<p>You can use the retrieved information to learn when a specific send job is sent to subscribers and take any necessary action, such as cancelling a send or scheduling a send to follow up on the original send.</p>

##How to Retrieve the Scheduled Send Time and Status of a Send
<p>Use the sample code below as a model for your own API call.</p>

###Sample SOAP Envelope
```
<soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <Options>
            </Options>
            <ObjectType>Send</ObjectType>
            <Properties>ID</Properties>
            <Properties>Client.ID</Properties>
            <Properties>Email.ID</Properties>
            <Properties>SendDate</Properties>
            <Properties>FromName</Properties>
            <Properties>Duplicates</Properties>
            <Properties>InvalidAddresses</Properties>
            <Properties>ExistingUndeliverables</Properties>
            <Properties>ExistingUnsubscribes</Properties>
            <Properties>HardBounces</Properties>
            <Properties>SoftBounces</Properties>
            <Properties>OtherBounces</Properties>
            <Properties>UniqueClicks</Properties>
            <Properties>UniqueOpens</Properties>
            <Properties>NumberSent</Properties>
            <Properties>Unsubscribes</Properties>
            <Properties>MissingAddresses</Properties>
            <Properties>Subject</Properties>
            <Properties>PreviewURL</Properties>
            <Properties>SentDate</Properties>
            <Properties>EmailName</Properties>
            <Properties>Status</Properties>
            <Filter xsi:type="SimpleFilterPart">
               <Property>ID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>123456789</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
```
