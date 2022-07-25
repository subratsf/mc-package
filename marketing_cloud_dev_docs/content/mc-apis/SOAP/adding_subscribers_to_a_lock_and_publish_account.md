---
title: Add Subscribers to a Lock and Publish Account
---
<p>This page contains information  about adding subscribers to a lock and publish account.</p>

##Why Add Subscribers to a Lock and Publish Account
<p>Lock and publish account allow you to share content from a central administrator account to lock and publish accounts, which can edit selected content areas and send emails to their subscribers. Adding subscribers at the lock and publish level ensures that only the appropriate account can send to specific subscribers while utilizing approved content from the admin account.</p>

##How To Add Subscribers to a Lock and Publish Account
<p>Use the sample code below to construct your own calls to add subscribers at the lock and publish account level. You can use ClientID or ChannelMemberID to identify the account in which to add the subscriber.</p>

###Sample SOAP Envelope
```
<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-32259181" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>USERNAME</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">PASSWORD</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options>
            </Options>
            <Objects xsi:type="Subscriber">
                <Client>
                    <ID>123</ID><!-- This is the channel member ID-->
                </Client>
                <ObjectID xsi:nil="true">
                </ObjectID>
                <EmailAddress>help@example.com</EmailAddress>
                <!-- Lists tag is optional. If not included they are added to All Subscribers only -->
                <Lists>
                    <ID>123</ID>
                    <ObjectID xsi:nil="true">
                    </ObjectID>
                </Lists>
            </Objects>
        </CreateRequest>
    </soapenv:Body>
</soapenb:Envelope>
```
###Sample SOAP Envelope
```
<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Header>
        <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:UsernameToken wsu:Id="UsernameToken-32259181" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                <wsse:Username>USERNAME</wsse:Username>
                <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">PASSWORD</wsse:Password>
            </wsse:UsernameToken>
        </wsse:Security>
    </soapenv:Header>
    <soapenv:Body>
        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
            <Options>
            </Options>
            <Objects xsi:type="Subscriber">
                <Client>
                    <ID>123</ID><!-- This is the channel member ID-->
                </Client>
                <ObjectID xsi:nil="true">
                </ObjectID>
                <EmailAddress>help@example.com</EmailAddress>
                <!-- Lists tag is optional. If not included they are added to All Subscribers only -->
                <Lists>
                    <ID>123</ID>
                    <ObjectID xsi:nil="true">
                    </ObjectID>
                </Lists>
                </Objects>
            <Objects xsi:type="Subscriber">
                <Client>
                    <ID>123</ID><!-- This is the channel member ID-->
                </Client>
                <ObjectID xsi:nil="true">
                </ObjectID>
                <EmailAddress>morehelp@example.com</EmailAddress>
                <!-- Lists tag is optional. If not included they are added to All Subscribers only -->
                <Lists>
                    <ID>123</ID>
                    <ObjectID xsi:nil="true">
                    </ObjectID>
                </Lists>
            </Objects>
        </CreateRequest>
    </soapenv:Body>
</soapenv:Envelope>
```
##Related Items
[CliendID](clientid.htm)
