---
title: Retrieve the Aggregate Results of an Import Via ImportResultsSummary
---
<p>This page contains information  about retrieving the aggregate results of an import activity using the retrieve-only object ImportResultsSummary.</p>

##Why Retrieve the Aggregate Results of an Import
<p>The retrieve-only object ImportResultsSummary provides access to a range of data related to an import activity. You can use that information to evaluate the results of that activity and plan further action based on those results. For example, you can evaluate error messages and correct invalid entries to permit a successful import.</p>

##How to Retrievethe Aggregate Results of an Import
<p>Use the sample code below as an example to construct your own API call.</p>

###Sample .NET Code 
```
// Instantiate variables  
string requestID;  
  
// Filter by TaskResultID (the unique id for the import)  
SimpleFilterPart sfp = new SimpleFilterPart();  
sfp.Property = "TaskResultID";  
sfp.SimpleOperator = SimpleOperators.equals;  
sfp.Value = new string[] { "1234" };  
  
// Create the RetrieveRequest  
RetrieveRequest request = new RetrieveRequest();  
request.ObjectType = "ImportResultsSummary";  
request.Filter = sfp;  
request.Properties = new string[] { "ImportDefinitionCustomerKey", "ImportType", "ImportStatus", "ID", "ObjectID", "NumberDuplicated", "NumberErrors", "NumberSuccessful", "DestinationID", "TaskResultID" };  
  
// Execute the RetrieveRequest  
APIObject[] results;  
string status = integrationFramework.Retrieve(request, out requestID, out results);  
  
// Output the results  
System.Text.StringBuilder sb = new System.Text.StringBuilder();  
sb.Append("Retrieve Import Results Summary");  
sb.AppendFormat("\nOverall result: {0}.  RequestID: {1}", status, requestID);  
  
// Print out results for each new object created  
for (int cntr = 0; cntr < results.Length; cntr++)  
{  
    sb.Append(string.Format("\n ---- Index {0}", cntr));  
    ImportResultsSummary id = results[cntr] as ImportResultsSummary;  
    sb.Append("\n ID: " + id.ID);  
    sb.Append("\n ObjectID: " + id.ObjectID);  
    sb.Append("\n CustomerKey: " + id.ImportDefinitionCustomerKey);  
    sb.Append("\n ImportType: " + id.ImportType);  
    sb.Append("\n ImportStatus: " + id.ImportStatus);  
    sb.Append("\n NumberDuplicated: " + id.NumberDuplicated);  
    sb.Append("\n NumberErrors: " + id.NumberErrors);  
    sb.Append("\n NumberSuccessful: " + id.NumberSuccessful);  
    sb.Append("\n DestinationID: " + id.DestinationID);  
    sb.Append("\n TaskResultID: " + id.TaskResultID);  
    sb.Append("\n");  
}  
  
Console.WriteLine(sb.ToString());
```
###Sample SOAP Envelope 
```
<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-32259181" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <wsse:Username>XXXXX</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXXX</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
         <RetrieveRequest>
            <ObjectType>ImportResultsSummary</ObjectType>
            <Properties>ImportDefinitionCustomerKey</Properties>
            <Properties>ImportType</Properties>
            <Properties>ImportStatus</Properties>
            <Properties>ID</Properties>
            <Properties>ObjectID</Properties>
            <Properties>NumberDuplicated</Properties>
            <Properties>NumberErrors</Properties>
            <Properties>NumberSuccessful</Properties>
            <Properties>DestinationID</Properties>
            <Properties>TaskResultID</Properties>
     <Filter xsi:type="ns1:SimpleFilterPart" xmlns:ns1="http://exacttarget.com/wsdl/partnerAPI">
               <Property>TaskResultID</Property>
               <SimpleOperator>equals</SimpleOperator>
               <Value>125574039</Value>
            </Filter>
         </RetrieveRequest>
      </RetrieveRequestMsg>
   </soapenv:Body>
</soapenv:Envelope>
```
         