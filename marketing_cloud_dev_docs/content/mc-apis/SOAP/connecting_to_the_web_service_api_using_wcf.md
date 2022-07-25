---
title: Connecting to the SOAP API using WCF
---
This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using the WCF standards.

This information contains instructions for connecting using Visual Studio 2008 and Visual Studio Express 2008. For Visual Studio 2005 andVisual Studio Express 2005, connect using WCE 3.0.

##Why Connect to the SOAP API using WCF

You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

##How To Connect to the SOAP API using WCF and the Web.config File

Follow these steps to create a new VS2010 or VS2008 ASP.NET web application project:
1. Create a new project using the ASP.NET Web Application template.
2. Click <strong>OK</strong>.
3. In your new project, add a service reference by right-clicking the <strong>References </strong>entry and selecting <strong>Add Service Reference</strong>.<br />
<img src="images/servicereference.jpg" alt="ServiceReference.jpg" class="img-responsive" style="margin: 25px 0;" /><br />
If you work within Visual Studio 2010 and don't see the <strong>Add Service Reference</strong> option, change the target framework of your project from <strong>.NET Framework 4 Client Profile</strong> to <strong>.NET Framework 4</strong>.
4. In the Add Service Reference window, enter the appropriate WSDL URL (depending on what instance your account uses)in the Address field and enter your chosen value for the namespace. You can make the latter value whatever you want, but you must use that value consistently in your code.<br />
<img src="images/addservicereference.jpg" alt="AddServiceReference.jpg" class="img-responsive" style="margin: 25px 0;" />
5. Click <strong>OK</strong>.
6. In the web.config file, create a "customBinding" node within the bindings section.
7. Modify the "endpoint" node within the client section changing the binding attribute from "basicHttpBinding" to "customBinding". If you used a <strong>Namespace</strong> value other than "ExactTargetClient", you need to modify the "contract" attribute by replacing "ExactTargetClient" with the <strong>Namespace</strong> value you used.

###Web.config Sample Code
```
<bindings>
    <customBinding>
        <binding name="SoapBinding" closeTimeout="00:30:00" openTimeout="00:30:00" receiveTimeout="00:30:00" sendTimeout="00:30:00">
            <security authenticationMode="UserNameOverTransport">
                <secureConversationBootstrap />
            </security>
            <textMessageEncoding messageVersion="Soap11WSAddressingAugust2004" />
            <httpsTransport maxReceivedMessageSize="655360000" />
        </binding>
    </customBinding>
</bindings>
<client>
    <endpoint address="https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx" binding="customBinding" bindingConfiguration="SoapBinding" contract="ExactTargetClient.Soap" name="Soap" />
</client>
```

##How To Connect to the SOAP API using WCF and C# Code

Follow these steps to create a new VS2010 or VS2008 ASP.NET web application project:
<ol>
<li>Create a new project using the ASP.NET Web Application template.</li>
<li>Click <strong>OK</strong>.</li>
<li>In your new project, add a service reference by right-clicking the <strong>References</strong> entry and selecting <strong>Add Service Reference</strong>.
<p>If you work within Visual Studio 2010 and don't see the <strong>Add Service Reference</strong> option, change the target framework of your project from <strong>.NET Framework 4 Client Profile</strong> to <strong>.NET Framework 4</strong>.</p>
</li>
<li>In the Add Service Reference window, enter <strong>https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl</strong> (or the correct URL for your instance after consulting with your Marketing Cloud relationship manager) in the Address field and enter your chosen value for the namespace. You can make the latter value whatever you want, but you must use that value consistently in your code.
</li>
<li>Click <strong>OK</strong>.</li>
<li>Use the sample code to create the binding in your calls.</li>
</ol>
```
// Create the binding
BasicHttpBinding binding = new BasicHttpBinding();
binding.Name = "UserNameSoapBinding";
binding.Security.Mode = BasicHttpSecurityMode.TransportWithMessageCredential;
binding.Security.Message.ClientCredentialType = BasicHttpMessageCredentialType.UserName;
binding.ReceiveTimeout = new TimeSpan(0, 5, 0);
binding.OpenTimeout = new TimeSpan(0, 5, 0);
binding.CloseTimeout = new TimeSpan(0, 5, 0);
binding.SendTimeout = new TimeSpan(0, 5, 0);
// Set the transport security to UsernameOverTransport for Plaintext usernames
EndpointAddress endpoint = new EndpointAddress("https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx");
// Create the SOAP Client (and pass in the endpoint and the binding)
SoapClient etFramework = new SoapClient(binding, endpoint);
// Set the username and password
etFramework.ClientCredentials.UserName.UserName = "username";
etFramework.ClientCredentials.UserName.Password = "password";
```

##Sample Code

The sample code below demonstrates how to connect and interact with the SOAP API.

###Create a New Subscriber

```
SoapClient framework = new SoapClient();
framework.ClientCredentials.UserName.UserName = "XXXX";
framework.ClientCredentials.UserName.Password = "XXXX";
Subscriber sub = new Subscriber();
sub.EmailAddress = "help@example.com";
//Insert the following line if SubscriberKey functionality is enabled for your account.//
sub.SubscriberKey = "help@example.com";
String requestID;
String status;
CreateResult[] cresults = framework.Create(new CreateOptions(), new APIObject[] { sub }, out requestID, out status);
foreach (CreateResult result in cresults)
{     Console.WriteLine(result.StatusMessage);
}
Console.WriteLine(requestID + ": " + status);
```

###Create a New Email Message

```
SoapClient framework = new SoapClient();
framework.ClientCredentials.UserName.UserName = userid;
framework.ClientCredentials.UserName.Password = password;
Email email = new Email();
email.Name = "Mark-CC";
email.Subject = "Mark-CC Subject Line";
// more code...
string requestID = string.Empty;
string status = string.Empty;
CreateResult[] results = framework.Create(new CreateOptions(), new APIObject[] { email }, out requestID, out status);
```
You can also download sample code to run a simple retrieve call that demonstrates you have correctly connected to the SOAP API using the WCF security specification.

##Related Items
* [Connect Using WCE 3.0](connecting_to_the_web_service_api_using_wse_30_and_net_20.htm)
* [WCF Sample Code for Checking Connection](http://help.marketingcloud.com/contentassets/5694eec7e710450b9bb3d867c40b74df/wcf_exacttarget_websample.zip)
