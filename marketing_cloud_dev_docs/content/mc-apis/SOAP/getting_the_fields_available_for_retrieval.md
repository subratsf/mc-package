---
title: Get the Fields Available for Retrieval
---

##Why Get the Fields Available for Retrieval
<p>By getting the fields available for retrieval, you can identify what kind of information is returned on a Retrieve call.</p>

##How to Get the Fields Available for Retrieval
<p>The Retrievemethod takes a list of properties to retrieve on a given object. To build a dynamic list of retrievable properties, use the Describe call and filter out the retrievable fields using the IsRetrievable property.</p>
<p>You can use the Describe method to build your integration. However, do not use this call before every Retrieve call. These fairly static nature of these values make frequent retrieval impractical and unnecessary.</p>

###Sample .NET Code
```
private void Describe(SoapClient framework)
{
    string requestID;
    ObjectDefinitionRequest objDefs = new ObjectDefinitionRequest();
    objDefs.ObjectType = "SentEvent";
    ObjectDefinition[] definitions = framework.Describe(new ObjectDefinitionRequest[] { objDefs }, out requestID);

    foreach (ObjectDefinition od in definitions)             
    {
        Console.WriteLine("***Object Name: " + od.ObjectType + "****");
        foreach (PropertyDefinition pd in od.Properties)
        {
            Console.WriteLine("  Property Name: " + pd.Name);
            Console.WriteLine("  IsRetrievable: " + pd.IsRetrievable.ToString());
        }
        Console.WriteLine("");
    }
}
```
###Sample .NET Output
```
***Object Name: SentEvent****
  Property Name: SendID
  IsRetrievable: True
  Property Name: SubscriberKey
  IsRetrievable: True
  Property Name: EventDate
  IsRetrievable: True
  Property Name: Client.ID
  IsRetrievable: True
  Property Name: EventType
  IsRetrievable: True
  Property Name: BatchID
  IsRetrievable: True
  Property Name: TriggeredSendDefinitionObjectID
  IsRetrievable: True
  Property Name: ListID
  IsRetrievable: True
  Property Name: SubscriberID
  IsRetrievable: True
  Property Name: Client
  IsRetrievable: False
  Property Name: PartnerProperties
  IsRetrievable: False
  Property Name: CreatedDate
  IsRetrievable: False
  Property Name: ModifiedDate
  IsRetrievable: False
  Property Name: ID
  IsRetrievable: False
  Property Name: ObjectID
  IsRetrievable: False
  Property Name: CustomerKey
  IsRetrievable: False
  Property Name: Owner
  IsRetrievable: False
  Property Name: CorrelationID
  IsRetrievable: False
  Property Name: ObjectState
  IsRetrievable: False
  Property Name: IsPlatformObject
  IsRetrievable: False
```
###Sample PHP Code
```
<?php
class ObjectDefinitionClass {

    function getDefintionofObject($objectType){
        $wsdl = 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl';
        $lstProps = array();                
        try{                
                $client = new Marketing CloudSoapClient($wsdl, array('trace'=>1));  
                $client->username = XXXXX;
                $client->password = XXXXX;

                $request = new Marketing Cloud_ObjectDefinitionRequest();
                $request->ObjectType= $objectType;

                $defRqstMsg = new Marketing Cloud_DefinitionRequestMsg();
                $defRqstMsg->DescribeRequests[] =  new SoapVar($request, SOAP_ENC_OBJECT, 'ObjectDefinitionRequest', "http://exacttarget.com/wsdl/partnerAPI");
                /* Call the Retrieve method passing the instantiated Marketing Cloud_RetrieveRequestMsg object */
                $status = $client->Describe($defRqstMsg);
                $results = $status->ObjectDefinition;
                print 'ResultCount: '.count($results)."\n";
                print 'ExtendedProperties: '.count($results->ExtendedProperties->ExtendedProperty)."\n";
                print 'Properties: '.count($results->Properties)."\n";

                if (count($results->Properties) > 0) {

                $properties = $results->Properties;
                foreach( $properties as $letter ){
                    if($letter->IsRetrievable==true){
                        $lstProps[] = $letter->Name;
                    }
                    }
                   // print_r ($lstProps);
        }

           return $lstProps;     
        }catch (SoapFault $e) {
            /* output the resulting SoapFault upon an error */
        var_dump($e);
        }       
    }
}
try{

    $test = new ObjectDefinitionClass();
    $test->getDefintionofObject("Account");

}catch(Exception $e){
    print $e->__toString();
}
?>
```
##Related Items
* [Retrieve Method](retrieve.htm)
* [Describe Method](describe.htm)
