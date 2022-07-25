---
title: Resolve Retrieve Call Errors
---
<p>This page contains information  about resolving errors during a Retrieve call.</p>

##Why Resolve Retrieve Call Errors
<p>You can eliminate the cause of these errors preventing you from correctly performing calls using the Retrieve method.</p>

##How to Resolve Retrieve Call Errors
<p>When performing a Retrieve call (usually on the Email object), you may see the following exception:</p> 
```
Error in deserializing body of reply message for operation 'Retrieve'
```
<p>To resolve this exception, increase the maxStringContentLength within the readerQuotas configuration for your customBinding from the default of <strong>8192 </strong>to account for the large tag content for the HTMLBody. Integrate the following into your web.config/app.config to resolve this error:</p> 
```
<customBinding> 
    <binding name="SoapBinding" closeTimeout="00:35:00" openTimeout="00:35:00" 
     receiveTimeout="00:35:00" sendTimeout="00:35:00"> 
        <security authenticationMode="UserNameOverTransport"></security> 
            <textMessageEncoding messageVersion="Soap12WSAddressingAugust2004"> 
            <readerQuotas maxDepth="2147483647" maxStringContentLength="2147483647" 
             maxArrayLength="2147483647" maxBytesPerRead="2147483647" maxNameTableCharCount="2147483647"              /> 
            </textMessageEncoding> 
        <httpsTransport maxReceivedMessageSize="655360000"></httpsTransport> 
    </binding> 
</customBinding>
```
##Related Items
* [Retrieve Method](retrieve.htm) 
* [Email Object](email.htm)