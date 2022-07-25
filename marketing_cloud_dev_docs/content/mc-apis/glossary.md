---
title: Journey Builder Glossary
---

<dl class="jb-term">Activity</dl>
    <dd>An Activity is the message action, decision, or data update (or combination of these); it is a component in a journey which allows a marketer's goals to be met. Activities can be provided by Marketing Cloud to communicate with other Marketing Cloud applications/data, or they can be custom activities created by developers and hosted on non-Salesforce systems. Every journey must have at least one activity before it can be activated.</dd>
<dl class="jb-term">Administrator</dl>
    <dd>A Marketing Cloud user whose account is provisioned with administration privileges. Administrators have access to the Event Administration page.</dd>
<dl class="jb-term">App Switcher</dl>
    <dd>The navigation found in the header after logging in to Marketing Cloud.</dd>
<dl class="jb-term">Audit Log</dl>
    <dd>a journey audit log contains a record of a journey and all of its versions. Marketers use this information to monitor ongoing campaigns, identify opportunities for improvement, and troubleshoot issues. Retrieve the log via the API to see history about creating, modifying, activating, stopping, and deleting a journey.</dd>
<dl class="jb-term">Canvas View</dl>
    <dd>The graphical user interface (GUI) which a marketer uses to create and configure journeys within Journey Builder.</dd>
<dl class="jb-term">Channel Address Priority</dl>
    <dd>For each journey (version), you can define a primary and secondary email for a contact instead of the default email. The <samp class="codeph nolang">defaults</samp> property on the Journey object contains an ordered list of email expressions that determine which email address to use as the default, starting with the first expression.
</dd>
<dl class="jb-term">Contact</dl>
    <dd>A proprietary data format and its corresponding application, created by the  Marketing Cloud which represents a person (also known as a Subscriber or Customer). The concept of a Contact has evolved from the Marketing Cloud’s Subscriber concept. This person is typically the source of the Entry Event that invokes a journey.</dd>
<dl class="jb-term">Custom Activity</dl>
    <dd>A type of Activity in Journey Builder which has been developed by non-Salesforce engineers and is configured to operate within the Journey Builder Engine and be added via the Journey Builder Canvas.</dd>
<dl class="jb-term">Custom Entry Event</dl>
    <dd>A type of Entry Event in Journey Builder developed by non-Salesforce engineers and configured to operate within the Journey Builder Engine. Once implemented, marketers configure Entry Events using the Journey Builder Canvas.</dd>
<dl class="jb-term">Data Binding</dl>
    <dd>A proprietary language construct that marketers and developers can use to associate I/O for each component of the journey to provide it context and to provide subsequent components with information they require to operate successfully. Data Binding for Journey Builder uses the Mustache template language syntax. In the Journey Builder UI, data bound to a journey is called event data.</dd>
<dl class="jb-term">Data Extension</dl>
    <dd>A table within the application database used to contain app data. In most cases, data stored in a data extension relates to a Contact/Subscriber, but it does not belong in the subscriber profile and preference attributes.</dd>
<dl class="jb-term">Entry Event</dl>
    <dd>An entry event is a marketer-defined set of conditions that prompt a journey to run, marking the starting point for a journey. Marketers place Entry Events on the Journey Builder Canvas. Entry Events operate by detecting a user-initiated or administrator-defined Event from inside or outside the Marketing Cloud environment. When the Event they are configured to detect is broadcast and all filter criteria are satisfied, the journey starts.</dd>
<dl class="jb-term">Event API</dl>
    <dd>The Event API is a RESTful API resource used by developers to provide contacts to Entry Events for Journey Builder.</dd>
<dl class="jb-term">Event Definition Source (also known as Event Data Source)</dl>
    <dd>An Event Definition Source is a Data Extension that has specific fields added to it as a log of events. These Data Extensions are then associated with an Entry Event in Journey Builder to define the event source. Their secondary purpose is to provide historical analytic data.</dd>
<dl class="jb-term">Event Properties</dl>
    <dd>Event Properties are information, such as ContactID, associated with an Event and passed on to a journey.</dd>
<dl class="jb-term">Filter (also known as Contact Filter)</dl>
    <dd>A Filter is a set of configurable criteria that defines an expression to validate whether or not the associated journey(s) should occur. These criteria are then tested against the account’s contact configuration for boolean evaluation.</dd>
<dl class="jb-term">Fire Event Activity</dl>
    <dd>The Fire Event Activity is a custom Automation Studio Activity that allows marketers to inject large batches of Contacts into Journey Builder. Fire Event is found in the Automation Studio application, which is available under the Journey Builder node in the App Switcher.</dd>
<dl class="jb-term">Goal</dl>
    <dd>A Goal is marketer-configurable outcome that is designed within a journey on the Journey Builder canvas.</dd>
<dl class="jb-term">Interaction Service</dl>
    <dd>The Interaction Service is a REST API resource used by developers to create, update, read, delete, publish, and stop journeys in Journey Builder.</dd>
<dl class="jb-term">Journey</dl>
    <dd>A journey (sometimes called interaction) is the foundation for a campaign that is defined by a marketer using the Journey Builder canvas. A journey is composed of an entry event, a filter, activities, and, optionally, a goal.</dd>
<dl class="jb-term">Journey Specification</dl>
    <dd>This is a JSON (JavaScript Object Notation) representation of a journey. The Journey Builder engineering team uses this format to manage journeys while a marketer is authoring, and we expose this format for use by developers in the Interaction Service.</dd>
<dl class="jb-term">Legacy Platform</dl>
    <dd>The Legacy Platform refers to the custom component framework for creating custom entry events and custom activities in Journey Builder prior to the Journey Specification and Interaction Service introduced in August 2014.</dd>
<dl class="jb-term">Platform V1</dl>
    <dd>Platform V1 refers to the custom component framework for creating custom events and custom activities in Journey Builder that uses the Journey Specification and Interaction Service. Platform V1 was introduced in August 2014.</dd>

##Related Items
* [Activity](https://help.salesforce.com/articleView?id=mc_jb_canvas_activities.htm&type=5)
* [Journey Object](getting-started-spec.htm)
* [Contacts](https://help.salesforce.com/articleView?id=mc_cab_contact_builder.htm&type=5)
* [Data Binding](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/how-data-binding-works.htm)
* [Mustache Template Language](https://mustache.github.io/)
* [Event Data](https://help.salesforce.com/articleView?id=mc_jb_journey_contact_data.htm&type=5)
* [Data Extensions](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
* [Entry Event](https://help.salesforce.com/articleView?id=mc_jb_entry_events.htm&type=5)
* [Entry Event Administration](https://help.salesforce.com/articleView?id=mc_jb_entry_source_administration.htm&type=5)
