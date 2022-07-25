---
title: Single Sign-On in Legacy Packages
---
> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages.

The Marketing Cloud provides the authentication context of the logged-in user and account using a JSON Web Token (JWT - pronounced "JOT"). The single sign-on (SSO) flow uses a JWT-based version of the IDP-Initiated Form Post SAML 2.0 flow. JWT transfers claims between two parties using JavaScript Object Notation (JSON) that is Base64URL encoded and signed using the HMAC SHA-256 algorithm.

When your application is called, Marketing Cloud posts the encoded JWT to the login endpoint defined in the installed package. The JWT lets your application know which Marketing Cloud account and user is calling the API.

<img src="images/sso.png" class="img-responsive" style="margin: 25px 0;" />

##Client Libraries
The following libraries provide support for generating a JWT (JSON Web Token):
* Ruby: <a href="https://github.com/progrium/ruby-jwt" target="_blank">ruby-jwt</a> (by progrium)
* Python: <a href="https://github.com/progrium/pyjwt" target="_blank">pyjwt</a> (by progrium)
* Java: <a href="https://code.google.com/p/jsontoken/" target="_blank">jsontoken</a>
* node.js: <a href="https://github.com/hokaccha/node-jwt-simple" target="_blank">node-jwt-simple</a> (by hokacca)
* PHP: <a href="https://github.com/luciferous/jwt" target="_blank">jwt</a> (by luciferous)
* .NET: <a href="https://github.com/johnsheehan/jwt" target="_blank">jwt</a> (by johnsheehan)

If none of these libraries suits your needs, create your own. Details of the JWT format are in the <a href="http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html" target="_blank">draft JWT specification</a>.
