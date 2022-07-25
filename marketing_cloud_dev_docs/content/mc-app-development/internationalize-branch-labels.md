---
title: Internationalize Branch Labels
---

Custom split activity branch labels support internationalization.

<img src="images/jb-custom-split.gif" style="max-width: 100%; max-height: auto; border: 1px solid #ccc;" />

To internationalize branch labels, map <samp class="codeph nolang">branchResult</samp> to an i18n key defined in the activity's config.json under the <samp class="codeph nolang">lang</samp> object. The outcomes are mapped to keys in an object map called <samp class="codeph nolang">outcomeLabelLanguageMap</samp>.

##Sample

The JSON object in this <samp class="codeph nolang">lang</samp> object uses the outcomes from the sample in [Define Custom Split Activity with Multiple Outcomes](extending-activities.htm), which defines branches with Buy, Sell, and Hold outcomes.

<gist data-gist="https://gist.github.com/mc-doc/88a78a6834808dd8e97b6609bb5fc311.js"></gist>

Map each outcome to its associated i18n key by defining a label map. Each entry is <samp class="codeph nolang">branchResult: i18n key</samp>:

<gist data-gist="https://gist.github.com/mc-doc/7f6ce4e37af81a49d51e0183cd8d9811.js"></gist>

If no mapping is found and <samp class="codeph nolang">metaData.label</samp> is not defined, Journey Builder displays the outcome's <samp class="codeph nolang">arguments.branchResult</samp>.
