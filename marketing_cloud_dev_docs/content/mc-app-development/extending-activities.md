---
title: Define a Custom Split Activity with Multiple Outcomes
---

You can provide multiple possible outcomes for your custom split activities in Journey Builder. First, define default outcomes in the activity's config.json. The activity's custom javascript then overrides these default outcomes programmatically, or based on user-supplied values.

>Use the <samp class="codeph nolang">RestDecision</samp> activity type when configuring multiple outcomes.

<img src="images/jb-custom-split.gif" style="max-width: 100%; max-height: auto; border: 1px solid #ccc;" />

##Define Default Outcomes
To define default outcomes, include an <samp class="codeph nolang">outcomes</samp> object in the activity's config.json.  

* Each default outcome must contain an <samp class="codeph nolang">arguments</samp> object that contains a <samp class="codeph nolang">branchResult</samp> field. Journey Builder expects the custom activity's Execute REST call response to contain the <samp class="codeph nolang">{ branchResult: value }</samp> object. The <samp class="codeph nolang">value</samp> matches the branchResult of one of the activity's outcomes.
* Give the custom activity a label in the UI. Include a <samp class="codeph nolang">label</samp> field in the outcome's <samp class="codeph nolang">metaData</samp> object. Journey Builder displays the text in this field when users hover over the branch entry point.
>If you don't define a label, it is loaded using the i18n strings from the config.json.

##Sample
<gist data-gist="https://gist.github.com/mc-doc/470225d33bad7a528909c9c8637ae91a.js"></gist>

##Related Items
* [Internationalize Branch Labels](internationalize-branch-labels.htm)
