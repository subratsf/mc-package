---
title: Escape Rendered Content Tag Syntax
---

Guide escapes any rendered content based on the content type for your message. For example, within a text/html message, Guide renders that content as HTML-escaped. You can include an &#38; character or enclose the variable with single curly brackets &#123;&#125; to render the content as un-escaped:

<gist data-gist="https://gist.github.com/ryanwilliamsET/5ace0f23987b8fdcff41330203b285e9.js"></gist>

Use quotes around variables or other text that include any reserved characters or spaces. Use brackets to quote tag names. If the tag name includes a &#93; character, escape that character with a second &#93; character.

<gist data-gist="https://gist.github.com/ryanwilliamsET/349f5ccf9366cf8f2ba9d069828f165d.js"></gist>
