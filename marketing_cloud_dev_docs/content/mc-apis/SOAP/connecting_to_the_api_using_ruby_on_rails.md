---
title: Connecting to the SOAP API Using Ruby on Rails
---
<p>This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using Ruby on Rails.</p>

##Why Connect to the SOAP API using Ruby on Rails
<p>You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.</p>

##Prerequisites
<p>You must download and install the following in order to connect to the SOAP API via Ruby on Rails:</p>
<ul>
<li>soap4r (soap4r-ruby19 if using Ruby v1.9)</li>
<li>wss4r</li>
<li>wsse</li>
</ul>
<p>Marketing Cloud also provides a full Ruby on Rails SDK for connecting your environment and developing your projects.</p>

[Download Ruby on Rails SDK](https://github.com/ExactTarget/FuelSDK-Ruby)

##How to Connect to the SOAP API using Ruby on Rails
<p>Follow the directions below to connect to the SOAP API using Ruby on Rails:</p>

###Sample Code
<p>The sample code below demonstrates how to connect and interact with the SOAP API.</p>

####Generating Drivers
<p>You can generate your own Ruby on Rails drivers using wsdl2ruby.rb and typing the following command in your command line.</p>
```
wsdl2ruby.rb --wsdl https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl --type client --force
```
####Executing a Ruby on Rails File in a Shell
<p>Use the following syntax to execute a Ruby on Rails file in a shell:</p>
```
ruby -d createSub.rb
```
####Authenticating your Environment to the SOAP API
<p>Use the sample code below to authenticate your Ruby on Rails environment to the SOAP API:</p>
```
class WsseAuthHeader < SOAP::Header::SimpleHandler
    NAMESPACE = 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'
    USERNAME  = 'USERNAME'
    PASSWORD  = 'PASSWORD'

    def initialize()
        super(XSD::QName.new(NAMESPACE, 'Security'))
    end

    def on_simple_outbound
        {"UsernameToken" => {"Username" => USERNAME, "Password" => PASSWORD}}
    end
end
#make sure everything is unicode-friendly, just in case
XSD::Charset.encoding = 'UTF8'
endpoints = {
    :S1=> 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx',
    :S4=> 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx'
    :S6=> 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx'
}
# The default SOAP::DefaultEndpointUrl can be used or custom end point
endpoint_url = endpoints[:indy] || Soap::DefaultEndpointUrl
# Instantiate a new SOAP request
$driver = Soap.new(endpoint_url)
# enable debug output (showing SOAP XML) if you run this script with ruby -d
$driver.wiredump_dev = STDOUT if $DEBUG
# Append the authentication onto the SOAP Request
$driver.headerhandler << WsseAuthHeader.new()
```
