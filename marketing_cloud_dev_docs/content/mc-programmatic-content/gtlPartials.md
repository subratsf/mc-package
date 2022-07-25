---
title: Partials
---

Partials use a simple tag and a &#62; prefix. Use partials to pull in external content at runtime. All partials include one of three identifiers for content stored in the Portfolio for your account:

<table class="table table-hover">
<thead align="left">
<tr>
<th>Identifier</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Key</td>
<td>String value identifying key for content, such as Key:Mens_Shoes</td>
</tr>
<tr>
<td>ID</td>
<td>String value identifying ID for content, such as ID:348021</td>
</tr>
<tr>
<td>Name</td>
<td>String value identifying file path for content, such as mycontent/descriptions/mens/shoes</td>
</tr>
</tbody>
</table>

Partials accept an optional string parameter identifying content as originating in Portfolio or Content Builder:

* Portfolio (Default)
* Content Builder

If the template cannot match any of those identifiers, it inserts a blank during rendering.

<gist data-gist="https://gist.github.com/ryanwilliamsET/63a59feb0f34e8d7e956e380d963da1b.js"></gist>

Partials insert content into a template when a message publishes. You can force the content to refresh again at send time using the optional refresh tag.

<gist data-gist="https://gist.github.com/ryanwilliamsET/3862fe80b045c111d39f3579118385e6.js"></gist>

To return the results of a variable, use the var: prefix. This prefix treats the value of the variable as stored content and link wraps the results as applicable.

<gist data-gist="https://gist.github.com/ryanwilliamsET/d22b0e77f6a6cc2e0f6773a17cd02cc9.js"></gist>

To syndicate content from an external web page during rendering, use the get: prefix and insert the applicable URL.

<gist data-gist="https://gist.github.com/ryanwilliamsET/e5cfd284fdb404fffbeefd6f834721f4.js"></gist>

Include an optional static tag to apply the content at the message level and not per each recipient.

<gist data-gist="https://gist.github.com/ryanwilliamsET/29155e669816d60e444829f6ccee4e20.js"></gist>

If you do not include a prefix in the template (aside from the > character), Guide uses these rules to locate content:

1. Uses the data field within the data context as indicated by the identifier.
1. Uses content syndication to pull in the applicable content as indicated by the URL identifier.
1. Uses stored content as indicated by the key, id, name in the identifier.
1. If Guide cannot match any value, it replaces the template with a blank.
