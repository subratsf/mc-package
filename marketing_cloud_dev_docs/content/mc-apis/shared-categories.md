---
title: Shared Categories (Folders)
---

You can share categories with one or more business units that have Content Builder Sharing enabled.
* Create shared categories under the root category called Shared Content. Categories under the Content Builder root category cannot be shared. Root categories in Content Builder are read-only.
* All shared categories live in and are owned by the enterprise business unit. Shared categories can be shared selectively to specific MIDs or globally, if your account has access to Content Builder Across Enterprise Sharing.
* Shared categories can hold up to 100 subcategories and 5,000 assets.
>The Shared Content root category can hold 5,000 assets, but it is limited to 100 subcategories.
* When creating or moving assets into a shared category, share them with the same MIDs that the category is shared with.

##Shared Category Scenarios

Each of the following examples describes a scenario where you cannot create or update a shared category because the <samp class="codeph nolang">sharedWith</samp> properties of the categories aren't compatible.

###Scenario 1
If you create shared category **Indianapolis** under the Shared Category root category and only share it to business units A and B, you cannot create a category under **Indianapolis** that is shared globally.

###Scenario 2
If you create shared category **Indianapolis** under the Shared Category root category and only share it to business units A and B, you cannot create a category under **Indianapolis** that is shared to business unit C.

###Scenario 3
If shared category **Indy 500** is shared with business units A and B, and a shared category under **Indy 500** named **SubFolder** is shared with business unit B, you cannot remove business unit B from **Indy 500**'s <samp class="codeph nolang">sharedWith</samp> properties.

###Scenario 4
If shared category **Salesforce Tower** is shared with business units A and B, and you have several assets in the shared category shared in the same fashion, you cannot update the sharing settings of **Salesforce Tower** to share the category with only business unit C. The updated <samp class="codeph nolang">sharedWith</samp> property would conflict with the properties of the assets in that shared category.

##Differences Between SharingProperties on Assets and Categories

Here is the <samp class="codeph nolang">sharingProperties</samp> object from a sample shared category:
```js
{
    ...
    "sharingProperties: {
        "sharedWith" : [ 333, 555 ],
        "sharingType" : "edit"
    }
}
```
The <samp class="codeph nolang">sharingProperties</samp> object on assets and categories is structured the same, but it is populated differently. The only valid properties in the <samp class="codeph nolang">sharingProperties</samp> object for categories are <samp class="codeph nolang">sharedWith</samp> and <samp class="codeph nolang">sharingType</samp>. <samp class="codeph nolang">SharedWith</samp> is an array of business unit MIDs that you are sharing this category with. <samp class="codeph nolang">SharingType</samp> indicates the permission that you are granting to the MIDs. The only possible value for categories is edit, meaning shared categories can always be viewed and edited. If a shared category's <samp class="codeph nolang">sharedWith</samp> property is updated to add or remove MIDs, all assets in that shared category are asynchronously updated to have the same sharing properties, as long as the update to the category's <samp class="codeph nolang">sharedWith</samp> property does not fall into Scenario 4.

##Related Items
* [Asset Model](asset-model.htm)
* [Sharing](sharing.htm)
