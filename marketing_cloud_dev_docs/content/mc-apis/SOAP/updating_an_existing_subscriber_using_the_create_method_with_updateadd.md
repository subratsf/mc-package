---
title: Update a Subscriber
---

##Why Update a Subscriber Using the Create Method with UpdateAdd
<p>Updating an existing subscriber via the SOAP API allows you to better maintain your subscriber information while utilizing a tight integration with your system or development environment.</p>

##How to Update a Subscriber Using the Create Method with UpdateAdd
Use the sample SOAP envelope below as an example to construct your own Create call.

###Sample SOAP Envelope 
```
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <a:Action s:mustUnderstand="1">Create</a:Action>
        <a:MessageID>urn:uuid:7e0cca04-57bd-4481-864c-6ea8039d2ea0</a:MessageID>
        <a:ReplyTo>
            <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
        </a:ReplyTo>
        <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <o:UsernameToken u:Id="uuid-b82c6428-caa1-49fc-986b-dc613c990c49-1">
                <o:Username>
                    <!-- Removed-->
                </o:Username>
                <o:Password>
                    <!-- Removed-->
                </o:Password>
            </o:UsernameToken>
        </o:Security>
    </s:Header>
    <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options>
                <SaveOptions>
                    <SaveOption>
                        <PropertyName>*</PropertyName>
                        <SaveAction>UpdateAdd</SaveAction>
                    </SaveOption>
                </SaveOptions>
            </Options>
            <Objects xsi:type="Subscriber">
                <ObjectID xsi:nil="true">
                </ObjectID>
                <EmailAddress>help@example.com</EmailAddress>
                <Lists>
                    <ID>123</ID>
                    <ObjectID xsi:nil="true">
                    </ObjectID>
                </Lists>
            </Objects>
        </CreateRequest>
    </s:Body>
</s:Envelope>
```

##Related Items
[Create Method](create.htm)