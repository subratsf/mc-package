---
title: Retrieve the Email Folder Hierarchy
---

<div class="alert">Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.</div>

This page contains information  about retrieving the email folder hierarchy.

##Why Retrieve the Email Folder Hierarchy
This API call retrieves a collection of folders. Each folder has the following information:
<ol>
<li>ID - The ID of the folder</li>
<li>ParentID - The ID of the folder this folder is nested within (0 if this is a parent folder)</li>
<li>Name - The name of the folder</li>
</ol>
This call retrieves only the email folder hierarchy, not the actual email messages.

##How To Retrieve the Email Folder Hierarchy
Use the sample code below as an example to construct your own API calls.

###Sample .NET Code
<gist data-gist="https://gist.github.com/mc-doc/c62c5d18c0bac210b6e4186bd5011a6c.js"></gist>

###Sample PHP Code
<gist data-gist="https://gist.github.com/mc-doc/bd569fb6bae6102f6caaf7467533f7b7.js"></gist>

To retrieve the email folder hierarchy in a single business unit, add the following lines of code to the example:
<gist data-gist="https://gist.github.com/mc-doc/23787d21ddd509132c1cdea820a9fb35.js"></gist>

###SOAP Envelope
<gist data-gist="https://gist.github.com/mc-doc/4ff9ac6b800fe155ec5b8b76efa61f6c.js"></gist>

##Related Items
[REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
