---
data: <%= reference.ssjs_coreUtilities.functions.GetFormField %>
---

##Members

You can retrieve member values using these strings:
* ApplicationID
* PackageID
* ApplicationBaseURL
* URL
* PagePath
* Method

##Example
This sample code requests a form field based on the supplied key:
```
Request.GetFormField("bar");
```
This sample code provides examples of how to call a member:
```
var requestURL = Request.URL();
var requestMethod = Request.Method();
```
> You must escape any HTML form field information POSTed to the page to avoid an error. Otherwise, the application will block the information for security reasons.
