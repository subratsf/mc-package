---
title: Encode Custom Activities Using a JWT
---

The Marketing Cloud uses a JSON Web Token (JWT - pronounced "JOT") to validate the identity of API calls to your custom activities. Use a JWT for activities that are retrieving sensitive data or performing sensitive actions. A JWT is encoded, but not encrypted. Encryption is handled at the transport layer by SSL. To use a JWT, your application must have SSL enabled.

When your application is called, Marketing Cloud posts the encoded JWT to the activity's endpoint. The JWT lets your application know that the user calling the API is from Marketing Cloud.

Use one of two encoding mechanisms to get a JWT.

### Customer Key

Use an external key from Marketing Cloud as the signing key. Pass the external key into the <samp class="codeph nolang">customerKey</samp> field in the custom activity request body. The external key and customer key are synonyms.

### JWT Signing Secret

You may use your application's JWT Signing Secret from the package containing the activity as a fallback signing key when a <samp class="codeph nolang">customerKey</samp> is not included in the custom activity request body. For example, use the JWT Signing Secret to validate the origin of a the call for a custom activity that is hosted by a single integration partner but used by multiple Marketing Cloud customers.

##Related Items
* [Encode with Customer Key](encode-custom-activities-using-jwt-customer-key.htm)
* [Encode with JWT Signing Secret](encode-custom-activities-using-jwt-app-signature.htm)
