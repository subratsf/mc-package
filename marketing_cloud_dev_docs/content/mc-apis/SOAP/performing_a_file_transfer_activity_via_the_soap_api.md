---
title: Perform a File Transfer
---
<p>This page contains information about performing a file transfer activity via the SOAP API.</p>

##Why Perform a File Transfer Activity
<p>You can use the API to perform an existing file transfer activity within Marketing Cloud. Note that this file transfer activity must be created via Marketing Cloud and that you cannot retrieve, update, or delete the file transfer activity.</p>

##How to Perform a File Transfer Activity
<p>Use the sample code below as a model to create your own call.</p>

###Sample SOAP Envelope
```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<SOAP-ENV:Header>
  <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <wsu:Timestamp>
    <wsu:Created>2011-06-01T14:15:09Z</wsu:Created>
    <wsu:Expires>2011-06-01T14:20:09Z</wsu:Expires>
   </wsu:Timestamp>
   <wsse:UsernameToken>
    <wsse:Username>XXXXXXX</wsse:Username>
    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXXXXXXX</wsse:Password>
    <wsse:Nonce>rpmRN3mmKj1d9IwkUr2hiat++rc=</wsse:Nonce>
    <wsu:Created>2011-06-01T14:15:09Z</wsu:Created>
   </wsse:UsernameToken>
  </wsse:Security>
 </SOAP-ENV:Header>
 <SOAP-ENV:Body>
  <PerformRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options/>
   <Action>Start</Action>
   <Definitions>
    <ns1:Definition xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="ns1:FileTransferActivity">
     <ns1:ModifiedDate xsi:nil="true"/>
     <ns1:ObjectID xsi:nil="true"/>
     <ns1:CustomerKey>12345</ns1:CustomerKey>
    </ns1:Definition>
   </Definitions>
  </PerformRequestMsg>
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
##Related Items
[File Transfer Activity](https://help.salesforce.com/articleView?id=mc_as_using_the_file_transfer_activity.htm&type=5)
