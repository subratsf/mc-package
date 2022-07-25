---
title: Retrieve Audience of Send Definition
---
<p>This page contains sample code illustrating how to retrieve the audience of an email send definition using the SOAP API.</p>

##Why Retrieve the Audience of a Email Send Definition
<p>You can view all subscribers to whom an email send definition was targeted by retrieving the audience of a send definition.</p>

##How To Retrieve the Audience of an Email Send Definition
<p>Use the sample code below as an example to create your own API call.</p>

###Sample .NET Code
```
// 1. Create the request object   
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "EmailSendDefinition";
SimpleFilterPart idFilter = new SimpleFilterPart();

// create the simple filter.    
idFilter.Property = "CustomerKey";
idFilter.SimpleOperator = SimpleOperators.equals;
idFilter.Value = new string[] { "228" };
request.Filter = idFilter; // comment out this line to get all EmailSendDefinitions
// EmailSendDefinition supports SendDefinition list property in Retrieve calls.
request.Properties = new string[]  { "Name","Description","Email.ID","SendDefinitionList" // This is the new property };
// Invoke the Web Service   
APIObject[] results;
proxy = Marketing Cloud.Integration.Helper.GetInterfaceProxy(mobjETPrincipal);
string status = proxy.Retrieve(request, ref requestID, out results);
// Print out overall results   
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Retrieve Send");
sb.AppendFormat("\nOverall result: {0}.  RequestID: {1}", status, requestID);
Console.WriteLine(sb.ToString());
// Print out results for each new object created   
for (int cntr = 0; cntr < results.Length; cntr++)
{
    sb.Append(string.Format("\nIndex {0}", cntr));
    EmailSendDefinition ESD= results[cntr] as EmailSendDefinition;
    sb.Append("\n ID: " + ESD.Name);
    sb.Append("\n Name: " + ESD.Description);
    sb.Append("\n EmailID: " + ESD.Email.ID);
    // Get SendDefinitionLists for each EmailSendDefinition
    foreach (SendDefinitionList SDL in ESD.SendDefinitionList)
    {         sb.Append("\n SendDefinitionListType ID: " + SDL.SendDefinitionListType);
        sb.Append("\n SendDefinitionList ID: " + SDL.List.ID);
    }
    sb.Append("\n");
}
Console.WriteLine(sb.ToString());
```
###Sample PHP Code
```
<?php
    echo '<pre>';
$path = $_SERVER[DOCUMENT_ROOT].'/00 Includes/';
require($path . 'exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try{
/* Create the Soap Client */
$client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));
/* Set username and password here */
$client->username = XXXXX;
$client->password = XXXXX;
$rr = new Marketing Cloud_RetrieveRequest();
$rr->ObjectType = 'EmailSendDefinition';
//Set the properties to return
$props = array("Name","Description","Email.ID","SendDefinitionList");
$rr->Properties = $props;
//Setup account filtering, to look for a given account MID
$filterPart = new Marketing Cloud_SimpleFilterPart();
$filterPart->Property = 'CustomerKey';
$values = array('test');
$filterPart->Value = $values;
$filterPart->SimpleOperator = Marketing Cloud_SimpleOperators::equals;
//Encode the SOAP package
$filterPart = new SoapVar($filterPart, SOAP_ENC_OBJECT,'SimpleFilterPart', "http://exacttarget.com/wsdl/partnerAPI");
//Set the filter to NULL to return all MIDs, otherwise set to filter object
//$rr->Filter = NULL;
$rr->Filter = $filterPart;
//Setup and execute request
$rrm = new Marketing Cloud_RetrieveRequestMsg();
$rrm->RetrieveRequest = $rr;
$results = $client->Retrieve($rrm);
    print_r($results);
} catch (SoapFault $e) {
    /* output the resulting SoapFault upon an error */
    var_dump($e);
}
    echo '</pre>';
?>
```
