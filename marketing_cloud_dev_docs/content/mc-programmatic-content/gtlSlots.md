---
title: Slots
---

Use slots within Guide Template Language as containers for sections or gears. Slots use block tags and do not impact any data context.

Use slots within layouts define the structure for the for the rendered content. Each slot contains three different sections:

* Meta - stores data about the slot used by other applications, including validation and compilation. Nothing in the meta tag affects rendering or impacts the final content.
* Default - stores content to provide if the markup does not include content or provides an empty value.
Content - stores markup to render.
* A rendered slot provides only content unless the slot provides an empty value, when the slot provides the default content.

## Template

<gist data-gist="https://gist.github.com/ryanwilliamsET/6876cf5bbe36450d473c015b4e5753f1.js"></script>

## Output

```
Hello.
Hello to you, too.
```
