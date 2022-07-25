---
title: Install Packages
---
Create an installed package in your Marketing Cloud account to create API integrations, install custom apps, or add custom Journey Builder components.
<div class="alert">Ensure that you have the Installed Package | Administer permission. This permission is automatically applied to the Administrator and Marketing Cloud Administrator system-defined roles. Add the permission for a role or user in the Administration area.</div>

1. In Marketing Cloud, go to **Setup | Apps | Installed Packages**.
2. Click **New**.
3. Give the package a name and description.
4. Click **Save**. Once the package is saved, you see important details about the package. See Installed Packages Definitions for more information about each field. You see the Package ID, JWT Signing Secret, and Source Account only for packages created in your account.
5. Under Components, click **Add Component**.
6. Select one of the following.
  - [API Integration](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/api-integration.htm)
  - [Marketing Cloud App](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/create-a-mc-app.htm)
  - [Journey Builder Activity](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm)
  - [Journey Builder Entry Source](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm)
>To install a MobilePush app, go to **Marketing Cloud | MobilePush | Administration**.

##Delete or Uninstall Packages

Users with the Installed Packages | Administer permission and access to the account in which the package was created can delete a package. To uninstall a package, you need the Administer permission in each account where you are uninstalling it. You can delete packages created in a business unit in your organization or uninstall packages installed from another source, such as AppExchange.

##Related Items
* [Installed Packages Definitions](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/installed-packages-definitions.htm)
* [MobilePush Administration](http://help.marketingcloud.com/en/documentation/mobilepush/administering_your_mobilepush_account/)
