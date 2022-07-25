---
title: Change the Retention Period for a Data Extension
---
The data extension retention date determines when data extensions are deleted. To make room for more data, you can change the retention date. For example, if you currently keep your data for 30 days, you can change the retention period to seven days to clear the data more quickly. Call the data extension by Name or ObjectID.

You can update the data extension retention period that is specified in these properties:
* DataRetentionPeriodLength
* ResetRetentionPeriodOnImport
* DeleteAtEndofRetentionPeriod
* RetainUntil
* DataRetentionPeriod
You can't update RowBasedRetention.

##Sample SOAP Request to Set Length of Data Retention Period
<gist data-gist="https://gist.github.com/mc-doc/13ca6c262006279ecdb65a5137a238b5.js"></gist>

##Sample SOAP Response to Set Length of Data Retention Period
<gist data-gist="https://gist.github.com/mc-doc/eaa8b02dbcad2137c484f41dd4836154.js"></gist>

##Sample SOAP Request to Set End of Data Retention Period
<gist data-gist="https://gist.github.com/mc-doc/eaa8b02dbcad2137c484f41dd4836154.js"></gist>

##Sample SOAP Response to Set End of Data Retention Period
<gist data-gist="https://gist.github.com/mc-doc/d7ccb489d45e805a01fdee7ccc968e98.js"></gist>
