---
title: Unless
---

The unless block helper conditionally renders content based on the value of the expression. When the expression contains a false, null, undefined, or empty value (such as &#123;&#125; or []), the block helper renders the specified content. You can include an optional else tag as needed:

<gist data-gist="https://gist.github.com/ryanwilliamsET/618e8c0d241d5f9ccddb52e637d2bc46.js"></gist>

This example renders "Your order is ready" in applicable email messages and "Your order is not ready" for all email messages.
