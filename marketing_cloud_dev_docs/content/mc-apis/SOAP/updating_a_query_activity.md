---
title: Update a Query Activity
---

##Why Update a Query Activity
<p>Updating a query activity allows you to change the criteria for the query that retrieves tracking information from your account. You can change the criteria to better refine your results or change the results you choose to receive entirely.</p>

##How to Update a Query Activity
<p>Use the sample code below as a model to create your own API call. Note that you cannot retrieve the status or completion time of the query activity.</p>

###Sample .NET Code
```
private void UpdateQueryAct(string strQAID, string strDEQuery, string strTargetGUID, string strOrigDE, string strDEImport)
{
    //Create the QueryDefinition Object
    QueryDefinition qd = new QueryDefinition();
    qd.ObjectID = strQAID;
    ////General Settings
    //qd.TargetUpdateType = "Overwrite";
    //qd.TargetType = "DE";
    //The actuall SQL
    string sql = "SELECT * FROM [" + ddlDataTemp.SelectedItem.Text + "] ";
    sql += "UNION ALL ";
    sql += "SELECT * FROM [" + strDEImport + "]";
    qd.QueryText = sql;
    //InteractionBaseObject ibo = new InteractionBaseObject();
    //ibo.CustomerKey = strDEQuery;//The DE to dump results to
    //ibo.Name = strDEQuery;
    //qd.DataExtensionTarget = ibo;
    InteractionBaseObject ibo = new InteractionBaseObject();
    ibo.CustomerKey = strTargetGUID;//The DE to dump results to
    ibo.Name = strDEQuery;
    qd.DataExtensionTarget = ibo;
    // Create the Import Definition
    string requestID = String.Empty;
    string status = String.Empty;
    UpdateResult[] uoResults = client.Update(null, new APIObject[] { qd }, out requestID, out status);
    //string strQAobjectID = uoResults[0].NewObjectID;
    lblMessage.Text += "<br/>UPDATED QueryDefinition: " + status;
}
```
##Related Items
[Query Activity](https://help.salesforce.com/articleView?id=mc_es_query_activity.htm&type=5)
