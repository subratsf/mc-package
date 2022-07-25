---
title: Retrieve the Availability Status of a Marketing Cloud Account
---
You can use the GetSystemStatus API call to retrieve the status of the Marketing Cloud SOAP API.

<div class="alert"> Use this call in exception-handling circumstance, NOT prior to every API call. New SOAP faults provide more information on application issues resulting in failed logins.</div>

Take the following actions based on the status of Marketing Cloud:
<ul> <li>If the GetSystemStatus call returns <strong>OK</strong>, no action is required.</li> <li>If the GetSystemStatus call returns <strong>InMaintenance</strong>, place your application into a queuing mode and periodically make the GetSystemStatus call until the status returns to OK.</li> <li>If the GetSystemStatus call returns <strong>UnplannedOutage</strong>, place your application into a queuing mode, contact Marketing Cloud, and periodically make the GetSystemStatus call until the status returns to OK.</li>
</ul>

##How to Retrieve the Availability Status of a Marketing Cloud Account
<p>Use the sample code below as a model to set up your own API call. The code uses the GetSystemStatus call, which returns one of the following three result messages:</p>
<ul> <li><strong>OK</strong>: All systems are up and running</li> <li><strong>InMaintenance</strong>: Marketing Cloud systems are in planned maintenance</li> <li><strong>UnplannedOutage</strong>: Marketing Cloud systems are having an unplanned outage</li>
</ul>
<p>The SystemStatusResult object contains the applicable message.</p>

###Retrieving the System Status of Marketing Cloud
<p>To properly understand and act upon the system status of Marketing Cloud, your environment must include the following elements:</p>

####Global Status Container
<p>Your application must include a global Marketing Cloud status container. The value of this container allows your application to change code paths to ensure all messages are stored while waiting for Marketing Cloud's status to return to <strong>OK</strong>. If the global status container contains an <strong>InMaintenance </strong>or <strong>UnplannedOutage </strong>status, be sure to wait for the scheduled status call (described below) to update the global status container to the <strong>OK</strong> status.</p>

####Scheduled Status Calls
<p>Your application must include a scheduled status-checking component that can respond to error situations and update the global status container if the status is different. Marketing Cloud recommends executing the GetCurrentStatus call every 10 minutes. Don't run the call prior to every API call or every 30 seconds.</p>

####Exception Handling
<p>Your application must execute the GetSystemStatus call when SOAP exceptions (or other unplanned exceptions) occur in your application. If the GetSystemStatus call returns anything other than<strong>OK</strong>, the API updates the global status container to allow Marketing Cloud to safely respond to the exception scenario.</p>

###Sample Code
```
// 1. Invoke the GetSystemStatus Call
string message;
SystemStatusResult[] results = integrationFramework.GetSystemStatus(null, out status, out message, out requestID);
// 2. Output the Overall Status of the Request
Console.WriteLine("Status: {0}", status);
// 3. Output the Status of the System
foreach (SystemStatusResult result in results)
{
	Console.WriteLine("_________________");
	Console.WriteLine(result.SystemStatus);
}
```
###Output
```
Status: OK
_________________
OK
```
###Sample SOAP Envelope
```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <soap:Header>
        <wsa:Action>GetSystemStatus</wsa:Action>
        <wsa:MessageID>urn:uuid:fc2849b5-e480-43a4-ad07-5cb1be9a37c9</wsa:MessageID>
        <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsa:To>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</wsa:To>
        <wsse:Security soap:mustUnderstand="1">
            <wsse:UsernameToken xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="SecurityToken-db1066a9-acf1-4f1b-a455-12e721913742">
                <wsse:Username>XXXX</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">XXXX</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soap:Header>
    <soap:Body>
        <SystemStatusRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
<Options />
        </SystemStatusRequestMsg>
  </soap:Body>
</soap:Envelope>
```
##Related Items
* [GetSystemStatus Method](getsystemstatus.htm)
* [SystemStatusResult Object](systemstatusresult.htm)
