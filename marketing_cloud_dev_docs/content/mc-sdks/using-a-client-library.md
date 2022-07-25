---
title: Use the Marketing Cloud SDKs
---

The Fuel SDKs are wrappers around the Marketing Cloud APIs that enable developers to integrate with those APIs using native language constructs. You can download the SDK for your preferred environment. There are currently SDKs available for C#, Java, PHP, Python, and Ruby.

{{md 'sdk-recommendation'}}

##Client Library

In our examples, we will use the PHP client library, though you can easily adapt our examples to the other client libraries as they all follow similar patterns and expose the same objects and properties.

To get started, install the PHP client library in a subdirectory of your workspace called <samp class="codeph nolang">sdk</samp>. Make sure you install all dependencies as described in the README section of the client library.

To configure the client library, you need to add your client credentials from the installed package to <samp class="codeph nolang">config.php</samp> (the client library contains a template you can use to create <samp class="codeph nolang">config.php</samp>). Note that you can safely include your client credentials in <samp class="codeph nolang">config.php</samp> because <samp class="codeph nolang">config.php</samp> is hosted server-side, not exposed to the client:

    <?php
    return array(
        'appsignature' => 'none',
            'clientid' => 'YOUR_CLIENT_ID',
            'clientsecret' => 'YOUR_CLIENT_SECRET',
            'defaultwsdl' => 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl'
    );
    ?>

After the client library is configured, you initialize it by instantiating an <samp class="codeph nolang">ET_Client</samp> object:

    <?php
    require('sdk/ET_Client.php');

    $client = new ET_Client();
    ?>

The <samp class="codeph nolang">ET_Client</samp> object is the central object in all Marketing Cloud client libraries and performs a number of tasks for you automatically, including acquiring and refreshing OAuth access tokens using the client credentials you specify in <samp class="codeph nolang">config.php</samp>.

After initializing the client library, add a row to the data extension we created using the following code:

    <?php
    require('sdk/ET_Client.php');

    $client = new ET_Client();

    $deRow = new ET_DataExtension_Row();
    $deRow->authStub = $client;

    // specify the name of the data extension
    $deRow->CustomerKey = "subscribers";

    // specify the values of the data extension row
    $deRow->props = array("EmailAddress" => "YOUR_EMAIL_ADDRESS", "FirstName" => "YOUR_FIRST_NAME");

    $response = $deRow->post();

    print_r($response);
    ?>

The following steps outline a typical journey with a Marketing Cloud client library object and highlight the patterns common to all Marketing Cloud client libraries:

* Instantiate the object you want to interact with (in this case, <samp class="codeph nolang">ET_DataExtension_Row</samp>).
* Supply the Marketing Cloud account context via the <samp class="codeph nolang">authStub</samp> property on the object (<samp class="codeph nolang">$deRow->authStub = $client</samp>). (In some client libraries, this is automatically handled for you.)
* Identify the object you want to interact with, typically via a unique ID or key. In our case, **CustomerKey** is the API equivalent of the **External Key** value specified when creating a data extension in Marketing Cloud.
* Set the appropriate properties that govern the operation (in this case, you are creating a data extension row with the “EmailAddress” column set to your email address and the “FirstName” column set to your first name).
* Perform a REST-like operation (<samp class="codeph nolang">get</samp>, <samp class="codeph nolang">post</samp>, <samp class="codeph nolang">patch</samp>, or <samp class="codeph nolang">delete</samp>) on the object, depending on whether you want to retrieve, create, update, or delete it. In the example above, you create a data extension row, so you perform a <samp class="codeph nolang">post</samp> operation.

When you load the PHP file in your browser, you will see the following output:

    ET_Post Object
    (
        [status] => 1
        [code] => 200
        [message] =>
        [results] => Array
            (
                [0] => stdClass Object
                    (
                        [StatusCode] => OK
                        [StatusMessage] => Created DataExtensionObject
                        [OrdinalID] => 0
                        [NewID] => 0
                        [Object] => stdClass Object
                            (
                                [PartnerKey] =>
                                [ObjectID] =>
                                [CustomerKey] => subscribers
                                [Properties] => stdClass Object
                                    (
                                        [Property] => Array
                                            (
                                                [0] => stdClass Object
                                                    (
                                                        [Name] => EmailAddress
                                                        [Value] => YOUR_EMAIL_ADDRESS
                                                    )

                                                [1] => stdClass Object
                                                    (
                                                        [Name] => FirstName
                                                        [Value] => YOUR_FIRST_NAME
                                                    )
                                            )
                                    )
                            )
                    )
            )
        [request_id] =>
        [moreResults] =>
    )

This output displays a typical response to a PHP client library operation. For now, just note that the call succeeded as indicated by <samp class="codeph nolang">StatusCode</samp> and <samp class="codeph nolang">StatusMessage</samp>.

Go back to Email Studio and verify the row was added successfully by navigating to the Data Extensions screen and clicking the data extension. Click the **Records** tab to view the data.

To highlight the similar patterns employed by the different client libraries, the following Java code is equivalent to the PHP code we used to add the row to the data extension:

    public class DataExtensionAddRow {
        public static void main(String args[])
            throws ETSdkException
        {
            ETClient client = new ETClient();
            ETFilter filter = new ETSimpleFilter("CustomerKey",
                                                 ETFilterOperators.EQUALS,
                                                 "subscribers");
            ETDataExtension dataExtension = client.retrieveDataExtension(filter);
            ETDataExtensionRow row = new ETDataExtensionRow();
            row.setColumn("EmailAddress", "YOUR_EMAIL_ADDRESS");
            row.setColumn("FirstName", "YOUR_FIRST_NAME");
            dataExtension.insert(row);
        }
    }

##Related Items
* [Introduction to Marketing Cloud APIs](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/index-api.htm)
* [REST Auth service, /requestToken](requestToken.htm)
* [Use the API Directly](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/get-access-token.htm)
