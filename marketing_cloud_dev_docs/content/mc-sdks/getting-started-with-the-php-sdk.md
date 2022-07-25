---
title: Get Started with the PHP SDK
---
##Installation

[Download the PHP SDK from GitHub.](https://github.com/salesforcefuel/FuelSDK-PHP) Make sure you install all dependencies as described in the SDK’s README.

<div class="alert">In our code samples, we assume you place the downloaded files in a subdirectory of your workspace called <samp class="codeph nolang">sdk</samp>. You'll want to adapt the code to your local environment.</div>

##Configuration

The PHP SDK is configured via the <samp class="codeph nolang">config.php</samp> file. Add your client ID and secret to this file. It is safe to include your client ID and secret in <samp class="codeph nolang">config.php</samp> because <samp class="codeph nolang">config.php</samp> is hosted server side and not exposed to the client. Here's an example <samp class="codeph nolang">config.php</samp>:

```php
return array(
    'appsignature' => 'none',
    'clientid' => 'YOUR_CLIENT_ID',
    'clientsecret' => 'YOUR_CLIENT_SECRET',
    'defaultwsdl' => 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl'
);
```

##Use

Once the SDK is configured, initialize it by instantiating an <samp class="codeph nolang">ET_Client</samp> object:

```php
require('sdk/ET_Client.php');
$client = new ET_Client();
```

The <samp class="codeph nolang">ET_Client</samp> object is the central object in the SDK and performs a number of tasks for you automatically, including acquiring and refreshing OAuth access tokens using the client credentials you specified in the last step.

Once the SDK is initialized, you can use it to programmatically interact with the account represented by the <samp class="codeph nolang">ET_Client</samp> instance. Here's an example of the SDK being used to retrieve all lists in an account:

```php
require('sdk/ET_Client.php');
$client = new ET_Client();
$request = new ET_List();
$request->authStub = $client;
$response = $request->get();
print_r($response);
```

This code sample highlights the pattern for interacting with objects in the PHP SDK. First, you instantiate an <samp class="codeph nolang">ET_Client</samp> object. Then, you instantiate an object of the type you want to work with, in this example <samp class="codeph nolang">ET_List</samp>. Then, you specify account context (the <samp class="codeph nolang">ET_Client</samp> instance) for the operation using the <samp class="codeph nolang">authStub</samp> property. Finally, you perform a REST-style operation on the object: <samp class="codeph nolang">get</samp> (retrieve), <samp class="codeph nolang">post</samp> (create), <samp class="codeph nolang">patch</samp> (update), or <samp class="codeph nolang">delete</samp>.
