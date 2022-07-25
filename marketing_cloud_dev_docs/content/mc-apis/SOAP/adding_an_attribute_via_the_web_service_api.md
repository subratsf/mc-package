---
title: Add an Attribute
---
<p>This page contains information  about adding an attribute via the SOAP API.</p>

##Why Add an Attribute
<p>You can add an attribute in order to retain more information about your subscriber. This information gives you more information with which to better target or exclude subscribers from your sends.</p>

##How To Add an Attribute
<p>Use the sample code below as a model to construct your own API calls. You need to know the following information to create an attribute:</p>
<ul> <li>The name of the attribute</li> <li>The data type of the attribute</li> <li>Any applicable default value</li> <li>Whether the attribute accepts send time values</li> <li>Any required picklist options</li> <li>Minimum and maximum lengths</li> <li>Whether the attribute is required</li> <li>Whether the attribute is read-only</li> <li>Whether the attribute is hidden</li>
</ul>
<div class="alert"> You cannot create an attribute using the name of an already-existing attribute. When an attribute has been added to any list, it is available on all of the lists.</div>
###Sample .NET Code
```
// Initiate the variables string requestID = null; string status = null; string message = null;  
// Create the PropertyDefinition object
PropertyDefinition propDef = new PropertyDefinition();
propDef.Name = "Company"; //Attribute Name
propDef.PropertyType = PropertyType.@string; //Attribute type [@string .net specific way to utilize our enumeration of string.]
propDef.PropertyTypeSpecified = true;
propDef.IsEditable = true; //indicating the attribute is editable in the Marketing Cloud default profile center
propDef.IsEditableSpecified = true;
String requestId = null;
String status = null;
String message = null;
// Call the Configure command with the Action "create"
ConfigureResult[] results = client.Configure(null, "create", new APIObject[] { propDef }, out status, out message, out requestId);
//CreateResult[] results = client.Create(new CreateOptions(), apiObjects, out requestId, out status);
if (status == "Error")
        {
            lblMessage.Text = "Could not create attribute.  " + results[0].StatusMessage;
        }
        else
        {
            lblMessage.Text = status;
        }
```
###Sample PHP Code
```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
echo "1";
/* Create the Soap Client */
$client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
/* Set username and password here */
$client->username = 'xxx';
$client->password = 'xxx';
//Create List Configuration Object
$pd = new Marketing Cloud_PropertyDefinition(); $pd->Name = 'BusinessAddress'; $pd->PropertyType = Marketing Cloud_PropertyType::string; $object = new SoapVar($pd, SOAP_ENC_OBJECT,'PropertyDefinition', "http://exacttarget.com/wsdl/partnerAPI");
$lstConf = new Marketing Cloud_ConfigureRequestMsg();
$lstConf->Configurations = array();
$lstConf->Configurations[] = $object;
$lstConf->Action = 'Create' ;
$results = $client->Configure($lstConf); var_dump($results); } catch (SoapFault $e) { var_dump($e); } ?>
```
###Sample Java Code (Axis 1.4)
```
public void testAddSubscriber() throws RemoteException {
        Soap stub = init();
        Subscriber subscriber = new Subscriber();
        subscriber.setEmailAddress("acruz@example.com");
        subscriber.setSubscriberKey(subscriber.getEmailAddress()); // unique identifier
        subscriber.setStatus(SubscriberStatus.Active);
        Attribute a1 = new Attribute();
        a1.setName("ByAPI");
        a1.setValue("Yes");
        Attribute a2 = new Attribute();
        a2.setName("first_name");
        a2.setValue("Angel");

        subscriber.setAttributes(new Attribute[]{a1, a2});
        APIObject[] apiObjects = {subscriber};
        CreateRequest createRequest = new CreateRequest(new CreateOptions(), apiObjects);
        CreateResponse createResponse = stub.create(createRequest);
        System.out.println("Subscriber created in list ::: " + createResponse.getOverallStatus());
}
```
