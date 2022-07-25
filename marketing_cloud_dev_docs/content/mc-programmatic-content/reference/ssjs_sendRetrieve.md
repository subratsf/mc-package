---
data: <%= reference.ssjs_coreSendFunctions.functions.Retrieve %>
---

##Examples

This sample code retrieves a send based on the specified filter criteria:
```
var sends = Send.Retrieve({Property:"ID",SimpleOperator:"equals",Value:12345});
```
This code sample uses a more complex filter to retrieve a send:
```
<script language="JavaScript" runat="Server"> Platform.Load("core", "1");
    var emailIDFilter = { Property : "Email.ID", SimpleOperator : "equals", Value : 71 }; var esdFilter = { Property : "EmailSendDefinition.CustomerKey", SimpleOperator : "equals", Value : "test_esd" };
    var complexFilter = {LeftOperand : emailIDFilter, LogicalOperator : "AND", RightOperand : esdFilter };
    Write(Stringify(Send.Retrieve(complexFilter)));
</script>
```
