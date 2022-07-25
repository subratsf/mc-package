---
title: Datasource
---

Guide uses the block datasource tag to add a data item to the data context used by the templates. While datasource uses similar functionality to the section tag, the datasource tag uses a datasource defined inline as part of the template.

## Template

<gist data-gist="https://gist.github.com/ryanwilliamsET/9aea5daa0fac8ea0491d4bb9e8fa513a.js"></gist>

You can define five different types of datasources:

* query
* inline
* list
* variable
* nested

Include this filter in the data section for list items:

<gist data-gist="https://gist.github.com/ryanwilliamsET/d04e147d1659aaca8ae5c5102c1dbdab.js"></gist>

The maxRows tag can use any positive integer. This value cannot exceed the maxRelatedRows option and defaults to the defaultRelatedRows option. If maxRows exceed maxRelatedRows, the template will use the maxRelatedRows value.

Use the Global flag to indicate whether you wish to reset values back to the parent context once the block processes or not.

List and inline datasources require a JSON document in the data section.

* You can use either a key or id value as an identifier.
* You can specify either ASC or DESC for the order tag.
* You can include multiple field names, separated by commas.

You can also included complex nesting in your datasources using the nested type. This variable permits you to fully parse an entire JSON payload.
