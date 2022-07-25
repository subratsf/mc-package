---
title: Get Started with the C# SDK
---
##Installation

[Download the C# SDK from GitHub.](https://github.com/salesforcefuel/FuelSDK-csharp) Make sure you install all dependencies as described in the SDK’s README.

##Use

Once the SDK is configured, initialize it by instantiating an <samp class="codeph nolang">ET_Client</samp> object:

```c#
using FuelSDK;
ET_Client client = new ET_Client();
```

The <samp class="codeph nolang">ET_Client</samp> object is the central object in the SDK and performs a number of tasks for you automatically, including acquiring and refreshing OAuth access tokens using the client credentials you specified in the last step.

Once the SDK is initialized, you can use it to programmatically interact with the account represented by the <samp class="codeph nolang">ET_Client</samp> instance. Here's an example of the SDK being used to retrieve all lists in an account:

```c#
using FuelSDK;
ET_Client client = new ET_Client();
ET_List request = new ET_List();
request.AuthStub = client;
GetReturn response = list.Get();
Console.WriteLine(response.Status.ToString());
```

This code sample highlights the pattern for interacting with objects in the C# SDK. First, you instantiate an <samp class="codeph nolang">ET_Client</samp> object. Then, you instantiate an object of the type you want to work with, in this example <samp class="codeph nolang">ET_List</samp>. Then, you specify account context (the <samp class="codeph nolang">ET_Client</samp> instance) for the operation using the <samp class="codeph nolang">authStub</samp> property. Finally, you perform a REST-style operation on the object: <samp class="codeph nolang">get</samp> (retrieve), <samp class="codeph nolang">post</samp> (create), <samp class="codeph nolang">patch</samp> (update), or <samp class="codeph nolang">delete</samp>.
