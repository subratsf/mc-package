---
title: Content Builder API
---

##Overview

Marketers use Content Builder in Marketing Cloud as a single cross-channel repository for marketing content, such as emails, images, text, and other documents.

Marketing developers, service providers, and third-party developers can create and manipulate marketing content using the Content Builder REST API.

The API uses the term **asset** to refer to all types of marketing content. Assets are hierarchical; an asset can be a message that contains a template, which is itself an asset. The template can contain slots, which are also assets. Assets are stored in both ElasticSearch and in SQL Server; ElasticSearch provides a fast document retrieval engine, while SQL Server provides the reliability Salesforce is famous for. Use the asset model described in this documentation to create, update, delete, query for, and publish assets.

## API Specification
These tables include the most commonly used REST resources that make up the Content Builder API.

<table class="table table-hover">
<thead align="left">
<tr>
<th>HTTP Method</th>
<th>Resource</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>[/asset/v1/content/assets/query](routes.htm#detail_advancedQuery)</td>
<td>Gets an asset collection by advanced query.</td>
</tr>
<tr>
<td>GET</td>
<td>[/asset/v1/content/assets/{id}](routes.htm#detail_getObjectById)</td>
<td>Gets an asset by ID.</td>
</tr>
<tr>
<td>POST</td>
<td>[/asset/v1/content/assets](routes.htm#detail_CreateAsset)</td>
<td>Inserts an asset.</td>
</tr>
<tr>
<td>PUT</td>
<td>[/asset/v1/content/assets/{id}](routes.htm#detail_updateAsset)</td>
<td>Updates a full asset.</td>
</tr>
<tr>
<td>PATCH</td>
<td>[/asset/v1/content/assets/{id}](routes.htm#detail_patchAsset)</td>
<td>Updates part of an asset.</td>
</tr>
<tr>
<td>DELETE</td>
<td>[/asset/v1/content/assets/{id}](routes.htm#detail_deleteAsset)</td>
<td>Deletes an asset.</td>
</tr>
<tr>
<td>GET</td>
<td>[/asset/v1/content/assets/{id}/file](routes.htm#detail_getFile)</td>
<td>Gets the binary file for an asset.</td>
</tr>
<tr>
<td>GET</td>
<td>[/asset/v1/content/assets/salutations](routes.htm#detail_getSalutations)</td>
<td>Gets the default header and footer for an account.</td>
</tr>
<tr>
<td>GET</td>
<td>[/asset/v1/content/assets/{id}/salutations](routes.htm#detail_getSalutationsById)</td>
<td>Gets the header and footer for a message.</td>
</tr>
<tr>
<td>GET</td>
<td>[/asset/v1/content/assets/{id}/channelviews/{viewname}](routes.htm#detail_getChannelView)</td>
<td>Returns the requested channel view's compiled HTML for the asset.</td>
</tr>
<tr>
<td>POST</td>
<td>[/asset/v1/content/categories](createCategory.htm)</td>
<td>Inserts a category.</td>
</tr>
<tr>
<td>GET</td>
<td>[/asset/v1/content/categories](getCategories.htm)</td>
<td>Gets a collection of categories.</td>
</tr>
<tr>
<td>GET</td>
<td>[/asset/v1/content/categories/{id}](getCategory.htm)</td>
<td>Gets a category by ID.</td>
</tr>
<tr>
<td>PUT</td>
<td>[/asset/v1/content/categories/{id}](updateCategory.htm)</td>
<td>Updates a category by ID.</td>
</tr>
<tr>
<td>DELETE</td>
<td>[/asset/v1/content/categories/{id}](deleteCategory.htm)</td>
<td>Deletes a category by ID.</td>
</tr>
<tr>
<td>GET</td>
<td>[/asset/v1/content/deletedAssets](deletedAssets.htm)</td>
<td>Returns a collection of all assets deleted in the last 30 days.</td>
</tr>
<tr>
<td>PATCH</td>
<td>[/asset/v1/content/deletedAssets/AssetID](deletedAssetsID.htm)</td>
<td>Updates part of a deleted asset.</td>
</tr>
</tbody>
</table>
