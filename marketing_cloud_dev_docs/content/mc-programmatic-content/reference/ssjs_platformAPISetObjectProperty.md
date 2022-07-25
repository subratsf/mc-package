---
data: <%= reference.ssjs_platformAPI.functions.SetObjectProperty %>
---

##Example
```
<script runat="server">
     Platform.Function.SetObjectProperty("Subscriber","emailAdddress","jdoe@example.com");
</script>
```
##Sample Code

The sample code performs a retrieve call:
```
<script type="text/javascript">// <![CDATA[
    // Note that you can perform retrieves only in context of a landing page or platform call

    // Create an API Retrieve Request
    var RetrieveRequest = Platform.Function.CreateObject("RetrieveRequest");

    // Set the request type
    Platform.Function.SetObjectProperty(RetrieveRequest, "ObjectType", "Email");

    // Set the columns
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.Name");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.ID");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.Subject");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.Status");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.CharacterSet");
    Platform.Function.AddObjectArrayItem(RetrieveRequest, "Properties", "Email.ContentCheckStatus");

    // Create a filter
    var RetrieveFilter = Platform.Function.CreateObject("SimpleFilterPart");
    // By email id
    // Platform.Function.SetObjectProperty(RetrieveFilter, "Property", "ID");
    // Platform.Function.SetObjectProperty(RetrieveFilter, "SimpleOperator", "equals");
    // Platform.Function.AddObjectArrayItem(RetrieveFilter, "Value", "5709");
    // By client id
    Platform.Function.SetObjectProperty(RetrieveFilter, "Property", "Client.ID");
    Platform.Function.SetObjectProperty(RetrieveFilter, "SimpleOperator", "equals");
    Platform.Function.AddObjectArrayItem(RetrieveFilter, "Value", "1191");


    // Add the filter to the retrieve
    Platform.Function.SetObjectProperty(RetrieveRequest, "Filter", RetrieveFilter);

    // Do the retrieve
    var StatusAndRequestID = [0,0];

    var Emails = Platform.Function.InvokeRetrieve(RetrieveRequest, StatusAndRequestID);

    // Check staus
    Platform.Response.Write("Status: " + StatusAndRequestID[0]);
    Platform.Response.Write("RequestID: " + StatusAndRequestID[1]);

    for ( var c = 0 ; c < Emails.length ; c ++ )
    {
        Platform.Response.Write(Emails[c].ID);
        Platform.Response.Write(" - ");
        Platform.Response.Write(Emails[c].Name);
        Platform.Response.Write("\r\n");
    }
// ]]>
</script>
```
