---
title: Impersonation via WSProxy
---
To impersonate another user, or switch contexts, use the setClientId method on the WSProxy object. This method takes a single parameter, which defines the fields and properties to set on the ClientId object. You can set any property on the ClientId object in the WSDL using this method.

In this example, both the ID and UserID are specified on the object. You can add multiple credentials to a single WSProxy, but most actions use only the first one set as they accept only a single ClientId object.
```
api.setClientId({ "ID": 1234, "UserID": 1234 });
```
To clear all set ClientId objects, use the resetClientIds() method. After using this method, the request goes back to using the default credentials determined by the execution context.
```
api.resetClientIds();
```
