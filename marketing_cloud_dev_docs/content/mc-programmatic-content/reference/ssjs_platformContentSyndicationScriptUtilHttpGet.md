---
data: <%= reference.ssjs_platformContentSyndication.functions.ScriptUtilHttpGet %>
---

##Methods
* setHeader() - Name and value pairs of headers sent when performing the GET request, which disables content caching
* removeHeader() - String value indicating header to remove from collection sent with request
* clearHeader() - String value indicating removal of all custom headers set for the request
* send() - Perform a send of the request to the website and returns a response data object
##Additional Properties
* retries	- Numerical value that sets the number of times the call will retry, defaults to 1
* continueOnError	- Boolean value indicating whether call returns an exception upon an error or continues. Defaults to false.
  * true - continues
  * false - returns an exception
* emptyContentHandling - Numerical value indicating how the call responds when the GET call returns no content:
  * 0 - continue
  * 1 - stop the call
  * 2 - Move on to next subscriber for email sends only

## Example
```
<script runat="server">
   var req = new Script.Util.HttpGet("http://www.example.com/");
   var resp = req.send();
   Platform.Response.Write("Content:<br/ >"+resp.content +"<br />");
</script>
```
