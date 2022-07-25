---
title: SimpleFilterPart
---
The SimpleFilterPart object represents a single condition of an SQL WHERE clause.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>DateValue</td><td>DateTime[]</td><td>Holds an array of dates used to filter the result of a Retrieve call. The response is in Central No Daylight time, but the DateValue on a filter can specify a timezone offset. For example, 2017-06-01T01:00:00.000-05:00. The DateValue cannot return milliseconds.</td></tr><tr><td>Property</td><td>xsd:string</td><td>Property filtered on before SQL operator.</td></tr><tr><td>SimpleOperator</td><td>SimpleOperators</td><td>Values to use in simple operator under a simple filter part. Valid values include:<ul> <li>equals</li> <li>notEquals</li> <li>greaterThan</li> <li>lessThan</li> <li>isNotNull</li> <li>isNull</li> <li>greaterThanOrEqual</li> <li>lessThanOrEqual</li> <li>between</li> <li>IN</li> <li>like</li> </ul></td></tr><tr><td>Value</td><td>xsd:ArrayOfString</td><td>Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. Use DateValue for date filters.</td></tr></tbody></table>

##Related Items
<ul><li> <a href="retrieving_all_lists_a_subscriber_is_on.htm" title="Retrieving_All_Lists_a_Subscriber_is_On">Retrieve All Lists a Subscriber is On</a></li>
<li> <a href="retrieving_all_subscribers_on_a_list.htm" title="Retrieving_All_Subscribers_on_a_List">Retrieve All Subscribers on a List</a></li>
<li><a href="retrieving_the_results_of_an_import.htm" title="Retrieving_the_Results_of_an_Import">Retrieve the Results of an Import</a></li></ul>
