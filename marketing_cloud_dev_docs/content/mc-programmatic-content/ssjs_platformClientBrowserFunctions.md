---
title: Client Browser Functions
---

Use the Response object to retrieve various types of HTTP Response object properties and platform application values. The server passes this information to the client browser during an HTTP interaction, so this object contains information for the browser to parse and render as directed.These methods return a null value when no HTTP Response object exists or if the given value does not exist in the header object.

##Additional Properties

You can use these properties as part of your calls. Each property returns a specific value associated with the Request object. If no valid Request object exists, the property returns a null or false value as applicable:

* ContentType
  * Sets or retrieves the content type for the HTTP Response object, such as text/html
* CharacterSet
  * Sets or retrieves the content type for the HTTP Response object, such as UTF-8
