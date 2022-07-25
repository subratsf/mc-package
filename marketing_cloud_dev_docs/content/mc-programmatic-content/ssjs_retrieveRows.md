---
title: Retrieve Rows from a Data Extension
---

This sample code shows the sample code within a landing page. The table displays the data retrieved from the data extension.
```
<html>
    <head>
    </head>
    <body>
        <table style= "border: 1px solid black">
            <tr>
                <td>requestID</td>
                <td>conversationID</td>
                <td>overallStatusCode</td>
                <td>statusCode</td>
                <td>statusMessage</td>
                <td>errorCode</td>
                <td>requestType</td>
                <td>sequenceCode</td>
                <td>resultDetailXML</td>
            </tr>
            <script runat=server>  
                Platform.Load("Core","1");
                var layouts = DataExtension.Init("ImportResults").Rows.Retrieve();
                for (var i = 0; i < layouts.length; i++)
                {
                    Write("<tr>");
                    Write("<td>" + layouts[i].requestID + "</td>");
                    Write("<td>" + layouts[i].conversationID + "</td>");
                    Write("<td>" + layouts[i].overallStatusCode + "</td>");
                    Write("<td>" + layouts[i].statusCode + "</td>");
                    Write("<td>" + layouts[i].statusMessage + "</td>");
                    Write("<td>" + layouts[i].errorCode + "</td>");
                    Write("<td>" + layouts[i].requestType + "</td>");
                    Write("<td>" + layouts[i].sequenceCode + "</td>");
                    Write("<td><pre>" + layouts[i].resultDetailXML + "</pre></td>");
                    Write("</tr>");
                }
                //Write(Stringify(layouts));
            </script>
        </table>
    </body>
</html>
```
