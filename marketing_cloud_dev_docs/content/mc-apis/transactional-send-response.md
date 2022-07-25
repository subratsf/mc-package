---
title: Transactional Send Response Level Error Codes
---

A response level error code occurs when there is a problem with syntax or other synchronous processing error, such as reusing a duplicate messageKey or malformed email address.

##Response-Level Error Codes
<table class="table table-hover">
<thead align="left">
<tr>
<th>Error Code</th>
<th>Error Message</th>
<th>Message-specific or definition (Resource)</th>
<th>Channel</th>
</tr>
</thead>

<tbody>
<tr>
<td>10000</td>
<td>MCMS_UTM_Validation</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>10001</td>
<td>MCMS_UTM_Validation_InvalidDataType</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>10002</td>
<td>MCMS_UTM_Validation_MissingRequiredField</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>10003</td>
<td>MCMS_UTM_Validation_IncorrectFormat</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>10005</td>
<td>MCMS_UTM_Validation_InvalidValue</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>30000</td>
<td>MCMS_UTM_Runtime</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>30001</td>
<td>MCMS_UTM_Runtime_InvalidOperation</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>30003</td>
<td>MCMS_UTM_Runtime_ObjectNotFound</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>30004</td>
<td>MCMS_UTM_Runtime_ObjectAlreadyExists</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>40000</td>
<td>MCMS_UTM_Authentication</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>40001</td>
<td>MCMS_UTM_Authentication_NotAuthenticated</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>109001</td>
<td>MCMS_UTM_ResponsesHasErrors</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109101</td>
<td>MCMS_UTM_Validation_TooManySubscribers</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109102</td>
<td>MCMS_UTM_Validation_NoSubscribers</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109103</td>
<td>MCMS_UTM_Validation_NoValidSubscribers</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109104</td>
<td>MCMS_UTM_Validation_MissingRequiredField_messageKey</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109105</td>
<td>MCMS_UTM_Validation_MissingRequiredField_subscriberKey</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109106</td>
<td>MCMS_UTM_Validation_MissingRequiredField_to</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109107</td>
<td>MCMS_UTM_Validation_MissingRequiredField_definitionKey</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>109108</td>
<td>MCMS_UTM_Validation_InvalidValue_messageKey</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109109</td>
<td>MCMS_UTM_Validation_InvalidValue_subscriberKey</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109110</td>
<td>MCMS_UTM_Validation_DuplicateMessageKey</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109111</td>
<td>MCMS_UTM_Validation_InvalidValue_definitionKey</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109112</td>
<td>MCMS_UTM_Validation_InvalidValue_options</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>109113</td>
<td>MCMS_UTM_Validation_InvalidValue_autoAddSubscriber</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>109114</td>
<td>MCMS_UTM_Validation_InvalidValue_resubscribe</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

<tr>
<td>109115</td>
<td>MCMS_UTM_Validation_InvalidValue_keyword</td>
<td>/definitions</td>
<td>sms</td>
</tr>

<tr>
<td>109116</td>
<td>MCMS_UTM_Validation_InvalidValue_resubscribe_true_without_keyword_specified</td>
<td>/definitions</td>
<td>sms</td>
</tr>

<tr>
<td>109120</td>
<td>MCMS_UTM_Validation_MissingRequiredField_keyword</td>
<td>/definitions</td>
<td>sms</td>
</tr>

<tr>
<td>109121</td>
<td>MCMS_UTM_Validation_InvalidValue_to</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109122</td>
<td>MCMS_UTM_Validation_UnknownFieldName</td>
<td>/messages</td>
<td>email, sms</td>
</tr>

<tr>
<td>109123</td>
<td>MCMS_UTM_Validation_InvalidValue_classification_IncorrectType</td>
<td>/definitions</td>
<td>email</td>
</tr>

<tr>
<td>109124</td>
<td>MCMS_UTM_Validation_email_does_not_pass_validation</td>
<td>/definitions</td>
<td>email</td>
</tr>

<tr>
<td>109125</td>
<td>MCMS_UTM_Validation_InvalidValue_updateSubscriber</td>
<td>/definitions</td>
<td>email, sms</td>
</tr>

</tbody>
</table>
