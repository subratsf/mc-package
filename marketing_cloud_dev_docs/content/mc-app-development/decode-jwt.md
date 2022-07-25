---
title: Decode the JWT
---

You application login page needs to decode the JWT passed to it and leverage the information as needed. You need two pieces of information to decode the JWT:

1. `encodedJWT` = The JWT passed to the page.
2. `secret` = The JWT signing secret key for your application used to decode the endcoded JWT. This value is stored on the installed package in Marketing Cloud.

Check out our downloadable SDKs to see coding examples in a variety of languages. Below are examples of just the JWT decoding piece, leveraging external libraries referenced in the Resources section below.

###C# Example of Decoding a JWT

```
using JWT; // install from https://github.com/johnsheehan/jwt
using Newtonsoft.Json.Linq;

namespace Example
{
   public class ExampleClass
   {
      string encodedJWT = "jwttokengoeshere";
      string secret = "mysecret";
      string decodedJWT = JWT.JsonWebToken.Decode(encodedJWT, secret);
      JObject parsedJWT = JObject.Parse(decodedJWT);
   }
}
```

###node.js Example of Decoding a JWT

```
var jwt = require('jwt-simple'); // install with: 'npm install jwt-simple'
var encodedJWT = "jwttokengoeshere";
var secret = "mysecret";
var decodedJWT = jwt.decode(encodedJWT, secret);
```

###PHP Example of Decoding a JWT

```
<?php
require_once 'JWT.php'; // install from https://github.com/luciferous/jwt
$encodedJWT = 'jwttokengoeshere';
$secret = 'mysecret';
$decodedJWT = JWT::decode($encodedJWT, $secret);
?>
```

###Ruby Example of Decoding a JWT

```
require "jwt"
@encodedJWT = 'jwttokengoeshere';
@secret = 'mysecret';
@decodedJWT = JWT.decode(@encodedJWT.to_s,nil,@secret)
```
##Related Items
* [Single Sign On](single-sign-on.htm)
* [Encoded JWT](encoded-jwt.htm)
* [Explanation of Decoded JWT](explanation-decoded-jwt.htm)
