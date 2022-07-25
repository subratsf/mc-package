---
title: Develop a Custom Block Widget
---

To develop and offer a custom block, you need the following:
* A block widget: an HTML page for editing content that uses the Content Builder Block SDK to interact with content blocks in the editor.
* A block icon and dragging icon. This icon displays as users drag and drop the block onto the canvas.
* An app that serves this page and a hosting provider to host the app.
* An installed package that includes your block component.

##Content Builder Block SDK on GitHub
https://github.com/salesforce-marketingcloud/blocksdk

##Block Widget URL
When adding a block component to an installed package, provide a block widget URL. This is the registered endpoint for your custom content block app. For example, if the URL for your block widget is <samp class="codeph nolang">https://www.example.com/myblock/</samp>, then the Content Builder editor assumes these URLs exist.
* <samp class="codeph nolang">https://www.example.com/myblock/index.html</samp> is your block widget page.
* <samp class="codeph nolang">https://www.example.com/myblock/icon.png</samp> is your block icon.
* <samp class="codeph nolang">https://www.example.com/myblock/dragIcon.png</samp> is your block drag icon.

##Test Your Block Widget
To test your block, you need a Marketing Cloud account that is provisioned for Content Builder, with user permissions to use the editor. Add a block component to your installed package and test it in Content Builder.

##Register Your Block Widget on App Exchange
To sell or distribute your custom block outside of your account, register your block widget's installed package on App Exchange.

##Related Items
* <a href="create-content-block.htm" target="_blank">Register Endpoint for Custom Content Block Component</a>
* <a href="https://help.salesforce.com/articleView?id=mc_ceb_content_builder_permissions.htm&type=5" target="_blank">Content Builder Permissions</a>
* <a href="list-app-appexchange.htm" target="_blank">List Your App in AppExchange</a>
