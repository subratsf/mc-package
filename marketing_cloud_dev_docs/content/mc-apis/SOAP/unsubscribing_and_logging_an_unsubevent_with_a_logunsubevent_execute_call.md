---
title: Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call
---
<p>This page contains information about using the SOAP API to unsubscribe a subscriber.</p>

##What Is the LogUnsubEvent Execute Call
<p>This call allows you to unsubscribe a subscriber and log an UnsubEvent that is tracked against a specific Job.</p>

##Why Use the LogUnsubEvent Execute Call
<p>Use this call when you create your own landing page or profile center functionality. Previously, you could unsubscribe a subscriber, but you could not create and log the UnsubEvent.</p>

##How To Use theLogUnsubEvent Execute Call
<p>The LogUnsubEvent Execute call uses the following parameters:</p>
<ul>
<li>SubscriberID - The Marketing Cloud generated ID that uniquely identifies a subscriber.</li>
<li>SubscriberKey - The client supplied ID that uniquely identifies a subscriber.</li>
<li>EmailAddress - The email address of the subscriber.</li>
<li>JobID - The ID of the Job that sent the message.</li>
<li>ListID - The ID of the List that the subscriber belonged to. You can use subscriber or publication lists (not suppression lists).</li>
<li>BatchID - The ID of the Batch within the Job.</li>
<li>Reason - (Optional) The reason the subscriber is being unsubscribed.</li>
</ul>
<p>The parameters can be divided into 3 sections:</p>
<ol>
<li>Subscriber context</li>
<li>Job context</li>
<li>Unsub reason</li>
</ol>
<p>If you make this call from the parent unit of an Enterprise 2.0 account, ensure that you include the ClientID of the child business account to return information specific to that business unit.</p>

###Subscriber Context
<p>The Subscriber Context is defined by the SubscriberID, SubscriberKey and EmailAddress parameters. You must supply at least one of these parameters. If you provide more than one of these parameters, we retrieve the Subscriber using one of the values and validate that the other values match the retrieved Subscriber. If they don't match, an error returns.</p>
<p>If the SubscriberKey permission is turned on and you supply the EmailAddress parameter, you must supply either the SubscriberID or the SubscriberKey.</p>

###Job Context
<p>The Job Context is defined by the JobID, ListID and BatchID parameters. These values are used to determine which Job the UnsubEvent is tracked against. The subscriber is also unsubscribed from the List that the Job was sent to. You don't need to supply all three values. The system looks up any missing values using the following rules:</p>
<ol>
<li>If the JobID is supplied, we can lookup a missing ListID and/or BatchID.</li>
<li>If the ListID is supplied, we can lookup a missing JobID and/or BatchID.<ol>
<li>If the JobID is missing, we use the most recent JobID that the subscriber was sent to.</li>
<li>This may not be the Job that the Subscriber is acting upon.</li>
</ol></li>
<li>If only the BatchID is supplied, we cannot lookup the remaining information and the job context is not defined.</li>
</ol>
<p>If the job context cannot be established because you did not supply any of these parameters or only supplied the BatchID, the UnsubEvent is not created. The subscriber is also Master Unsubscribed from the system instead of being unsubscribed from a particular list. Remove the ListID to address the All Subscribers list in an account.</p>

###Unsub Reason
<p>This is used to specify the reason the subscriber is being unsubscribed from the system. If the reason is not supplied, the default value is used: Unsubscribed via Log Unsub Event Execute call</p>

##Error Codes
<p>Applicable error codes for this call range from 400 to 407 inclusive (Subscriber Validation) and 12012.</p>

###Sample Code
####Sample .NET Code
```
public static void LogUnsubEvent()
{
    string requestID = null;
    string status = null;
    ExecuteResponse[] results = null;
    PartnerAPIWse proxy = DefaultProxy;
    ExecuteRequest request = null;
    request = new ExecuteRequest();
    request.Name = "LogUnsubEvent";
    request.Client = new ClientID();
    request.Parameters = new APIProperty[6];
    request.Parameters[0] = new APIProperty();
    request.Parameters[0].Name = "SubscriberID";
    request.Parameters[0].Value = "123456";
    request.Parameters[1] = new APIProperty();
    request.Parameters[1].Name = "SubscriberKey";
    request.Parameters[1].Value = "Key for johndoe@example.com";
    request.Parameters[2] = new APIProperty();
    request.Parameters[2].Name = "EmailAddress";
    request.Parameters[2].Value = "help@example.com";
    request.Parameters[3] = new APIProperty();
    request.Parameters[3].Name = "JobID";
    request.Parameters[3].Value = "123";
    request.Parameters[4] = new APIProperty();
    request.Parameters[4].Name = "ListID";
    request.Parameters[4].Value = "123";
    request.Parameters[5] = new APIProperty();
    request.Parameters[5].Name = "BatchID";
    request.Parameters[5].Value = "0";
    // Call AMP
    status = proxy.Execute(new ExecuteRequest[] { request }, out requestID, out results);
    Console.WriteLine("OverallStatus: {0}", status);
}
```

```
using System;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using etAPI;
public partial class ExecuteLogUnsubEvent : System.Web.UI.Page
{
    //Global Variables
    private SoapClient client = new SoapClient();
    protected void Page_Load(object sender, EventArgs e)
    {
        //Authenticate
        client.ClientCredentials.UserName.UserName = System.Configuration.ConfigurationSettings.AppSettings["wsUserName"];
        client.ClientCredentials.UserName.Password = System.Configuration.ConfigurationSettings.AppSettings["wsPassword"];
        if (!IsPostBack)
        {
        }
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            //Create an ExecureRequest object
            ExecuteRequest er = new ExecuteRequest();
            er.Name = "LogUnsubEvent";
            //Create an Array of APIProperties
            er.Parameters = new APIProperty[4];
            //Subscriber Parameters
            er.Parameters[0] = new APIProperty();
            er.Parameters[0].Name = "SubscriberKey";//required
            er.Parameters[0].Value = "jdoe@exacttarget.com";//Available in Marketing Cloud UI [Subscribers > My Subscribers > All Subscribers > Properties]
            er.Parameters[1] = new APIProperty();
            er.Parameters[1].Name = "EmailAddress";//required
            er.Parameters[1].Value = "acruz@example.com";//Available in Marketing Cloud UI [Subscribers > My Subscribers > All Subscribers > Properties]
            er.Parameters[2] = new APIProperty();
            er.Parameters[2].Name = "ListID";//required //To unsubscribe from all, use the All Subscribers ListID
            er.Parameters[2].Value = "123456";//Available in Marketing Cloud UI [Subscribers > My Subscribers > My Lists > Properties]
            //Job Parameters
            er.Parameters[3] = new APIProperty();
            er.Parameters[3].Name = "JobID";
            er.Parameters[3].Value = "1234567";
            try
            {
                string requestID = String.Empty;
                string status = String.Empty;
                ExecuteResponse[] results = null;  
                //Call the Execute method on the ExecuteRequest object
                status = client.Execute(new ExecuteRequest[] { er }, out requestID, out results);
                //Display Results
                lblMessage.Text += "Overall Create Status: " + status;
                lblMessage.Text += "<br/>";
                lblMessage.Text += "Number of Results: " + results.Length;
                lblMessage.Text += "<br/>";
            }
            catch (Exception ex)
            {
                //Set Message
                lblMessage.Text += "<br/><br/>EXECUTE UNSUB ERROR:<br/>" + ex.Message;
            }
        }
        catch (Exception exc)
        {
            //Set Message
            lblMessage.Text += "<br/><br/>###ERROR<br/>" + exc.Message;
        }
    }
}
```
####Sample .NET Code (Including ClientID for Enterprise 2.0 Accounts)
```
public static void LogUnsubEvent()
{
    string requestID = null;
    string status = null;
    ExecuteResponse[] results = null;
    PartnerAPIWse proxy = DefaultProxy;
    ExecuteRequest request = null;
    request = new ExecuteRequest();
    request.Name = "LogUnsubEvent";

    //You must include the MID in order for the call to log the unsubscribe event correctly when returning information from a child business unit
    var client = new ClientID();
    client.ID = "ChildMID#";
    request.Client = client;

    request.Parameters = new APIProperty[6];
    request.Parameters[0] = new APIProperty();
    request.Parameters[0].Name = "SubscriberID";
    request.Parameters[0].Value = "123456";
    request.Parameters[1] = new APIProperty();
    request.Parameters[1].Name = "SubscriberKey";
    request.Parameters[1].Value = "Key for johndoe@example.com";
    request.Parameters[2] = new APIProperty();
    request.Parameters[2].Name = "EmailAddress";
    request.Parameters[2].Value = "help@example.com";
    request.Parameters[3] = new APIProperty();
    request.Parameters[3].Name = "JobID";
    request.Parameters[3].Value = "123";
    request.Parameters[4] = new APIProperty();
    request.Parameters[4].Name = "ListID";
    request.Parameters[4].Value = "123";
    request.Parameters[5] = new APIProperty();
    request.Parameters[5].Name = "BatchID";
    request.Parameters[5].Value = "0";
    // Call AMP
    status = proxy.Execute(new ExecuteRequest[] { request }, out requestID, out results);
    Console.WriteLine("OverallStatus: {0}", status);
}
```
####Sample PHP Code
```
<?php
require('exacttarget_soap_client.php');
$wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
try          {
        /* Create the Soap Client */
        $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));

        /* Set username and password here */
        $client->username = 'XXX';
        $client->password = 'XXX';

        $er = new Marketing Cloud_ExecuteRequest();
        $er->Name = "LogUnsubEvent";   
        $er->Parameters =  array();
                                $prop = new Marketing Cloud_APIProperty();
                                $prop->Name = "SubscriberID";
                                $prop->Value = "12345";                   
        $er->Parameters[] = $prop;

                                $prop = new Marketing Cloud_APIProperty();
                                $prop->Name = "SubscriberKey";
                                $prop->Value = "SubscriberKey";                       
        $er->Parameters[] = $prop;

                                $prop = new Marketing Cloud_APIProperty();
                                $prop->Name = "EmailAddress";
                                $prop->Value = "help@example.com";                           
        $er->Parameters[] = $prop;                                
        $er->Options = NULL;

                                $prop = new Marketing Cloud_APIProperty();
                                $prop->Name = "JobID";
                                $prop->Value = "123456";                   
        $er->Parameters[] = $prop;                                 

                                $prop = new Marketing Cloud_APIProperty();
                                $prop->Name = "ListID";
                                $prop->Value = "1234";                   
        $er->Parameters[] = $prop;                
                                $prop = new Marketing Cloud_APIProperty();
                                $prop->Name = "BatchID";
                                $prop->Value = "0";                        
        $er->Parameters[] = $prop;                                 

        $erm = new Marketing Cloud_ExecuteRequestMsg();
                                $erm->Requests  = array();
        $erm->Requests[] = new SoapVar($er, SOAP_ENC_OBJECT, 'ExecuteRequest', "http://exacttarget.com/wsdl/partnerAPI");        

        $results = $client->Execute($erm);  
                                var_dump($results);
} catch (SoapFault $e) {
                var_dump($e);
}
?>
```
####SOAP Messages
<p>Use the SOAP envelopes below as a guide for creating your own code.</p>

#####SOAP Request
```
<soap-ENV:Body>
	<ExecuteRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
		<Requests>
			<Name>LogUnsubEvent</Name>
			<Parameters>
				<Name>SubscriberID</Name>
				<Value>123456</Value>
			</Parameters>
			<Parameters>
				<Name>SubscriberKey</Name>
				<Value>Key for username@example.com</Value>
			</Parameters>
			<Parameters>
				<Name>EmailAddress</Name>
				<Value>help@example.com</Value>
			</Parameters>
			<Parameters>
				<Name>JobID</Name>
				<Value>18099</Value>
			</Parameters>
			<Parameters>
				<Name>ListID</Name>
				<Value>17914</Value>
			</Parameters>
			<Parameters>
				<Name>BatchID</Name>
				<Value>0</Value>
			</Parameters>
		</Requests>
	</ExecuteRequestMsg>
</SOAP-ENV:Body>
```
#####SOAP Response
```
<soap:Body>
	<ExecuteResponseMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
		<OverallStatus>OK</OverallStatus>
		<RequestID>038cce1e-68fe-4201-9062-1bc810dffdf5</RequestID>
		<Results>
			<StatusCode>OK</StatusCode>
			<StatusMessage>Event posted</StatusMessage>
		</Results>
	</ExecuteResponseMsg>
</soap:Body>
```
##Related Items
* [Execute Method](execute.htm)
* [Server-Side JavaScript Sample Code](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/ssjs_unsubLogUnsubEvent.htm)
* [AMPscript Sample Code](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/unsubEvent.htm)
* [Error Codes](error_codes.htm)
