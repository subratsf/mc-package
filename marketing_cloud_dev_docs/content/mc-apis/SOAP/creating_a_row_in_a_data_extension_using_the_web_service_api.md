---
title: Create a Row in a Data Extension
---

##Why Create a Row in a Data Extension
<p>If you use the SOAP API to maintain your data extensions, you may have to create a row in a data extension at some point. For example, you may have to add a subscriber from a <a href="https://help.salesforce.com/articleView?id=mc_es_publication_lists.htm&type=5" title="Publication Lists">publication</a> or <a href="https://help.salesforce.com/articleView?id=mc_es_suppression_lists.htm&type=5" title="Suppression Lists">suppression</a> list. The information in this document helps you set up your sample code and successfully add the row in the data extension.</p>

##How to Create a Row in a Data Extension
<p>Use the sample code below to set up your own API call:</p>

###Sample Ruby on Rails Code
```
require 'rubygems'
gem 'soap4r'
require 'soap/wsdlDriver'
require 'soap/header/simplehandler'
require 'defaultDriver.rb'
require 'authStub.rb'
#Async create options
#options = CreateOptions.new(nil,nil,nil,nil,nil,nil,nil,nil,'Asynchronous')
options = nil
subs = [['EmailAddress','FirstName','PhoneNumber'],['acruz@example.com','Angel','15555555555']]
ttlRows = subs.length
ttlRowsToSend = 2
procTo = ttlRowsToSend
ttlToSend = ttlRows > ttlRowsToSend ? ttlRowsToSend : ttlRows
hdr = String.new
rows = Array.new
subs.each_with_index do |line, i|
  columns = Array.new
  if i == 0 then
    hdr = line
  else
    line.each_with_index do |items, c|
      columns.push(APIProperty.new(hdr[c].chomp,items.chomp))
    end
  end
  if i == procTo or i == (ttlRows - 1) then
    rows.push(DataExtensionObject.new(nil,nil,nil,nil,nil,nil,nil,'APITestDe4',nil,nil,nil,[*columns]))
    resp = $driver.create(CreateRequest.new(options,[*rows]))
    rows.clear
    procTo = i != ttlRows ? procTo + ttlRowsToSend : nil
  else
    rows.push(DataExtensionObject.new(nil,nil,nil,nil,nil,nil,nil,'APITestDe4',nil,nil,nil,[*columns]))
  end
end
```
###Sample Ruby on Rails Code Creating a Data Extension Row from a File
```
require 'rubygems'
gem 'soap4r'
require 'soap/wsdlDriver'
require 'soap/header/simplehandler'
require 'defaultDriver.rb'
require 'authStub.rb'
#Async create options
#options = CreateOptions.new(nil,nil,nil,nil,nil,nil,nil,nil,'Asynchronous')
options = nil
file = IO.readlines("ShipTimes-w-ZipCode.txt")
hdr = String.new
ttlRows = file.length
ttlRowsToSend = 500
procTo = ttlRowsToSend
ttlToSend = ttlRows > ttlRowsToSend ? ttlRowsToSend : ttlRows
rows = Array.new
file.each_with_index do |line, i|
  columns = Array.new
  if i == 0 then
    hdr = line.split(",").collect! {|h| h.to_s }
  else
    items = line.split(",").collect! {|n| n.to_s }
    items.each_with_index do |items, c|
      columns.push(APIProperty.new(hdr[c].chomp,items.chomp))
    end
  end
  if i == procTo or i == (ttlRows - 1) then
    rows.push(DataExtensionObject.new(nil,nil,nil,nil,nil,nil,nil,'ShipTimes-API',nil,nil,nil,[*columns]))
    resp = $driver.create(CreateRequest.new(options,[*rows]))
    rows.clear
    procTo = i != ttlRows ? procTo + ttlRowsToSend : nil
  else
    rows.push(DataExtensionObject.new(nil,nil,nil,nil,nil,nil,nil,'ShipTimes-API',nil,nil,nil,[*columns]))
  end
end
```
###Sample Ruby on Rails Code Creating a Data Extension Row in a Sendable Data Extension
```
require 'rubygems'
gem 'soap4r'
require 'soap/wsdlDriver'
require 'soap/header/simplehandler'
require 'defaultDriver.rb'
require 'authStub.rb'
#Async create options
#options = CreateOptions.new(nil,nil,nil,nil,nil,nil,nil,nil,'Asynchronous')
options = nil
subs = [['EmailAddress','FirstName','PhoneNumber'],['Sheldon_Schumacher_35464@bh.exacttarget.com','Sheldon','13174233928'],['Quentin_Mcclendon_21075@bh.exacttarget.com','Quentin','13174233928'],['Faith_Hines_57278@bh.exacttarget.com','Faith','13174233928'],['Edd_Dean_42632@bh.exacttarget.com','Edd','13174233928']]
ttlRows = subs.length
ttlRowsToSend = 2
procTo = ttlRowsToSend
ttlToSend = ttlRows > ttlRowsToSend ? ttlRowsToSend : ttlRows
hdr = String.new
rows = Array.new
subs.each_with_index do |line, i|
  columns = Array.new
  if i == 0 then
    hdr = line
  else
    line.each_with_index do |items, c|
      columns.push(APIProperty.new(hdr[c].chomp,items.chomp))
    end
  end
  if i == procTo or i == (ttlRows - 1) then
    rows.push(DataExtensionObject.new(nil,nil,nil,nil,nil,nil,nil,'APITestSendDe0',nil,nil,nil,[*columns]))
    resp = $driver.create(CreateRequest.new(options,[*rows]))
    rows.clear
    procTo = i != ttlRows ? procTo + ttlRowsToSend : nil
  else
    rows.push(DataExtensionObject.new(nil,nil,nil,nil,nil,nil,nil,'APITestSendDe0',nil,nil,nil,[*columns]))
  end
end
```
###Sample SOAP Call
```
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
<s:Header>
    <a:Action s:mustUnderstand="1">Create</a:Action>
    <a:MessageID>urn:uuid:e134f951-a2d2-4894-ac26-74205996579b</a:MessageID>
    <a:ReplyTo>
        <a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
    </a:ReplyTo>
    <a:To s:mustUnderstand="1">https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx</a:To>
    <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <o:UsernameToken u:Id="uuid-bde15879-074c-4f4c-b322-668880922cef-1">
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
        </Options>
        <Objects xsi:type="DataExtensionObject">
        <ObjectID xsi:nil="true">
        </ObjectID>
            <CustomerKey>SubscriberListMain</CustomerKey>
            <Properties>
                <Property>
                    <Name>Email</Name>
                    <Value>aruiz@example.com</Value>
                </Property>
                <Property>
                    <Name>FirstName</Name>
                    <Value>Angel</Value>
                </Property>
                <Property>
                    <Name>LastName</Name>
                    <Value>Ruiz</Value>
                </Property>
                <Property>
                    <Name>Phone</Name>
                    <Value>3175555555</Value>
                </Property>
            </Properties>
        </Objects>
   </CreateRequest>
</s:Body>
```
##Related Items
* [Publication Lists](https://help.salesforce.com/articleView?id=mc_es_publication_lists.htm&type=5)
* [Suppression Lists](https://help.salesforce.com/articleView?id=mc_es_suppression_lists.htm&type=5)
