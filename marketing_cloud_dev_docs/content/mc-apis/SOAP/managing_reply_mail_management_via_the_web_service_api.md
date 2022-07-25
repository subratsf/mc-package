---
title: Manage Reply Mail
---
<p>This page contains conceptual and procedural information on creating and updating Reply Mail Management settings via the SOAP API.</p>

##Why Manage Reply Mail Management
<p>The SOAP API allows access to all of the RMM features included in Marketing Cloud. This access allows for tighter integration between a user's system or development environment and Marketing Cloud</p>

##How to Manage Reply Mail Management
<p>Refer to the Reply Mail Management document for full information on RMM and how it works with incoming and outgoing email messages. The sample code below shows example of how to create and update RMM settings via the SOAP API.</p>

###Sample .NET Code - Create RMM Settings Sample Code
```
ExactTarget.Integration.IPartnerFrameworkInterface proxy = null;
CreateOptions CO = new CreateOptions();
CreateResult[] CR = new CreateResult[1];
string requestID = null;
string overallStatus = null;
int MemberID = 12345;
int EmployeeeID = 99999;
ExactTarget.Core.ETPrincipal mobjETPrincipal = new Marketing Cloud.Core.ETPrincipal(MemberID,EmployeeeID,0,0);
ReplyMailManagementConfiguration RMMConfig = new Marketing Cloud.Integration.WSDL.ReplyMailManagementConfiguration();
RMMConfig.EmailDisplayName = "Northern Trail Email";
RMMConfig.EmailReplyAddress = "offer@example.com";
RMMConfig.DNSRedirectComplete = true;
RMMConfig.DNSRedirectCompleteSpecified = true;
RMMConfig.ForwardingAddress = "forward@example.com";
RMMConfig.ReplySubdomain = "reply.example.com";
// Delete Auto-replies and Out-of-office replies
RMMConfig.DeleteAutoReplies = true;
RMMConfig.DeleteAutoRepliesSpecified = true;
// To use Default Reply messages
RMMConfig.SendAutoReplies = true;
RMMConfig.SendAutoRepliesSpecified = true;
// To use Custom Reply messages the following needs to be required apart from SendAutoReplies = true
RMMConfig.AutoReplySubject = "Northern Trail Reply";
RMMConfig.AutoReplyBody = "Northern Trail Content";
// Unsubscribe Manual request terms
RMMConfig.SupportLeaveKeyword = true;
RMMConfig.SupportLeaveKeywordSpecified = true;
RMMConfig.SupportMisspelledKeywords = true;
RMMConfig.SupportMisspelledKeywordsSpecified = true;
RMMConfig.SupportOptOutKeyword = true;
RMMConfig.SupportOptOutKeywordSpecified = true;
RMMConfig.SupportRemoveKeyword = true;
RMMConfig.SupportRemoveKeywordSpecified = true;
RMMConfig.SupportUnsubKeyword = true;
RMMConfig.SupportUnsubKeywordSpecified = true;
RMMConfig.SupportUnsubscribeKeyword = true;
RMMConfig.SupportUnsubscribeKeywordSpecified = true;
RMMConfig.SupportUnsubscribes = true;
RMMConfig.SupportUnsubscribesSpecified = true;
 try
{
    proxy = Marketing Cloud.Integration.Helper.GetInterfaceProxy(mobjETPrincipal);
    // RMM Create Call
    CR = proxy.Create(CO, new APIObject[]  { RMMConfig }, ref requestID, out overallStatus);
    Console.WriteLine(overallStatus);
    Console.WriteLine(requestID);
    Console.WriteLine(CR.Length);
    foreach (CreateResult result in CR)
    {
       Console.WriteLine(result.ErrorCode);
        Console.WriteLine(result.StatusCode);
        Console.WriteLine(result.StatusMessage);            
    }
}
catch (Exception ex)
{
    throw new Exception(ex.Message);
}
finally
{
    proxy = null;
}
```
###Sample .NET Code - Update RMM Settings Sample Code
<p>For an update call, any properties that you set are updated:</p>
```
ExactTarget.Integration.IPartnerFrameworkInterface proxy = null;
UpdateOptions UO = new UpdateOptions();
UpdateResult[] UR = new UpdateResult[1];
string requestID = null;
string overallStatus = null;
int MemberID = 12345;
int EmployeeeID = 99999;
ExactTarget.Core.ETPrincipal mobjETPrincipal = new Marketing Cloud.Core.ETPrincipal(MemberID,EmployeeeID,0,0);
ReplyMailManagementConfiguration RMMConfig = new Marketing Cloud.Integration.WSDL.ReplyMailManagementConfiguration();
RMMConfig.EmailDisplayName = "Northern Trail Email";
RMMConfig.EmailReplyAddress = "offer@example.com";
RMMConfig.DNSRedirectComplete = true;
RMMConfig.DNSRedirectCompleteSpecified = true;
RMMConfig.ForwardingAddress = "forward@example.com";
RMMConfig.ReplySubdomain = "reply.example.com";
// Delete Auto-replies and Out-of-office replies
RMMConfig.DeleteAutoReplies = true;
RMMConfig.DeleteAutoRepliesSpecified = true;
// To use Default Reply messages
RMMConfig.SendAutoReplies = true;
RMMConfig.SendAutoRepliesSpecified = true;
// To use Custom Reply messages the following needs to be required apart from SendAutoReplies = true
RMMConfig.AutoReplySubject = "Northern Trail Offer";
RMMConfig.AutoReplyBody = "Northern Trail Content";
// Unsubscribe Manual request terms
RMMConfig.SupportLeaveKeyword = true;
RMMConfig.SupportLeaveKeywordSpecified = true;
RMMConfig.SupportMisspelledKeywords = true;
RMMConfig.SupportMisspelledKeywordsSpecified = true;
RMMConfig.SupportOptOutKeyword = true;
RMMConfig.SupportOptOutKeywordSpecified = true;
RMMConfig.SupportRemoveKeyword = true;
RMMConfig.SupportRemoveKeywordSpecified = true;
RMMConfig.SupportUnsubKeyword = true;
RMMConfig.SupportUnsubKeywordSpecified = true;
RMMConfig.SupportUnsubscribeKeyword = true;
RMMConfig.SupportUnsubscribeKeywordSpecified = true;
RMMConfig.SupportUnsubscribes = true;
RMMConfig.SupportUnsubscribesSpecified = true;
try
{
    proxy = Marketing Cloud.Integration.Helper.GetInterfaceProxy(mobjETPrincipal);
    // RMM Update Call
    UR = proxy.Update(UO, new APIObject[]  { RMMConfig }, ref requestID, out overallStatus);
    Console.WriteLine(overallStatus);
    Console.WriteLine(requestID);
    Console.WriteLine(UR.Length);
    foreach (UpdateResult result in UR)
    {
      Console.WriteLine(result.ErrorCode);
       Console.WriteLine(result.StatusCode);
       Console.WriteLine(result.StatusMessage);            
    }
}
catch (Exception ex)
{
    throw new Exception(ex.Message);
}
finally
{
    proxy = null;
}
```
###Sample .NET Code - Retrieve Call
```
// 1. Create the request object   
RetrieveRequest request = new RetrieveRequest();
request.ObjectType = "ReplyMailManagement";
// choose properties.
request.Properties = new string[] { "ID",
                                    "Client.ID",
                                    "EmailDisplayName",
                                    "ReplySubdomain",
                                    "EmailReplyAddress",
                                    "CreatedDate",
                                    "ModifiedDate",
                                    "DNSRedirectComplete",
                                    "DeleteAutoReplies",
                                    "SupportUnsubscribes",
                                    "SupportUnsubKeyword",
                                    "SupportUnsubscribeKeyword",
                                    "SupportRemoveKeyword",
                                    "SupportOptOutKeyword",
                                    "SupportLeaveKeyword",
                                    "SupportMisspelledKeywords",
                                    "SendAutoReplies",
                                    "AutoReplySubject",
                                    "AutoReplyBody",
                                    "ForwardingAddress"
                                    };  
// Invoke the Web Service   
APIObject[] results;
proxy = Marketing Cloud.Integration.Helper.GetInterfaceProxy(mobjETPrincipal);
string status = proxy.Retrieve(request, ref requestID, out results);
// Print out overall results   
System.Text.StringBuilder sb = new System.Text.StringBuilder();
sb.Append("Retrieve ReplyMailManagement Configuration");
sb.AppendFormat("\nOverall result: {0}.  RequestID: {1}", status, requestID);
Console.WriteLine(sb.ToString());
 // Print out results for each new object created   
for (int cntr = 0; cntr < results.Length; cntr++)
{
      sb.Append(string.Format("\nIndex {0}", cntr));                
       ReplyMailManagementConfiguration RMMConfig = new ReplyMailManagementConfiguration();
       sb.Append("\n ID: " + RMMConfig.ID);
       sb.Append("\n ClientID: " + RMMConfig.Client.ID);
       sb.Append("\n EmailDisplayName: " + RMMConfig.EmailDisplayName);
       sb.Append("\n EmailReplyAddress: " + RMMConfig.EmailReplyAddress);
       sb.Append("\n");
}
Console.WriteLine(sb.ToString());
```
##Related Items
* [Reply Mail Management](https://help.salesforce.com/articleView?id=mc_es_reply_mail_management.htm&type=5)
