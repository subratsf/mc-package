---
title: Configure via WSProxy
---
To configure a single item or several items of the same type in a single call, use the configureItem and configureBatch functions.
* For the first parameter, both functions take the object type to configure. For example, EmailContentCheck.
* The second parameter represents the properties to set on the APIObject being acted upon. For batch operations, the second parameter is passed in as an array of objects instead of a single item.
* The third parameter is the verb to use when executing the action.
* The fourth parameter is optional and includes any properties to be set using the SOAP ConfigureOptions object.
