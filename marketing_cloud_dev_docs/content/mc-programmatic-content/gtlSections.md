---
title: "Sections"
---

Sections use block tags and a &#35; prefix. Use sections to render content based on the values contained in the data reference. For example, the Guide template and the data reference provide the output displayed.

## Template

<gist data-gist="https://gist.github.com/ryanwilliamsET/3a7d5457957d5b318e45d887d9ae7a82.js"></gist>

## Data

<gist data-gist="https://gist.github.com/ryanwilliamsET/f6191b10727d1edd683591dd47bb52be.js"></gist>

## Output

```
1: example1 (Good)
2: example2 (Better)
```

You can also use a &#46; character with data from an array to refer to the current item in the list.

## Template

<gist data-gist="https://gist.github.com/ryanwilliamsET/1f81c631f50ae7d65b6508b331c9dd81.js"></gist>

## Data

<gist data-gist="https://gist.github.com/ryanwilliamsET/8065c9b20cd1dee7258eb277d5137bb3.js"></gist>

## Output

```
example1
example2
example3
example4
```

You can include a region attribute to treat the section as an impression region for reporting purposes:

<gist data-gist="https://gist.github.com/ryanwilliamsET/8de0aa7ec1dbfb075579f8398c26e11f.js"></gist>

If the template references an empty data source, the template will render no content. If the template references a function, the template passes the inner markup of the block tag to the function for processing. For all other values, the template renders the inner markup once.

Note that Mustache or Handlebars syntax does not support the region attribute or the . character for arrays.

Change the # prefix to ^ to invert the section. Use inverted section to render content when the data reference contains an empty value. For example, the Guide template and the data reference provide the output displayed:

## Template

<gist data-gist="https://gist.github.com/ryanwilliamsET/b41c3dc5c93aeac7479db9aba1e26906.js"></gist>

## Data

<gist data-gist="https://gist.github.com/ryanwilliamsET/4ac72c1c996d878f38c9c79a856a452e.js"></gist>

## Output

```
No example available.
```
