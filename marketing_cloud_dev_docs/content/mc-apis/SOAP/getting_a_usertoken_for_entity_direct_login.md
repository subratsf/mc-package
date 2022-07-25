---
title: Get a Usertoken for Entity Direct Login
---
<p>This page contains information about getting a user token for entity direct login.</p>

##Why Get a User Token for Entity Direct Login
<p>The user token allows you to login directly to specific parts of Marketing Cloud. Embedded partners using external applications can access information in Marketing Cloud with the assistance of the user token.</p>

##How To Get a User Token for Entity Direct Login
<p>Use the sample code and instructions to create your own API calls.</p>

###The Get User Token Execute Call
<p>The code sample below gets a user token for the authenticated API user. The token is available for use for 30 seconds before it expires.</p>

####Sample .NET Code
```
string status = null; // overall status flag
string requestID = null;
//1. Create the request for the token, supplying this
ExecuteRequest request = new ExecuteRequest();
request.Name = "GetUserToken";
// Uncomment the lines below to
// 3.  Invoke the Web Service
ExecuteResponse[] results = null;
status = integrationFramework.Execute(new ExecuteRequest[] { request }, out requestID, out results);
// 4. Print out overall results
Console.WriteLine(string.Format("Overall result: {0}.  RequestID: {1}", status, requestID));
// 5. Print out results for each new object created
for (int cntr = 0; cntr < results.Length; cntr++)
{
    if (results[cntr] != null && results[cntr].Results != null)
    {
        Console.WriteLine(string.Format("GetUserTokenDefault: Results for request: {0}", cntr));
        Console.WriteLine(string.Format("GetUserTokenDefault: Overall status: {0}", results[cntr].StatusCode));
        Console.WriteLine(string.Format("GetUserTokenDefault: Status message: {0}", results[cntr].StatusMessage));
        Console.WriteLine(string.Format("GetUserTokenDefault: UserToken: {0}", results[cntr].Results[0].Value));
        Console.WriteLine(string.Format("GetUserTokenDefault: Login URL: {0}", results[cntr].Results[1].Value));
    }
}
```
###Options
<p>Customers attempting to get a token for a user other than the authenticated API user can add a parameter named "UserPartnerKey" to the request.</p>
<p>In order to use this capability, the user must be provisioned dynamically via the SOAP API and assigned a partner key during provisioning.</p>

####Sample .NET Code
```
ExecuteRequest request = new ExecuteRequest();
request.Name = "GetUserToken";
request.Parameters = new APIProperty[1];
request.Parameters[0] = new APIProperty();
request.Parameters[0].Name = "UserPartnerKey";
request.Parameters[0].Value = "1234";
```
###Using The User Token
<p>Once you obtain the token, you can use that token to access entities. The available entity types are:</p>
<ul>
<li>email
<ul>
<li>Allows direct access to an individual email by email ID</li>
</ul>
</li>
<li>subscribers
<ul>
<li>Allows direct access to a list of subscriber by list ID</li>
</ul>
</li>
<li>tracking
<ul>
<li>Allows direct access to tracking page by send ID</li>
</ul>
</li>
<li>admin
<ul>
<li>Allows direct access to the admin area by folder ID</li>
</ul>
</li>
</ul>
<p>Marketing Cloud goes to the default page for each entity type when no entity ID is specified.</p>

###Testing
<ol>
<li>Generate the user token.</li>
<li>Modify the <strong>action </strong>element of the form below to point to an identifier in your account.</li>
<li>Paste the token into the form field and click <strong>Login</strong>. Note that the token remains valid for only 30 seconds.</li>
</ol>
```
<form action="https://members.exacttarget.com/Integration/ILogin.aspx?entityType=email&entityID=6592&displayNavi=false" method="post">
	<input id="UserToken" type="text" name="UserToken">&nbsp;UserToken
	<p></p>
	<hr>
	<input id="Submit1" type="submit" value="Login" name="ILogin">
</form>
```
###Request Parameters
####User Token
<ul>
<li>Required</li>
<li>Specifies the user token for the request</li>
</ul>

####entityType
<ul>
<li>Required</li>
<li>Specifies the entity type (email, subscribers, tracking, and admin) of user interface display</li>
</ul>

####entityID
<ul>
<li>Optional</li>
<li>Specifies the identifier for the entity type to display. Without this parameter, the default page displays. This parameter does not contain a value when entityAction is <strong>create</strong>.</li>
</ul>

####entityAction
<ul>
<li>Optional</li>
<li>Specifies the action to take on the entity (create or update). Update requires the entityID to be specified. This parameter is most useful on the <strong>email </strong>entity type.</li>
</ul>

####displayNavi
<ul>
<li>Optional</li>
<li>Specifies whether the left navigation is hidden or not. Does not provide control over the top title bar.</li>
</ul>
