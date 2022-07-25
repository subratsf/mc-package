---
title: SimpleOperators
---
The SimpleOperators object contains operators to use when filtering data.

##Properties
<table class="table table-hover">
<thead align="left">
<tr><th>Name</th><th>Data Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr>
<td>beginsWith</td>
<td>Enumeration</td>
<td>Searches for values that begin with the specified string.</td>
</tr>
<tr>
<td>between</td>
<td>Enumeration</td>
<td>Matches values that occur between the two specified values.</td>
</tr>
<tr>
<td>contains</td>
<td>Enumeration</td>
<td>Matches values that contain the specified value.</td>
</tr>
<tr>
<td>endsWith</td>
<td>Enumeration</td>
<td>Matches values that end with the specified value.</td>
</tr>
<tr>
<td>equals</td>
<td>Enumeration</td>
<td>Searches for values that are equal to a given value.</td>
</tr>
<tr>
<td>existsInString</td>
<td>Enumeration</td>
<td>Matches values that contain specified value within a string.</td>
</tr>
<tr>
<td>existsInStringAsAWord</td>
<td>Enumeration</td>
<td>Searches for values that exist within a string as a word.</td>
</tr>
<tr>
<td>greaterThan</td>
<td>Enumeration</td>
<td>Specifies that one numeric value is greater than another.</td>
</tr>
<tr>
<td>greaterThanAnniversary</td>
<td>Enumeration</td>
<td>Specifies a date value occurs after a given anniversary date.</td>
</tr>
<tr>
<td>greaterThanOrEqual</td>
<td>Enumeration</td>
<td>Searches for values greater than or equal to a specified value.</td>
</tr>
<tr>
<td>IN</td>
<td>Enumeration</td>
<td>Searches for values in the specified list. You can include multiple IN values in a filter part.</td>
</tr>
<tr>
<td>isAnniversary</td>
<td>Enumeration</td>
<td>Searches for a date value that exists as an anniversary of an event.</td>
</tr>
<tr>
<td>isNotAnniversary</td>
<td>Enumeration</td>
<td>Searches for values that are not the anniversary of a given data value.</td>
</tr>
<tr>
<td>isNotNull</td>
<td>Enumeration</td>
<td>Searches for a value that is not null.</td>
</tr>
<tr>
<td>isNull</td>
<td>Enumeration</td>
<td>Searches for a null value.</td>
</tr>
<tr>
<td>lessThan</td>
<td>Enumeration</td>
<td>Searches for a value less than a specified value.</td>
</tr>
<tr>
<td>lessThanAnniversary</td>
<td>Enumeration</td>
<td>Searches for date values that occur before a given anniversary date.</td>
</tr>
<tr>
<td>lessThanOrEqual</td>
<td>Enumeration</td>
<td>Searches for a value less than or equal to a given value.</td>
</tr>
<tr>
<td>like</td>
<td>Enumeration</td>
<td>Specifies a string of characters to find in a larger string. This property automatically appends percent signs to the beginning and end of the Like value.</td>
</tr>
<tr>
<td>notContains</td>
<td>Enumeration</td>
<td>Searches for a value that does not contain a specific value.</td>
</tr>
<tr>
<td>notEquals</td>
<td>Enumeration</td>
<td>Searches for a value that does not equal a specified value.</td>
</tr>
<tr>
<td>notExistsInString</td>
<td>Enumeration</td>
<td>Searches for values that don't contain a specific value within a string.</td>
</tr>
</tbody>
</table>

##Filter Operators
<p>Use these operators when building filters for most objects.</p>
<ul>
<li>equals</li>
<li>notEquals</li>
<li>greaterThan</li>
<li>lessThan</li>
<li>isNull</li>
<li>isNotNull</li>
<li>greaterThanOrEqual</li>
<li>lessThanOrEqual</li>
<li>between</li>
<li>IN</li>
<li>like</li>
</ul>
<p>The following operators work only for the DataFilter property:</p>
<ul>
<li>existsInString</li>
<li>existsInStringAsAWord</li>
<li>notExistsInString</li>
<li>beginsWith</li>
<li>endsWith</li>
<li>contains</li>
<li>notContains</li>
<li>isAnniversary</li>
<li>isNotAnniversary</li>
<li>greaterThanAnniversary</li>
<li>lessThanAnniversary</li>
</ul>
<p>The IN property evaluates to <strong>True</strong> if the value of the specified property is in the specified list.</p>
