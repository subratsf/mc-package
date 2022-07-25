---
data: <%= reference.ssjs_platformContentSyndication.functions.ScriptUtilHttpResponse %>
---

##Additional Properties
* content	- String value containing HTTP response content returned from URL
* contentType	- String value indicating content type returned by response
* encoding - String value indicating encoding returned by response
* headers	- Object containing HTTP response header collection returned from response
* returnStatus
Integer value containing the Marketing Cloud response to the request:
  * 0 - OK
  * -1 - Empty URL
  * -2 - Call failed
  * -3 - Call succeeded with empty content
* statusCode - Integer value containing the HTTP response status code returned from URL, such as 200, 404, or 500
