---
title: Dataobject
---

Use the dataobject tag to add data to the current context of the template. For example, use dataobject to add a list of recommended purchases in an email or web page. You must declare all information for the dataobject tag before referencing it within your activity.

## Template

<gist data-gist="https://gist.github.com/ryanwilliamsET/0a6a0d1789921608878570a3d6d650a4.js"></gist>

All dataobjects must include this information:

* A user-supplied name value
* A type value:
  * inline - data contained within a simple value, object, or collection, including a JSON object in the data section of the data object
  * variable - data contained within a declared string variable treated as content, including this template in the data section:
  <gist data-gist="https://gist.github.com/ryanwilliamsET/9eda816aeb9e4ed5047f7a239872fc4c.js"></gist>
  * list - data contained within a data extension or list, including a JSON object in the data section of the datasource object that describes the list:
  <gist data-gist="https://gist.github.com/ryanwilliamsET/8224899ad4f041f89c4ed81446e8ed7a.js"></gist>
* A maxRows integer value
  * Must include a positive integer
  * Cannot exceed any maxRelatedRows option
  * Defaults to the value of any defaultRelatedRows option

## Example

<gist data-gist="https://gist.github.com/ryanwilliamsET/85b2e11a875ddbee1491ef2cd9ec07c3.js"></gist>

This example produces these messages:

### Message 1

Brian Jones, based on your preference of Men’s clothing, we suggest the following products…

SKU: 112233 Product name: Blue Mens Shirt - Medium

SKU: 445566 Product name: White Athletic Socks - 2pk

### Message 2

Karen Smith, we do not have any product recommendations for you at this time.
