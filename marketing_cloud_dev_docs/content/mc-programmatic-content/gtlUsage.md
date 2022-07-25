---
title: Guide Template Language Usage with AMPscript and Server-Side JavaScript
---

You can include existing AMPscript and Server-Side JavaScript functionality in new Guide templates as you create and update your existing messages. This feature helps you maintain basic functionality as you update your messages using Guide. For example, you could use an existing AMPscript variable within the Guide tags and continue to return the same information.

<gist data-gist="https://gist.github.com/ryanwilliamsET/d49ac675854b632ea2c94284f6736efa.js"></gist>

Guide uses AMPscript functions via simple tags and the &#61; prefix. Guide will pass any parameters included in the inner text of the template to the specified function. Once completed, Guide replaces the template with the output of the function.

## Basic Structure

<gist data-gist="https://gist.github.com/ryanwilliamsET/0ddd0ede56861a81ceafe7f8582a52ba.js"></gist>

## Example

<gist data-gist="https://gist.github.com/ryanwilliamsET/68eb737029357615262898e7c1f2e4a6.js"></gist>

Displays the result of 2.

You must quote string and date literals. You can optionally quote numeric literals. Include an &#38; character or enclose the variable with single curly brackets &#123;&#125; to render the content as un-escaped within the function. Guide treats any string prefixed with an &#38; character as a variable.

<gist data-gist="https://gist.github.com/ryanwilliamsET/b91e25e86425d1f1575edb64b707a19d.js"></gist>
