---
title: Custom Activity Configuration
---
{{md 'custom-jb-activities'}}

##config.json Definition Structure
<gist data-gist="https://gist.github.com/mc-doc/99f3201d4376915664240463147c1307.js"></gist>

##config.json JSON Parameters

<table class="table table-hover">
  <thead align="left">
    <tr>
      <th>Property</th>

      <th>Data Type</th>

      <th>Required</th>

      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>workflowApiVersion</td>

      <td>String</td>

      <td>Yes</td>

      <td>Property that tells Journey Builder which version this custom activity uses. Use
      the latest version where possible, though the API provides backwards
      compatibility. Accepted values are <samp class="codeph nolang">1.1</samp>,
      <samp class="codeph nolang">1.0</samp>, and <samp class=
      "codeph nolang">0.5</samp>.</td>
    </tr>

    <tr>
      <td>metaData</td>

      <td>Object</td>

      <td>Yes</td>

      <td>
        Object containing UI-only values that help you identify and categorize each custom
        activity. Third-party sources pass more properties as applicable.

        <ul>
          <li>icon - String representing the icon for this activity. Displays what is in metaData.icon in **config.json**. If not provided, Journey Builder looks for **/icon.svg** at the root of the endpoint URL. If **icon.svg** doesn’t exist, it looks for **/icon.png**. If /icon.png doesn’t exist, a default icon is displayed.</li>

          <li>category - String representing the type of activity. This value must
          include one of the Marketing Cloud-provided activity category types:

            <ul>
              <li><samp class="codeph nolang">message</samp></li>

              <li><samp class="codeph nolang">customer</samp></li>

              <li><samp class="codeph nolang">flow</samp></li>
            </ul>If the call includes an invalid or missing category value,
            the activity falls under the 'Custom' category. This value overrides the
            category selected in the installed package.
          </li>

          <li>expressionBuilderPrefix - Use this field to assign custom activities a pre-determined string prefix in the
          expression builder for decision split. Defaults to **Custom Activity** if not provided. Pass this field in
          through the config.json file or include it in the custom activity payload.
           <p>The prefix allows you to easily
          identify and categorize custom activities. For example, the prefix for Sales
          Cloud activities could be the object configured for a given activity.</p></li>

          <li>isConfigured - Optional boolean value. If true, the activity is marked as
          configured when it is dropped on the canvas.</li>

          <li>configurationDisabled - Optional boolean value. If true and
          metaData.isConfigured is also true, the activity configuration button is
          disabled.</li>

          <li>configOnDrop - Optional boolean value. If true, the activity
          configuration opens when the activity is dropped on the canvas.</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>type</td>

      <td>String</td>

      <td>Yes</td>

      <td>String property representing the type of activity. This value must include
      one of the Marketing Cloud types
      or match a valid defined custom C# activity. Valid Marketing Cloud value types include: <ul><li>MultiCriteriaDecision</li>
      <li>DataExtensionUpdate</li>
      <li>EMAILV2</li>
      <li>EngagementDecision</li>
      <li>randomSplit</li>
      <li>Wait</li>
      <li>Rest</li></ul></td>
    </tr>

    <tr>
      <td>lang</td>

      <td>String</td>

      <td>Yes</td>

      <td>
        Used to define i18n strings. Each entry must match a Marketing Cloud-supported
        internationalization code, based on two-letter ISO 639-1 standard. Examples:
        **en-US** for American English, **pt-BR** for Portuguese Brazilian, and so on.
        See the Internationalize Branch Labels section in [Go Further with Custom
        Activities](extending-activities.htm).

        <ul>
          <li>name - Name the activity something descriptive, such as Send an Email, Send a Text, or Create Salesforce
          Lead, that displays in the activity list on the Journey Builder canvas. For simplicity, give the activity the same name you used when registered the endpoint in the installed package in Marketing Cloud.</li>

          <li>description - Description of the activity.</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>arguments</td>

      <td>Object</td>

      <td>Yes</td>

      <td>
        Contains information sent to the activity each time it executes. See [Data
        Binding](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/how-data-binding-works.htm)
        for more information on formulating inArguments and outArguments.

        <ul>
          <li>execute - The API calls this method for each contact processed by the
          journey.</li>

          <li>execute.inArguments - Any static or data bound value configured for the
          activity. By default, the config.json file sets these arguments. Or you can add inArguments at configuration
          time.</li>

          <li>execute.outArguments - Key and value pair for each field expected in the
          response body of the request</li>

          <li>execute.timeout - How long, in milliseconds, before each rest activity in the journey times out. Must be from 1,000 to 100,000 milliseconds. Default is 60,000 milliseconds.</li>

          <li>execute.retryCount - How many times to retry each rest activity in the journey after the rest activity times out. Must be from 0 to 5. Default is 0.</li>

          <li>execute.retryDelay - How long, in milliseconds, to wait before each rest activity in the journey is retried. Must be from 0 to 10,000 milliseconds. Default is 1,000 milliseconds.</li>

          <li>execute.concurrentRequests - How many rest activities to run in parallel. Must be from 1 to 10. Default is 1, which means no concurrent requests. Before you use concurrent requests, test the scalability and performance of the target site. If you observe increased gateway errors or timeouts, consider adding retry and increasing the timeout value. Contact your Marketing Cloud account representative to enable concurrent requests.</li>

          <li>execute.url - Endpoint used to execute the journey</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>configurationArguments</td>

      <td>Object</td>

      <td>Yes</td>

      <td>
        Object containing information that relates to this instance
        of the activity. All configuration arguments except <samp class=
        "codeph nolang">publish</samp> are optional.

        <ul>
          <li>applicationExtensionKey - This read-only value is auto-assigned to custom Journey Builder activities and events when they are created and is called Unique Key in Marketing Cloud Setup. Journey Builder overrides the <samp class="codeph nolang">applicationExtensionKey</samp> in the config.json if it is incorrect, so we recommend leaving it out.</li>

          <li>save - Endpoint that receives a notification when a user saves the
          journey.</li>

          <li>publish - Endpoint that receives a notification when a user publishes
          the journey.</li>

          <li>unpublish - Endpoint that receives a notification when a user
          unpublishes the journey.</li>

          <li>validate - Endpoint that receives a notification when a user performs
          some validation as part of the publishing process.</li>

          <li>stop - Endpoint that receives a notification when a user stops any
          active version of the journey. The notification is for that particular
          version.</li>

          <li>TestSave - Endpoint that receives a notification when a user saves the
          journey and publishes while in Test Mode. Unless this
          configurationArgument is included, notifications do not send to endpoints
          when a journey is published in Test Mode.</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>wizardSteps</td>

      <td>Array</td>

      <td>No</td>

      <td>
        Contains an array of objects that define the steps that the user navigates
        through when configuring the custom activity. Each object follows this
        format:<br />
        <samp class="codeph nolang">{ "label": "Step 1", "key": "step1", "active": true
        }</samp>

        <ul>
          <li>label - The text displayed in the wizard at the top of the
          configuration screen. This value uses internationalized text when associated
          with the i18n key defined in the config.json's <samp class=
          "codeph nolang">lang</samp> object.</li>

          <li>key - A unique identifier for the step. customActivity.js uses this key
          to determine what step to show when the user navigates to a new step.</li>

          <li>active - Determines whether to show the step in the configuration flow.
          This setting defaults to true.</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>userInterfaces</td>

      <td>Object</td>

      <td>Yes</td>

      <td>
        Contains endpoints and UI configurations for the activity's user interfaces: the configuration modal, running mode hover, and running mode details
        modal.

        <ul>
          <li>configModal - Required UI object used to configure the activity. See the
          Load Custom UI for Activities on Running Journeys section in [Go Further with
          Custom Activities](extending-activities.htm) for an example.</li>

          <li>configModal.url - Endpoint for the UI displayed to marketers while
          configuring this activity. Defaults to index.html.</li>

          <li>configModal.height - Property that defines the height of the iframe
          containing the configuration UI.</li>

          <li>configModal.width - Property that defines the width of the iframe
          containing the configuration UI.</li>

          <li>configModal.fullscreen - If true, forces the configuration UI to take up
          the entire screen. Defaults to false. This parameter overrides any defined
          height and width.</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>schema</td>

      <td>Object</td>

      <td>No</td>

      <td>Object mirrors the activity configuration from the top level of the
      config.json file and specifies schema information about in and out arguments.
      Schema objects follow this pattern:<br />
      <samp class="codeph nolang">{<br />
      "dataType": MC data type,<br />
      "isNullable": Boolean,<br />
      "direction": "in" or "out",<br />
      "access": "visible" or "hidden"<br />
      }</samp><br />
      The context of the call implies the direction of the arguments in the schema,
      making this value optional. Any provided value must match the context. You cannot
      include a null value for any declared <samp class=
      "codeph nolang">outArguments</samp>, as the call requires these values.
      Therefore, assume <samp class="codeph nolang">isNullable</samp> to be false. For
      all <samp class="codeph nolang">access</samp> property parameters not set to
      <samp class="codeph nolang">visible</samp>, subsequent expression builders do
      not show this out argument.</td>
    </tr>
  </tbody>
</table>
