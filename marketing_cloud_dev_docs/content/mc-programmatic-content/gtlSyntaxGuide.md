---
title: Guide Template Language Syntax Guide
---

Guide Template Language (also known as GTL or Guide) is a declarative language used to create personalized messages within the Marketing Cloud. Use Guide to create templates containing elements that define personalization within the message, including contact attributes and dynamic information. Guide follows a similar structure to the Mustache.js and Handlebars.js templating libraries, and Guide will support valid templates from either of those libraries. However, Guide accesses information from the Salesforce Marketing Cloud as a source, as opposed to using data supplied for Mustache.js and Handlebars.js via script.

##Data Sources
Guide Template Language can work with JSON data sources supplied by script or by a REST API service. Guide can also access specified lists and data extensions within a Marketing Cloud account.

Guide will attempt to access all available data sources (outlined above) to match variables until it returns the correct information or provides a blank value.

##Templates
Templates contain markup that use information from a data source to render content within a message. The markup tags within the templates determine the content rendered at send time.

##Tags
All Guide expressions use tags to indicate where a data substitution occurs and what information should be used for the substitution.

You can use tags to outline simple tags and block tags. Simple tags outline a single line, while block tags contain several lines between the tags.

###Simple Tags
<gist data-gist="https://gist.github.com/ryanwilliamsET/f3448943b4e1333606e2e50b1648c7e1.js"></gist>
###Block Tags
<gist data-gist="https://gist.github.com/ryanwilliamsET/cee7dbdd8ef2f5526771424820b3d528.js"></gist>

Use a ~ character after the initial tag delimiter or before the last tag delimiter to remove all whitespace characters before or after the tag.

<gist data-gist="https://gist.github.com/ryanwilliamsET/e7f56c77537cb4f03e029092e6bbb041.js"></gist>
##Prefixes and Suffixes
Guide can use several different prefixes, as shown below:

* &#35; - used to indicate a section tag
* = - used to indicate a function or set delimiter tag
* ^ - used to indicate an inverted section tag
* ! - used to indicate a comment tag
* &#62; - used to indicate a partial tag
* &#35;= - used to indicate a block helper
* { - used to indicate data

Suffixes include the following characters:

* } - used to close data
* = - used to close a set delimiter tag

##Empty Values

You can use any one of the following values to indicate an empty value:

* null
* undefined
* false
* 0
* NAN
* ""
* {}
* []
