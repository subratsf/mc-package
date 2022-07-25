---
title: Retrieve More than 2500 Records Using the ContinueRequest Property
---
<p>This page contains information about retrieving more records using ContinueRequest as part of the Retrieve method call.</p>

##Why Retrieve More than 2500 Records Using ContinueRequest

<p>The SOAP API returns up to 2500 records at a time per retrieve call. If the total number of records exceed 2500, the call includes a status update that more data is available. You can use the code samples in the document to retrieve those more records using ContinueRequest.</p>

##How to Retrieve More than 2500 Records using ContinueRequest

<p>Use the code samples below as a model to insert into your own API retrieve calls. The sample code does not function as a stand-alone call.</p>

##Sample .NET Code
```
//Do While MoreDataAvailable
do
{
    status = client.Retrieve(rr, out requestID, out Results);
    Console.WriteLine("Total Records: " + Results.Length);
    //Display Results
    for (int i = 0; i < Results.Length; i++)
    {
        sEvent = (SentEvent)Results[i];
        Console.WriteLine("SubKey on Event: " + sEvent.SubscriberKey);
    }
    //This call the API again to get the next 2500 records
    rr = new RetrieveRequest();
    rr.ContinueRequest = requestID;
}while (status.Equals("MoreDataAvailable"));//This means there are more than 2500 records
Console.WriteLine("DONE!");
```
##Sample PHP Code
```
     while ($results->OverallStatus=="MoreDataAvailable") {  
          $rr = new Marketing Cloud_RetrieveRequest();  
          $rr->ContinueRequest = $results->RequestID;  
          $rrm = new Marketing Cloud_RetrieveRequestMsg();  
          $rrm->RetrieveRequest = $rr;  
          $results = null;  
          $results = $client->Retrieve($rrm);  
          $tempRequestID = $results->RequestID;  
          print_r($results->OverallStatus.' : '.$results->RequestID.' : '.count($results->Results));  
          print_r('<br>');  
     }
```
