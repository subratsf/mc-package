---
title: Set Delimiters
---

Set Delimiters use simple tags and use the = prefix and suffix. You must also include a single whitespace between the specified delimiter tokens, and you cannot include whitespace before or after those tokens. This sample sets the new delimiter tokens to &#123;< and >&#125;.

<gist data-gist="https://gist.github.com/ryanwilliamsET/628904626cb1d76f6b2f57c47cb62bc2.js"></gist>

If you set the delimiter tokens to anything other than &#123;&#123; and &#125;&#125;, you cannot use the &#123;&#123;&#123;var&#125;&#125;&#125; in the same context.  You must also explicitly provide the raw formatter tag where applicable. When you change the delimiters in the scope of any included content, the delimiter changes do not apply to the parent context once the included content processes.
