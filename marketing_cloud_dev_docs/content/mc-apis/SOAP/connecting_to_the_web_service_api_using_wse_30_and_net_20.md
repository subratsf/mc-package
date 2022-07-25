---
title: Connecting to the SOAP API Using WSE 3.0 and .NET 2.0
---
This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using the WSE 3.0 standards.
This information contains instructions for connecting using Visual Studio 2005 and Visual Studio 2005 Express. For Visual Studio 2008, connect using WCF.

##Why Connect to the SOAP API using WSE 3.0/.NET 2.0
You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

##How To Connect to the SOAP API using WSE 3.0/.NET 2.0
You must configure your development environment correctly in order to establish a connection with the SOAP API servers. The SOAP API uses WSS 1.0 message level security to secure communications with Marketing Cloud servers.

###Windows 7 and Vista 64-Bit Users
All users of Windows 7 and Vista 64-bit operating systems must complete these steps before proceeding to the steps in the next section.
1. Locate the devenv.exe.config file for your Visual Studio 2005 or Visual Studio 2005 Express instance. You can typically find this file at C:\Program Files (x86)\Microsoft Visual Studio 8\Common7\IDE\devenv.exe.config.
2. Make a backup copy of the file and store it in a different location.
3. Add the following configuration information to the file:

```
<configuration>
    <system.web>
        <webServices>
            <soapExtensionImporterTypes>
                <add type="Microsoft.Web.Services3.Description.WseExtensionImporter, Microsoft.Web.Services3, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
            </soapExtensionImporterTypes>
        </webServices>
    </system.web>
</configuration>
```

###Visual Studio 2005
Follow these steps to connect your Visual Studio 2005 instance to the SOAP API:
<ol>
<li>In Visual Studio 2005, create a new project.</li>
<li>Right-click on that project and select <strong>Add Web Reference</strong>.</li>
<li>Add the appropriate WSDL referencein the URL field.</li>
<li>In the <strong>Web Reference Name field</strong>, enter the title <strong>Marketing Cloud API</strong>.</li>
<li>Click <strong>Add Reference</strong>.</li>
<li>Return to the project window and right-click your project.</li>
<li>Select <strong>WSE Settings 3.0</strong>.</li>
<li>Under the <strong>General </strong>tab, click <strong>Enable This Project For Web Services Enhancements</strong>.</li>
<li>Update your web reference to your new reference object.</li>
<li>Click <strong>OK</strong>.</li>
</ol>

If you wish to enable this feature on an existing project, right-click that project andselect <strong>WSE 3.0 Settings</strong> to get to a screen where you can enable WSE for the project. If you enable WSE after you've added a web reference to the Marketing Cloud API, you need to update the web reference.

###Visual Studio 2005 Express
Users of Visual Studio Express editions cannot take advantage of the Visual Studio.NET/WSE integration. However, you can usethe following steps to set up WSE with Visual Studio Express editions.
<ol>
<li>Create your project.</li>
<li>Close your project.</li>
<li>Open project using the WSE client application.</li>
<li>Click <strong>Enable Web Service Enhancements</strong>.</li>
<li>Open your project.</li>
<li>Create the web reference to the appropriate WSDL URL.</li>
<li>Begin writing code.</li>
</ol>

##Code
The sample code below demonstrates how to connect and interact with the SOAP API.
```
PartnerAPIWse partnerAPI = new PartnerAPIWse();
UsernameTokenProvider utp = new UsernameTokenProvider(username, password);
partnerAPI.SetClientCredential<UsernameToken>(utp.GetToken());
Policy policy = new Policy(new UsernameOverTransportAssertion());
partnerAPI.SetPolicy(policy);
```
##Related Items
[Connect Using WCF](connecting_to_the_web_service_api_using_wcf.htm)
