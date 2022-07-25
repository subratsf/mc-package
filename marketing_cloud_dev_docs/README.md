marketing_cloud_dev_docs Repo
================

This repository contains the source files for generating the Marketing Cloud documentation published on developer.salesforce.com/docs.

Development teams and PMs that want to add new REST API routes to our published docs must follow the instructions below. Optionally, they can follow the process for other updates.

---

##Contacts
Admins:
* Belinda Hobbs (bhobbs@salesforce.com)
* TBD
* Content and Communications Experience (CCX) Engineering Team in Hyderabad (ccxenghyd@salesforce.com)

##Contributing
1. Clone this repo. (You can fork, if you'd like.)
1. You'll need to make sure you have the **release** branch. (If your updates can go in immediately, make sure that you have the **immediate** branch.)
1. Create a feature branch off of the **release** branch. (Or **immediate** branch, if the updates can go in immediately.)
1. Locate and open the OpenAPI file: content > mc-apis > reference > swaggerdoc.json. We recommend "folding" the file at level 3 so that you just see the routes (in the paths object) and not their details.
1. Update the OpenAPI file. Here are some tips to remember:
* * Add the routes next to other routes with similar paths.
* * If one route has multiple methods, create one entry for the route and list each method underneath. Look at /contacts/v1/contacts for an example.
* * Use one of the approved tags listed in the tags section at the very end of the file. The tag should match what other related routes use.
* * JSON parameters are referenced in the paths object--you'll enter the actual parameters in the definitions object. (Lots of examples of this.)
* * URL parameters are referenced in the paths object (also lots of examples of this).
* * The response parameters are referenced in the paths object--you'll enter the actual parameters in the definitions object.
* * The name of the file in the x-md-detail field should match the name of the markdown file you create for the example requests and responses. Except, the x-md-detail file should be .htm, while the markdown file should be .md.
* * Make sure that x-published is true.
1. Add a separate Markdown file for each route to the content > mc-apis > reference folder. Look at createContacts.md as an example. All routes need at least one example request and response pair, but they can have more.
1. If you want to run a local build (optional), you'll need to clone this repo: https://git.soma.salesforce.com/ccx-dev-docs-markdown-to-dsc/doc-build-tool. Note: You don't have to run a local build. There are validation checks when you create your PR, and we'll be able to show you the routes in the staging site.
1. To set up local builds (optional), run these commands after cloning the doc-build-tool repo:
* * cd /Users/<username>/git/doc-build-tool
* * sh macSetup.sh
* * Note: This process can take a while, but you should get a success message at the end.
1. To run the local build (optional):
* * In Terminal, nvm use node //If you use nvm, a node version manager for Macs.
* * cd /Users/<username>/git/marketing_cloud_dev_docs
* * sh ../doc-build-tool/build.sh preview //A new browser window will open with a localhost preview of the files in the marketing_cloud_dev_docs folder. Navigate to a file to view it.
* * In Terminal, press Ctrl + C to end the build.
1. Open a PR to the **release branch** and tag Belinda Hobbs or TBD. (Or, if you branched off of the immediate branch, open a PR to **immediate**.)
1. We will pull down your feature branch and run the local build ourselves, update any issues, and make edits to descriptions.
1. We’ll have you review our edits and any changes our editor wants to make in order to make sure that they're still accurate. Then we’ll have the PM sign off.


##Email Notifications
* Repo admins receive an email when changes are pushed to the repo.
* A contributor or admin receives an email whenever they are added as a reviewer.
* A contributor receives an email when their pull request is merged and the content is published to DSC.
