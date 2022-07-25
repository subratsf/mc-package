---
data: <%= reference.ssjs_platformContentSyndication.functions.ScriptUtilHttpRequest %>
---

##Methods
* setHeader() - Name and value pairs of headers sent when performing the GET request, which disables content caching
* removeHeader() - String value indicating header to remove from collection sent with request
* clearHeader() - String value indicating removal of all custom headers set for the request
* send() - Perform a send of the request to the website and returns a response data object
##Additional Properties
* contentType	- String value indicating content type sent with requests using POST method
* method - String value indicating HTTP method to use:
  * GET
  * DELETE
  * HEAD
  * OPTIONS
  * PATCH
  * POST
  * PUT
* postData	String value indicating POST data sent with request - required for POST method
## Example
This sample code performs a POST request with a headerTest header and testing=testValue1. The function then writes out the page content from the specified URL and the value of the returnHeader response header.
```
<script runat=server>
    var req = new Script.Util.HttpRequest("http://www.example.com/");
    req.emptyContentHandling = 0;
    req.retries = 2;
    req.continueOnError = true;
    req.setHeader("headerTest","test header value");
    req.method = "POST";
    req.postData = "testing=testValue1";

    var resp = req.send();

    Platform.Response.Write("Content:<br/ >"+resp.content +"");
    Platform.Response.Write("Return header: "+resp.headers["returnHeader"] +"");
</script>
```
