---
title: Retrieve All Lists for a Send
---
<p>This page contains information  about retrieving all lists for a send.</p>

##Why Retrieve All Lists for a Send
<p>By retrieving all lists for a specific send, you can understand which lists and which subscribers received the send.</p>

##How To Retrieve All Lists for a Send
<p>Use the sample code below as an example for constructing your own API call.</p>

###Sample .NET Code 
```
// Specify the SendID SimpleFilterPart listSendFilter = new SimpleFilterPart();
listSendFilter.Property = "SendID";
listSendFilter.SimpleOperator = SimpleOperators.equals;
listSendFilter.Value = new string[] { "2057" };
// Create the RetrieveRequest
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "ListSend";
request.Filter = listSendFilter;
request.Properties = new string[] { "Client.ID", "SendID", "List.ID", "List.ListName", "Duplicates", "InvalidAddresses", "ExistingUndeliverables", "ExistingUnsubscribes", "HardBounces", "SoftBounces", "OtherBounces", "ForwardedEmails", "UniqueClicks", "UniqueOpens", "NumberSent", "NumberDelivered", "Unsubscribes", "MissingAddresses" };
// Execute the Retrieve
APIObject[] results;
string requestID;
string status = integrationFramework.Retrieve(request, out requestID, out results);
// Output the results
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("List Send Summary");
sb.AppendFormat("\nOverall result: {0}.  RequestID: {1}", status, requestID);
// Print out results for each object retrieved
for (int cntr = 0; cntr < results.Length; cntr++)
{
       sb.Append(string.Format("\n ---- Index {0}", cntr));
       ListSend id = results[cntr] as ListSend;
       sb.Append("\n Duplicates: " + id.Duplicates);
       sb.Append("\n ExistingUndeliverables: " + id.ExistingUndeliverables);
       sb.Append("\n ExistingUnsubscribes: " + id.ExistingUnsubscribes);
       sb.Append("\n ForwardedEmails: " + id.ForwardedEmails);
       sb.Append("\n HardBounces: " + id.HardBounces);
       sb.Append("\n InvalidAddresses: " + id.InvalidAddresses);
       sb.Append("\n MissingAddresses: " + id.MissingAddresses);
       sb.Append("\n NumberDelivered: " + id.NumberDelivered);
       sb.Append("\n NumberSent: " + id.NumberSent);
       sb.Append("\n OtherBounces: " + id.OtherBounces);
       sb.Append("\n SendID: " + id.SendID);
       sb.Append("\n SoftBounces: " + id.SoftBounces);
       sb.Append("\n UniqueClicks: " + id.UniqueClicks);
       sb.Append("\n UniqueOpens: " + id.UniqueOpens);
       sb.Append("\n Unsubscribes: " + id.Unsubscribes);
       sb.Append("\n List Name: " + id.List.ListName);
       sb.Append("\n");
}
Console.WriteLine(sb.ToString());
```
###Output 
```
List Send Summary Overall result: OK.
RequestID: 0feb70b2-f73b-4b85-b012-96b0c855407f  ----  Index 0
Duplicates: 0ExistingUndeliverables: 0
ExistingUnsubscribes: 0
ForwardedEmails: 0
HardBounces: 0
InvalidAddresses: 0
MissingAddresses: 0
NumberDelivered: 4
NumberSent: 4
OtherBounces: 0
SendID: 2057
SoftBounces: 0
UniqueClicks: 1
UniqueOpens: 0
Unsubscribes: 1
List Name: Me
```
         