---
title: Manage Sends to Publication Lists using Email Send Definitions
---
<p>This page contains information about managing subscriptions to and unsubscriptions from publication lists via email send definitions.</p>

##Why Manage Sends to Subscribed and Unsubscribed Recipients on Publication Lists
<p>If you store subscriber information in data extensions, you need to use publication lists in order to facilitate email sends. Using the sample code in this document helps you manage which subscribers do or don't receive messages. The email send definition uses the publication list to conduct the send, and subscribers can subscribe or unsubscribe from the list via email links or a profile center.</p>

##How to Manage Sends to Subscribed and Unsubscribed Recipients on Publication Lists
<p>Use the sample code below as a model for your own call.</p>

###Sample .NET Code
```
public CreateResult[] CreateESD()
{
    EmailSendDefinition esd = new EmailSendDefinition();
    esd.Email = new Email();
    esd.Email.ID = 12345; //The ID of the email I wish to send
    esd.Email.IDSpecified = true;
    esd.CustomerKey = "Example 2"; //Setting the customer/external key of this email send definition
    esd.Name = "Example 2"; //Setting the name of this email send definition
    esd.SendClassification = new SendClassification();
    esd.SendClassification.CustomerKey = "12345"; //This is the customer/external key of my default commercial send classification
    esd.SendDefinitionList = new SendDefinitionList[1];
    esd.SendDefinitionList[0] = new SendDefinitionList();
    esd.SendDefinitionList[0].DataSourceTypeID = DataSourceTypeEnum.CustomObject; //Identifies data extension (CustomObject) as the target
    esd.SendDefinitionList[0].DataSourceTypeIDSpecified = true;
    esd.SendDefinitionList[0].CustomObjectID = RetrieveDXNID("12345"); //Pass the customer/external key of the data extension
    esd.SendDefinitionList[0].List = new List();
    esd.SendDefinitionList[0].List.ID = 12345; //The ID of the publication list to use with this data extension and email send definition
    esd.SendDefinitionList[0].List.IDSpecified = true;
    string status;
    string requestID;
    CreateResult[] results = client.Create(new CreateOptions(), new APIObject[] { esd }, out requestID, out status);
    return results;
}
```
##Related Items
[Profile Center](https://help.salesforce.com/articleView?id=mc_es_profile_center.htm&type=5)
