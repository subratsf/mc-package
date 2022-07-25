---
title: Upgrade SSO Claim Version
---

The Marketing Cloud app SSO process uses a JSON Web Token (JWT) to acquire access tokens on behalf of logged-in users.

SSO Claim version 2 provides greater security for your apps because it does not include the access token in the initial request. Apps that use the SSO Claim version 1 should consider upgrading to version 2. When you upgrade versions, update your app so that it no longer sends an access token in its initial request. Use the following example JSON as a guide to update your app to support SSO Claim version 2.

##Decoded JWT before and after Upgrade

<img src="images/sso_upgrade_v2.png" alt="Upgrade SSO Claim Version to v2" class="img-responsive" style="margin: 25px 0;" />

##Related Items
* [Single Sign-On](single-sign-on.htm)
* [Explanation of Decoded JWT](explanation-decoded-jwt.htm)
