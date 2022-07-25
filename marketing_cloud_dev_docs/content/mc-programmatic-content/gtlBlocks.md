---
title: Blocks
---
Use blocks within Guide Template Language as containers for markup that links to external code.

The initial block tag includes an identifier for the block and the type of block used in the template.

Each block contains four different sections:

* Meta - stores data about the slot used by other applications, including validation and compilation. Nothing in the meta tag affects rendering or impacts the final content.
* Data - stores a JSON object used during rendering to produce the output of the block.
* Default - stores content to provide if the markup does not include content or provides an empty value.
* Content - stores markup to render.

The block will display the content unless it contains an empty value, at which time the block will render the default content.

You can include server-side rendering in the block using a server script tag.

## Examples
The template below uses a data extension picker block that chooses the row from a specified data extension.

### Template

<gist data-gist="https://gist.github.com/ryanwilliamsET/b9b6012d7c1423b9ac2a828cb51b8644.js"></gist>

This example outputs the string "I am a deal from Northern Trail Outfitters."

The next template uses an embedded section tag and a data source external to the block.

### Template

<gist data-gist="https://gist.github.com/ryanwilliamsET/0546f2f240a8f6ad49009655b546fa9d.js"></gist>

### Data

<gist data-gist="https://gist.github.com/ryanwilliamsET/7d74151dee4464ebe3dd3aa95796d6cd.js"></gist>

This example outputs the string "I am a deal from Northern Trail Outfitters."

This template includes a server script tag in the block markup. This script can access the data environment and the &#95;guide object to render text.

<gist data-gist="https://gist.github.com/ryanwilliamsET/50e295efc9958a965e3eb21b31ee8b30.js"></gist>

This example outputs the string &#34;&#34;Hello from the server&#34;&#34;.
