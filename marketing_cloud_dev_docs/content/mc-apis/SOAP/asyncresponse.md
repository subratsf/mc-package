---
title: AsyncResponse
---
Use the AsyncResponse object to modify return of data sent in response to asynchronous API request. The object is available for 30 days after initial response. If you are interested in only the Result object and want to reduce the size of the response message, set the IncludeObjects property value to <strong>True</strong>.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>IncludeObjects</td><td>xsd:boolean</td><td>Indicates whether the APIObject is included in the response.</td></tr><tr><td>IncludeResults</td><td>xsd:boolean</td><td>Determines whether the Result objects are included in the response when an asynchronous API call completes processing.</td></tr><tr><td>OnlyIncludeBase</td><td>xsd:boolean</td><td>Reduce object to base APIObject information. Includes basic reference data associating object and request.</td></tr><tr><td>RespondWhen</td><td>RespondWhen</td><td>Specifies event triggers the AsyncResponse object action.</td></tr><tr><td>ResponseAddress</td><td>xsd:string</td><td>Email address or public URL to receive POST response to asynchronous request.</td></tr><tr><td>ResponseType</td><td>AsyncResponseType</td><td>Specifies type of response associated with an asynchronous operation.</td></tr></tbody></table>

###Sample Respond When SOAP Request
```
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV=http://schemas.xmlsoap.org/soap/envelope/ xmlns:xsd=http://www.w3.org/2001/XMLSchema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <SOAP-ENV:Header>
  <wsse:Security xmlns:wsse=http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <wsu:Timestamp>
    <wsu:Created>2010-03-18T20:49:28Z</wsu:Created>
    <wsu:Expires>2010-03-18T20:54:28Z</wsu:Expires>
   </wsu:Timestamp>
   <wsse:UsernameToken>
    <wsse:Username>username</wsse:Username>
    <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password>
    <wsse:Nonce>vl2E/kZmcAr9bh5kd2OILaHVTIs=</wsse:Nonce>
    <wsu:Created>2010-03-18T20:49:28Z</wsu:Created>
   </wsse:UsernameToken>
  </wsse:Security>
 </SOAP-ENV:Header>
 <SOAP-ENV:Body>
  <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
   <Options>
    <SendResponseTo>
     <ResponseType>HTTPPost</ResponseType>
     <ResponseAddress>http://localhost/PartnerAPI/HTTPPostTest.aspx</ResponseAddress>
     <RespondWhen>OnCallComplete</RespondWhen>
     <IncludeResults>true</IncludeResults>
    </SendResponseTo>
    <SendResponseTo>
     <ResponseType>HTTPPost</ResponseType>
     <ResponseAddress>http://localhost/PartnerAPI/HTTPPostTest.aspx</ResponseAddress>
     <RespondWhen>OnConversationComplete</RespondWhen>
     <IncludeResults>true</IncludeResults>
    </SendResponseTo>
    <ConversationID>Test List 20100318164922160</ConversationID>
    <SequenceCode>1</SequenceCode>
    <CallsInConversation>3</CallsInConversation>
    <RequestType>Asynchronous</RequestType>
   </Options>
   <ns1:Objects xmlns:ns1=http://exacttarget.com/wsdl/partnerAPI xsi:type="ns1:List">
    <ns1:PartnerKey>Test List 20100318164922160</ns1:PartnerKey>
    <ns1:ModifiedDate xsi:nil="true"/>
    <ns1:ObjectID xsi:nil="true"/>
    <ns1:ListName>Mark List</ns1:ListName>
    <ns1:Type>Public</ns1:Type>
    <ns1:Description>Mark List-Private</ns1:Description>
   </ns1:Objects>
  </CreateRequest>
 </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
## Related Items
[Asynchronous Processing](asynchronous_processing.htm)
