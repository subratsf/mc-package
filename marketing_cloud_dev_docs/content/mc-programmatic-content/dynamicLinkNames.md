---
title: AMPscript Dynamic Link Names
---

This functionality lets you include dynamic content, including substitution strings and AMPscript function calls, in the name assigned to a link. You can then track the link by the resolved values.

Only use this functionality in HTML version of emails.

When creating an email, include your dynamic statements when setting the link name or alias attribute in the Content Editor inside the user interface.

```
<a href="http://website.example.com/key/p...ID=C12915x001B" target="new" alias="%%=CONCAT(Region,' Region')=%%">
```

This example tracks the link specified above separately by each subscriber's region included in the send. For example:

```
West Region
North Region
```

The system limits the number of unique resolved link names, as defined by a link alias, to 100. You can track each link with a dynamic link name. If the number of unique link names exceeds this limit, the system tracks excess links under the original unresolved link name.
