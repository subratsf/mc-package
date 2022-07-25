---
title: Connecting to the API using Java and Axis2
---
This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API using Java via the Axis2 SOAP client. Axis2 is a SOAP client preferred by many Java users.

##Prerequisites
In order to use the configuration in this document, you must use the following tools:
<ul>
<li>Axis2 Libraries</li>
<li>Rampart Module (use as authentication module)</li>
<li>Ant build files to generate stubs and compile code</li>
</ul>

The instructions in this document refer to Axis2 version 1.6.0.

##Why Connect to the SOAP API using Java and Axis2
You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

##How To Connect to the SOAP API using Java and Axis2
1. [Download Apache Axis2](http://ws.apache.org/axis2)
2. Follow the appropriate instructions at that site to install the service on your computer.
3. Use the sample code below to authenticate your installation and exchange information with the SOAP API servers.

Keep these steps in mind when connecting to the API via Axis2:
<ul>
<li>When generating Axis2 stubs, use XML-Beans as the databinding option.<br />
<img src="images/et_axis2-1.jpg" alt="et_axis2-1.jpg" class="img-responsive" style="margin: 25px 0;" />
</li>
<li>Generated files create the resources folder with .class and .xsb files, these files should be in class-path to successfully run and execute API calls.<br />
<img src="images/et_axis2-2.jpg" alt="et_axis2-2.jpg" class="img-responsive" style="margin: 25px 0;" />
</li>
<li>Enter your authentication information in the ETClient.java file.</li>
<li>Enter the location of your log file in the log4j.properties file.</li>
<li>Enter your project's base directory location in the build2.xml file.</li>
<li>Enter the following information in your props.xml before compiling, building, and running your jar file:
<ul>
<li>Entry key authentication information</li>
<li>Repository folder location</li>
<li>Location for your axis2-client.xml file</li>
</ul>
</li>
<li>[Download the Axis2 client for sample configuration.](http://help.marketingcloud.com/globalassets/documentation/javaaxis2/axis2client.zip)</li>
</ul>

<img src="images/et_axis2-3.jpg" alt="et_axis2-3.jpg" class="img-responsive" style="margin: 25px 0;" />

In that .zip file, theETClient.java file sample file has both a Retrieve and a Create method. Use thePropertiesUtil.java file to read properties from the props.xml file located in class-path. Use thePWCBHandler.java file to define the password handler class; this file is required by Axis2engine to handle authentication. Conduct the build using the Ant file and it generates the ETClient.jar file. The command <strong>Java -jar ETClient.jar</strong> executes the ETClient.java file.

###Troubleshooting
Follow these steps if the password is always being passed as Digest format.
<ol>
<li>For theAxis2.xml passwordType node value, define the value as "PasswordText".</li>
<li>Ensure that the class paths contain only one Axis configuration.</li>
<li>Ensure that you have installed the most recent Axis2 library on the machine.</li>
</ol>

###Eclipse Development Environment
Use the <a href="http://help.marketingcloud.com/globalassets/documentation/javaaxis2/eclipseaxis2etclient.zip" title="Eclipse Axis2">Eclipse development environment</a> to aid your connection to and efforts working with the Marketing Cloud SOAP API. This environment includes all the necessary information to use Axis2 Java with the SOAP API. Find more information about the Eclipse development environment <a href="http://www.eclipse.org/" title="http://www.eclipse.org/" class="external">here</a>. This link does not imply any preference or endorsement of the Eclipse development environment. This information is presented only as an example and aid for your development efforts.

###Handling Accounts in Multiple Environments Using a Single Codebase
You can use a single props.xml file to manage multiple username/password credentials (for production and test accounts, for example):
<ol>
<li>Copy the <strong>Axis2-Client.xml</strong> file in the provided example.</li>
<li>Rename the copy to <strong>Axis2-Client-Test.xml</strong>.</li>
<li>Add the provided key/value pair to the<strong>props.xml</strong> file:
<ul>
<li>Key: <strong>axis2FileTest</strong></li>
<li>Value: <strong>axis2-client-test.xml</strong></li>
</ul>
</li>
<li>Edit the user tag for the <strong>Axis2-Client.xml</strong> file:
<ul>
<li><user>production</user></li>
</ul>
</li>
<li>Edit the user tag for the <strong>Axis2-Client-Test.xml</strong> file:
<ul>
<li><user>test</user></li>
</ul>
</li>
<li>Add the provided key/value pair to the <strong>props.xml</strong> file to provide the credentials for the test environment:
<ul>
<li>key: <strong>username-test</strong></li>
<li>value: (your test environment username)</li>
<li>key: <strong>password-test</strong></li>
<li>value: (your test environment password)</li>
</ul>
</li>
</ol>

Change the handle method in the <strong>PWCBHandler.java</strong> file:
```
   public void handle(Callback callbacks[])
        throws IOException, UnsupportedCallbackException
    {
        for(int i = 0; i < callbacks.length; i++)
            if(callbacks[i] instanceof WSPasswordCallback)
            {                 
                WSPasswordCallback pc = (WSPasswordCallback)callbacks[i];
                if (pc.getIdentifer().equalsIgnoreCase("production")){
                                pc.setIdentifier(PropertiesUtil.getInstance().getProperty("username"));
                                pc.setPassword(PropertiesUtil.getInstance().getProperty("password"));
                } else {
                                pc.setIdentifier(PropertiesUtil.getInstance().getProperty("username-test"));
                                pc.setPassword(PropertiesUtil.getInstance().getProperty("password-test"));                   
                }
            } else
            {
                throw new UnsupportedCallbackException(callbacks[i], "Unrecognized Callback");
            }
    }
```
Specify whether the call uses the test or production configuration when instantiating ConfigurationContext prior to the request:
```
PartnerAPIStub stub = null;
if (Environment == "Test") {
                configurationContext = ConfigurationContextFactory.createConfigurationContextFromFileSystem(PropertiesUtil.getInstance().getProperty("repositoryFolder"), PropertiesUtil.getInstance().getProperty("axis2FileTest"));            
                  stub = new PartnerAPIStub(configurationContext, "https://YOUR_SUBDOMAIN.soap.test.marketingcloudsandboxapis.com/Service.asmx");
} else {
    configurationContext = ConfigurationContextFactory.createConfigurationContextFromFileSystem(PropertiesUtil.getInstance().getProperty("repositoryFolder"), PropertiesUtil.getInstance().getProperty("axis2File"));            
     stub = new PartnerAPIStub(configurationContext, "https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx");                        
}
```
